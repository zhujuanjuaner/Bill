#!/usr/bin/python3
# -*- coding: utf-8 -*-

from airtest.core import api, cv, helper
from airtest.core.error import TargetNotFoundError
from poco.drivers.unity3d import UnityPoco as Poco
from okc_test.ui import common

import config
import util
import logging


class UiTest(object):
	
	def __init__(self):
		self.app_name = "com.eyougame.sjhg"
		self.pic_dir = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="okc_test_pic_dir")
		self.andro = self.app_start()
		self.poco = Poco()
		self.scree_pos = self.poco.get_screen_size()
		helper.G.add_device(dev=self.andro)
	
	def app_start(self):
		andro = common.app_start(app_name=self.app_name)
		api.sleep(secs=5)
		return andro
	
	def get_image(self, name, save_path=""):
		if save_path == "":
			save_path = "%s%s.png" % (self.pic_dir, name)
		else:
			save_path = "%s/%s.png" % (save_path, name)
		logging.debug("save path : %s" % save_path)
		common.get_screen_shot(image_name=name, save_path=save_path)
	
	def click_button_by_pos(self, pos):
		self.poco.click(pos)
	
	def click(self, image_path):
		
		try:
			image_center_pos = cv.loop_find(api.Template(image_path))
			image_x = image_center_pos[0]
			image_y = image_center_pos[1]
			print("@@@" * 10)
			logging.debug("image_path : %s" % image_path)
			logging.debug("image_x : %s , image_y : %s" % (image_x/self.scree_pos[0], image_y/self.scree_pos[1]))
			print("@@@" * 10)
			self.poco.click([image_x / self.scree_pos[0], image_y / self.scree_pos[1]])
			api.sleep(0.3)
			return True
		except TargetNotFoundError:
			logging.error("image_path : %s ---- not found" % image_path)
			return False
	
	@staticmethod
	def get_image_path(image_dir, image_name: str):
		return r"%s%s.png" % (image_dir, image_name)


ui_test = UiTest()
