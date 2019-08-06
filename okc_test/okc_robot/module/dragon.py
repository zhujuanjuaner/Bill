#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.data import UserData
from okc_robot.protocol import Protocol
from okc_robot.net import Response
import random
import logging
import time


class Dragon(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.__request = protocol
	
	def dragon_name_change(self, name="") -> Response:
		gem = 40
		item_id = -1
		names = ["Black", "Bill", "Adobe", "Jason", "Karvor", "Oliver", "Moon"]
		if name == "":
			name = names[random.randint(0, len(names) - 1)]
		return self.__request.dragon_name_change(name=name, gem=gem, item_id=item_id)
	
	def upgrade_dragon_skill(self, dragon_skill: str = ""):
		if dragon_skill == "":
			dragon_skill = "0:5,1:15,8:10,2:10,4:15,5:5,6:15,10:15,3:15,7:15,13:15,16:15,9:15,31:25,28:35,25:33"
		return self.__request.dragon_skill_upgrade_new(skill_info=dragon_skill)
	
	def set_execute_time(self, execute_time: int):
		if not self.__data.svr_prison:
			logging.error("都没抓龙设置个毛线...自己反思反思")
			return False
		for dragon_data in self.__data.svr_prison:
			dragon_info = self.__data.get_dragon_info(dragon_data=dragon_data)
			
			if dragon_info.can_kill_time > int(time.time()) and dragon_info.dragon_level >= 30:
				self.__request.op_self_set_dragon_execute_time(dragon_info.uid, execute_time)
			
			else:
				logging.info("can_kill_time:%s,now_time:%s" % (dragon_info.can_kill_time, int(time.time())))
	
	def kill_dragon(self):
		if not self.__data.svr_prison:
			logging.error("都没抓龙，杀个毛线...自己反思反思")
			return False
		for dragon_data in self.__data.svr_prison:
			dragon_info = self.__data.get_dragon_info(dragon_data=dragon_data)
			if dragon_info.can_kill == 0 and dragon_info.dragon_level >= 30:
				self.__request.dragon_kill(target_uid=dragon_info.uid, gem_cost=0, item_cost=-1)
			else:
				logging.error("龙还不能杀或者龙等级没到30级")
	
	def easter_dragon(self):
		if self.__data.svr_player.dragon["status"] == 2:
			return self.__request.dragon_revive()
		else:
			logging.info("龙还没死呢")
			return False
