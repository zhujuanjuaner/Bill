# coding=utf-8
from PyQt5.QtWidgets import QProgressBar, QWidget, QHBoxLayout, QVBoxLayout, QToolButton, QAction
from PyQt5.QtGui import QIcon
from PyQt5.QtCore import Qt
from app.plugins.core.plugin import IdePlugin


class FireBaseWidget(QWidget):

    def __init__(self, parent=None, firebase_window=None):
        super(FireBaseWidget, self).__init__(parent)
        self.firebase_window = firebase_window
        self.n = 0
        self.setWindowFlags(Qt.WindowStaysOnTopHint)
        self.setWindowIcon(QIcon(":/images/mainwindow/airtest_ide.png"))
        self.setupUi()

    def setupUi(self):
        self.main_layout = QVBoxLayout(self)

        self.process = QProgressBar(self)
        self.process.setValue(0)

        self.open_button_action = QAction("open")
        self.open_button = QToolButton(self)
        self.open_button.setDefaultAction(self.open_button_action)
        self.close_button_action = QAction("cancel")
        self.close_button = QToolButton(self)
        self.close_button.setDefaultAction(self.close_button_action)

        self.button_layout = QHBoxLayout()
        self.button_layout.addSpacing(200)
        self.button_layout.addWidget(self.open_button)
        self.button_layout.addWidget(self.close_button)

        self.main_layout.addWidget(self.process)
        self.main_layout.addSpacing(20)
        self.main_layout.addLayout(self.button_layout)

    def update(self, num):
        self.n += num
        if self.n >= 100:
            self.process.setValue(100)
            self.firebase_window.isPackaging = False
            self.firebase_window.build_package_thread.set_close()
            IdePlugin.MainWindow.statusbarShowTip("")
            return
        self.process.setValue(self.n)
