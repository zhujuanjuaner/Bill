#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.data import UserData
from okc_robot.protocol import Protocol
from okc_robot.data import game_table
import okc_robot.okc_enum as Enum

import logging


class TimeToGem(object):
	
	def __init__(self):
		self.__speed_items_info = self.__get_speed_item()
		self.__speed_items = self.__speed_items_info[0]
		self.__time_gem_dict = self.__speed_items_info[1]
		
		# print("speed_items : %s" % self.__speed_items)
		# print("time_gem_dict : %s" % self.__time_gem_dict)
	
	@staticmethod
	def __get_speed_item():
		time_gem_dict = {}
		
		for item in game_table.game_item.keys():
			item_object = game_table.get_item(item_id=item)
			if item_object.category == 1 and item_object.is_show:
				time_gem_dict[item_object.reward_num] = item_object.item_price
		speed_items = list(time_gem_dict.keys())
		speed_items.sort(reverse=True)
		
		return speed_items, time_gem_dict
	
	def time_optimize_gem(self, cost_time: int, idx=0):
		total_gem = 0
		if cost_time > 0 and 0 <= idx < len(self.__speed_items):
			while cost_time >= self.__speed_items[idx]:
				cost_time -= self.__speed_items[idx]
				total_gem += self.__time_gem_dict[self.__speed_items[idx]]
			
			if cost_time > 0:
				
				if idx < len(self.__speed_items):
					total_gem += min(self.time_optimize_gem(cost_time, idx + 1),
									 self.__time_gem_dict[self.__speed_items[idx]])
				else:
					total_gem += self.__time_gem_dict[self.__speed_items[idx]]
		
		return total_gem


time_to_gem = TimeToGem()


class Building(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.building_pos = [x for x in range(1, 8)] + [x for x in range(9, 33)] + [x for x in range(101, 122)]
		self.__request = protocol
		
		self.__client_action_base = 4000000000
		self.__client_action_off_set = 0
	
	def remove_all_build(self, position=0):
		item_id = 9
		gem = game_table.get_item(item_id).item_price
		
		remove_type = 2
		
		for pos, build_info in self.__data.svr_building.building.items():
			build_id = int(build_info[0])
			build_level = build_info[1]
			if game_table.get_building(build_id=build_id, level=build_level).can_remove:
				if position == 0:
					self.__request.building_remove(remove_type=remove_type, position=pos, cost_time=0, gem=gem)
				else:
					self.__request.building_remove(remove_type=remove_type, position=position, cost_time=0, gem=gem)
	
	def __get_client_action_id(self):
		client_sequence = self.__data.svr_login.client_seq
		
		user_id = self.__uid << 32
		action_id = self.__client_action_base + user_id + client_sequence + self.__client_action_off_set
		
		self.__client_action_off_set += 1
		
		logging.debug("action_id : %s " % action_id)
		
		return action_id
	
	def upgrade_build(self, build_id, upgrade_type=1):
		#  build_type, pos, build_id, target_lv, cost, client_action_id
		is_building = False
		
		# build_position = self.building_pos[: ]
		
		for build_pos, build_info in self.__data.svr_building.building.items():
			# build_position.remove(int(build_pos))
			if build_id != build_info[0]:
				continue
			
			is_building = True
			if build_info[1] > self.__data.svr_building.castle_lv:
				continue
			
			target_lv = build_info[1] + 1
			
			cost_time = game_table.get_building(building_id=build_id).get_upgrade_time(building_level=target_lv)
			
			vip_level = self.__data.svr_player.vip_level
			
			cost_time -= game_table.get_vip(vip_level).vip_buff[vip_level]["91"][1]
			
			cost_gem = time_to_gem.time_optimize_gem(cost_time=cost_time)
			client_action_id = self.__get_client_action_id()
			
			self.__request.building_upgrade(build_type=upgrade_type, pos=build_pos, build_id=build_id,
											target_lv=target_lv, cost=cost_gem, client_action_id=client_action_id)
		
		if is_building:
			return
