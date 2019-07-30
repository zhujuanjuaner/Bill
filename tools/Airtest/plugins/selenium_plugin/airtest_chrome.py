#!/usr/bin/env python
# -*- coding: utf-8 -*-

from PyQt5.QtCore import QThread
from time import sleep


class SeleniumThread(QThread):

    def __init__(self, sele_assist):
        super(SeleniumThread, self).__init__()
        self.is_recording = True
        self.selenium_assist = sele_assist
        # self.init_selenium()

    def finish_recording(self):
        self.is_recording = False

    def run(self):
        """
            recorder runner
        """
        # DOM.getNodeForLocation
        # https://chromedevtools.github.io/devtools-protocol/tot/DOM#method-getNodeForLocation
        tab_stack = []
        if not self.selenium_assist.start_inspect("recording"):
            print("browser not ready>>>>>>>")
            self.is_recording = False
        else:
            cnt = 0
            if self.selenium_assist.cache_stack and self.selenium_assist.stack_equal_list():
                tab_stack = self.selenium_assist.cache_stack
                last_size = len(tab_stack)
            else:
                last_size = self.selenium_assist.nubmer_of_tabs
                for item in self.selenium_assist.list_tabs:
                    tab_stack.append(item.id)
            father = {}
            now_tab_id = self.selenium_assist.tab.id

            while self.is_recording:
                # get document
                refresh_res = self.selenium_assist.refresh_doc()
                cnt += 1
                length = self.selenium_assist.nubmer_of_tabs
                if length == 0:
                    print("there was no tab here.")
                    break
                if length > last_size:
                    old_id = self.selenium_assist.tab.id
                    self.selenium_assist.change_to_latest_tab()
                    if self.selenium_assist.tab:
                        tab_stack.append(self.selenium_assist.tab.id)
                        father[self.selenium_assist.tab.id] = old_id
                    # self.print_stack(tab_stack)
                elif length < last_size:
                    _tab = self.check_delete_tab(tab_stack)
                    print("this is delete tab: ",_tab)
                    if _tab != now_tab_id:
                        tab_stack.remove(_tab)
                    else:
                        tab_stack.remove(_tab)
                        if _tab not in father or not self.selenium_assist.change_to_tab_by_id(father[_tab]):
                            break
                    self.print_stack(tab_stack)
                now_tab_id = self.selenium_assist.tab.id
                sleep(0.2)
                last_size = length
            self.selenium_assist.save_record_cache(tab_stack, self.selenium_assist.tab.id)
        # stop the tab (stop handle events and stop recv message from chrome)
        self.selenium_assist.stop_inspect()

    def check_delete_tab(self, _stack):
        for _id in _stack:
            flag = 0
            _tabs = self.selenium_assist.get_tabs()
            for tab in _tabs:
                if _id == tab.id:
                    flag = 1
                    break
            if flag == 0:
                return _id
        return ""

    def print_stack(self, stack):
        print("check now stack:")
        for id in stack:
            print(id)
