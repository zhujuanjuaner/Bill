#!/usr/bin/python3
# -*- coding: utf-8 -*-

from command import okc_robot_start
import util
import threading
import os


# from okc_test.test_case import create_account
# from okc_test.ui import common

def main():
	# from okc_test.test_case import TaskTest
	# task_test = TaskTest(uid=1724)
	# task_test.continuous_login()
	
	check_pos = threading.Thread(target=util.check_position, name="check_position", args=())
	thread_main = threading.Thread(target=okc_robot_start, name="main", args=())
	thread_main.start()
	check_pos.start()
	
	thread_main.join()
	check_pos.join()
	
	os.system("pause")


if __name__ == "__main__":
	main()
