# coding=utf-8
__version__ = "0.1"
import numpy.core.multiarray
from jnius import autoclass
from airtest.core.kivy.kivy import Kivy
import platform
import numpy
import time
import os
import zipfile
import subprocess


class MyApp():
    def __init__(self):
        self.SCRIPT_TIMEOUT = 20

    def recursion_zip(self, zip_file, script, base_path):
        now_path = os.path.join(base_path, script)
        file_list = os.listdir(now_path)
        for files in file_list:
            file = os.path.join(script, files)
            if os.path.isdir(file):
                self.recursion_zip(zip_file, file, base_path)
            else:
                zip_file.write(file)

    def zip_report(self, script, zip_file):
        print("zip script file: ", script)
        log_file = script.replace(".air", ".log")
        report_path = os.path.join("/sdcard/Netease/", log_file)
        path = os.getcwd()
        os.chdir("/sdcard/Netease")
        self.recursion_zip(zip_file, log_file, "/sdcard/Netease")
        os.chdir(path)
        import shutil
        shutil.rmtree(report_path)

    def test(self):
        PythonActivity = autoclass('org.kivy.android.PythonActivity')
        mActivity = PythonActivity.mActivity
        Controler = autoclass('org.kivy.android.Controler')
        _agent = Controler()

        kivy = Kivy(mActivity, _agent)
        import shutil   # 清空report, log目录
        if os.path.isdir("/sdcard/Netease"):
            shutil.rmtree("/sdcard/Netease")

        if os.path.isdir("/sdcard/logDir"):
            shutil.rmtree("/sdcard/logDir")

        last_time = time.time()
        scripts = _agent.getTestScripts()
        print "get scripts", scripts
        if not os.path.exists("/sdcard/Netease"):
            os.mkdir("/sdcard/Netease")
        zip_file = zipfile.ZipFile("/sdcard/Netease/Netease_report.zip", "w")
        origin_path = os.getcwd()

        for script in scripts:
            if not script:
                break
            _type = ""
            _str = ""
            try:
                from airtest.core.api import G
                from airtest.core.api import connect_device
                from airtest.core.helper import set_logdir
                G.register_custom_device(Kivy)
                connect_device("Kivy:///")

                log_path = '/sdcard/logDir'
                script_path = os.path.join(origin_path, script)
                set_logdir(log_path)

                os.chdir(os.path.join(origin_path, script))
                exec("from airtest.core.api import *") in globals()
                globals()['args'] = {'script': origin_path}
                execfile(os.path.join(script_path, script.replace('.air', '.py')), globals())
                os.chdir(origin_path)
            except Exception as e:
                print("Script error=======")
                import traceback
                _str = traceback.format_exc()
                _type = "script"

            try:
                from airtest.cli.__main__ import main
                import sys

                print("build report...")
                static_path = os.path.join(origin_path, 'airtest/report')
                export_path = '/sdcard/Netease'
                poco_report = "poco.utils.airtest.report"
                sys.argv[1:] = ['report', script_path, '--log_root', log_path, '--export', export_path, '--static_root', static_path, '--plugin', poco_report]
                main()
                self.zip_report(script, zip_file)

            except Exception as e:
                print("Report error=======")
                import traceback
                _str = traceback.format_exc()
                _type = "report"

            print("this test's result is: ", _type, _str)
            if _type != "":
                _agent.stopTest("error", _type, _str)
            else:
                _agent.stopTest("ok", "", "")
            time.sleep(7)

    def built(self):
        self.test()

if __name__ == '__main__':
    MyApp().built()
