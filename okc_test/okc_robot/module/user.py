#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.data import UserData
from okc_robot.protocol import Protocol
from okc_robot.data import game_table
from okc_robot.net import Response
from config import conf_path

import logging
import random


class User(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.__request = protocol
	
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
			return self.__request.player_name_change(item_id=item_id, name=name, gem=gem)
	
	def player_avatar_change(self) -> Response:
		item_id = 216
		if str(item_id) in self.__data.svr_bag.item_list.keys():
			cost_type = 0
			gem_num = 0
		else:
			cost_type = 1
			item_id = -1
			gem_num = game_table.get_item(item_id=item_id).item_price
		avatar_id = random.randint(0, 5)
		return self.__request.player_avatar_change(avatar_id, cost_type, gem_num, item_id)
	
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
	
	def reset_skill(self) -> Response:
		item_id = 350
		if str(item_id) in self.__data.svr_bag.item_list.keys():
			cost_type = 0
		else:
			cost_type = 1
		price = game_table.get_item(item_id=item_id).item_price
		return self.__request.lord_skill_reset(cost_type=cost_type, gem_num=price, item_id=item_id)
	
	def add_all_resource(self, resource_num: int = 1000000) -> Response:
		if resource_num <= 1000000:
			return self.__request.op_self_add_clear_resource(resource_num=resource_num)
		else:
			result = None
			for resource_id in range(0, 5):
				result = self.__request.op_self_set_resource(rss_id=resource_id, rss_num=resource_num)
				if result.is_right_ret_code:
					continue
				else:
					break
			return result
	
	def use_buff_item(self, item_id: int):
		if str(item_id) not in self.__data.svr_bag.item_list.keys():
			logging.error("No this item".title())
			return False
		return self.__request.item_use(item_id=item_id, target_id=-1, action_type=-1, rally_war_id=0, is_attack=0)
	
	def set_all_build_level(self, level: int):
		own_builds = self.__data.svr_building.building
		for build_pos, build_info in own_builds.items():
			build_pos = int(build_pos)
			if build_pos == 2 or build_pos == 33 or build_pos == 3:
				continue
			if build_info[-1] >= level:
				continue
			else:
				if not self.__request.op_self_set_pos_building_lv(build_pos, level).is_right_ret_code:
					break
	
	def mail_send(self, player_name):
		
		mail_type = 0
		
		import util
		import random
		chat_path = util.get_ini_data(conf_path, section="path", section_item="chat_path")
		chat_data = util.read_json_file(file_path=chat_path)
		
		data_key = str(random.randint(0, len(chat_data) - 1))
		content = chat_data[data_key]
		
		return self.__request.mail_send(mail_type=mail_type, target_name=player_name, content=content)
