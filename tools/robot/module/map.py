#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.data.user_data import UserData, ActionInfo
from okc_robot.svr_map import SvrMap
from okc_robot.net import Response
from okc_robot.protocol import Protocol
from okc_robot.data import game_table, wild_table
from config import conf_path

import okc_robot.okc_enum as Enum

import util
import os
import json
import math
import config

import logging


class Position(object):
	def __init__(self, position: int):
		self.x = int(position / 10000)
		self.y = int(position % 10000)
		self.position = position
	
	def get_position(self):
		self.position = self.x * 10000 + self.y
		return self.position


class MarchBuff(object):
	def __init__(self):
		self.march_size = 0
		self.march_speed = 0
		self.march_load = 0


class MarchParam(object):
	def __init__(self):
		self.march_type = Enum.MarchType.Null
		
		self.has_dragon = False
		self.cost_time = 30
		
		self.resource_list = []
		self.tax_list = []
		
		self.troop_dict = {}
		self.troop_str = ""
		
		self.hero_list = []
		self.hero_str = ""
		
		self.target_pos = 0
		
		self.is_max_attack = False
		
		self.prepare_time = 300
		
		self.rally_action_id = -1
		
		self.is_attack = 0
		
		self.notify_al = True
		
		self.load_value = 0
		self.load_num = 0
		self.load_rate = 0
		
		self.troop_limit = 0
		
		self.svr_id = 0
		
		self.is_king = False
		
		self.march_buff = MarchBuff()


class MarchSelect(object):
	def __init__(self, data: UserData):
		self.march_param = MarchParam()
		self.__data = data
		self.__troop_list = [0 * idx for idx in range(0, len(game_table.game_troop))]
	
	def choose_dragon(self, with_dragon=False):
		if with_dragon:
			self.march_param.has_dragon = self.__data.check_has_dragon()
		else:
			self.march_param.has_dragon = with_dragon
	
	def choose_hero(self, p_hero_list=None, with_hero=False):
		if with_hero:
			if self.march_param.has_dragon:
				hero_slot = self.__data.get_base_buff_with_dragon_by_id(Enum.BuffId.MarchHeroAssignNum)
			else:
				hero_slot = self.__data.get_base_buff_by_id(Enum.BuffId.MarchHeroAssignNum)
			
			hero_march_size = 0
			hero_list = []
			hero_str = ""
			own_hero_list = []
			if p_hero_list is None:
				own_hero_list = self.__data.get_hero_list()
			else:
				for p_hero in p_hero_list:
					if p_hero in self.__data.get_hero_list():
						own_hero_list.append(p_hero)
			
			for hero in own_hero_list:
				if hero_slot <= len(hero_list):
					break
				hero_info = self.__data.get_hero_info_by_id(hero)
				if hero_info.status == 0:
					hero_list.append(hero)
					hero_march_size += hero_info.march_size
			
			for hero in hero_list:
				if hero != hero_list[-1]:
					hero_str += "%s:" % hero
				else:
					hero_str += "%s" % hero
			
			self.march_param.hero_str = hero_str
			self.march_param.hero_list = hero_list
			march_size = hero_march_size + self.__data.get_base_buff_by_id(Enum.BuffId.TroopSize)
		
		else:
			march_size = self.__data.get_base_buff_by_id(Enum.BuffId.TroopSize)
		
		self.march_param.march_buff.march_size = march_size
	
	def choose_troop(self, troop_num=0, troop_dict=None):
		if troop_dict is not None:
			self.march_param.troop_dict = troop_dict
			self.march_param.troop_str = util.dict_to_str(troop_dict, self.__troop_list)
		else:
			if troop_num == 0:
				troop_size = self.march_param.march_buff.march_size
			else:
				troop_size = troop_num
			
			troop_dict = {}
			troop_list = sorted([idx for idx in range(0, len(game_table.game_troop))], reverse=True)
			
			select_troop = 0
			for troop in troop_list:
				troop_num_in_city = self.__data.svr_troop.get_troop_num_in_city(troop)
				if troop_size <= troop_num_in_city:
					troop_dict[troop] = troop_size
					select_troop += troop_size
					break
				else:
					troop_dict[troop] = troop_num_in_city
					troop_size -= troop_num_in_city
					select_troop += troop_num_in_city
			
			self.march_param.troop_dict = troop_dict
			# logging.info("troop_dict : %s" % self.march_param.troop_dict)
			self.march_param.troop_str = util.dict_to_str(troop_dict, self.__troop_list)
			self.march_param.svr_id = self.__data.svr_player.sid


