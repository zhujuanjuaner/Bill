#!/usr/bin/python3
# -*- coding: utf-8 -*-

from airtest.core import api

from okc_test.ui import common
import config
import os
import util
import logging


class UiTest(object):
	
	def __init__(self):
		self.app_name = "com.eyougame.sjhg"
		self.pic_dir = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="okc_test_pic_dir")
	
	def app_start(self):
		common.app_start(app_name=self.app_name)
		api.sleep(secs=5)
	
	def get_image(self, name, save_path=""):
		if save_path == "":
			save_path = "%s%s.png" % (self.pic_dir, name)
		else:
			save_path = "%s/%s.png" % (save_path, name)
		logging.debug("save path : %s" % save_path)
		common.get_screen_shot(image_name=name, save_path=save_path)
	
	def create_account_test(self, env=config.okc_environment):
		pass


ui_test = UiTest()
