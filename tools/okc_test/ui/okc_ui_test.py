#!/usr/bin/python3
# -*- coding: utf-8 -*-
from poco.exceptions import PocoNoSuchNodeException

import config
import logging

from okc_test.ui import common
from poco.drivers.unity3d import UnityPoco as Poco
from airtest.core import api, cv, helper


class OkcUiTest(object):
	
	def __init__(self):
		self.app_name = config.okc_app_name
		self.click_wait_time = 0.5
		self.start_game_wait_time = 5
		
		self.android_object = self.start_game()
		
		self.poco = Poco()
		
		self.ui_node = None
		self.now_scene = None
		self.now_view = None
		
		self.node_pos = list()
		
		self.update_ui_node()
		self.__init_devices()
	
	def __init_devices(self):
		helper.G.add_device(dev=self.android_object)
	
	def start_game(self):
		android_object = common.app_start(self.app_name)
		# api.sleep(self.start_game_wait_time)
		return android_object
	
	def create_new_account(self):
		while True:
			if self.ui_node is None:
				self.update_ui_node()
				continue
			node_name_fake_sdk = "tab_2"
			node_name_new = "new_btn"
			
			self.click_by_pos(self.get_pos_by_node(node_name=node_name_fake_sdk))
			self.click_by_pos(self.get_pos_by_node(node_name=node_name_new))
			break
	
	def choose_environment(self):
		node_name = ""
		if config.okc_environment == config.OkcEnvironment.Test.value:
			node_name = "test_btn"
		elif config.okc_environment == config.OkcEnvironment.Dev.value:
			node_name = "dev_btn"
		elif config.okc_environment == config.OkcEnvironment.OnlineTest.value:
			node_name = "online_test_btn"
		
		self.click_by_pos(self.get_pos_by_node(node_name=node_name))
		api.sleep(10)
	
	def update_ui_node(self):
		self.ui_node = self.poco.agent.hierarchy.dump()
	
	def click_by_pos(self, pos):
		self.poco.click(pos=pos)
		api.sleep(self.click_wait_time)
		self.update_ui_node()
	
	def get_pos_by_node(self, node_name):
		self.node_pos = 0
		try_count = 0
		while try_count < 5:
			try:
				node_pos = self.poco(node_name).get_position()
				node_size = self.poco(node_name).get_size()
				self.node_pos = node_pos[0] + node_size[0] / 2, node_pos[1] + node_size[1] / 2
				break
			except PocoNoSuchNodeException:
				self.update_ui_node()
				try_count += 1
				continue
		# node_pos = self.poco(node_name).get_position()
		# node_size = self.poco(node_name).get_size()
		
		logging.info("node name : %s ; node position : %s" % (node_name, self.node_pos))
		return self.node_pos


okc_ui_test = OkcUiTest()
