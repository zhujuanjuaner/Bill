#!/usr/bin/python3
# -*- coding: utf-8 -*-
from poco.drivers.unity3d import UnityPoco
from airtest.core import api, android, helper

import logging
import util
import config
import subprocess
import time
import re


def phone_cmd(command: str) -> bool:
	screen_get = subprocess.Popen(str(command), stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
	stdout, stderr = screen_get.communicate()
	
	return stdout != "" and stderr == ""


def get_screen_shot(image_name: str, save_path: str) -> bool:
	command_get_shot = r"adb shell /system/bin/screencap -p /sdcard/%s" % image_name
	
	is_success_get_shot = phone_cmd(command=command_get_shot)
	
	command_save_shot = r"adb pull /sdcard/%s %s" % (image_name, save_path)
	
	is_success_save_shot = phone_cmd(command=command_save_shot)
	
	return is_success_get_shot and is_success_save_shot


class AppManage(object):
	# TODO 1: skill app 2: background 3: install 4: uninstall
	def __init__(self, app_name: str):
		self.default_save_path = util.get_ini_data(config.conf_path, section="path", section_item="okc_test_image_dir")
		self.default_wait_time = 1.0
		self.app_name = app_name
		self.is_connect_phone = bool()
		self.is_app_in_service = bool()
		self.is_start_app = bool()
		self.poco: UnityPoco = None
		
		self.init_is_connect_phone()
		self.init_poco()
		self.init_is_app_in_service()
	
	def init_is_connect_phone(self):
		try:
			self.poco = UnityPoco()
			self.is_connect_phone = True
		except IndexError:
			logging.error("没有连接手机，检查手机是否正常连接")
			return
	
	def init_poco(self):
		if self.is_connect_phone:
			self.poco = UnityPoco()
		else:
			logging.error("没有连接手机，检查手机是否正常连接")
	
	def init_is_app_in_service(self):
		if self.poco is not None:
			try:
				self.poco.agent.hierarchy.dump()
				self.is_app_in_service = True
				self.is_start_app = True
			except (ConnectionResetError, ConnectionAbortedError):
				logging.error("APP : %s  没有处于运行中" % self.app_name)
		else:
			logging.error("APP : %s  没有处于运行中" % self.app_name)
	
	def on_init(self):
		try:
			self.poco = UnityPoco()
			self.is_connect_phone = True
		except IndexError:
			self.is_connect_phone = False
			logging.error("没有连接手机，检查手机是否正常连接")
			return
		try:
			self.poco.agent.hierarchy.dump()
			self.is_app_in_service = True
		except (ConnectionResetError, ConnectionAbortedError):
			logging.error("APP : %s  没有处于运行中" % self.app_name)
			return
	
	def get_screenshots(self, image_name, save_path=""):
		if save_path == "":
			save_path = "%s%s.png" % (self.default_save_path, image_name)
		else:
			save_path = "%s/%s.png" % (save_path, image_name)
		logging.debug("save path : %s" % save_path)
		get_screen_shot(image_name=image_name, save_path=save_path)
	
	def get_ui_node(self):
		if self.is_start_app:
			synchronous_count = 0
			while synchronous_count < 20:
				try:
					self.init_poco()
					return str(self.poco.agent.hierarchy.dump())
				except (ConnectionResetError, ConnectionAbortedError):
					synchronous_count += 1
					logging.error("APP正在启动中，尝试第 %s 次获取UI节点信息" % synchronous_count)
					time.sleep(self.default_wait_time)
					continue
			logging.error("APP正在启动中，获取UI节点信息失败,总共尝试了 %s 次" % synchronous_count)
			name_t = str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
			self.get_screenshots(image_name="%s_Error" % name_t)
		else:
			logging.error("APP没有启动，需要先启动APP")
	
	def get_poco(self) -> UnityPoco:
		if self.poco is None:
			logging.error("poco object is None")
		return self.poco
	
	def app_start(self) -> bool:
		if self.is_connect_phone and not self.is_app_in_service:
			from airtest.core.error import AdbError
			try:
				helper.G.add_device(dev=android.Android().start_app(package=self.app_name))
				self.is_start_app = True
				return True
			except AdbError:
				logging.error("APP启动失败")
				return False
		else:
			logging.error("没有连接手机或者APP处于运行中")
			return False


class OkcUiTest(object):
	def __init__(self):
		
		self.app_name = config.okc_app_name
		self.okc_app = AppManage(app_name=self.app_name)
		self.target_node_pos = tuple()
		
		self.on_init()
		
		self.poco = self.okc_app.get_poco()
		self.ui_node = self.okc_app.get_ui_node()
	
	def update_ui_node(self):
		return self.okc_app.get_ui_node()
	
	def on_init(self):
		self.okc_app.app_start()
		self.okc_app.on_init()
	
	def find_ui_node(self, ui_node_name):
		if re.search(ui_node_name, self.ui_node):
			self.update_ui_node()
			return True
		else:
			self.update_ui_node()
			return False
	
	def get_pos_by_node(self, node_name) -> tuple:
		self.target_node_pos = tuple()
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
				
				self.target_node_pos = node_pos_x, node_pos_y
				logging.info("已找到名为 %s 节点" % node_name)
				logging.info(f"节点坐标为 : {self.target_node_pos} ")
				break
			else:
				self.update_ui_node()
				try_count += 1
				logging.warning("尝试第 %d 次寻找" % try_count)
				logging.warning("没有找到名为 %s 节点" % node_name)
				api.sleep(self.okc_app.default_wait_time)
				continue
		if try_count == 5:
			logging.error("find ui node failed, node name : %s" % node_name)
		else:
			logging.info("node name : %s ; node position : %s" % (node_name, self.target_node_pos))
		return self.target_node_pos
	
	def click_by_node_name(self, node_name) -> bool:
		node_pos = self.get_pos_by_node(node_name)
		if node_pos != 0:
			self.poco.click(pos=node_pos)
			api.sleep(self.okc_app.default_wait_time)
			self.update_ui_node()
			return True
		else:
			self.okc_app.get_screenshots(node_name, self.okc_app.default_save_path)
			return False
	
	def login(self, is_new_account=False, uid=10340):
		
		if config.okc_environment == config.OkcEnvironment.Dev.value:
			environment_node_name = "dev_btn"
		elif config.okc_environment == config.OkcEnvironment.OnlineTest.value:
			environment_node_name = "online_test_btn"
		else:
			environment_node_name = "test_btn"
		
		if is_new_account:
			node_name_fake_sdk = "tab_2"
			node_name_new = "new_btn"
			self.click_by_node_name(node_name=node_name_fake_sdk)
			self.click_by_node_name(node_name=node_name_new)
		else:
			uid_node_name = "text"
			
			uid_tab_node_name = "tab_1"
			self.click_by_node_name(node_name=uid_tab_node_name)
			
			old_uid = str(self.poco(uid_node_name).get_text())
			
			if not old_uid == str(uid):
				uid_input_node_name = "uid_input"
				if self.click_by_node_name(node_name=uid_input_node_name):
					old_uid_size = len(old_uid)
					while old_uid_size > 0:
						api.keyevent("KEYCODE_DEL")
						old_uid_size -= 1
					api.sleep(self.okc_app.default_wait_time)
					api.text(str(uid))
		
		return self.click_by_node_name(node_name=environment_node_name)


okc_ui_test = OkcUiTest()
