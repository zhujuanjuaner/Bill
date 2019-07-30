#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pychrome
import time
import functools
from PyQt5.QtCore import pyqtSignal, QObject
from selenium_plugin.parse import Parse
from requests.exceptions import ConnectionError
from pynput.mouse import Button, Controller

from app.plugins.core.plugin import IdePlugin

def connect_wrap(f):
    def wrapper(*args, **kwargs):
        try:
            res = f(*args, **kwargs)
        except Exception as e:
            print("tab init failed!")
            return
        return res

    return wrapper


class SeleniumAssistant(QObject):

    SIGNAL_EDIT_CODE = pyqtSignal(str)
    SIGNAL_START_RECORDING = pyqtSignal(str)
    SIGNAL_RESET_LOGVIEW = pyqtSignal(str)  # 插入新的log到log区

    def __init__(self, windows):
        super(SeleniumAssistant, self).__init__()
        self.is_inspecting = False
        self.DOC = None
        self.operation_to_code = {"click": ".click()", "text": ".send_keys(\"\")",
                                  "assert": ".assert_exist()"}
        self.parse = Parse()
        self.this_operation = ""
        self._windows = windows
        self.cache_stack = []
        self.mouse = Controller()
        self.browser = pychrome.Browser(url="http://127.0.0.1:9222")

    def refresh_doc(self):
        try:
            docu = self.tab.DOM.getDocument(depth=-1, pierce=True)
            # pprint(docu)
            self.DOC = docu
        except Exception:
            self.stop_inspect()
            return False
        return True

    def get_web_addr(self):
        try:
            self.list_tabs = self.browser.list_tab()
        except Exception as e:
            return False

        if self.list_tabs:
            self.tab = self.list_tabs[0]
        else:
            self.tab = self.browser.new_tab()
        self.tab.start()
        list_web = self.tab.Page.getNavigationHistory()['entries']
        self.tab.stop()
        if len(list_web) >= 1:
            return list_web[len(list_web)-1]['url']
        else:
            return False

    def start_inspect(self, _type, _operation=None):
        self.is_inspecting = True
        # 单次记录某操作
        if _operation is not None:
            self.this_operation = _operation

        try:
            self.list_tabs = self.browser.list_tab()
        except ConnectionError:
            print("Can't connect to web")
            return False
        self.last_xpath = ""

        if self.stack_equal_list():
            print("stack equal!!, len of tabs", len(self.list_tabs))
            print("cache here: ", self.cache_stack, self.cache_id)
            for tab in self.list_tabs:
                if tab.id == self.cache_id:
                    self.tab = tab
        else:
            self.tab = self.list_tabs[0]

        return self.init_tab(_type)

    def wait_for_tab_load(self, time_out):
        start_time = time.time()
        while not hasattr(self.tab, "Overlay"):
            time.sleep(0.5)
            if time.time() - start_time > time_out:
                return False
        return True

    @connect_wrap
    def init_tab(self, _type):
        """ 在标签页中初始化inspect参数 """
        if not self.wait_for_tab_load(5):
            print("Init tab failed!!!!")
            return False
        if _type == "recording":
            self.tab.Overlay.inspectNodeRequested = self.recording_event_callback
            self.tab.Overlay.nodeHighlightRequested = self.recording_event_callback
        else:
            self.tab.Overlay.inspectNodeRequested = self.normal_event_callback
            self.tab.Overlay.nodeHighlightRequested = self.normal_event_callback
        # self.tab.console.messageAdded = self.console_event_callback

        self.tab.start()
        self.refresh_doc()

        self.tab.DOM.enable()
        self.tab.CSS.enable()
        self.tab.Overlay.enable()
        self.tab.Console.enable()
        self.tab.Overlay.setInspectMode(mode="searchForNode", highlightConfig={
            "showInfo": True,
            "showRulers": False,
            "contentColor": {"r": 111, "g": 168, "b": 220, "a": 0.66},
        })
        print("init success!")
        return True

    def change_operation(self, _operation):
        self.this_operation = _operation

    def init_code(self):
        _init_code = "from selenium import webdriver\n"
        _init_code += "from selenium.webdriver.common.keys import Keys\n"
        # _init_code += "from airtest.utils.selenium_proxy import WebChrome\n"
        _init_code += "from airtest_selenium.proxy import WebChrome\n"
        _init_code += "driver = WebChrome()\n"
        _init_code += "driver.implicitly_wait(20)\n"
        self.SIGNAL_START_RECORDING.emit(_init_code)

    def recording_event_callback(self, **kwargs):
        # print("event:", kwargs)
        if "backendNodeId" not in kwargs and "nodeId" in kwargs:
            # 非点击,显示node info
            try:
                desc = self.tab.DOM.describeNode(nodeId=kwargs['nodeId'])
                self.show_load_info(desc['node'])
            except Exception:
                import traceback
            return

        backendNodeId = kwargs["backendNodeId"]
        try:
            ret = self.tab.DOM.pushNodesByBackendIdsToFrontend(backendNodeIds=[backendNodeId])
            nodeId = ret["nodeIds"][0]
            desc = self.tab.DOM.describeNode(nodeId=nodeId)
            self.show_load_info(desc['node'])
        except Exception:
            import traceback
            traceback.print_exc()

        code = self.selenium_find_element(nodeId, "click", desc)
        self.SIGNAL_EDIT_CODE.emit(code)

        self.tab.Overlay.disable()
        time.sleep(0.1)
        self.mouse.click(Button.left, 1)
        # win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0)
        # win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, 0, 0, 0, 0)
        self.tab.Overlay.enable()

        self.tab.Overlay.setInspectMode(mode="searchForNode", highlightConfig={
            "showInfo": True,
            "showRulers": False,
            "contentColor": {"r": 111, "g": 168, "b": 220, "a": 0.66},
        })

    def normal_event_callback(self,  **kwargs):
        backendNodeId = kwargs["backendNodeId"]
        ret = self.tab.DOM.pushNodesByBackendIdsToFrontend(backendNodeIds=[backendNodeId])
        nodeId = ret["nodeIds"][0]
        # print "box here:", self.tab.DOM.getBoxModel(nodeId=nodeId)
        desc = self.tab.DOM.describeNode(nodeId=nodeId)
        try:
            self.show_load_info(desc['node'])
        except Exception:
            import traceback
            traceback.print_exc()
        # pprint(desc)

        code = self.selenium_find_element(nodeId, self.this_operation, desc)
        self.SIGNAL_EDIT_CODE.emit(code)
        self.stop_inspect()

    def selenium_find_element(self, nodeId, operation, node_info):
        code = ""
        try:
            param, _type = self.parse.parse_doc_tree(nodeId, node_info, self.DOC)
            code = self.generate_selenium_code(param, _type, operation)
        except Exception:
            import traceback
            traceback.print_exc()
        return code

    def show_load_info(self, target_payload, extra_info=None):
        """在log区域显示payload内容."""
        detail_info = extra_info or ""
        # 获取payload_list和path_list
        # payload_list, path_list = self.ui_tree.selectItemByPayload(payload)
        detail_info += "Node details: {\n"
        for key, value in target_payload.items():
            if key == "attributes":
                detail_info += "\t  attributes : [\n"
                for idx, item in enumerate(value):
                    if idx % 2 == 0:
                        detail_info += "\t\t  " + str(item) + " :  " + str(value[idx+1]) + "\n"

                detail_info += "\t  ]\n"
            elif key != "depthList":
                detail_info += "\t  " + str(key) + " :  " + str(value) + " \n"
        detail_info += "}\n"
        self.SIGNAL_RESET_LOGVIEW.emit(detail_info)

    def stop_inspect(self, btn=None):
        self.is_inspecting = False
        if hasattr(self, "tab"):
            try:
                self.tab.stop()
            except Exception:
                print("Tab already stop!")
        if btn:
            btn.setChecked(False)
        else:
            self._windows.set_all_btn(False)

    def generate_selenium_code(self, param, type, operation):
        operation_code = self.operation_to_code.get(operation, "")
        if operation == "assert":
            if IdePlugin.conf.get("preferLocale", None) == "zh_CN":
                code = "driver.assert_exist(\"" + param + "\", \"" + type + "\", \"请填写测试点.\")"
            else:
                code = "driver.assert_exist(\"" + param + "\", \"" + type + "\", \"Please fill in the test point.\")"
        else:
            if not param:
                param = ""
            if type == "xpath":
                code = "driver.find_element_by_xpath(\"" + param + "\")" + operation_code
            elif type == "id":
                code = "driver.find_element_by_id(\"" + param + "\")" + operation_code
            elif type == "name":
                code = "driver.find_element_by_name(\"" + param + "\")" + operation_code
            # code += "\nsleep(1.0)"
        return code

    def get_tabs(self):
        try:
            return self.browser.list_tab()
        except Exception:
            import traceback
            traceback.print_exc()
            return None

    def get_tabs_number(self):
        try:
            return len(self.browser.list_tab())
        except Exception:
            return 0

    @property
    def nubmer_of_tabs(self):
        return self.get_tabs_number()

    @property
    def latest_tab(self):
        _tabs = self.browser.list_tab()
        print("after change size: ", len(_tabs))
        for idx, item in enumerate(_tabs):
            print(idx, item.id)
        for idx, item in enumerate(_tabs):
            flag = 0
            for item2 in self.list_tabs:
                if item.id == item2.id:
                    flag = 1
            if flag == 0:
                print("return this tab: ", idx)
                self.list_tabs = _tabs
                return _tabs[idx]
            # if item not in self.list_tabs:
            #     print("new tab is the number: ", idx)
            #     return _tabs[idx]

    def change_to_latest_tab(self):
        self.tab.stop()
        time.sleep(0.5)
        self.tab = self.latest_tab
        self.init_tab("recording")
        self._windows.switchToLatestSlot()

    def change_to_tab_by_id(self, last_tab_id):
        _tabs = self.browser.list_tab()
        print("change to old tab id:", last_tab_id)
        is_find = False
        for item in _tabs:
            if item.id == last_tab_id:
                is_find = True
                self.tab = item
                break
        if not is_find:
            return False
        self.init_tab("recording")
        self._windows.closeSlot()
        self._windows.switchToLastSlot()
        return True

    def save_record_cache(self, _stack, _id):
        self.cache_stack = _stack
        self.cache_id = _id

    def stack_equal_list(self):
        if len(self.cache_stack) != len(self.list_tabs) or self.cache_id not in self.cache_stack:
            return False
        for _id in self.cache_stack:
            flag = 0
            for tab in self.list_tabs:
                if _id == tab.id:
                    flag = 1
                    break
            if flag == 0:
                return False
        return True
