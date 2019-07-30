#!/usr/bin/python3
# -*- coding: utf-8 -*-

from airtest.core import api

from okc_test.ui import common
import config
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
	
	def create_account_test(self):
		image_dir = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="okc_test_create_account")
		
		def get_image_path(image_name: str):
			return r"%s%s.png" % (image_dir, image_name)
		
		self.app_start()
		
		from airtest.core import helper
		
		helper.using(image_dir)
		
		tag_environment = get_image_path("tag_environment")
		api.wait(api.Template(tag_environment))
		
		api.touch(api.Template(get_image_path("button_fake_sdk")))
		api.touch(api.Template(get_image_path("button_new")))
		api.touch(api.Template(get_image_path("button_test")))
		
		create_step_1 = get_image_path("create_step_1")
		
		if not api.exists(api.Template(create_step_1)):
			logging.error("not found this image : %s" % create_step_1)
			return
		
		api.touch(api.Template(get_image_path("button_continue")))


ui_test = UiTest()
