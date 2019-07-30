# coding=utf-8
import subprocess
import sys
import time
import os
from PyQt5.QtGui import QDesktopServices
from PyQt5.QtCore import Qt, QUrl
from PyQt5.QtWidgets import QPushButton, QAction, QToolButton, QHBoxLayout, QMessageBox, QMenu, QFileDialog
from app.framework.plugin_system import PluginWindow, PluginWindowType
from app.plugins.editor.plugin import CodeEditorPlugin
from app.plugins.core.plugin import IdePlugin
from app.utils import tmpPath
from firebase_plugin.build import BuildFirebaseThread
from firebase_plugin.progress import FireBaseWidget
from firebase_plugin.board import ChoosingWidget
from app.params import ROOT
from app import ga

class FireBaseWindow(PluginWindow):

    PROPERTIES = {
        "windowType": PluginWindowType.WT_DOCK,
        # docking属性
        "dockingTitle": "Firebase Window",
        "dockingVisible": False,
        "dockingArea": Qt.AllDockWidgetAreas,
        "dockingPosition": Qt.LeftDockWidgetArea,
    }

    def __init__(self):
        super(FireBaseWindow, self).__init__()
        self.build_package_thread = None
        self.isPackaging = False
        self.initUi()
        self.edit_que = []
        self.multi_build = False

    def createMenu(self, menuBar):
        self.firebase_menu = QMenu(self.tr("&Firebase"))
        self.firebase_resign_action = QAction("Build Instrumentation Test Apk", self, \
                triggered=self.handle_resign)
        self.firebase_choose_action = QAction("Multiple Scripts Build", self, \
                triggered=self.handle_multi_build)
        self.firebase_menu.addAction(self.firebase_resign_action)
        self.firebase_menu.addAction(self.firebase_choose_action)
        menuBar.addMenu(self.firebase_menu)

    def initUi(self):
        # return
        self.setObjectName("FireBaseWindow")
        self.resize(150, 300)

        self.main_layout = QHBoxLayout(self)

        # self.firebase_compress_action = QAction("Compress")
        # self.firebase_compress_action.setToolTip("Compress Script")
        # self.firebase_compress_button = QToolButton(self)
        # self.firebase_compress_button.setDefaultAction(self.firebase_compress_action)
        # self.firebase_compress_button.clicked.connect(self.handle_compress)

        self.firebase_resign_action = QAction("Resign Firebase Package")
        self.firebase_resign_action.setToolTip("Resign Script")
        self.firebase_resign_button = QToolButton(self)
        self.firebase_resign_button.setDefaultAction(self.firebase_resign_action)
        self.firebase_resign_button.clicked.connect(self.handle_resign)
        self.main_layout.addWidget(self.firebase_resign_button)

    def detect_java(self):
        try:
            proc = subprocess.Popen(['jarsigner'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            proc.wait()
            for line in proc.stdout:
                if "No Java" in str(line):
                    return False
        except Exception as e:
            return False

        return True

    def openDoc(self):
        if IdePlugin.conf.get("preferLocale", None) == "zh_CN":
            index_html = "http://airtest.netease.com/docs/docs_AirtestIDE-zh_CN/7_plugins/1_firebase.html#"
        else:
            index_html = "http://airtest.netease.com/docs/docs_AirtestIDE-en_US/1_online_help/firebase_building.html"
        QDesktopServices.openUrl(QUrl(index_html))

    def openPath(self, path):
        try:
            # startfile只有windows支持
            path = os.path.join(os.getcwd(), path)
            os.startfile(path)
        except:
            import subprocess
            subprocess.call(["open", path])
        self.finish_build()

    def finish_build(self):
        print("finish it")
        # reply = QMessageBox.question(self, "", "Apk Generated! Do you want to open apk path?", \
        #                              QMessageBox.Yes, QMessageBox.No)
        # if reply == QMessageBox.Yes:
        #     path = os.path.join(ROOT, "temp", "apk")
        #     self.openPath(path)
        self.isPackaging = False
        self.build_package_thread.set_close()
        IdePlugin.MainWindow.statusbarShowTip("")
        self.progress.close()

    def progress_complete(self):
        IdePlugin.MainWindow.statusbarShowTip("")
        self.progress.open_button.setDisabled(False)

    def script_not_exist(self):
        QMessageBox.warning(self, "Warning", "Edit and save script first!")
        self.isPackaging = False
        IdePlugin.MainWindow.statusbarShowTip("")
        self.progress.close()

    def handle_open(self):
        path = tmpPath("apk")
        self.openPath(path)

    def handle_pause(self):
        if self.build_package_thread.resign_process:
            print("---------------kill process")
            self.build_package_thread.resign_process.kill()
        self.build_package_thread.quit()
        self.finish_build()

    def build_target_already_open(self):
        QMessageBox.warning(None, self.tr("Warning"), self.tr(
            "You are using the target build folder, please exit first!"))
        self.finish_build()

    def handle_choose_script(self, num):
        source_dir = CodeEditorPlugin().editor_tab.getCurrentProjectPath()
        file_name = QFileDialog.getOpenFileName(self, "Choose Script", source_dir, "All Files (*);;Python Files (*.py)")
        for key, item in enumerate(self.edit_que):
            if item.text() == os.path.split(file_name[0])[0]:
                self.edit_que[key].setText("")

        path_split = os.path.split(file_name[0])
        if os.path.splitext(path_split[0])[1] == '.air':
            self.edit_que[num].setText(path_split[0])

    def handle_add_item(self):
        self.choosing_board.add_item()

    def handle_multi_build_script(self):
        self.multi_build = True
        self.build_list = []
        for item in self.edit_que:
            if item.text() != "":
                self.build_list.append(item.text())
        self.handle_resign()
        self.multi_build = False

    def handle_multi_build(self):
        self.choosing_board = ChoosingWidget(firebase_window=self)
        # self.choosing_board.choose_file_button.clicked.connect(self.handle_choose_script)
        self.choosing_board.setGeometry(400, 400, 380, 70)
        self.choosing_board.add_button.clicked.connect(self.handle_add_item)
        self.choosing_board.build_button.clicked.connect(self.handle_multi_build_script)
        self.choosing_board.show()

    def handle_resign(self):
        if not self.detect_java():
            self.openDoc()
            return
        ga.event("firebase", "build_apk")
        if self.isPackaging:
            return
        else:
            self.isPackaging = True
        IdePlugin.MainWindow.statusbarShowTip("Building firebase apk...")

        self.progress = FireBaseWidget(firebase_window=self)
        self.progress.setObjectName("Building progress...")
        self.progress.setGeometry(400, 400, 380, 70)
        self.progress.open_button.clicked.connect(self.handle_open)
        self.progress.close_button.clicked.connect(self.handle_pause)
        self.progress.open_button.setDisabled(True)
        self.progress.show()

        while True:
            if self.build_package_thread and not self.build_package_thread.isFinished():
                time.sleep(0.3)
            else:
                break

        if hasattr(self, "choosing_board"):
            self.choosing_board.close()
        if self.multi_build:
            self.build_package_thread = BuildFirebaseThread(self.build_list, self.progress)
        else:
            self.build_package_thread = BuildFirebaseThread([CodeEditorPlugin().editor_tab.getCurrentProjectPath()], self.progress)
        self.build_package_thread.start()
        self.build_package_thread.SIGNAL_BUILD_COMPLETE.connect(self.progress_complete)
        self.build_package_thread.SIGNAL_SCRIPT_NOT_EXIST.connect(self.script_not_exist)
        self.build_package_thread.SIGNAL_UPDATE_PROGRESS.connect(self.progress.update)
        self.build_package_thread.SIGNAL_THREAD_EXCEPT.connect(self.build_target_already_open)
