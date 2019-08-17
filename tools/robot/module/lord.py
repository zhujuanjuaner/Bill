#!/usr/bin/python3
# -*- coding: utf-8 -*-
from robot.svr_data import UserData
from robot.net import Response
from robot.protocol import Protocol
from robot.table_data import game_table

import random
import logging
import time


class Lord(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.__request = protocol
		self.get = protocol.request
	
	def __lord_talent_upgrade(self, talent_id: int):
		return self.get(command="lord_talent_upgrade", key0=talent_id)
	
	def __lord_talent_use(self, talent_id: int):
		return self.get(command="lord_talent_use", key0=talent_id)
	
	def __lord_talent_reset(self, talent_id: int, reset_type: int):
		"""
		:param talent_id:
		:param reset_type: 0:gem 1:item
		:return:
		"""
		if reset_type != 0:
			reset_type = 1
		return self.get(command="lord_talent_reset", key0=talent_id, key1=reset_type)
	
	def __player_name_change(self, name: str, gem: int, item_id: int):
		return self.get(command="player_name_change", key0=name, key1=gem, key2=item_id)
	
	def __player_avatar_change(self, avatar_id: int, cost_type: int, gem_num: int, item_id: int):
		return self.get(command="player_avatar_change", key0=avatar_id, key1=cost_type, key2=gem_num, key3=item_id)
	
	def lord_talent_upgrade(self, talent_id: int):
		
		talent_info = game_table.game_lord_talent[str(talent_id)]
		
		max_level = talent_info["max_level"]
		now_level = self.__data.svr_lord_talent.talent_level[str(talent_id)]
		# has_rely = game_table.game_lord_talent
		if now_level < max_level:
			return self.__lord_talent_upgrade(talent_id)
		else:
			logging.error("talent level is max".title())
	
	def lord_talent_use(self, talent_id: int):
		if int(time.time()) >= self.__data.svr_lord_talent.next_can_use_time[str(talent_id)]:
			return self.__lord_talent_use(talent_id)
		else:
			logging.error("talent has being cd".title())
	
	def lord_talent_reset(self, talent_id, reset_type):
		return self.__lord_talent_reset(talent_id, reset_type)
	
	def player_name_change(self, name="") -> Response:
		if name == "":
			name = str(self.__uid)
		else:
			name = "%s%s" % (self.__uid, name)
		
		item_id = 6
		if str(item_id) in self.__data.svr_bag.item_list.keys():
			gem = 0
		else:
			gem = game_table.get_item(item_id=item_id).item_price
		have_gem = self.__data.svr_login.gem
		if have_gem < gem:
			logging.error("gem is too little. gem num : %s " % have_gem)
			return Response()
		else:
			return self.__player_name_change(item_id=item_id, name=name, gem=gem)
	
	def player_avatar_change(self, avatar_id=0) -> Response:
		item_id = 216
		if str(item_id) in self.__data.svr_bag.item_list.keys():
			cost_type = 0
			gem_num = 0
		else:
			cost_type = 1
			item_id = -1
			gem_num = game_table.get_item(item_id=item_id).item_price
		if avatar_id == 0:
			avatar_id = random.randint(0, 5)
		return self.__player_avatar_change(avatar_id, cost_type, gem_num, item_id)
	
	def add_lord_point(self, item_id=1671) -> Response:
		items = [1670, 1671]
		has_item = False
		for item in items:
			if str(item) in self.__data.svr_bag.item_list.keys():
				item_id = item
				has_item = True
				break
		price = game_table.get_item(item_id=item_id).item_price
		if has_item:
			return self.__request.item_use(item_id, self.__uid, action_type=-1, rally_war_id=0, is_attack=0)
		else:
			return self.__request.item_buy_and_use(item_id, self.__uid, price, action_type=-1, rally_id=0, is_attack=0)
