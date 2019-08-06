#!/usr/bin/python3
# -*- coding: utf-8 -*-
import config
import util
import logging

from okc_robot.data import number_class as Num
from okc_robot.data.number_class import okc_number_dict

# read game.json
game_json_data_path = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="game_json")
game_json_data = util.read_json_file(file_path=game_json_data_path)

# read error.json
error_json_data_path = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="error_json")
error_json_data = util.read_json_file(file_path=error_json_data_path)

# read wild_res.json
wild_res_json_data_path = util.get_ini_data(config.conf_path, section="path", section_item="wild_res")
wild_res_json_data = util.read_json_file(file_path=wild_res_json_data_path)

# read equip.json
equip_json_data_path = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="equip_json")
equip_json_data = util.read_json_file(file_path=equip_json_data_path)

# 动态创建GameJson类, game_json_data is dict
GameJson = type("GameJson", (object,), game_json_data)


class GameNumerical(GameJson):
	
	@staticmethod
	def __attribute_check(attribute: str) -> bool:
		if attribute not in GameJson.__dict__.keys():
			logging.error("%s not in game.json" % attribute)
			return False
		else:
			return True
	
	@staticmethod
	def __dict_id_check(check_id: str, check_data: dict) -> bool:
		if check_id not in check_data.keys():
			logging.error("not found check id : %s" % check_id)
			return False
		else:
			return True
	
	@staticmethod
	def __list_id_check(check_id: int, check_data: list) -> bool:
		data_length = len(check_data)
		if data_length > check_id >= 0:
			return True
		else:
			logging.error("not found check id : %s" % check_id)
			return False
	
	def __get_data(self, module: str, check_id):
		if module not in okc_number_dict.keys():
			logging.error("no this module, Bill, please add that")
			return
		
		module_object = okc_number_dict[module]
		
		attribute_check = self.__attribute_check(attribute=module)
		
		if not attribute_check:
			return module_object
		
		module_data = GameJson.__dict__[module]
		
		if isinstance(module_data, dict):
			check_id = str(check_id)
			id_check = self.__dict_id_check(check_id=check_id, check_data=module_data)
		elif isinstance(module_data, list):
			id_check = self.__list_id_check(check_id=check_id, check_data=module_data)
		else:
			check_id = str(check_id)
			module_object.update(module_data[check_id])
			return module_object
		if id_check:
			module_object.update(module_data[check_id])
		
		return module_object
	
	def get_vip(self, vip_level_idx: int) -> Num.Vip:
		
		return self.__get_data(module="game_vip", check_id=vip_level_idx - 1)
	
	def get_instant_gems(self, time_idx: int) -> Num.InstantGems:
		
		return self.__get_data(module="game_instant_gems", check_id=time_idx - 1)
	
	def get_item(self, item_id: int) -> Num.Item:
		
		return self.__get_data(module="game_item", check_id=item_id)
	
	def get_factor(self, factor_id: int) -> Num.Factor:
		
		return self.__get_data(module="game_basic", check_id=factor_id)
	
	def get_troop(self, troop_id: int) -> Num.Troop:
		
		return self.__get_data(module="game_troop", check_id=troop_id)
	
	def get_research_buff(self, buff_id) -> Num.ResearchBuff:
		
		return self.__get_data(module="game_research_factor", check_id=buff_id)
	
	def get_building_pos(self, pos_id) -> Num.BuildingPos:
		return self.__get_data(module="game_building_pos", check_id=pos_id)
	
	def get_building(self, building_id) -> Num.Building:
		return self.__get_data(module="game_building", check_id=building_id)
	
	def get_research(self, research_id) -> Num.Research:
		return self.__get_data(module="game_research", check_id=research_id)
	
	def get_task(self, task_id) -> Num.Task:
		return self.__get_data(module="game_task", check_id=task_id)


class ErrorNumerical(object):
	
	def __init__(self):
		self.__error_data = equip_json_data
	
	def get_error(self, error_id: int):
		if str(error_id) not in self.__error_data.keys():
			return "Error ID : %s Non-Existent" % error_id
		else:
			return self.__error_data[str(error_id)]["info"]


class EquipNumerical(object):
	
	def __init__(self):
		self.__equip_data = equip_json_data
		
		self.equip_equipment = self.__equip_data["equip_equipment"]
		self.equip_material = self.__equip_data["equip_material"]
		self.equip_crystal = self.__equip_data["equip_crystal"]


class WildNumerical(object):
	def __init__(self):
		self.wild_res_data = wild_res_json_data
	
	def get_wild(self, wild_id: int, wild_level: int):
		class WildInfo(object):
			wild_id = int()
			wild_num = int()
		
		wild_info = WildInfo()
		if str(wild_id) not in self.wild_res_data.keys():
			return wild_info
		wild_info.wild_id = wild_id
		wild_info.wild_num = self.wild_res_data[str(wild_id)]["a1"][wild_level - 1]["a1"][-1]
		return wild_info


wild_table = WildNumerical()

equip_table = EquipNumerical()

error_table = ErrorNumerical()

game_table = GameNumerical()
