#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""Device config."""

from PyQt5.QtWidgets import QPushButton, QToolButton, QFileDialog, QMessageBox
from app.framework.settings import BaseSettingsWidget
from app.framework.meta.meta_manager import plugin_settings_widget
import os


class SeleniumConfig(object):
    """Plugin config for selenium plugin. """

    PLUGIN_NAME = "Selenium"

    PROPERTIES = {
        "ChromePath":
            {
                "sort": 10,
                "default": "",
                "text": "Chrome Path",
                "cls_name": "ChromePathWidget"
            }
    }


@plugin_settings_widget
class ChromePathWidget(BaseSettingsWidget):
    """Chrome路径设置控件"""

    NULL_VALUE = "Click to select chrome path..."

    def setupUi(self):
        self.util_button = QPushButton(self)

        self.reset_tool_button = QToolButton(self)
        self.reset_tool_button.setText("Reset")

        self.layout.addWidget(self.util_button)
        self.layout.addWidget(self.reset_tool_button)

        # 设置value初始值:
        self.value = self.default

    def connectSlots(self):
        self.util_button.clicked.connect(self.setUtilfile)
        self.reset_tool_button.clicked.connect(self.resetUtilButton)

    @property
    def value(self):
        path = self.util_button.text()
        if path == self.NULL_VALUE:
            return ""
        else:
            return path

    @value.setter
    def value(self, path):
        path = path or self.NULL_VALUE

        # 有时候路径过长，进行tooltip展示：
        self.util_button.setText(path)
        self.util_button.setToolTip(path)

    def LoadData(self, data):
        """加载Data."""
        # 此处加载的data是本plugin的所有data
        path = data.get(self.key, self.default)
        self.value = path

    def Serialize(self):
        """导出数据."""
        return {self.key: self.value}

    def setUtilfile(self):
        filepath = self._setChromePath()
        if filepath:
            self.value = filepath

    def _setChromePath(self):
        file_full_path, file_type = QFileDialog.getOpenFileName(self, "Select Project Directory", "C:\\",
                                                                "All Files (*);;")
        if not file_full_path:
            return False
        if "chrome" not in os.path.basename(file_full_path).lower():
            QMessageBox.warning(self, "warning", self.tr("Please set correct Chrome Path!"))
            return False
        return file_full_path

    def resetUtilButton(self):
        self.value = ""
