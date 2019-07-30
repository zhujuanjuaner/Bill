# -*- coding: utf-8 -*-

from PyQt5.QtCore import pyqtSignal
from app.framework.plugin_system import Plugin
from app.plugins.editor.plugin import CodeEditorPlugin as EditorPlugin
from app.plugins.airtest.plugin import AirtestPlugin, CheckLogThread
from app.plugins.core.plugin import IdePlugin

from selenium_plugin.selenium_wnd import SeleniumWindow
from selenium_plugin.plugin_config import SeleniumConfig
import os


class SeleniumPlugin(Plugin):

    PLUGIN_CONFIG = SeleniumConfig
    SIGNAL_SHOW_STATUS_BAR_TIPS = pyqtSignal(str)

    def createWindows(self):
        self.airtest_plugin = AirtestPlugin()
        self.selenium_wnd = SeleniumWindow()
        pyeditor_plugin = EditorPlugin()
        name = self.__class__.__name__
        pyeditor_plugin.addEventDealer("checkLog", name, self.check_log)

        self.selenium_wnd.SIGNAL_INSERT_PLAIN_CODE.connect(pyeditor_plugin.insertCode)
        self.selenium_wnd.SIGNAL_ENABLE_BUTTONS.connect(self.enable_buttons)
        self.selenium_wnd.SIGNAL_START_RECORD.connect(self.checked_record_selenium)
        self.selenium_wnd.SIGNAL_START_TEMPLATE.connect(self.checked_template)

        self.SIGNAL_SHOW_STATUS_BAR_TIPS.connect(IdePlugin.MainWindow.statusbarShowTip)

        self.check_log_thread = None

        return [self.selenium_wnd]

    def postAllPluginsInited(self):
        from app.plugins.core.plugin import IdePlugin
        IdePlugin().MainWindow.hideDockingWindow("SeleniumWindow")

    def checked_record_selenium(self, checked):
        self.selenium_wnd.is_recording = checked
        if checked:
            self.selenium_wnd.start_recording()
        else:
            self.selenium_wnd.stop_recording()

    def checked_template(self, checked):
        if checked:
            self.selenium_wnd.set_all_btn(False, self.selenium_wnd.selenium_template_toolbtn)
            self.selenium_wnd.start_inspect("")
        else:
            self.selenium_wnd.stop_inspect(self.selenium_wnd.selenium_template_toolbtn)

    def enable_buttons(self, flag, _type):
        if _type == "all":
            for _button in self.selenium_wnd.all_buttons:
                _button.setEnabled(flag)

    def setDefaultStyle(self):
        self.selenium_wnd.setDefaultStyle()

    def setDarkshadowStyle(self):
        self.selenium_wnd.setDarkshadowStyle()

    def check_log(self):
        from app import ga
        if self.check_log_thread and self.check_log_thread.isRunning():
            return
        cmd, output = self.airtest_plugin.genLogCmd()
        if cmd:
            # 只有存在log目录时才能正确生成cmd
            report_path = os.path.dirname(os.path.abspath(__file__))
            # cmd.extend(["--plugins", report_path])
            try:
                import airtest_selenium
            except:
                print("No airtest selenium module!")
            else:
                cmd.extend(["--plugin", "airtest_selenium.report", "poco.utils.airtest.report"])

            try:
                print(cmd)
            except UnicodeEncodeError:
                pass
            ga.event("script", "checkLog", label="selenium")
            self.check_log_thread = CheckLogThread(cmd, output)
            self.check_log_thread.SIGNAL_CHECK_LOG_DONE.connect(self.airtest_plugin.checkLogResult)
            self.check_log_thread.start()

    def customRetranslateUi(self):
        """切换语言版本时需要加载的属性."""
        self.selenium_wnd.customRetranslateUi()