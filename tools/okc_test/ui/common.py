#!/usr/bin/python3
# -*- coding: utf-8 -*-
from airtest.core import android, api

import subprocess

import logging


def connect_phone(phone_name="honor_10_lite"):
	phone_dict = {"honor_10_lite": "79URX19118020173"}
	if phone_name not in phone_dict.keys():
		logging.error("not support")
		return
	api.connect_device("Android:///%s" % phone_dict[phone_name])


def check_connect() -> bool:
	connect = subprocess.Popen("adb devices", stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
	
	stdout, stderr = connect.communicate()
	
	stdout = stdout.decode("utf-8")
	stderr = stderr.decode("utf-8")
	
	return stdout != "" and stderr == ""


def app_start(app_name: str):
	app_manage = android.Android()
	app_manage.start_app(package=app_name)
	return app_manage


def phone_cmd(command: str):
	return subprocess.Popen(str(command), stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)


def is_in_service(app_name):
	# adb shell ps | grep %s
	return phone_cmd(command="adb shell ps | grep %s" % app_name)


def kill_app(app_name):
	# "adb shell am force-stop <package name>"
	# adb shell pm clear %s
	return phone_cmd(command="adb shell pm clear %s" % app_name)
	# phone_cmd("adb shell am force-stop <%s>" % app_id)


# phone_cmd(command="adb shell am kill %s" % app_id)


def get_screen_shot(image_name: str, save_path: str) -> bool:
	command_get_shot = r"adb shell /system/bin/screencap -p /sdcard/%s" % image_name
	
	is_success_get_shot = phone_cmd(command=command_get_shot)
	
	# logging.debug("is_success_get_shot : %s" % is_success_get_shot)
	
	command_save_shot = r"adb pull /sdcard/%s %s" % (image_name, save_path)
	
	is_success_save_shot = phone_cmd(command=command_save_shot)
	
	# logging.debug("is_success_save_shot : %s" % is_success_save_shot)
	
	return is_success_get_shot and is_success_save_shot
