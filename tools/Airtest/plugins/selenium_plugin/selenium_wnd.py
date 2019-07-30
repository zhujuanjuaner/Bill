#!/usr/bin/env python
# -*- coding: utf-8 -*-

import time
import os
import sys
from airtest import aircv
from PyQt5.QtGui import QIcon
from PyQt5.QtCore import Qt, pyqtSignal, QSize, QCoreApplication
from PyQt5.QtWidgets import QAction, QMessageBox
from app.params import WIN_OS
from app.plugins.airtest.airtest_recorder import ManualRecorder
from app.framework.plugin_system import PluginWindow, PluginWindowType
from app.plugins.editor.plugin import CodeEditorPlugin as EditorPlugin
from app.plugins.airtest.airtest_assistant import RecordAssistant
from app.plugins.core.plugin import IdePlugin
from app.utils import loadStyleSheet, tmpPath, get_platform
from subprocess import Popen, STDOUT
from selenium_plugin.airtest_chrome import SeleniumThread
from selenium_plugin.gui.ui_selenium_window import Ui_SeleniumWindow
from selenium_plugin.selenium_assistant import SeleniumAssistant
from app import ga

if get_platform() == WIN_OS:
    from app.plugins.device.win.win_client import WinClient

class SeleniumWindow(PluginWindow, Ui_SeleniumWindow):

    PROPERTIES = {
        "windowType": PluginWindowType.WT_DOCK,
        # docking属性
        "dockingTitle": "Selenium Window",
        "dockingVisible": True,
        "dockingArea": Qt.AllDockWidgetAreas,
        "dockingPosition": Qt.LeftDockWidgetArea,
    }

    SIGNAL_START_RECORD = pyqtSignal(bool)
    SIGNAL_START_TEMPLATE = pyqtSignal(bool)
    SIGNAL_INSERT_PLAIN_CODE = pyqtSignal(str)
    SIGNAL_ENABLE_BUTTONS = pyqtSignal(bool, str)
    SIGNAL_START_CHROME = pyqtSignal(bool, str)

    def __init__(self):
        super(SeleniumWindow, self).__init__()
        self.setupUi(self)
        self.sele_assistant = SeleniumAssistant(self)
        self.build_package_thread = None
        self.selenium_thread = None
        self.isPackaging = False
        self.edit_que = []
        self.multi_build = False
        self.createActions()
        self.classifyButtons()
        self.createSlots()
        self.slot_signal()

    def slot_signal(self):
        self.sele_assistant.SIGNAL_EDIT_CODE.connect(EditorPlugin().insertCode)
        self.sele_assistant.SIGNAL_START_RECORDING.connect(EditorPlugin().confirmWebCode)
        self.sele_assistant.SIGNAL_RESET_LOGVIEW.connect(self.reset_log)

    def classifyButtons(self):
        self.all_buttons = [self.newTabBtn, self.backBtn, self.snapshotBtn, self.textBtn,
                            self.forwardBtn, self.touchBtn, self.selenium_template_toolbtn,
                            self.startWebBtn, self.assertBtn, self.previousTabBtn]
        self.recording_buttons = [self.snapshotBtn, self.previousTabBtn, self.backBtn,
                                  self.forwardBtn, self.startWebBtn, self.newTabBtn]

    def createSlots(self):
        # self.selenium_auto_record_toolbtn.clicked.connect(self.recordSlot)
        self.start_chrome_btn.clicked.connect(self.start_chrome)
        self.textBtn.clicked.connect(self.textSlot)
        self.snapshotBtn.clicked.connect(self.snapshotSlot)
        # self.sleepBtn.clicked.connect(self.sleepSlot)
        self.backBtn.clicked.connect(self.backSlot)
        self.touchBtn.clicked.connect(self.touchSlot)
        self.newTabBtn.clicked.connect(self.switchToLatestSlot)
        self.previousTabBtn.clicked.connect(self.switchToLastSlot)
        self.forwardBtn.clicked.connect(self.forwardSlot)
        self.startWebBtn.clicked.connect(self.startWebSlot)
        self.assertBtn.clicked.connect(self.assertSlot)
        self.assertTemplateBtn.clicked.connect(self.assertTemplateSlot)
        self.airtestTouchBtn.clicked.connect(self.airtestTouchSlot)

    def createActions(self):
        self.record_action = QAction(self.tr("Record"))
        self.record_action.setCheckable(True)
        self.record_action.toggled.connect(self.SIGNAL_START_RECORD)

        self.selenium_auto_record_toolbtn.setDefaultAction(self.record_action)
        self.selenium_auto_record_toolbtn.setIconSize(QSize(18, 18))

        self.selenium_template_toolbtn.setIconSize(QSize(18, 18))
        self.selenium_template_toolbtn.setCheckable(True)
        self.selenium_template_toolbtn.toggled.connect(self.SIGNAL_START_TEMPLATE)

        # self.start_chrome_toolbtn.setIconSize(QSize(18, 18))
        # self.selenium_template_toolbtn.setCheckable(True)
        # self.selenium_template_toolbtn.toggled.connect(self.SIGNAL_START_CHROME)

    def setDefaultStyle(self):
        """每个控件载入图片资源,并载入qss资源."""
        loadStyleSheet(self, ':/qss/default/default_mainwindow_toolbtn.qss')

    def setDarkshadowStyle(self):
        loadStyleSheet(self, ':/qss/darkshadow/airtest_window.qss')
        self.record_action.setIcon(QIcon(':/images/selenium_window/n/auto_record_n.png'))
        self.selenium_template_toolbtn.setIcon(QIcon(':/images/selenium_window/n/select_n.png'))
        self.start_chrome_btn.setIcon(QIcon(':/images/selenium_window/n/browser_n.png'))
        self.startWebBtn.setIcon(QIcon(':/images/selenium_window/n/start_web_n.png'))
        self.touchBtn.setIcon(QIcon(':/images/selenium_window/n/touch_n.png'))
        self.textBtn.setIcon(QIcon(':/images/selenium_window/n/text_n.png'))
        self.assertBtn.setIcon(QIcon(':/images/selenium_window/n/assert_n.png'))
        self.newTabBtn.setIcon(QIcon(':/images/selenium_window/n/switch_to_latest_n.png'))
        self.previousTabBtn.setIcon(QIcon(':/images/selenium_window/n/switch_to_last_n.png'))
        self.backBtn.setIcon(QIcon(':/images/selenium_window/n/back_n.png'))
        self.forwardBtn.setIcon(QIcon(':/images/selenium_window/n/forward_n.png'))
        self.snapshotBtn.setIcon(QIcon(':/images/selenium_window/n/snapshot_n.png'))
        self.airtestTouchBtn.setIcon(QIcon(':/images/selenium_window/n/touch_airtest_n.png'))
        self.assertTemplateBtn.setIcon(QIcon(':/images/selenium_window/n/assert_airtest_n.png'))

    def reset_log(self, content=None):
        pyeditor_plugin = EditorPlugin()
        pyeditor_plugin.clearLogView()
        if content is not None:
            pyeditor_plugin.insertLogView(content)

    def startWebSlot(self):
        """selenium 开启一个网站"""
        default_addr = "Write your test web address!"
        # print self.sele_assistant.web_addr
        web_addr = self.sele_assistant.get_web_addr() or default_addr
        _code = "driver.get(\"{web_addr}\")".format(web_addr=web_addr)
        self.SIGNAL_INSERT_PLAIN_CODE.emit(_code)
        self.startWebBtn.setChecked(False)

    def switchToLatestSlot(self):
        """selenium 切换标签"""
        _code = "driver.switch_to_new_tab()"
        self.SIGNAL_INSERT_PLAIN_CODE.emit(_code)
        self.newTabBtn.setChecked(False)

    def switchToLastSlot(self):
        _code = "driver.switch_to_previous_tab()"
        self.SIGNAL_INSERT_PLAIN_CODE.emit(_code)
        self.previousTabBtn.setChecked(False)

    def closeSlot(self):
        _code = "driver.close()"
        self.SIGNAL_INSERT_PLAIN_CODE.emit(_code)
        # self.switchBtn.setChecked(False)

    def assertSlot(self):
        """selenium assert事件"""
        if not self.assertBtn.isChecked():
            self.stop_inspect(self.assertBtn)
        else:
            self.set_all_btn(False, self.assertBtn)
            self.start_inspect("assert")

    def assertTemplateSlot(self):
        if get_platform() != WIN_OS:
            QMessageBox.warning(None, self.tr("Warning"), self.tr("Current OS is not 'Windows'! You can't use airtest function of Airtest-Selenium. > <"))
            self.assertTemplateBtn.setChecked(False)
            return False
        code = self.get_capture_code_by_func("driver.assert_template")
        self.SIGNAL_INSERT_PLAIN_CODE.emit(code)
        self.assertTemplateBtn.setChecked(False)

    def airtestTouchSlot(self):
        if get_platform() != WIN_OS:
            QMessageBox.warning(None, self.tr("Warning"), self.tr("Current OS is not 'Windows'! You can't use airtest function of Airtest-Selenium. > <"))
            self.airtestTouchBtn.setChecked(False)
            return False
        code = self.get_capture_code_by_func("driver.airtest_touch")
        self.SIGNAL_INSERT_PLAIN_CODE.emit(code)
        self.airtestTouchBtn.setChecked(False)

    def touchSlot(self):
        """selenium touch事件"""
        if not self.touchBtn.isChecked():
            self.stop_inspect(self.touchBtn)
        else:
            self.set_all_btn(False, self.touchBtn)
            self.start_inspect("click")

    def textSlot(self):
        """selenium 输入文本"""
        if not self.textBtn.isChecked():
            self.stop_inspect(self.textBtn)
        else:
            self.set_all_btn(False, self.textBtn)
            self.start_inspect("text")

    def snapshotSlot(self):
        """selenium 截图"""
        _code = "driver.snapshot()"
        self.SIGNAL_INSERT_PLAIN_CODE.emit(_code)
        self.snapshotBtn.setChecked(False)

    def backSlot(self):
        """selenium 返回上层页面"""
        _code = "driver.back()"
        self.SIGNAL_INSERT_PLAIN_CODE.emit(_code)
        self.backBtn.setChecked(False)

    def forwardSlot(self):
        """selenium 返回上层页面"""
        _code = "driver.forward()"
        self.SIGNAL_INSERT_PLAIN_CODE.emit(_code)
        self.forwardBtn.setChecked(False)

    def get_capture_code_by_func(self, func):
        ret, screenshot, midpos, vector = WinClient().doCapture("airtest_touch")
        code =""
        if ret is not None and screenshot is not None:
            fname = ManualRecorder().saveImage(ret, screenshot)
            img = aircv.utils.cv2_2_pil(ret)
            funcname = func
            r_click = False
            resolution = WinClient().getCurrentDeviceResolution()
            print("device resolution: ", resolution)
            code = RecordAssistant.generateRecordPyCode(funcname, fname, r_click, vector, None, midpos, resolution)

        return code

    def set_all_btn(self, status, exclude_btn=None):
        """同时设置所有button"""
        for btn in self.all_buttons:
            if exclude_btn and btn == exclude_btn:
                continue
            btn.setChecked(status)

    def set_enable_btn(self, enable_btns):
        for btn in self.all_buttons:
            if btn not in enable_btns:
                btn.setDisabled(True)
            else:
                btn.setDisabled(False)

    def get_tmp_dir(self, child_path=""):
        return tmpPath(child_path)

    def start_chrome(self):
        self.sele_assistant.init_code()
        chrome_path = IdePlugin.conf.get("ChromePath", "")
        if chrome_path == "":
            QMessageBox.warning(self, "warning", self.tr("Please set Chrome path on Options!"))
            return

        try:
            current_path = os.getcwd()
            os.chdir(os.path.dirname(chrome_path))
            tmp_dir = self.get_tmp_dir("selenium_user_data")
            param_user_data = '--user-data-dir={user_dir}'.format(user_dir=tmp_dir)
            if "darwin" in sys.platform:
                cmd = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                       '--remote-debugging-port=9222', param_user_data]
            else:
                cmd = ['chrome.exe', '--remote-debugging-port=9222', param_user_data]
            print(cmd)
            Popen(cmd, stderr=STDOUT)
            os.chdir(current_path)
            ga.event("selenium", "start_chrome")
        except Exception:
            import traceback
            print(traceback.format_exc())
        time.sleep(1.5)

    def start_recording(self):
        if self.sele_assistant.is_inspecting:
            self.stop_inspect()
        self.set_enable_btn(self.recording_buttons)
        self.selenium_thread = SeleniumThread(self.sele_assistant)
        self.selenium_thread.start()

    def stop_recording(self):
        if hasattr(self, "selenium_thread"):
            self.selenium_thread.finish_recording()
        self.set_enable_btn(self.all_buttons)

    def start_inspect(self, _type):
        if self.sele_assistant.is_inspecting:
            print("change inspect type...", _type)
            self.sele_assistant.change_operation(_type)
        else:
            self.sele_assistant.start_inspect("normal", _type)

    def stop_inspect(self, btn=None):
        self.sele_assistant.stop_inspect(btn)

    def customRetranslateUi(self):
        """切换语言版本时需要加载的属性."""
        pass
