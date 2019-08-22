# cording:"utf-8"

import sys
import time
import threading
from PyQt5.QtWidgets import QApplication, QWidget, QMainWindow, QAction, qApp, QLabel, QComboBox, QPushButton
from PyQt5.QtGui import QIcon, QFont, QPalette, QBrush, QPixmap


class ViewMain(QWidget):
    def __init__(self, scree_size):
        super().__init__()
        self.scree_size = scree_size
        self.setWindowTitle("弹幕自动化")
        self.resize(1200, 800)
        self.move(int((self.scree_size.width - 1200) / 2), int((self.scree_size.height - 800) / 2))
        self.setWindowIcon(QIcon("E:\\work_baby\\picture\\p10.jpg"))
        window_platte = QPalette()  # 设置背景图片
        window_platte.setBrush(self.backgroundRole(), QBrush(QPixmap("E:\\work_baby\\picture\\bja.jpg")))
        self.setPalette(window_platte)

        self.platform = QLabel(self)  # QLabel实例化时，需传self（原因待了解）
        self.platform.setGeometry(20, 40, 160, 40)  # x=20px+80px=100px  y=  40px+40
        self.platform.setStyleSheet("color:red")
        self.platform.setFont(QFont("Timers", 20))
        self.platform.setText("平台设置")
        self.platform_input_box = QComboBox(self, minimumWidth=150)
        self.platform_input_box.setGeometry(180, 40, 80, 40)
        self.platform_input_box.addItems(["所有", "斗鱼", "虎牙"])

        self.fans_min = QLabel(self)
        self.fans_min.setGeometry(20, 90, 160, 40)
        self.fans_min.setFont(QFont("Timer", 20))
        self.fans_min.setText("粉丝下限")
        self.fans_min_input_box = QComboBox(self, minimumWidth=150)
        self.fans_min_input_box.setGeometry(180, 90, 80, 40)
        self.fans_min_input_box.addItems(["0", "100", "300"])

        self.fans_max = QLabel(self)
        self.fans_max.setGeometry(20, 140, 160, 40)
        self.fans_max.setFont(QFont("Timers", 20))
        self.fans_max.setText("粉丝上线")
        self.fans_max_input_box = QComboBox(self, minimumWidth=150)
        self.fans_max_input_box.setGeometry(180, 140, 80, 40)
        self.fans_max_input_box.addItems(["500000", "100000", "200000", "300000"])

        self.cache = QLabel(self)
        self.cache.setGeometry(20, 190, 160, 40)
        self.setFont(QFont("Timers", 20))
        self.cache.setText("使用缓存")
        self.cache_input_box = QComboBox(self)
        self.cache_input_box.setGeometry(180, 190, 150, 40)
        self.cache_input_box.addItems(["是", "否"])

        # self.test_button = QPushButton(self)
        # self.test_button.setText("Test")

        # self.test_button.clicked.connect(self.on_click_test_button)

        self.timer_label = QLabel(self)
        # self.timer_label.setText("%s" % int(time.time()))

        self.show()

    def __init_timer(self):
        pass

    def on_click_test_button(self):
        self.close()


if __name__ == "__main__":
    app = QApplication(sys.argv)
    screen_rect = app.desktop().screenGeometry()


    class ScreeSize(object):
        height = screen_rect.height()
        width = screen_rect.width()


    def set_timer(time_object):
        while True:
            time_object.setText("%d" % int(time.time()))
            time.sleep(1)


    A = ViewMain(ScreeSize)
    main_thread = threading.Thread(target=A, args=())
    set_time_thread = threading.Thread(target=set_timer, args=(A.timer_label,))

    set_time_thread.start()
    # ViewMain.show()
    sys.exit(app.exec_())
