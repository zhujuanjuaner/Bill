#!/usr/bin/python3
# -*- coding: utf-8 -*-
from airtest.core import android

import subprocess

import logging


def check_connect() -> bool:
	connect = subprocess.Popen("adb devices", stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
	
	stdout, stderr = connect.communicate()
	
	stdout = stdout.decode("utf-8")
	stderr = stderr.decode("utf-8")
	
	return stdout != "" and stderr == ""


def app_start(app_name: str):
	app_manage = android.Android()
	app_manage.start_app(package=app_name)


def phone_cmd(command: str) -> bool:
	screen_get = subprocess.Popen(str(command), stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
	stdout, stderr = screen_get.communicate()
	
	return stdout != "" and stderr == ""


def get_screen_shot(image_name: str, save_path: str) -> bool:
	command_get_shot = r"adb shell /system/bin/screencap -p /sdcard/%s" % image_name
	
	is_success_get_shot = phone_cmd(command=command_get_shot)
	
	# logging.debug("is_success_get_shot : %s" % is_success_get_shot)
	
	command_save_shot = r"adb pull /sdcard/%s %s" % (image_name, save_path)
	
	is_success_save_shot = phone_cmd(command=command_save_shot)
	
	# logging.debug("is_success_save_shot : %s" % is_success_save_shot)
	
	return is_success_get_shot and is_success_save_shot
