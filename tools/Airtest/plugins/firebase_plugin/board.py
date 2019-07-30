# coding=utf-8
from PyQt5.QtWidgets import QLineEdit, QWidget, QHBoxLayout, QVBoxLayout, QToolButton, QAction


class ChoosingWidget(QWidget):

    def __init__(self, parent=None, firebase_window=None):
        super(ChoosingWidget, self).__init__(parent)
        self.firebase_wnd = firebase_window
        self.num = 0
        self.setupUi()

    def get_unit_layout(self):
        choose_file_action = QAction("Choose Script")
        choose_file_button = QToolButton(self)
        choose_file_button.setDefaultAction(choose_file_action)

        line_edit = QLineEdit(self)
        number = self.num
        choose_file_button.clicked.connect(lambda: self.firebase_wnd.handle_choose_script(number))
        self.num += 1

        unit_layout = QHBoxLayout()
        unit_layout.addSpacing(15)
        unit_layout.addWidget(line_edit)
        unit_layout.addWidget(choose_file_button)

        self.firebase_wnd.edit_que.append(line_edit)

        return unit_layout

    def setupUi(self):
        self.main_layout = QVBoxLayout(self)

        self.group_layout = QVBoxLayout()


        self.unit_layout = self.get_unit_layout()

        self.build_button = QToolButton(self)
        self.build_action = QAction("Build")
        self.build_button.setDefaultAction(self.build_action)

        self.add_button = QToolButton(self)
        self.add_action = QAction("Add")
        self.add_button.setDefaultAction(self.add_action)

        self.bottom_layout = QHBoxLayout()
        self.bottom_layout.addSpacing(170)
        self.bottom_layout.addWidget(self.build_button)
        self.bottom_layout.addWidget(self.add_button)


        self.group_layout.addSpacing(15)
        self.group_layout.addLayout(self.unit_layout)

        self.main_layout.addLayout(self.group_layout)
        self.main_layout.addSpacing(10)
        self.main_layout.addLayout(self.bottom_layout)

    def add_item(self):
        self.group_layout.addLayout(self.get_unit_layout())

    def closeEvent(self, QCloseEvent):
        self.num = 0
        self.firebase_wnd.edit_que = []