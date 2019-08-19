#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.data import UserData, ActionInfo
from okc_robot.protocol import Protocol
from okc_robot.data import game_table
import okc_robot.okc_enum as Enum

import logging


class TimeToGem(object):
	
	def __init__(self):
		self.__speed_items_info = self.__get_speed_item()
		self.__speed_items = self.__speed_items_info[0]
		self.__time_gem_dict = self.__speed_items_info[1]
	
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
		self.free_building_pos = []
		self.__request = protocol
		self.get = protocol.request
		
		self.__client_action_base = 4000000000
		self.__client_action_off_set = 0
		
		self.__update_building_pos()
	
	def __building_remove(self, remove_type, position, cost_time, gem):
		"""
		拆除建筑
		command = building_remove
		key0 = type(0: normal, 1: instant, 2: buy_and_use)
		key1 = pos
		key2 = cost time
		key3 = (type=1时 是 itemId type=2时是宝石数)
		"""
		remove_result = self.get(command="building_remove", key0=remove_type, key1=position, key2=cost_time, key3=gem)
		
		self.__update_building_pos()
		return remove_result
	
	def __building_upgrade(self, build_type, pos, build_id, target_lv, cost, client_action_id, exp=0, req_help=0):
		"""
		command =building_upgrade
		key0是操作类型 (0: normal, 1: instant(材料足够,消耗材料), 2: buy(材料不足,不消耗材料))
		key1 = pos
		key2 = building type
		key3 = target level
		key4 = gem cost or cost time(key0为0时为cost time, key0为1或2时为gem cost)
		key5 = exp
		key6 = 是否直接req help
		key7 = 基地编号
		command=building_upgrade&key0=0&key1=21&key2=4&key3=3&key4=728&key5=267&key6=1
		d=building_upgrade&key0=1&key1=38&key2=13&key3=1&key4=12&key5=3&key6=1
		:param build_type: key0
		:param pos: key1
		:param build_id:key2
		:param target_lv: key3
		:param cost: key4
		:param exp: key5
		:param req_help: key6
		:param client_action_id: key7
		:return:
		"""
		upgrade_result = self.get(command="building_upgrade", key0=build_type, key1=pos, key2=build_id, key3=target_lv,
								  key4=cost, key5=exp, key6=req_help, key7=client_action_id)
		self.__update_building_pos()
		return upgrade_result
	
	def __update_building_pos(self):
		has_used_pos = self.__data.svr_building.building.keys()
		
		for building_pos, pos_detail in game_table.game_building_pos.items():
			if building_pos in has_used_pos:
				continue
			
			if pos_detail["type"] != 0:
				continue
			
			if not pos_detail["rely"]:
				self.free_building_pos.append(building_pos)
				continue
			
			if pos_detail["rely"][0] == 31:
				if pos_detail["rely"][1] == 0:
					if self.__data.svr_building.castle_lv >= pos_detail["rely"][2]:
						self.free_building_pos.append(building_pos)
					else:
						continue
				else:
					for has_build_pos, build_detail in self.__data.svr_building.building.items():
						if pos_detail["rely"][1] == build_detail[0] and build_detail[1] >= pos_detail["rely"][2]:
							self.free_building_pos.append(building_pos)
							break
		
		logging.debug("building_pos : %s" % self.free_building_pos)
	
	def __get_client_action_id(self):
		client_sequence = self.__data.svr_login.client_seq
		
		user_id = self.__uid << 32
		action_id = self.__client_action_base + user_id + client_sequence + self.__client_action_off_set
		
		self.__client_action_off_set += 1
		
		logging.debug("action_id : %s " % action_id)
		
		return action_id
	
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
	
	def build_create(self, build_id):
		if len(self.free_building_pos) == 0:
			logging.error("no free position")
			return
		
		for pos in self.free_building_pos:
			if build_id in game_table.get_building_pos(pos_id=pos).building_pos_build_id:
				self.free_building_pos.remove(pos)
				client_action_id = self.__get_client_action_id()
				return self.__building_upgrade(build_type=1, pos=pos, build_id=build_id, target_lv=1, cost=6,
											   client_action_id=client_action_id)
	
	def upgrade_build(self, build_id, upgrade_type=1):
		#  build_type, pos, build_id, target_lv, cost, client_action_id
		client_action_id = self.__get_client_action_id()
		for build_pos, build_info in self.__data.svr_building.building.items():
			if build_id != build_info[0]:
				continue
			
			target_lv = build_info[1] + 1
			
			if target_lv > 25:
				return
			
			logging.info("target_lv : %s" % target_lv)
			
			cost_time = game_table.get_building(building_id=build_id).get_upgrade_time(building_level=target_lv)
			
			vip_level = self.__data.svr_player.vip_level
			
			# logging.debug("vip level buff : %s " % game_table.get_vip(vip_level).vip_buff)
			
			for buff_item in game_table.get_vip(vip_level).vip_buff:
				for buff_id, buff_detail in buff_item.items():
					if int(buff_id) == 91:
						cost_time -= buff_detail[1]
						break
				break
			if upgrade_type != 0:
				cost_gem = time_to_gem.time_optimize_gem(cost_time=cost_time)
				logging.info("cost gem : %s" % cost_gem)
			else:
				cost_gem = cost_time
			return self.__building_upgrade(build_type=upgrade_type, pos=build_pos, build_id=build_id,
										   target_lv=target_lv, cost=cost_gem, client_action_id=client_action_id)
	
	def upgrade_cancel(self):
		for action_id, action_detail in self.__data.get_all_actions().items():
			
			action = ActionInfo(action_detail)
			
			logging.debug("action can help num : %s" % action.basic.can_help_num)
			if action.basic.action_type == Enum.ActionType.BuildUpgrade:
				self.__request.action_cancel(action_id=action_id)
			else:
				logging.warning("no action can helped".title())
