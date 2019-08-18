# -*- coding: utf-8 -*-
import sys
import os
from PyQt5.QtWidgets import QApplication, QWidget, QMainWindow, QAction, qApp, QLabel
from PyQt5.QtGui import QIcon


class ScreeSize(object):
	def __init__(self, width, height):
		self.width = width
		self.height = height


class ViewMain(QWidget):
	def __init__(self, view_size: ScreeSize, scree_size: ScreeSize):
		super().__init__()
		self.view_size = view_size
		self.scree_size = scree_size

		self.setWindowIcon(QIcon("%s\\image\\view_main_icon.jpg" % (os.getcwd())))
		self.setWindowTitle("弹幕自动化")

		self.resize(self.view_size.width, self.view_size.height)

		self.move((int(self.scree_size.width - self.view_size.width) / 2), (
				int(self.scree_size.height - self.view_size.height) / 2))

		self.platform = QLabel("平台")
		self.platform.move(300, 300)
		self.platform.setFixedSize(40, 50)
		self.show()


if __name__ == "__main__":
	app = QApplication(sys.argv)
	screen_rect = app.desktop().screenGeometry()
	scree = ScreeSize(height=screen_rect.height(), width=screen_rect.width())
	view_main_scree = ScreeSize(height=int(scree.height / 1.25), width=int(scree.width / 1.25))
	view_main = ViewMain(view_size=view_main_scree, scree_size=scree)
	view_main.show()
	sys.exit(app.exec_())
