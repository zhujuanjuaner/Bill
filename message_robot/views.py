# -*- coding: utf-8 -*-
import sys
import os
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication, QWidget, QMainWindow, QAction, qApp, QLabel
from PyQt5.QtGui import QIcon, QPalette


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


class ViewMain(ViewBase):
	def __init__(self, view_size: ScreeSize, scree_size: ScreeSize):
		super().__init__()
		self.view_size = view_size
		self.scree_size = scree_size
		
		# self.setWindowIcon(QIcon("%s\\image\\view_main_icon.jpg" % (os.getcwd())))
		# self.platform.move(300, 300)
		# self.platform.setFixedSize(40, 50)
		self.setWindowTitle("弹幕自动化")
		self.resize(self.view_size.width, self.view_size.height)
		self.move((int(self.scree_size.width - self.view_size.width) / 2), (
				int(self.scree_size.height - self.view_size.height) / 2))
		# self.label = self.set_label(text="Test", is_show_bg=True, color=Qt.blue, align=Qt.AlignCenter)
		# setText():设置Qlabel的文本内容
		label1 = QLabel(self)
		label1.setText('这是一个文本标签')
		# 标签1的背景填充更改为True，否则无法显示背景
		label1.setAutoFillBackground(True)
		# 实例化背景对象，进行相关背景颜色属性设置
		palette = QPalette()
		palette.setColor(QPalette.Window, Qt.blue)
		# 标签1加载背景
		label1.setPalette(palette)
		# 设置文本居中显示
		label1.setAlignment(Qt.AlignCenter)
	
		self.show()


if __name__ == "__main__":
	app = QApplication(sys.argv)
	screen_rect = app.desktop().screenGeometry()
	scree = ScreeSize(height=screen_rect.height(), width=screen_rect.width())
	view_main_scree = ScreeSize(height=int(scree.height / 1.25), width=int(scree.width / 1.25))
	view_main = ViewMain(view_size=view_main_scree, scree_size=scree)
	view_main.show()
	
	sys.exit(app.exec_())
