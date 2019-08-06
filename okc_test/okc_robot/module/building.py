#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.data import UserData
from okc_robot.protocol import Protocol
from okc_robot.data import game_table
import okc_robot.okc_enum as Enum

import logging


class Building(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.__request = protocol
		
		self.__client_action_base = 4000000000
		self.__client_action_off_set = 0
		
		self.speed_up_item_list = list()
		
		self.__get_speed_up_item()
	
	def __get_speed_up_item(self):
		item_list = game_table.game_item.keys()
		for item in item_list:
			item_object = game_table.get_item(item_id=item)
			if not item_object.category == 1:
				continue
			if item_object.reward == list():
				continue
			if not item_object.reward[0][0] == Enum.GlobalType.SpeedTime:
				continue
			self.speed_up_item_list.append(item_object)
	
	def get_gem_cost(self, cost_time):
		cost_gem = 0
		
		time_list = self.speed_up_item_list
		
		if time_list is None:
			return
		
		item_count = 0
		time_list_length = len(time_list)
		while True:
			if item_count >= time_list_length:
				
				break
			if cost_time < time_list[item_count].reward_num:
				item_count += 1
				continue
			else:
				cost_time -= time_list[item_count].reward_num
				cost_gem += time_list[item_count].item_price
			if cost_time <= 0:
				break
		
		return cost_gem
	
	def __get_client_action_id(self):
		client_sequence = self.__data.svr_login.client_seq
		
		user_id = self.__uid << 32
		action_id = self.__client_action_base + user_id + client_sequence + self.__client_action_off_set
		
		self.__client_action_off_set += 1
		
		logging.debug("action_id : %s " % action_id)
		
		return action_id
	
	def create_build(self, build_type, build_id):
		pass
