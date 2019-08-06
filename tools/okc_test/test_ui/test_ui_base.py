#!/usr/bin/python3
# -*- coding: utf-8 -*-
from poco.drivers.unity3d import UnityPoco
from airtest.core import api, android, helper

import logging

from poco.exceptions import PocoNoSuchNodeException

import util
import config
import subprocess
import time


class PhoneManager(object):
	def __init__(self, phone_id="79URX19118020173"):
		self.phone_id = phone_id
	
	def connect_phone(self):
		api.connect_device("Android:///%s" % self.phone_id)
	
	@staticmethod
	def phone_cmd(command: str):
		return subprocess.Popen(str(command), stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
	
	@staticmethod
	def app_start(app_name: str):
		app_manage = android.Android()
		app_manage.start_app(package=app_name)
		return app_manage
	
	@staticmethod
	def check_connect() -> bool:
		connect = subprocess.Popen("adb devices", stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
		
		stdout, stderr = connect.communicate()
		
		stdout = stdout.decode("utf-8")
		stderr = stderr.decode("utf-8")
		
		return stdout != "" and stderr == ""
	
	def kill_app(self, app_name):
		return self.phone_cmd(command="adb shell pm clear %s" % app_name)
	
	def get_screen_shot(self, image_name: str, save_path: str):
		command_get_shot = r"adb shell /system/bin/screencap -p /sdcard/%s" % image_name
		
		is_success_get_shot = self.phone_cmd(command=command_get_shot)
		
		command_save_shot = r"adb pull /sdcard/%s %s" % (image_name, save_path)
		
		is_success_save_shot = self.phone_cmd(command=command_save_shot)
		
		return is_success_get_shot, is_success_save_shot


class UiNodeData(object):
	def __init__(self):
		self.node_data = None
	
	def update_node_data(self, node_data):
		self.node_data = node_data
	
	def find_node(self, target_key):
		if self.node_data is None:
			logging.error("node data is None")
			return False
		else:
			return util.find_key_data(data=self.node_data, target_key=target_key)


class OkcUiTest(object):
	def __init__(self):
		self.app_name = config.okc_app_name
		
		self.default_wait_time = 1.0
		self.default_save_path = "G:/TestData/okc_test/new_teach/"
		self.ui_pos_path = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="ui_pos")
		# util.get_ini_data(config.conf_path, section="path", section_item="okc_test_image_dir")
		
		self.phone = PhoneManager()
		self.ui_node = UiNodeData()
		
		self.android_object = None
		self.poco: UnityPoco = None
		
		self.click_wait_time = 0.3
		self.target_node_pos = tuple()
		
		self.ui_pos = util.read_json_file(file_path=self.ui_pos_path)
		self.start_game()
	
	def __init_poco(self):
		self.poco = UnityPoco()
	
	def __init_devices(self):
		if self.android_object is not None:
			helper.G.add_device(dev=self.android_object)
	
	def update_ui_node(self):
		self.ui_node.update_node_data(node_data=self.poco.agent.hierarchy.dump())
	
	def start_game(self):
		android_object = self.phone.app_start(self.app_name)
		try_count = 0
		while try_count < 10:
			try_count += 1
			logging.error("第 %s 次尝试更新UI节点信息失败" % try_count)
			try:
				self.__init_poco()
				self.update_ui_node()
				logging.info("更新UI节点信息成功")
				break
			except (ConnectionResetError, ConnectionAbortedError):
				time.sleep(self.default_wait_time)
				continue
		
		return android_object
	
	def find_ui_node(self, ui_node_name):
		find_result = self.ui_node.find_node(target_key=ui_node_name)
		self.update_ui_node()
		return find_result
	
	def get_pos(self, node_name):
		try:
			node_pos = self.poco(node_name).get_position()
			node_size = self.poco(node_name).get_size()
			
			node_pos_x = node_pos[0] + node_size[0] / 2
			node_pos_y = node_pos[1] + node_size[1] / 2
			
			if node_pos_x >= 1:
				node_pos_x = 0.99
			if node_pos_x <= 0:
				node_pos_x = 0.01
			if node_pos_y >= 1:
				node_pos_y = 0.99
			if node_pos_y <= 0:
				node_pos_y = 0.01
			
			self.target_node_pos = node_pos_x, node_pos_y
			logging.info("已找到 %s 节点" % node_name)
		except PocoNoSuchNodeException:
			logging.info("没找到 %s 节点" % node_name)
		
		return self.target_node_pos
	
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
				if node_pos_x <= 0:
					node_pos_x = 0.01
				if node_pos_y >= 1:
					node_pos_y = 0.99
				if node_pos_y <= 0:
					node_pos_y = 0.01
				
				self.target_node_pos = node_pos_x, node_pos_y
				logging.info("已找到名为 %s 节点" % node_name)
				logging.info(f"节点坐标为 : {self.target_node_pos} ")
				break
			else:
				self.update_ui_node()
				try_count += 1
				logging.warning("尝试第 %d 次寻找" % try_count)
				logging.warning("没有找到名为 %s 节点" % node_name)
				api.sleep(self.default_wait_time)
				continue
		if try_count == 5:
			logging.error("find ui node failed, node name : %s" % node_name)
		else:
			logging.info("node name : %s ; node position : %s" % (node_name, self.target_node_pos))
		return self.target_node_pos
	
	def click_by_node_name(self, view, node_name, can_change=False, result_view="") -> bool:
		if can_change:
			node_pos = self.get_pos(node_name)
		elif view in self.ui_pos.keys():
			if node_name in self.ui_pos[view].keys():
				node_pos = tuple(self.ui_pos[view][node_name])
			else:
				node_pos = self.get_pos(node_name)
				self.ui_pos[view][node_name] = list(node_pos)
				util.write_json_file(file_path=self.ui_pos_path, data=self.ui_pos)
		else:
			node_pos = self.get_pos(node_name)
			self.ui_pos[view] = {node_name: list(node_pos)}
			util.write_json_file(file_path=self.ui_pos_path, data=self.ui_pos)
		
		logging.info("%s 的坐标为 : %s" % (node_name, node_pos))
		
		if node_pos != ():
			self.poco.click(pos=node_pos)
			api.sleep(self.click_wait_time)
			self.update_ui_node()
			if result_view == "":
				return True
			if self.find_ui_node(ui_node_name=result_view):
				return True
			else:
				logging.error("点击%s后，没有打开%s" % (node_name, result_view))
				return False
		else:
			self.phone.get_screen_shot(node_name, self.default_save_path)
			logging.error("点击失败，没找到UI坐标")
			return False
	
	def get_screenshots(self, image_name, save_path=""):
		if save_path == "":
			save_path = "%s%s.png" % (self.default_save_path, image_name)
		else:
			save_path = "%s/%s.png" % (save_path, image_name)
		logging.debug("save path : %s" % save_path)
		self.phone.get_screen_shot(image_name=image_name, save_path=save_path)
	
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
			self.click_by_node_name(view="ViewEnvironmentSelect", node_name=node_name_fake_sdk)
			self.click_by_node_name(view="ViewEnvironmentSelect", node_name=node_name_new)
		else:
			uid_node_name = "text"
			
			uid_tab_node_name = "tab_1"
			self.click_by_node_name(view="ViewEnvironmentSelect", node_name=uid_tab_node_name)
			
			old_uid = str(self.poco(uid_node_name).get_text())
			
			if not old_uid == str(uid):
				uid_input_node_name = "uid_input"
				if self.click_by_node_name(view="ViewEnvironmentSelect", node_name=uid_input_node_name):
					old_uid_size = len(old_uid)
					while old_uid_size > 0:
						api.keyevent("KEYCODE_DEL")
						old_uid_size -= 1
					api.sleep(self.default_wait_time)
					api.text(str(uid))
				self.click_by_node_name(view="ViewEnvironmentSelect", node_name=environment_node_name)
		
		if self.click_by_node_name(view="ViewEnvironmentSelect", node_name=environment_node_name):
			loading_time = 0
			loading_start_time = time.time()
			while True:
				if loading_time >= 120:
					logging.error("loading 时间超过两分钟，异常....")
					self.get_screenshots(image_name="Loading_Error_%s" % int(loading_start_time))
					break
				if self.find_ui_node(ui_node_name="ViewLoading"):
					logging.info("还在loading中...")
					time.sleep(self.default_wait_time)
					loading_time = time.time() - loading_start_time
					self.update_ui_node()
				else:
					logging.info("loading 完毕")
					logging.info("此次loading耗时小于 %s 秒" % loading_time)
					break
		else:
			logging.error("环境选择按钮点击失败....")


okc_ui_test = OkcUiTest()

"""


class AppManager(object):
	
	def __init__(self, app_name: str):
		self.default_save_path = util.get_ini_data(config.conf_path, section="path", section_item="okc_test_image_dir")
		self.default_wait_time = 1.0
		self.app_name = app_name
		
		self.phone = PhoneManager()
		
		self.ui_node_data = UiNodeData()
		
		self.is_connect_phone = bool()
		self.is_start_app = bool()
		self.app_poco: UnityPoco = self.update_poco()
	
	def update_poco(self):
		try:
			app_poco = UnityPoco()
			self.is_connect_phone = True
			return app_poco
		except IndexError:
			logging.error("没有连接手机，检查手机是否正常连接")
			return
	
	def app_is_in_service(self):
		return self.ui_node_data is not None
	
	def update_ui_node_data(self):
		if self.app_poco is None:
			logging.error("没有连接手机，检查手机是否正常连接")
		else:
			self.ui_node_data.update_node_data(node_data=self.app_poco.agent.hierarchy.dump())
	
	def get_screenshots(self, image_name, save_path=""):
		if save_path == "":
			save_path = "%s%s.png" % (self.default_save_path, image_name)
		else:
			save_path = "%s/%s.png" % (save_path, image_name)
		logging.debug("save path : %s" % save_path)
		self.phone.get_screen_shot(image_name=image_name, save_path=save_path)
	
	def app_start(self) -> bool:
		if self.is_connect_phone:
			from airtest.core.error import AdbError
			try:
				helper.G.add_device(dev=android.Android().start_app(package=self.app_name))
				try_count = 0
				while try_count < 10:
					try_count += 1
					logging.error("第 %s 次尝试更新UI节点信息失败" % try_count)
					try:
						
						self.app_poco = self.update_poco()
						self.ui_node_data.update_node_data(node_data=self.app_poco.agent.hierarchy.dump())
						logging.info("更新UI节点信息成功")
						break
					except (ConnectionResetError, ConnectionAbortedError):
						time.sleep(self.default_wait_time)
						continue
				self.is_start_app = True
				return True
			except AdbError:
				logging.error("APP启动失败")
				return False
		else:
			return False

"""