class Map(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.__request = protocol
		self.get = protocol.request
		
		self.__block_length = 50
		self.__coord_rate = 10000
		
		self.__throne_pos = 2500600
		
		self.__map_block_range = 10
		self.__map_block_site = 1000
		
		self.__svr_data_json_path = util.get_ini_data(conf_path, section="path", section_item="svr_data_json")
		self.__sample_data_dir = util.get_ini_data(conf_path, section="path", section_item="sample_dir")
		
		self.__svr_data = self.__init_svr_data()
		
		self.block_data = dict()
		
		self.__init_block_data()
		
		logging.debug("block data's keys length: %s" % len(self.block_data.keys()))
	
	@staticmethod
	def get_distance(source: int, target: int):
		source = Position(source)
		target = Position(target)
		return math.sqrt(math.pow(abs(source.x - target.x), 2) + math.pow(abs(source.y - target.y), 2))
	
	@staticmethod
	def check_pos(pos_x: int, pos_y: int) -> bool:
		if (pos_x % 2 == 0 and pos_y % 2 == 0) or (pos_x % 2 != 0 and pos_y % 2 != 0):
			return True
		else:
			return False
	
	def __get_buff(self, with_dragon: bool, buff_id: int):
		if with_dragon:
			return self.__data.get_base_buff_with_dragon_by_id(buff_id)
		else:
			return self.__data.get_base_buff_by_id(buff_id)
	
	def get_clint_can_move_pos(self, sid: int, positions: list):
		can_move_by_client = []
		can_move_type = [Enum.MapWild.Desert, Enum.MapWild.Snow, Enum.MapWild.Plain,
						 Enum.MapWild.Grassland, Enum.MapWild.Sand]
		for pos in positions:
			if self.get_pos_type(sid, pos) in can_move_type:
				can_move_by_client.append(pos)
		return can_move_by_client
	
	def get_coord(self, position: int, radius: int) -> list:
		center_x = int(position / self.__coord_rate)
		center_y = int(position % self.__coord_rate)
		pos_x_min = center_x - radius
		pos_x_max = center_x + radius
		pos_y_min = center_y - radius
		pos_y_max = center_y + radius
		x_uneven = [x for x in range(pos_x_min, pos_x_max) if x % 2 != 0]
		x_even = [x for x in range(pos_x_min, pos_x_max) if x % 2 == 0]
		y_uneven = [y for y in range(pos_y_min, pos_y_max) if y % 2 != 0]
		y_even = [y for y in range(pos_y_min, pos_y_max) if y % 2 == 0]
		coord = [x * self.__coord_rate + y for x in x_even for y in y_even]
		coord += [x * self.__coord_rate + y for x in x_uneven for y in y_uneven]
		return coord
	
	def get_move_pos(self, target_pos: int, radius: int):
		positions = list(set(self.get_coord(target_pos, radius)) - set(config.throne_and_idol_coord))
		positions = self.get_clint_can_move_pos(sid=self.__sid, positions=positions)
		
		cant_move = list(self.get_pos_data(self.__sid, positions).get_positions().keys())
		for cant_move_idx in range(0, len(cant_move)):
			cant_move[cant_move_idx] = int(cant_move[cant_move_idx])
		can_move = set(positions) - set(cant_move)
		
		can_move = list(can_move - set(config.throne_and_idol_coord))
		logging.info("move position length : %s" % len(can_move))
		return can_move
	
	def get_camp_pos(self, target_pos: int, radius: int):
		can_move_pos = self.get_move_pos(target_pos=target_pos, radius=radius)
		can_not_camp = []
		for pos in can_move_pos:
			if self.get_pos_type(svr_id=self.__sid, position=pos) == Enum.MapWild.Desert:
				can_not_camp.append(pos)
		can_camp = list(set(can_move_pos) - set(can_not_camp))
		logging.info("camp position length: %s" % len(can_camp))
		return can_camp
	
	def get_block(self, position: int) -> int:
		position = int(position)
		pos_x = int(position / self.__coord_rate)
		pos_y = int(position % self.__coord_rate)
		x = int((pos_x - 1) / self.__map_block_range)
		y = int((pos_y - 1) / self.__map_block_range)
		block = int(x * self.__map_block_site + y + 1)
		return block
	
	def get_blocks(self, positions: int or list) -> list:
		if type(positions) == int:
			return [self.get_block(positions)]
		elif type(positions) == list:
			blocks = []
			for position in positions:
				blocks.append(self.get_block(position))
			return list(set(blocks))
		else:
			return []
	
	def get_pos_data(self, sid: int, positions: int or list):
		pos_data = self.__request.map_get(sid, self.get_blocks(positions))
		return SvrMap(pos_data.res_data)
	
	def is_desert(self, sid: int, position: int):
		if self.get_pos_type(svr_id=sid, position=position) == Enum.MapWild.Desert:
			return True
		else:
			return False
	
	def __init_block_data(self):
		for root, dirs, files in os.walk(self.__sample_data_dir, topdown=False):
			for file_name in files:
				block_id = file_name.split("BlockData0")[-1].split(".")[0]
				# logging.debug("bids : %s" % file_name.split("BlockData0")[-1].split(".")[0])
				if file_name.split(".")[-1] == "bytes":
					file_path = os.path.join(root, file_name)
					with open(file_path, "rb") as f:
						self.block_data[block_id] = f.read()
			# logging.debug("file_path : %s" % file_path)
	
	def __init_svr_data(self):
		with open(self.__svr_data_json_path, "r", encoding="UTF-8") as f:
			svr_data = f.read()
			if svr_data.startswith(u"\ufeff"):
				svr_data = svr_data.encode('UTF-8')[3:].decode("UTF-8")
		
		return json.loads(str(svr_data), encoding="UTF-8")
	
	def __march_scout(self, pos, cost_time, cost_gem, cost_rss):
		return self.get(command="march_scout", key0=cost_time, key1=pos, key2=cost_gem, key3=cost_rss)
	
	def get_pos_type(self, svr_id: int, position: int) -> int:
		x = int(position / self.__coord_rate)
		y = int(position % self.__coord_rate)
		
		target_svr_data = self.__svr_data[str(svr_id)]
		
		b_x = int((x + self.__block_length - 1) / self.__block_length - 1)
		b_y = int(((y + self.__block_length - 1) / self.__block_length - 1)) * 10
		
		b_idx = b_x + b_y
		bid = target_svr_data[b_idx]
		
		idx = int((x - 1) % self.__block_length / 2) + int((y - 1) % self.__block_length * self.__block_length / 2)
		
		block_data = self.block_data[str(bid)]
		
		block_type_temp = block_data[idx]
		main_type = block_type_temp >> 4
		sub_type = block_type_temp & 0X7
		
		if main_type == Enum.WildMainType.Empty and sub_type == Enum.WildSubType.Lake:
			pos_type = Enum.MapWild.Lake
		elif main_type == Enum.WildMainType.Empty and sub_type == Enum.WildSubType.Snow:
			pos_type = Enum.MapWild.Snow
		elif main_type == Enum.WildMainType.Empty and sub_type == Enum.WildSubType.Sand:
			pos_type = Enum.MapWild.Sand
		elif main_type == Enum.WildMainType.Empty and sub_type == Enum.WildSubType.Desert:
			pos_type = Enum.MapWild.Desert
		elif main_type == Enum.WildMainType.Empty:
			pos_type = Enum.MapWild.Grassland
		elif main_type == Enum.WildMainType.Mountain:
			pos_type = Enum.MapWild.Mountain
		elif main_type == Enum.WildMainType.Stone:
			pos_type = Enum.MapWild.Hill
		elif main_type == Enum.WildMainType.Wood:
			pos_type = Enum.MapWild.Wood
		else:
			pos_type = Enum.MapWild.Grassland
		logging.debug("position - %s 's pos type is - %s" % (position, pos_type))
		return pos_type
	
	def get_march_distance(self, source: int, target: int):
		# 超远距离，穿过沙漠，March时间会小于正确时间
		# 行军中有沙漠地形，距离大于真实距离
		if not self.is_desert(self.__sid, source) and not self.is_desert(self.__sid, target):
			return self.get_distance(source, target)
		else:
			desert_peak = 2300552  # 沙漠边缘的一个角的坐标
			max_desert_dis = self.get_distance(desert_peak, self.__throne_pos) * 2  # 八边形的海近似看成圆，直径
			normal_dis = self.get_distance(source, target)
			logging.debug("normal distance : %s " % normal_dis)
			logging.debug("max desert distance : %s " % max_desert_dis)
			if normal_dis < max_desert_dis:
				return normal_dis * 5
			else:
				return (normal_dis - max_desert_dis) + max_desert_dis * 5
	
	def get_march_speed(self, march_type, with_dragon=False, troops=None):
		if march_type == Enum.MarchType.Scout:
			speed = game_table.get_factor(Enum.GameBasicFactor.ScoutBaseSpeed)
		elif march_type == Enum.MarchType.Transport:
			speed_buff = self.__get_buff(with_dragon, Enum.BuffId.MarchSpeedPercent) / self.__coord_rate
			speed_buff += self.__get_buff(with_dragon, Enum.BuffId.TransportSpeed) / self.__coord_rate
			speed = game_table.get_factor(Enum.GameBasicFactor.TransportDefaultSpeed) * (1 + speed_buff)
		
		elif march_type == Enum.MarchType.DragonAttack:
			speed_buff = self.__get_buff(with_dragon, Enum.BuffId.DragonMarchTime) / self.__coord_rate
			speed = game_table.get_factor(Enum.GameBasicFactor.AttackMonsterDefaultMarchSpeed) * (1 + speed_buff)
		
		elif march_type == Enum.MarchType.AttackBandit:
			speed = game_table.get_factor(Enum.GameBasicFactor.AttackBanditDefaultMarchSpeed)
		
		else:
			speed_buff = 0
			reinforce_type = [Enum.MarchType.RallyReinforce, Enum.MarchType.ReinforceThrone, Enum.MarchType.Reinforce]
			if march_type in reinforce_type:
				speed_buff += self.__get_buff(with_dragon,
											  Enum.BuffId.ReinforceSpeedUpPercent) / self.__coord_rate
			elif march_type == Enum.MarchType.RallyWar:
				speed_buff += self.__get_buff(with_dragon, Enum.BuffId.RallyWarSpeed) / self.__coord_rate
			elif march_type == Enum.MarchType.Occupy:
				speed_buff += self.__get_buff(with_dragon, Enum.BuffId.GatheringMarchSpeed) / self.__coord_rate
			elif march_type == Enum.MarchType.Attack:
				speed_buff += self.__get_buff(with_dragon, Enum.BuffId.AttackMarchSpeedUp) / self.__coord_rate
			elif march_type == Enum.MarchType.RallyReinforce:
				speed_buff += self.__get_buff(with_dragon, Enum.BuffId.RallyReinforceSpeedUp) / self.__coord_rate
			
			basic_speed = 0
			
			for troop in troops:
				troop_info = game_table.get_troop(troop)
				if basic_speed == 0 or basic_speed > troop_info.speed:
					basic_speed = troop_info.speed
				else:
					continue
			speed = basic_speed * (1 + speed_buff)
		
		return speed
	
	def get_march_time(self, march_type, target: int, troops=None, with_dragon=False):
		if troops is None:
			troops = []
		source = self.__data.svr_player.city_pos
		distance = self.get_march_distance(source=source, target=target)
		speed = self.get_march_speed(march_type=march_type, with_dragon=with_dragon, troops=troops)
		logging.debug("speed:%s , distance:%s" % (speed, distance))
		return max(int((distance / speed) * game_table.get_factor(Enum.GameBasicFactor.MarchBaseSpeed).data) + 1, 5)
	
	def kingdom_move(self, pos: int):
		item_id = 1
		if self.__data.svr_bag.get_own_item_num(item_id) > 0:
			item_price = 0
		else:
			item_price = game_table.get_item(item_id=item_id).item_price
		own_gem = self.__data.svr_login.gem
		if own_gem < item_price:
			return Response()
		old_position = self.__data.svr_player.city_pos
		result = self.__request.move_city_new(item_id, item_price, old_position, Enum.MoveCityType.KingdomMove, pos)
		return result
	
	def march_speed(self, is_finish_action=False):
		
		action_data: dict = self.__data.get_all_actions()
		
		if not action_data:
			return False
		
		for action_id, action_detail in action_data.items():
			
			action_type = action_detail["basic"][10]
			
			if action_type not in Enum.MarchActionType.__dict__.values():
				continue
			
			action_info = ActionInfo(action_detail)
			
			action_status = action_info.basic.action_status
			
			if action_status != Enum.ActionStatus.Marching and action_status != Enum.ActionStatus.Returning:
				continue
			
			if action_type == Enum.ActionType.RallyWar:
				item_id = 308
			else:
				item_id = 130
			
			item_info = game_table.get_item(str(item_id))
			price = item_info.item_price
			
			action_time = action_info.basic.cost_time
			
			if not is_finish_action:
				result = self.__request.item_buy_and_use(item=item_id, target_id=action_id, price=price, rally_id=0,
														 is_attack=0, action_type=Enum.ActionType.RallyWar)
				
				if result.is_right_ret_code:
					continue
				else:
					break
			else:
				while True:
					result = self.__request.item_buy_and_use(item=item_id, target_id=action_id, price=price, rally_id=0,
															 is_attack=0, action_type=Enum.ActionType.RallyWar)
					
					action_time /= 2
					
					if result.is_right_ret_code != 0 or action_time <= 2:
						break
	
	def march_scout(self, target: int):
		if target == self.__throne_pos:
			cost_gold = 1000
		else:
			pos_info = self.get_pos_data(self.__data.svr_player.sid, target).get_position_info(target)
			pos_type = pos_info.type
			if pos_type == Enum.MapWild.City:
				if pos_info.level <= len(game_table.game_scout):
					cost_gold = game_table.game_scout[pos_info.level - 1]
				else:
					return False
			else:
				cost_gold = 1500
		cost_time = self.get_march_time(Enum.MarchType.Scout, target, troops=[])
		return self.__march_scout(cost_time=cost_time, pos=target, cost_gem=0, cost_rss=cost_gold)
	
	def march_attack(self, target: int, with_dragon: bool, with_hero: bool, hero_list=None, troop_num=0):
		params = MarchSelect(data=self.__data)
		params.choose_dragon(with_dragon=with_dragon)
		params.choose_hero(p_hero_list=hero_list, with_hero=with_hero)
		params.choose_troop(troop_num=troop_num)
		troops = list(params.march_param.troop_dict.keys())
		
		march_time = self.get_march_time(Enum.MarchType.Attack, target, troops, with_dragon)
		hero_str = params.march_param.hero_str
		troop_str = params.march_param.troop_str
		
		if target == self.__throne_pos:
			# cost_time, pos, hero_list, troop_list, has_dragon
			return self.__request.throne_attack(march_time, target, hero_str, troop_str, int(with_dragon))
		else:
			# cost_time, pos, hero_list, troop_list, has_dragon
			return self.__request.march_attack(march_time, target, hero_str, troop_str, int(with_dragon))
	
	def march_rally(self, target: int, with_dragon: bool, with_hero: bool, hero_list=None, troop_num=0):
		params = MarchSelect(data=self.__data)
		params.choose_dragon(with_dragon=with_dragon)
		params.choose_hero(with_hero=with_hero, p_hero_list=hero_list)
		params.choose_troop(troop_num=troop_num)
		
		troops = list(params.march_param.troop_dict.keys())
		
		march_time = self.get_march_time(Enum.MarchType.RallyWar, target, troops, with_dragon)
		
		hero_str = params.march_param.hero_str
		troop_str = params.march_param.troop_str
		
		pre_time = params.march_param.prepare_time
		
		if target == self.__throne_pos:
			# cost_time, pos, hero_list, troop_list, pre_time, has_dragon, has_notify
			return self.__request.throne_rally_war(cost_time=march_time, pos=target, hero_list=hero_str,
												   has_notify=True, troop_list=troop_str, pre_time=pre_time,
												   has_dragon=int(with_dragon))
		else:
			# cost_time, pos, hero_list, troop_list, pre_time, has_dragon, has_notify
			return self.__request.rally_attack(cost_time=march_time, pos=target, hero_list=hero_str, has_notify=True,
											   troop_list=troop_str, pre_time=pre_time, has_dragon=int(with_dragon))
	
	def march_reinforce(self, target: int, with_hero: bool, hero_list=None, troop_num=0, with_dragon=True):
		params = MarchSelect(data=self.__data)
		params.choose_hero(with_hero=with_hero, p_hero_list=hero_list)
		params.choose_troop(troop_num=troop_num)
		
		hero_str = params.march_param.hero_str
		troop_str = params.march_param.troop_str
		
		if target == self.__throne_pos:
			cost_time = self.get_march_time(march_type=Enum.MarchType.ReinforceThrone, target=target,
											troops=params.march_param.troop_dict.keys())
			is_king = Enum.TitleType.King in self.__data.svr_player.title
			# cost_time, pos, hero_list, troop_list, has_dragon, is_king
			if is_king:
				params.choose_dragon(with_dragon=with_dragon)
				is_king = True
			else:
				is_king = False
			with_dragon = params.march_param.has_dragon
			return self.__request.throne_reinforce(cost_time, pos=target, hero_list=hero_str, troop_list=troop_str,
												   has_dragon=with_dragon, is_king=is_king)
		else:
			cost_time = self.get_march_time(march_type=Enum.MarchType.Reinforce, target=target,
											troops=params.march_param.troop_dict.keys())
			
			return self.__request.reinforce(cost_time, pos=target, hero_list=hero_str, troop_list=troop_str)
	
	def march_rally_reinforce(self, uid: int, with_hero: bool, hero_list=None, troop_num=0):
		player_info = self.__request.get_player_data(uid=uid)
		
		if player_info.aid != self.__data.svr_player.aid or self.__data.svr_player.aid == 0:
			return Response()
		
		params = MarchSelect(data=self.__data)
		params.choose_hero(with_hero=with_hero, p_hero_list=hero_list)
		params.choose_troop(troop_num=troop_num)
		
		hero_str = params.march_param.hero_str
		troop_str = params.march_param.troop_str
		
		target = int(player_info.city_pos)
		
		cost_time = self.get_march_time(march_type=Enum.MarchType.RallyReinforce, target=target,
										troops=params.march_param.troop_dict.keys())
		
		action_id = self.__data.get_rally_action_id(uid)
		
		if action_id == -1:
			return Response()
		
		return self.__request.rally_reinforce(cost_time, pos=target, hero_list=hero_str, troop_list=troop_str,
											  action_id=action_id, is_attack=True)
	
	def march_transport(self, uid: int, rss_list=None):
		# cost_time, pos, rss_list, tax_list
		player_info = self.__request.get_player_data(uid=uid)
		if player_info.aid != self.__data.svr_player.aid or self.__data.svr_player.aid == 0:
			return Response()
		if rss_list is None:
			rss_list = []
			has_rss_list = self.__data.svr_resource.resource
			transport_max = self.__data.get_base_buff_by_id(Enum.BuffId.TransportLimit)
			for has_rss in has_rss_list:
				
				has_rss = int(has_rss * 0.6)
				
				if has_rss < transport_max:
					rss_list.append(has_rss)
					transport_max -= has_rss
					if transport_max <= 0:
						break
				else:
					rss_list.append(transport_max)
					break
		
		target = int(player_info.city_pos)
		cost_time = self.get_march_time(march_type=Enum.MarchType.Transport, target=target, troops=[])
		tax_rate = self.__data.get_base_buff_by_id(Enum.BuffId.TransportRate) / self.__coord_rate
		tax_list = []
		for rss in rss_list:
			tax_list.append(int(rss * tax_rate))
		rss_str = util.list_to_str(rss_list)
		tax_str = util.list_to_str(tax_list)
		return self.__request.transport(cost_time=cost_time, pos=target, rss_list=rss_str, tax_list=tax_str)
	
	def march_camp(self, target: int, with_hero: bool, hero_list=None, troop_num=0):
		params = MarchSelect(data=self.__data)
		params.choose_hero(with_hero=with_hero, p_hero_list=hero_list)
		params.choose_troop(troop_num=troop_num)
		
		hero_str = params.march_param.hero_str
		troop_str = params.march_param.troop_str
		
		cost_time = self.get_march_time(march_type=Enum.MarchType.Camp, target=target,
										troops=params.march_param.troop_dict.keys())
		
		return self.__request.march_camp(cost_time=cost_time, pos=target, hero_list=hero_str, troop_list=troop_str)
	
	def march_occupy(self, target: int, with_hero: bool, with_dragon: bool, hero_list=None, troop_num=0):
		
		map_data = self.get_pos_data(sid=self.__data.svr_player.sid, positions=target)
		pos_info = map_data.get_position_info(target)
		
		pos_type = pos_info.type
		
		if pos_type not in Enum.ResourceType.__dict__.values():
			return
		
		pos_level = pos_info.level
		
		rss_rate = pos_info.the_rest
		
		wild_info = wild_table.get_wild(wild_id=pos_type, wild_level=pos_level)
		
		rss_num = (wild_info.wild_num * rss_rate / self.__coord_rate)
		
		params = MarchSelect(data=self.__data)
		
		params.choose_dragon(with_dragon=with_dragon)
		params.choose_hero(with_hero=with_hero, p_hero_list=hero_list)
		params.choose_troop(troop_num=troop_num)
		
		troops = list(params.march_param.troop_dict.keys())
		
		march_time = self.get_march_time(Enum.MarchType.Occupy, target, troops, with_dragon)
		hero_str = params.march_param.hero_str
		troop_str = params.march_param.troop_str
		
		return self.__request.march_occupy(cost_time=march_time, pos=target, hero_list=hero_str, troop_list=troop_str,
										   is_dragon_join=with_dragon, rss_num=rss_num)
	
	def march_dragon_attack(self, pos: int):
		if self.__data.svr_player.has_dragon != 1 and self.__data.svr_player.dragon["status"] != 0:
			return False
		cost_time = self.get_march_time(march_type=Enum.MarchType.DragonAttack, target=pos)
		
		item_id = 300
		target_id = self.__data.svr_player.uid
		item_price = game_table.get_item(item_id).item_price
		if self.__data.svr_player.dragon["energy"] < 5000:
			self.__request.item_buy_and_use(item=item_id, price=item_price, target_id=target_id, action_type=-1,
											rally_id=0, is_attack=1)
		
		return self.__request.march_dragon_attack(cost_time=cost_time, pos=pos)
	
	def march_attack_bandit(self, target: int, with_dragon: bool, with_hero: bool, hero_list=None, troop_num=0):
		params = MarchSelect(data=self.__data)
		params.choose_dragon(with_dragon=with_dragon)
		params.choose_hero(with_hero=with_hero, p_hero_list=hero_list)
		params.choose_troop(troop_num=troop_num)
		
		troops = list(params.march_param.troop_dict.keys())
		
		march_time = self.get_march_time(Enum.MarchType.AttackBandit, target, troops, with_dragon)
		
		hero_str = params.march_param.hero_str
		troop_str = params.march_param.troop_str
		
		return self.__request.march_bandit_attack(cost_time=march_time, pos=target, hero_list=hero_str,
												  troop_list=troop_str, has_dragon=with_dragon, is_max_attack=True)
	
	def march_recall(self, is_dismiss_throne=0):
		item_id = -1
		gem_num = 40
		actions = self.__data.get_all_actions()
		for action_id, action_detail in actions.items():
			action_id = int(action_id)
			action_detail = ActionInfo(action_detail)
			action_type = action_detail.basic.action_type
			if action_type in Enum.MarchActionType.__dict__.values() and action_detail.can_recall == 1:
				self.__request.action_recall(action_id=action_id, item_id=item_id, gem_num=gem_num,
											 is_dismiss_throne=is_dismiss_throne)
			
			if action_detail.basic.action_type == Enum.ActionType.RallyWar:
				self.__request.rally_dismiss(action_id=action_id, item_id=item_id, gem_num=gem_num,
											 is_dismiss_throne=is_dismiss_throne)
