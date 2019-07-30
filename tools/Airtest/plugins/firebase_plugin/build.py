# coding=utf-8

from PyQt5.QtCore import QThread, pyqtSignal
from app.plugins.editor.plugin import CodeEditorPlugin
from app.params import ROOT
from app.utils import tmpPath
from firebase_plugin.tool.setting import include_ext

import tarfile
import subprocess
import os
import shutil
import sys
import chardet
import six

class BuildFirebaseThread(QThread):

    SIGNAL_BUILD_COMPLETE = pyqtSignal()
    SIGNAL_SCRIPT_NOT_EXIST = pyqtSignal()
    SIGNAL_UPDATE_PROGRESS = pyqtSignal(int)
    SIGNAL_THREAD_EXCEPT = pyqtSignal()

    SIGNAL_INSERT_LOGVIEW = pyqtSignal(str)  # 插入新的log到log区
    SIGNAL_LOG_CLEAR = pyqtSignal()

    def __init__(self, build_list=[], progress=None):
        super(BuildFirebaseThread, self).__init__()
        self.resign_process = None
        self.build_list = build_list
        self.progress = progress

        pyeditor_plugin = CodeEditorPlugin()
        self.SIGNAL_INSERT_LOGVIEW.connect(pyeditor_plugin.insertLogView)
        self.SIGNAL_LOG_CLEAR.connect(pyeditor_plugin.clearLogView)

    def make_targz(self, output_filename, source_dir, signal=None, max_value=0):
        count = 0
        with tarfile.open(output_filename, "w:gz") as self.tar:
            list_dir = os.listdir(source_dir)
            num = int(max_value / len(list_dir))
            for _dir in list_dir:
                ext = os.path.splitext(_dir)[1]
                if ext in include_ext:
                    self.tar.add(os.path.join(source_dir, _dir), arcname=_dir)
                    if count < max_value:
                        signal.emit(num)
                        count += num
                if self.closed:
                    break
            if count < max_value:
                signal.emit(max_value - count)
        self.tar.close()
        return not self.closed

    def copy_files(self, source_dir, target_dir):
        if os.path.exists(target_dir):
            try:
                shutil.rmtree(target_dir)
            except Exception as e:
                self.SIGNAL_LOG_CLEAR.emit()
                self.SIGNAL_INSERT_LOGVIEW.emit(repr(e))
                self.SIGNAL_THREAD_EXCEPT.emit()
                return False
        shutil.copytree(source_dir, target_dir)
        # for file in os.listdir(target_dir):
        #     if self.closed:
        #         return False
        #     full_path = os.path.join(target_dir, file)
        #     if os.path.isfile(full_path) and os.path.splitext(full_path)[1] == '.py':
        #         new_scropt = os.path.join(target_dir, 'test_script.py')
        #         shutil.move(full_path, new_scropt)
        return True

    def get_absolute_path(self, dir_path, file_path=""):
        root_temp = tmpPath(dir_path)
        return os.path.join(root_temp, file_path)

    def set_close(self):
        self.closed = True

    def run(self):
        self.closed = False
        target_base_dir = self.get_absolute_path("tool")
        if not self.copy_files(os.path.join(ROOT, "plugins/firebase_plugin/tool"), target_base_dir):
            return
        self.SIGNAL_UPDATE_PROGRESS.emit(15)

        if not self.copy_files(os.path.join(ROOT, "plugins/firebase_plugin/apk"), self.get_absolute_path("apk")):
            return

        with open(self.get_absolute_path("tool", "assets/script_registry.txt"), "w") as file:
            for source_dir in self.build_list:
                file.write(os.path.basename(source_dir) + '\n')
                if source_dir == "":
                    self.SIGNAL_SCRIPT_NOT_EXIST.emit()
                    return

                if not self.copy_files(source_dir, os.path.join(target_base_dir, "copy_app", os.path.basename(source_dir))):
                    return

        shutil.copy(self.get_absolute_path("tool", "base_apk/base.apk"),  self.get_absolute_path("tool", "KivyIns-debug.apk"))

        self.SIGNAL_UPDATE_PROGRESS.emit(5)

        output_filename = self.get_absolute_path("tool", "assets/private.mp3")
        source_dir = self.get_absolute_path("tool", "copy_app")
        if not self.make_targz(output_filename, source_dir, self.SIGNAL_UPDATE_PROGRESS, 65):
            return
        # self.SIGNAL_UPDATE_PROGRESS.emit(70)
        old_path = os.getcwd()
        os.chdir(self.get_absolute_path('tool'))
        if "darwin" in sys.platform:
            try:
                _str = subprocess.check_output(['./resign.sh'],
                                               stderr=subprocess.STDOUT)
                if six.PY3:
                    self.SIGNAL_INSERT_LOGVIEW.emit(_str.decode("utf-8"))
                else:
                    self.SIGNAL_INSERT_LOGVIEW.emit(_str)
            except subprocess.CalledProcessError as e:
                self.SIGNAL_INSERT_LOGVIEW.emit(
                    "command '{}' return with error (code {}): {}".format(e.cmd, e.returncode, e.output))
        else:
            try:
                _str = subprocess.check_output(['resign.bat'],
                                               stderr=subprocess.STDOUT)
                if six.PY3:
                    self.SIGNAL_INSERT_LOGVIEW.emit(_str.decode("GB2312"))
                else:
                    self.SIGNAL_INSERT_LOGVIEW.emit(_str.decode("GB2312").encode("utf-8"))
            except subprocess.CalledProcessError as e:
                self.SIGNAL_INSERT_LOGVIEW.emit(
                    "command '{}' return with error (code {}): {}".format(e.cmd, e.returncode, e.output))

        self.SIGNAL_UPDATE_PROGRESS.emit(7)
        os.chdir(old_path)
        shutil.copy(self.get_absolute_path("tool", "KivyIns-debug.apk"),  self.get_absolute_path("apk", "Test.apk"))
        self.SIGNAL_UPDATE_PROGRESS.emit(8)
        self.SIGNAL_BUILD_COMPLETE.emit()
