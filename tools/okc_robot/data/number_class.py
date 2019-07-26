#!/usr/bin/python3
# -*- coding: utf-8 -*-
import logging


class Item(object):
	def __init__(self):
		self.has_right_data = bool()
		self.item_price = int()
		self.is_show = int()
		self.allow_use = int()
		self.sale_price = int()
		self.loyalty_price = int()
		self.auto_use = int()
		self.item_buff = list()
	
	def update(self, item_data):
		try:
			self.item_price = item_data["a0"]
			self.is_show = item_data["a3"]
			self.allow_use = item_data["a4"]
			self.sale_price = item_data["a5"]
			self.loyalty_price = item_data["a10"]
			self.auto_use = item_data["a12"]
			self.item_buff = item_data["a13"]
			self.has_right_data = True
		except KeyError:
			logging.error("item_data error, item data : %s" % item_data)


class Troop(object):
	def __init__(self):
		self.has_right_data = bool()
		
		self.troop_id = int()
		self.attack = int()
		self.life = int()
		self.speed = int()
		self.load = int()
		self.category = int()  # 0-步兵，1-远程，2-骑兵，3-攻城
		self.upkeep = int()
		self.force = int()
		self.weak = int()
		self.strong = int()
		self.defence = int()
		
		self.speed_buff = dict()
		self.attack_buff = dict()
		self.defense_buff = dict()
		self.life_buff = dict()
		self.upkeep_buff = dict()
		self.load_buff = dict()
	
	def update(self, troop_data):
		try:
			self.troop_id = troop_data["a"]["a0"]
			self.life = troop_data["a"]["a1"]
			self.attack = troop_data["a"]["a2"]
			self.speed = troop_data["a"]["a3"]
			self.load = troop_data["a"]["a4"]
			self.category = troop_data["a"]["a5"]
			self.upkeep = troop_data["a"]["a8"]
			self.force = troop_data["a"]["a9"]
			self.weak = troop_data["a"]["a10"]
			self.strong = troop_data["a"]["a11"]
			self.defence = troop_data["a"]["a17"]
			
			self.speed_buff = troop_data["ab"]["speed"]
			self.attack_buff = troop_data["ab"]["attack"]
			self.defense_buff = troop_data["ab"]["defense"]
			self.life_buff = troop_data["ab"]["life"]
			self.upkeep_buff = troop_data["ab"]["upkeep"]
			self.load_buff = troop_data["ab"]["load"]
			
			self.has_right_data = True
		except KeyError:
			logging.error("troop_data error, troop data : %s" % troop_data)


class Factor(object):
	
	def __init__(self):
		self.is_right_id = bool()
		self.data = None
	
	def update(self, factor_data):
		self.data = factor_data
		if self.data is not None:
			self.is_right_id = True


class Vip(object):
	
	def __init__(self):
		self.is_right_id = bool()
		self.upgrade_score = int()
		self.vip_buff = list()
		self.daily_gift = list()
	
	def update(self, vip_data):
		try:
			self.upgrade_score = vip_data["a"]
			self.vip_buff = vip_data["b"]
			self.daily_gift = vip_data["daily_gift"]
			self.is_right_id = True
		except KeyError:
			logging.error("vip_data error, vip_data : %s" % vip_data)


class InstantGems(object):
	def __init__(self):
		self.is_right_id = bool()
		self.time = int()
		self.gems = int()
	
	def update(self, time_data):
		try:
			self.time = time_data[0]
			self.gems = time_data[1]
			self.is_right_id = True
		except KeyError:
			logging.error("time_data error, time_data : %s" % time_data)


class ResearchBuff(object):
	def __init__(self):
		self.is_right_id = bool()
		self.data = None
	
	def update(self, buff_data):
		try:
			self.data = buff_data
			self.is_right_id = True
		except KeyError:
			logging.error("buff_data error, buff_data : %s" % buff_data)
	
	def get_research_id_list(self):
		if self.data is None:
			logging.error("self data is None")
			return
		research_id_list = list()
		for research in self.data:
			research_id_list.append(research["a0"])
		return research_id_list
	
	def get_buff_list(self, research_id):
		if self.data is None:
			logging.error("self data is None")
			return
		if research_id not in self.get_research_id_list():
			logging.error("research id not this buff ,research id : %s" % research_id)
			return list()
		for research in self.data:
			if research["a0"] == research_id:
				return research["a1"]


class BuildingPos(object):
	def __init__(self):
		self.is_right_id = bool()
		self.building_pos_type = int()  # 0：正常地块；1：默认存在建筑；2：未开放地块
		self.building_pos_rely = list()
		self.building_pos_build_id = list()  # 该地块允许建造的建筑
	
	def update(self, pos_data):
		try:
			self.building_pos_type = pos_data["type"]
			self.building_pos_rely = pos_data["rely"]
			self.building_pos_build_id = pos_data["building"]
			self.is_right_id = True
		except KeyError:
			logging.error("pos_data error, pos_data : %s" % pos_data)


class Building(object):
	def __init__(self):
		self.is_right_id = bool()
		self.__data = None
		self.building_id = int()
		self.can_multiple_build = bool()  # 是否可以重复建造
		self.can_remove = bool()  # 是否可以拆除建筑
		self.category = int()  # 0-outside city，1-inside city, 2-both, 3-mistery building, 4-special
		self.can_upgrade = bool()
	
	def update(self, building_data):
		try:
			self.__data = building_data
			self.building_id = building_data["a"]["a0"]
			self.can_multiple_build = building_data["a"]["a2"]
			self.can_remove = building_data["a"]["a3"]
			self.category = building_data["a"]["a4"]
			self.can_upgrade = building_data["a"]["a15"]
			self.is_right_id = True
		except KeyError:
			logging.error("building_data error, building_data : %s" % building_data)
	
	def get_upgrade_time(self, building_level: int) -> int:
		return self.__data["r"]["r0"][building_level - 1]["a0"]
	
	def get_upgrade_rely(self, building_level: int) -> list:
		return self.__data["r"]["r0"][building_level - 1]["a1"]  # type, id, num


class Research(object):
	def __init__(self):
		self.is_right_id = bool()
		self.__data = None
		self.research_id = int()
	
	def update(self, research_data):
		try:
			self.__data = research_data
			self.research_id = research_data["a"]["a0"]
			self.is_right_id = True
		except KeyError:
			logging.error("research_data error, building_data : %s" % research_data)
	
	def get_research_buff(self, research_level: int) -> dict:
		return self.__data["b"]["b0"][research_level - 1]


okc_number_dict = {
	"game_vip": Vip(),
	"game_guardian": object(),
	"game_instant_gems": InstantGems(),
	"game_sub_quest": object(),
	"game_basic": Factor(),
	"game_dragon": object(),
	"game_dragon_exp": object(),
	"game_lord_exp": object(),
	"game_research_factor": ResearchBuff(),
	"game_throne_research_factor": object(),
	"game_building_pos": BuildingPos(),
	"game_building": Building(),
	"game_research": Research(),
	"game_troop": Troop(),
	"game_item": Item()
	
}
