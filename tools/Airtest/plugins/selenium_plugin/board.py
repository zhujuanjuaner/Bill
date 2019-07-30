# coding=utf-8
from PyQt5.QtWidgets import QLineEdit, QWidget, QHBoxLayout, QVBoxLayout, \
    QToolButton


class SeleniumWidget(QWidget):

    def __init__(self, parent=None):
        super(SeleniumWidget, self).__init__(parent)
        self.setupUi()

    def setupUi(self):
        self.main_layout = QVBoxLayout(self)

        self.browser_layout = QHBoxLayout()
        self.brower_choose_button = QToolButton(self)

        self.line_edit = QLineEdit(self)
        self.browser_layout.addSpacing(15)
        self.browser_layout.addWidget(self.line_edit)
        self.browser_layout.addWidget(self.browser_choose_button)
