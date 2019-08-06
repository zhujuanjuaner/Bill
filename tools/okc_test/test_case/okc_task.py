#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot import Robot
from okc_test.ui import Behavior, Scene

import logging
import config
import time


class RecommendedTask(object):
	def __init__(self):
		self.cur_value = int()
		self.goal_value = int()
		self.task_id = int()
		self.status = bool()
	
	def init(self, task_data):
		try:
			self.cur_value = task_data["cur_value"]
			self.goal_value = task_data["goal_value"]
			self.task_id = task_data["id"]
			self.status = task_data["status"]
		except KeyError:
			logging.error("Recommended Task error".title())
			return


class BuildingTask(object):
	max_id = 1501
	min_id = 400


class ResearchTask(object):
	max_id = 2940
	min_id = 2000


class KillBandit(object):
	max_id = 5090
	min_id = 5061


class TrainTroop(object):
	max_id = 4729
	min_id = 4001


class TaskTest(object):
	
	def __init__(self, sid=1, uid=0, ksid=1):
		self.sid = sid
		self.uid = uid
		self.ksid = ksid
		self.player: Robot = None
		self.default_gem = 100000000
		self.default_resource = 100000000
		self.recommended_task = RecommendedTask()
		self.step_image_save_path = r""
		self.okc: Behavior = None
		self.__init_player()
	
	def __init_player(self):
		if self.uid <= 0:
			self.player = Robot(sid=self.sid, uid=-1, ksid=self.ksid)
		else:
			self.player = Robot(sid=self.sid, uid=self.uid, ksid=self.ksid)
	
	def __init_ui_test(self):
		try:
			# from okc_test.test_ui import okc
			self.okc = Behavior(config.okc_app_name)
			self.okc.init(is_new_account=False, uid=self.player.uid)
		except:
			logging.error("UI test tools init error".title())
			return
	
	def __update_recommended_task(self):
		self.player.protocol.operate_login_get()
		self.recommended_task.init(self.player.data.svr_task.recommended_task)
	
	def __collect_task_reward(self):
		if self.okc.find_ui_node("ViewMain") and self.okc.find_ui_node("task_bar"):
			if self.recommended_task.status:
				self.okc.click("ViewMain", "task_bar", result_view="ViewMain")
			else:
				self.okc.click("ViewMain", "task_bar", result_view="ViewGuide")
			self.__update_recommended_task()
	
	def __guide_task(self):
		while True:
			if self.okc.find_ui_node(ui_node_name="btn_focus"):
				c_st = self.okc.click(now_view="ViewGuide", node_name="btn_focus", result_view="ViewGuide")
				if not c_st:
					if self.okc.find_ui_node(ui_node_name="ViewAllianceJoinPop"):
						if self.okc.click("ViewAllianceJoinPop", "ok_btn", "ViewAllianceRecommend"):
							self.okc.click(self.okc.now_view, "btn_back", "ViewMain")
					elif self.okc.find_ui_node("ViewItemShopList"):
						self.okc.click("btn_back")
					elif self.okc.find_ui_node(ui_node_name="ViewWorldWildMonsterPop"):
						self.okc.click("ViewWorldWildMonsterPop", "close", "ViewMainFitMetro")
					break
				else:
					continue
			elif self.okc.find_ui_node(ui_node_name="operate_button"):
				c_st = self.okc.click(now_view="ViewGuide", node_name="operate_button", result_view="ViewGuide")
				if not c_st:
					break
				else:
					continue
			elif self.okc.find_ui_node(ui_node_name="guide_arrow"):
				self.okc.click("ViewMain", "task_bar", "ViewGuide")
	
	def __kill_bandit(self):
		# 可能会出错...哎
		svr_action_list_old_length = len(self.player.data.svr_action_list.keys())
		self.okc.click(self.okc.now_scene, node_name="task_bar", result_view="ViewGuide")
		self.__guide_task()
		
		self.okc.update_ui_node()
		is_bandit_pop = self.okc.find_ui_node(ui_node_name="ViewWorldWildBanditPop")
		
		if is_bandit_pop:
			self.okc.now_view = "ViewWorldWildBanditPop"
			self.okc.click(self.okc.now_view, node_name="attack_btn", result_view="ViewMarchSelect")
		else:
			logging.error("没有正确打开土匪地形弹窗")
			self.okc.now_view = "ViewMainFitMetro"
			return
		
		is_march_select = self.okc.find_ui_node(ui_node_name="ViewMarchSelect")
		# has_march_btn = self.okc.find_ui_node(ui_node_name="march_btn")
		
		if is_march_select:
			self.okc.click(self.okc.now_view, node_name="march_btn", result_view="ViewMainFitMetro")
		else:
			logging.error("没有正确打开选兵界面")
			return
		
		while True:
			self.player.protocol.operate_login_get()
			if len(self.player.data.svr_action_list.keys()) <= svr_action_list_old_length:
				logging.info("new action length: %s  old action length : %s" % (
					len(self.player.data.svr_action_list.keys()), svr_action_list_old_length))
				break
			else:
				self.player.cmd_map.march_speed()
		
		if self.okc.find_ui_node(ui_node_name="city_btn"):
			self.okc.click(self.okc.now_view, "city_btn", "ViewMain")
		else:
			logging.warning("没有找到city button".title())
		
		self.__update_recommended_task()
	
	def __building(self):
		old_task_status = self.recommended_task.status
		self.okc.click(self.okc.now_scene, node_name="task_bar", result_view="ViewGuide")
		self.__guide_task()
		self.okc.update_ui_node()
		self.__update_recommended_task()
		if old_task_status != self.recommended_task.status:
			return True
		else:
			if self.okc.find_ui_node(ui_node_name="eff_free"):
				self.okc.click("ViewMain", "eff_free", "ViewMain")
				return True
			
			elif self.okc.find_ui_node(ui_node_name="eff_help"):
				self.okc.click("ViewMain", "eff_help", "ViewMain")
				if self.okc.find_ui_node(ui_node_name="eff_ing"):
					self.okc.click("ViewMain", "eff_ing", "ViewItemSpeedUp")
			
			elif self.okc.find_ui_node(ui_node_name="eff_ing"):
				self.okc.click("ViewMain", "eff_ing", "ViewItemSpeedUp")
			
			else:
				return
			
			is_in_item_speed = self.okc.find_ui_node(ui_node_name="ViewItemSpeedUp")
			if is_in_item_speed and self.okc.find_ui_node(ui_node_name="btn_buy"):
				self.okc.click("ViewItemSpeedUp", "btn_buy", "ViewMain")
			else:
				logging.error("没有进入加速界面")
		
		self.__update_recommended_task()
		self.player.protocol.operate_login_get()
		
		if self.recommended_task.status != old_task_status:
			return True
		else:
			logging.error("没有完成建造任务")
			return False
	
	def training(self):
		old_task_status = self.recommended_task.status
		self.okc.click("ViewMain", "task_bar", "Guide")
		self.__guide_task()
		self.okc.update_ui_node()
		is_in_troop_main = self.okc.find_ui_node(ui_node_name="ViewTroopMain")
		if is_in_troop_main and self.okc.find_ui_node(ui_node_name="speed_up_btn"):
			self.okc.click("ViewTroopMain", "speed_up_btn", "ViewItemSpeedUp")
		else:
			logging.error("没有进入练兵界面")
		
		is_in_item_speed = self.okc.find_ui_node(ui_node_name="ViewItemSpeedUp")
		
		if is_in_item_speed and self.okc.find_ui_node(ui_node_name="btn_buy"):
			self.okc.click("ViewItemSpeedUp", "btn_buy", "ViewTroopMain")
		else:
			logging.error("没有进入加速界面")
		
		is_in_troop_main = self.okc.find_ui_node(ui_node_name="ViewTroopMain")
		
		if is_in_troop_main and self.okc.find_ui_node(ui_node_name="btn_back"):
			self.okc.click("ViewTroopMain", "btn_back", "ViewMain")
		else:
			logging.error("没有返回训练界面")
		
		self.__update_recommended_task()
		self.player.protocol.operate_login_get()
		
		if self.recommended_task.status != old_task_status:
			return True
		else:
			logging.error("没有完成训练任务")
			return False
	
	def is_in_guide(self) -> bool:
		# has_btn_focus = self.okc.find_ui_node(ui_node_name="btn_focus")
		# has_operate_button = self.okc.find_ui_node(ui_node_name="operate_button")
		return self.okc.find_ui_node(ui_node_name="ViewGuide")
	
	def task_test_start(self):
		
		self.__init_ui_test()
		if self.okc is None:
			return
		
		uid = self.player.uid
		logging.info("uid:%s" % uid)
		
		# self.okc.login(is_new_account=False, uid=uid)
		self.okc.now_scene = Scene.city
		
		if not self.player.data.svr_task.is_open:
			logging.error("task is not open".title())
			return
		
		self.__update_recommended_task()
		
		if self.recommended_task == "null":
			logging.error("no recommended task".title())
			return
		self.player.protocol.op_self_set_gem(gem=self.default_gem)
		for resource_id in range(0, 5):
			self.player.protocol.op_self_set_resource(rss_id=resource_id, rss_num=self.default_resource)
		self.player.protocol.op_self_set_troop(troop_id=0, troop_num=500000)
		has_alliance = False
		while self.recommended_task != "null":
			
			if self.is_in_guide():
				self.__guide_task()
			if not has_alliance:
				if not self.player.cmd_alliance.alliance_create(name="Bill%s" % self.player.uid):
					has_alliance = True
			
			if self.okc.find_ui_node(ui_node_name="ViewLordLevelUpPop"):
				self.okc.click(now_view="ViewLordLevelUpPop", node_name="ok_btn", result_view="ViewMain")
			
			if self.okc.find_ui_node(ui_node_name="ViewCivicCenterUpgradePop"):
				self.okc.click("ViewCivicCenterUpgradePop", "collect_btn", "ViewMain")
			
			if self.okc.find_ui_node(ui_node_name="ViewVipDailyPop"):
				self.okc.click("ViewVipDailyPop", "ok_btn", "ViewMain")
			
			if self.recommended_task.status:
				logging.info("task had finish".title())
				self.__collect_task_reward()
				continue
			
			if KillBandit.max_id >= self.recommended_task.task_id >= KillBandit.min_id:
				self.__kill_bandit()
			elif BuildingTask.max_id >= self.recommended_task.task_id >= BuildingTask.min_id:
				self.__building()
			elif TrainTroop.max_id >= self.recommended_task.task_id >= TrainTroop.min_id:
				self.training()
			else:
				logging.warning("Not support".title())
				break
