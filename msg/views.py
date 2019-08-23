# -*- coding: utf-8 -*-
import sys
import os
import config
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication, QWidget, QMainWindow, QAction, qApp, QLabel, QRadioButton, QComboBox
from PyQt5.QtGui import QIcon, QPalette, QColor, QFont


class ViewBase(QWidget):
	def __init__(self):
		super().__init__()

	def set_view_title(self, title: str):
		self.setWindowTitle(p_str=title)

	def set_label(self, text: str, is_show_bg: bool, color: Qt, align: Qt):
		_label = QLabel(self)
		_label.setText(p_str=text)
		_label.setAutoFillBackground(bool=is_show_bg)
		_label_palette = QPalette()
		_label_palette.setColor(QPalette.Window, color)
		_label.setPalette(_label_palette)
		_label.setAlignment(align)
		return _label


class ScreeSize(object):
	def __init__(self, width, height):
		self.width = width
		self.height = height


class ViewMain(QMainWindow):
	def __init__(self, view_size: ScreeSize, scree_size: ScreeSize):
		super().__init__()
		self.view_size = view_size
		self.scree_size = scree_size

		self.setWindowIcon(QIcon(config.logo_path))

		self.setWindowTitle(config.view_title)

		self.resize(self.view_size.width, self.view_size.height)
		self.setMaximumSize(self.view_size.width, self.view_size.height)
		self.setMinimumSize(self.view_size.width, self.view_size.height)
		self.move((int(self.scree_size.width - self.view_size.width) / 2), (
				int(self.scree_size.height - self.view_size.height) / 2))

		# 设置背景颜色
		palette1 = QPalette()
		palette1.setColor(self.backgroundRole(), QColor(113, 175, 164))
		self.setPalette(palette1)
		# self.__set_menu()
		# self.platform.move(300, 300)
		# self.platform.setFixedSize(40, 50)

		# self.label = self.set_label(text="Test", is_show_bg=True, color=Qt.blue, align=Qt.AlignCenter)
		# setText():设置Qlabel的文本内容
		# label1 = QLabel(self)
		# label1.setText('这是一个文本标签')
		# # 标签1的背景填充更改为True，否则无法显示背景
		# label1.setAutoFillBackground(True)
		# # 实例化背景对象，进行相关背景颜色属性设置
		# palette = QPalette()
		# palette.setColor(QPalette.Window, Qt.blue)
		# # 标签1加载背景
		# label1.setPalette(palette)
		# # 设置文本居中显示
		# label1.setAlignment(Qt.AlignCenter)
		self.set_platform_button()
		self.set_line()
		self.show()

	def set_line(self):
		self.platform_1 = QLabel(self)  # QLabel实例化时，需传self（原因待了解）
		self.platform_2 = QLabel(self)
		self.platform_1.setGeometry(1, 35, 2400, 5)  # x=20px+80px=100px  y=  40px+40
		self.platform_2.setGeometry(1, 85, 2400, 5)
		# self.platform.setStyleSheet("color:red")
		self.platform_1.setFont(QFont("Timers", 12, 75))
		self.platform_2.setFont(QFont("Timers", 12, 75))
		self.platform_1.setText(config.parting_line)
		self.platform_2.setText(config.parting_line)

	def set_platform_button(self):
		self.platform = QLabel(self)  # QLabel实例化时，需传self（原因待了解）
		self.platform.setGeometry(10, 10, 80, 20)  # x=20px+80px=100px  y=  40px+40
		# self.platform.setStyleSheet("color:red")
		self.platform.setFont(QFont("Timers", 10, 75))
		self.platform.setText("平台设置 : ")

		self.platform_input_box = QComboBox(self)
		self.platform_input_box.setGeometry(100, 10, 100, 20)
		self.platform_input_box.addItems(["所有", "斗鱼", "虎牙"])

		self.platform_input_box.activated[str].connect(self.choose_platform)

	@staticmethod
	def choose_platform(choose_plat_text):
		if choose_plat_text == "斗鱼":
			config.Params.plat_form = config.Platform.DOU_YU
		elif choose_plat_text == "虎牙":
			config.Params.plat_form = config.Platform.HU_YA
		else:
			config.Params.plat_form = config.Platform.ALL

		print(config.Params.plat_form)

	def set_menu(self):
		self.menu_bar = self.menuBar()
		first_menu = self.menu_bar.addMenu('&选择直播平台')
		first_menu.addMenu('&全部')
		first_menu.addMenu('&斗鱼')
		first_menu.addMenu('&虎牙')
		first_menu.addMenu('&熊猫')


if __name__ == "__main__":
	app = QApplication(sys.argv)
	screen_rect = app.desktop().screenGeometry()
	scree = ScreeSize(height=screen_rect.height(), width=screen_rect.width())
	view_main_scree = ScreeSize(height=int(scree.height / 1.25), width=int(scree.width / 1.25))
	view_main = ViewMain(view_size=view_main_scree, scree_size=scree)
	view_main.show()

	sys.exit(app.exec_())
