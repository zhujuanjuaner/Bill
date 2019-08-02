#!/usr/bin/python3
# -*- coding: utf-8 -*-

import config
import logging
import re
import util

from okc_test.ui import common
from poco.drivers.unity3d import UnityPoco as Poco
from airtest.core import api, cv, helper


class OkcUiTest(object):
	
	def __init__(self):
		self.app_name = config.okc_app_name
		self.click_wait_time = 0.5
		self.start_game_wait_time = 1
		
		self.image_save_path = util.get_ini_data(config.conf_path, section="path", section_item="okc_test_image_dir")
		
		self.is_in_the_game = False
		
		self.poco: Poco = None
		
		self.ui_node = None
		self.now_scene = None
		self.now_view = None
		self.node_pos = list()
		
		self.android_object = None
		
		if self.ui_node is not None:
			self.is_in_the_game = True
		
		if not self.is_in_the_game:
			self.__enter_game()
	
	def update_is_in_the_game(self):
		self.update_ui_node()
		if self.ui_node is not None:
			self.is_in_the_game = True
		return self.is_in_the_game
	
	def __init_poco(self):
		self.poco = Poco()
	
	def __enter_game(self):
		self.android_object = self.start_game()
	
	def __init_devices(self):
		if self.android_object is not None:
			helper.G.add_device(dev=self.android_object)
	
	#
	
	def update_ui_node(self):
		self.ui_node = str(self.poco.agent.hierarchy.dump())
		"""
		try:
			pass
		except (ConnectionResetError, ConnectionAbortedError):
			logging.warning("update ui node error")
		"""
	
	def get_image(self, name, save_path=""):
		if save_path == "":
			save_path = "%s%s.png" % (self.image_save_path, name)
		else:
			save_path = "%s/%s.png" % (save_path, name)
		logging.debug("save path : %s" % save_path)
		common.get_screen_shot(image_name=name, save_path=save_path)
	
	def start_game(self):
		android_object = common.app_start(self.app_name)
		api.sleep(self.start_game_wait_time)
		connect_count = 0
		while connect_count < 10:
			connect_count += 1
			logging.info("尝试第 %d 次连接" % connect_count)
			try:
				self.__init_poco()
				self.update_ui_node()
				logging.info("连接成功")
				break
			except (ConnectionResetError, ConnectionAbortedError):
				api.sleep(self.start_game_wait_time)
				continue
		
		return android_object
	
	def find_ui_node(self, ui_node_name):
		if re.search(ui_node_name, self.ui_node):
			self.update_ui_node()
			return True
		else:
			self.update_ui_node()
			return False
	
	def click_by_node_name(self, node_name) -> bool:
		node_pos = self.get_pos_by_node(node_name)
		if node_pos != 0:
			self.poco.click(pos=node_pos)
			api.sleep(self.click_wait_time)
			self.update_ui_node()
			return True
		else:
			self.get_image(node_name, self.image_save_path)
			return False
	
	def click_by_pos(self, pos):
		self.poco.click(pos=pos)
		api.sleep(self.click_wait_time)
		self.update_ui_node()
	
	def get_pos_by_node(self, node_name) -> int:
		self.node_pos = 0
		try_count = 0
		while try_count < 5:
			if self.find_ui_node(node_name):
				node_pos = self.poco(node_name).get_position()
				node_size = self.poco(node_name).get_size()
				
				node_pos_x = node_pos[0] + node_size[0] / 2
				node_pos_y = node_pos[1] + node_size[1] / 2
				
				if node_pos_x >= 1:
					node_pos_x = 0.99
				if node_pos_y >= 1:
					node_pos_y = 0.99
				
				self.node_pos = node_pos_x, node_pos_y
				logging.info("已找到名为 %s 节点" % node_name)
				logging.info(f"节点坐标为 : {self.node_pos} ")
				break
			else:
				self.update_ui_node()
				try_count += 1
				logging.warning("尝试第 %d 次寻找" % try_count)
				logging.warning("没有找到名为 %s 节点" % node_name)
				api.sleep(self.click_wait_time)
				continue
		if try_count == 5:
			logging.error("find ui node failed, node name : %s" % node_name)
		else:
			logging.info("node name : %s ; node position : %s" % (node_name, self.node_pos))
		return self.node_pos
	
	def new_account(self) -> bool:
		node_name_fake_sdk = "tab_2"
		node_name_new = "new_btn"
		click_fake_sdk = self.click_by_node_name(node_name=node_name_fake_sdk)
		click_new = self.click_by_node_name(node_name=node_name_new)
		return click_fake_sdk and click_new
	
	def choose_environment(self) -> bool:
		node_name = ""
		if config.okc_environment == config.OkcEnvironment.Test.value:
			node_name = "test_btn"
		elif config.okc_environment == config.OkcEnvironment.Dev.value:
			node_name = "dev_btn"
		elif config.okc_environment == config.OkcEnvironment.OnlineTest.value:
			node_name = "online_test_btn"
		
		return self.click_by_node_name(node_name=node_name)
	
	def uid_login(self, uid):
		
		uid_node_name = "text"
		
		uid_tab_node_name = "tab_1"
		okc_ui_test.click_by_node_name(node_name=uid_tab_node_name)
		
		old_uid = str(self.poco(uid_node_name).get_text())
		
		if not old_uid == str(uid):
			
			uid_input_node_name = "uid_input"
			if self.click_by_node_name(node_name=uid_input_node_name):
				old_uid_size = len(old_uid)
				while old_uid_size > 0:
					api.keyevent("KEYCODE_DEL")
					old_uid_size -= 1
				api.sleep(self.click_wait_time)
				api.text(str(uid))
		
		environment_node_name = ""
		if config.okc_environment == config.OkcEnvironment.Test.value:
			environment_node_name = "test_btn"
		elif config.okc_environment == config.OkcEnvironment.Dev.value:
			environment_node_name = "dev_btn"
		elif config.okc_environment == config.OkcEnvironment.OnlineTest.value:
			environment_node_name = "online_test_btn"
		self.click_by_node_name(node_name=environment_node_name)
		return self.click_by_node_name(node_name=environment_node_name)


okc_ui_test = OkcUiTest()
