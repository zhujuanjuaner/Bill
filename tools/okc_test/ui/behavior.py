#!/usr/bin/python3
# -*- coding: utf-8 -*-
import subprocess
import logging
import util
import os
import config
import time

from airtest.core import api, android, helper
from poco.drivers.unity3d import UnityPoco
from poco.exceptions import PocoNoSuchNodeException


class Scene(object):
	city = "SceneMainCity"
	world = "SceneKingdomMap"
	dragon = "SceneDragon"


class ClickParams(object):
	def __init__(self, parent_view, click_node, status=None, node_data=config.behavior_data):
		self.is_right_params = False
		self.__node_data = node_data
		self.__status = status
		self.parent_view = parent_view
		self.click_node = click_node
		
		self.has_status = None
		self.is_close_parent = None
		self.event_result = None
		
		self.__init_data()
	
	def __init_data(self):
		if self.parent_view not in self.__node_data.keys():
			logging.error("parent_view not in node data")
			return
		
		if self.click_node not in self.__node_data[self.parent_view].keys():
			logging.error("%s not in %s" % (self.click_node, self.parent_view))
			return
		
		node_data = self.__node_data[self.parent_view][self.click_node]
		
		self.has_status = node_data["has_status"]
		if self.has_status == 0:
			self.is_close_parent = node_data["is_close_parent"]
			if self.is_close_parent == 0 and node_data["event"] == "":
				self.event_result = self.click_node
			else:
				self.event_result = node_data["event"]
		
		else:
			if self.__status is None:
				logging.error("此节点有状态，需要传递状态名")
				return
			status_data = node_data["status"]
			if self.__status not in status_data.keys():
				logging.error("节点状态名称传递错误,传递的节点状态名称 : %s " % self.__status)
				return
			
			self.is_close_parent = status_data[self.__status]["is_close_parent"]
			logging.info("status data : %s" % status_data)
			if self.is_close_parent == 0 and status_data[self.__status]["event"] == "":
				self.event_result = self.click_node
			else:
				self.event_result = status_data[self.__status]["event"]
		self.is_right_params = True


