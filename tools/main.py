#!/usr/bin/python3
# -*- coding: utf-8 -*-
from command import okc_robot_start
import util
import threading
import os
from okc_test.test_case import create_account
# from okc_test.ui import common


def main():
	# app_name = "com.eyougame.sjhg"
	# print("is in service : %s" % common.is_in_service(app_name=app_name))
	# print("kill app : %s" % common.kill_app(app_name=app_name))
	# print("is in service : %s" % common.is_in_service(app_name=app_name))
	# command = 'adb shell "ps | grep com.eyougame.sjhg"'
	# app_id = common.phone_cmd(command=command).pid
	# print("app id : %s " % app_id)
	# print(common.kill_app(app_name))
	create_account()
	
	check_pos = threading.Thread(target=util.check_position, name="check_position", args=())
	thread_main = threading.Thread(target=okc_robot_start, name="main", args=())
	thread_main.start()
	check_pos.start()
	
	thread_main.join()
	check_pos.join()
	
	os.system("pause")


if __name__ == "__main__":
	main()