class AppManager(object):
	def __init__(self, phone_id="79URX19118020173"):
		self.phone_id = phone_id
	
	@staticmethod
	def phone_cmd(command: str):
		return subprocess.Popen(str(command), stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
	
	@staticmethod
	def app_start(app_name: str):
		try:
			app_manage = android.Android()
			app_manage.start_app(package=app_name)
			return app_manage
		except IndexError:
			logging.error("没有连接手机")
			return False
	
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
		self.ViewRootScene = None
		self.ViewRootMain = None
		self.ViewRootInner = None
		self.ViewRootNormal = None
		self.ViewRootEffect1 = None
		self.ViewRootEffect2 = None
		self.ViewRootMiddle = None
		self.ViewRootHigh = None
		self.ViewRootTop = None
	
	def update_node_data(self, node_data: list):
		self.node_data = node_data
		try:
			self.ViewRootScene = node_data[0]
			self.ViewRootMain = node_data[1]
			self.ViewRootInner = node_data[2]
			self.ViewRootNormal = node_data[3]
			self.ViewRootEffect1 = node_data[4]
			self.ViewRootEffect2 = node_data[5]
			self.ViewRootMiddle = node_data[6]
			self.ViewRootHigh = node_data[7]
			self.ViewRootTop = node_data[8]
		except KeyError:
			logging.warning("不要在意，数据还没有做到最简")
	
	def find_node(self, target_key, target_data=None):
		if self.node_data is None:
			logging.error("node data is None")
			return False
		if target_data is None:
			target_data = self.node_data
		return util.find_key_data(data=target_data, target_key=target_key)


class PocoData(object):
	def __init__(self):
		self.is_found = False
		self.ui_data = None
		self.ui_name = ""
		self.ui_type = ""
		self.ui_visible = False
		self.ui_visible = [0, 0]
		self.ui_size = [1, 1]
		self.ui_scale = [1, 1]
		self.ui_anchor_point = [0, 0]
		self.ui_z_orders = {"global": 0.0,
							"local": 0.0}
		self.ui_click_able = True
		self.ui_components = ["Transform", "DisplayObjectInfo"]
		
		self.ui_ilayer = 0
		self.ui_layer = "UI"
		self.ui_instance_id = 0
	
	def init(self, ui_data, parent_data):
		self.ui_data = parent_data
		self.is_found = True
		self.ui_name = ui_data["name"]
		self.ui_type = ui_data["type"]
		self.ui_visible = ui_data["visible"]
		self.ui_visible = ui_data["pos"]
		self.ui_size = ui_data["size"]
		self.ui_scale = ui_data["scale"]
		self.ui_anchor_point = ui_data["anchorPoint"]
		self.ui_z_orders = ui_data["zOrders"]
		self.ui_click_able = ui_data["clickable"]
		self.ui_components = ui_data["components"]
		self.ui_ilayer = ui_data["_ilayer"]
		self.ui_layer = ui_data["layer"]
		self.ui_instance_id = ui_data["_instanceId"]


class Behavior(object):
	def __init__(self, app_name: str, is_release=False, app_nick_name="okc"):
		self.__app_name = app_name
		self.__app_nick_name = app_nick_name
		self.is_release = is_release
		
		self.click_wait_time = 0.1
		self.default_wait_time = 1.0
		
		self.click_count = 0
		self.image_path = ""
		self.init_image_path()
		
		self.now_scene = ""
		self.now_view = ""
		
		# 用于存储UI节点位置，结构 {"view":{node:pos,...}},位置不固定的节点不能存储
		self.node_pos_data = dict()
		# UI节点存储路径
		self.__node_pos_path = "%s/resource/okc_test/ui_%s.json" % (os.getcwd(), self.__app_nick_name)
		
		self.__init_json_data()
		
		self.node_data = UiNodeData()
		
		self.app = AppManager()
		
		self.android_object = None
		self.poco: UnityPoco = None
		
		self.target_data = PocoData()
	
	def __init_json_data(self):
		if not os.path.exists(self.__node_pos_path):
			util.write_json_file(file_path=self.__node_pos_path, data={})
			logging.info("创建文件 - %s" % self.__node_pos_path)
		else:
			self.node_pos_data = util.read_json_file(file_path=self.__node_pos_path)
	
	def init(self, is_new_account=False, uid=10340):
		try:
			self.__init_poco()
			self.update_ui_node()
		except (ConnectionResetError, ConnectionAbortedError):
			self.start_game(is_new_account=is_new_account, uid=uid)
	
	def init_image_path(self):
		t = str(time.strftime("%Y_%m_%d_%H_%M", time.localtime()))
		self.image_path = "G:/TestData/okc_test/task/task_%s/" % t
	
	def init_click_count(self, count):
		self.click_count = count
	
	def __init_poco(self):
		self.poco = UnityPoco()
	
	def __init_devices(self):
		if self.android_object is not None:
			helper.G.add_device(dev=self.android_object)
	
	def search_poco_data(self, data, target_node_name) -> PocoData:
		if isinstance(data, dict):
			# logging.info("dict data :%s" % data["name"])
			if data["name"] == target_node_name:
				self.target_data.init(ui_data=data["payload"], parent_data=data)
			else:
				if "children" in data.keys():
					self.search_poco_data(data=data["children"], target_node_name=target_node_name)
		
		elif isinstance(data, list):
			for child in data:
				# logging.info("list data : %s" % child["name"])
				if isinstance(child, dict):
					self.search_poco_data(data=child, target_node_name=target_node_name)
					if self.target_data.is_found:
						break
					else:
						continue
				else:
					continue
		
		return self.target_data
	
	def update_ui_node(self):
		all_data = self.poco.agent.hierarchy.dump()
		# ui_data = all_data["children"][11]["children"][0]["children"]
		self.node_data.update_node_data(node_data=all_data)
	
	def find_ui_node(self, ui_node_name, target_data=None):
		find_result = self.node_data.find_node(target_key=ui_node_name, target_data=target_data)
		self.update_ui_node()
		return find_result
	
	def get_ui_pos(self, node_name, focus="center"):
		try:
			return self.poco(node_name).get_position(focus=focus)
		except PocoNoSuchNodeException:
			logging.info("没找到 %s 节点" % node_name)
			return tuple()
	
	def get_screenshots(self, image_name, save_path=""):
		if save_path == "":
			return
		# save_path = "%s%s.png" % (self.image_path, image_name)
		else:
			save_path = "%s/%s.png" % (save_path, image_name)
		logging.debug("save path : %s" % save_path)
		self.app.get_screen_shot(image_name=image_name, save_path=save_path)
	
	def click_new(self, click_params: ClickParams, focus="center"):
		
		if not click_params.is_right_params:
			logging.error("params error")
			return False
		
		if not self.find_ui_node(click_params.parent_view):
			logging.error("当前不在%s页面" % click_params.parent_view)
			return False
		# TODO click able
		try:
			self.poco(click_params.click_node).click(focus=focus)
			self.update_ui_node()
		except (ConnectionResetError, ConnectionAbortedError, OSError):
			logging.error("手机连接状态有问题")
			return False
		
		if not click_params.is_close_parent and click_params.event_result == click_params.click_node:
			if self.find_ui_node(click_params.event_result):
				return False
			self.now_view = click_params.parent_view
		else:
			if not self.find_ui_node(click_params.event_result):
				return False
			self.now_view = click_params.event_result
		
		if click_params.click_node == "world_btn":
			self.now_scene = Scene.world
		elif click_params.click_node == "city_btn":
			self.now_scene = Scene.city
		
		self.click_count += 1
		logging.info("当前第%s次点击" % self.click_count)
		time.sleep(self.click_wait_time)
		return True
	
	def click(self, now_view, node_name, result_view, focus="center", can_change=False):
		if not self.find_ui_node(ui_node_name=now_view):
			logging.error("当前不在%s页面" % now_view)
			return False
		if not self.find_ui_node(ui_node_name=node_name):
			logging.error("在%s里面没有找到%s" % (now_view, node_name))
			return False
		try:
			self.poco(node_name).click(focus=focus)
			self.update_ui_node()
		except (ConnectionResetError, ConnectionAbortedError, OSError):
			logging.error("手机连接状态有问题")
			return False
		
		if not self.find_ui_node(ui_node_name=result_view):
			logging.error("在%s界面点击%s后,没有打开%s" % (now_view, node_name, result_view))
			return False
		if node_name == "world_btn":
			self.now_scene = Scene.world
		elif node_name == "city_btn":
			self.now_scene = Scene.city
		self.now_view = result_view
		# if not can_change:
		# 	node_pos = self.get_ui_pos(node_name)
		# 	if now_view in self.node_pos_data.keys():
		# 		if node_name not in self.node_pos_data[now_view].keys():
		# 			self.node_pos_data[now_view][node_name] = list(node_pos)
		# 	else:
		# 		self.node_pos_data[now_view] = {node_name: list(node_pos)}
		# 	util.write_json_file(file_path=self.__node_pos_path, data=self.node_pos_data)
		self.click_count += 1
		logging.info("当前第%s次点击" % self.click_count)
		# self.get_screenshots(image_name="step_%s" % self.click_count, save_path=self.image_path)
		time.sleep(self.click_wait_time)
		return True
	
	def login(self, is_new_account, uid):
		view_env_select = "ViewEnvironmentSelect"
		view_loading = "ViewLoading"
		if config.okc_environment == config.OkcEnvironment.Dev.value:
			environment_node_name = "dev_btn"
		elif config.okc_environment == config.OkcEnvironment.OnlineTest.value:
			environment_node_name = "online_test_btn"
		else:
			environment_node_name = "test_btn"
		
		if is_new_account:
			node_name_fake_sdk = "tab_2"
			node_name_new = "new_btn"
			if not self.click(now_view=view_env_select, node_name=node_name_fake_sdk, result_view=view_env_select):
				return
			if not self.click(now_view=view_env_select, node_name=node_name_new, result_view=view_env_select):
				return
		else:
			uid_node_name = "text"
			uid_tab_node_name = "tab_1"
			if not self.click(now_view=view_env_select, node_name=uid_tab_node_name, result_view=view_env_select):
				return
			
			old_uid = str(self.poco(uid_node_name).get_text())
			
			if not old_uid == str(uid):
				uid_input_node_name = "uid_input"
				if self.click(now_view=view_env_select, node_name=uid_input_node_name, result_view=view_env_select):
					old_uid_size = len(old_uid)
					while old_uid_size > 0:
						api.keyevent("KEYCODE_DEL")
						old_uid_size -= 1
					api.sleep(self.default_wait_time)
					api.text(str(uid))
				self.click(now_view=view_env_select, node_name=environment_node_name, result_view=view_env_select)
		
		if self.click(now_view=view_env_select, node_name=environment_node_name, result_view=view_loading):
			loading_time = 0
			loading_start_time = time.time()
			while True:
				if loading_time >= 120:
					logging.error("loading 时间超过两分钟，异常....")
					# self.get_screenshots(image_name="Loading_Error_%s" % int(loading_start_time))
					break
				if self.find_ui_node(ui_node_name=view_loading):
					logging.info("还在loading中...")
					time.sleep(self.default_wait_time)
					loading_time = time.time() - loading_start_time
					self.update_ui_node()
				else:
					logging.info("loading 完毕")
					logging.info("此次loading耗时小于 %s 秒" % loading_time)
					self.now_view = "ViewMain"
					break
		else:
			logging.error("环境选择按钮点击失败....")
	
	def start_game(self, is_new_account=False, uid=10340):
		self.android_object = self.app.app_start(self.__app_name)
		try_count = 0
		while try_count < 10:
			try_count += 1
			api.sleep(self.default_wait_time)
			logging.error("第 %s 次尝试更新UI节点信息失败" % try_count)
			try:
				self.__init_poco()
				self.update_ui_node()
				if self.is_release:
					if self.find_ui_node(ui_node_name="ViewLoading"):
						logging.info("更新UI节点信息成功")
						self.__init_poco()
						self.__init_devices()
						break
					else:
						continue
				else:
					if self.find_ui_node(ui_node_name="ViewEnvironmentSelect"):
						logging.info("更新UI节点信息成功")
						self.__init_poco()
						self.__init_devices()
						break
					else:
						continue
			except (ConnectionResetError, ConnectionAbortedError):
				continue
		if try_count < 10:
			self.login(is_new_account=is_new_account, uid=uid)
		else:
			logging.error("更新%s次UI节点信息失败,停止更新" % try_count)
