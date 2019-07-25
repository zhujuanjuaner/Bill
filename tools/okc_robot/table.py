#!/usr/bin/python3
# -*- coding: utf-8 -*-
import kit
from config import conf_path


class Item(object):
	item_price: int = 0
	is_show: int = 0
	allow_use: int = 0
	sale_price: int = 0
	loyalty_price: int = 0
	auto_use: int = 0
	item_buff: list = []


class Troop(object):
	speed: int = 0
	life: int = 0
	defence: int = 0
	upkeep: int = 0
	load: int = 0
	speed_buff: dict = {}
	attack_buff: dict = {}
	defense_buff: dict = {}
	life_buff: dict = {}
	upkeep_buff: dict = {}
	load_buff: dict = {}


class Building(object):
	level: int = 0
	can_remove: bool = False
	can_upgrade: bool = False
	is_multiple_build: bool = False

	can_build_pos: list = []

	upgrade_time: int = 0
	upgrade_resource: dict = {}


class Vip(object):
	up_point = 0
	stage = 1
	unlock_next_stage_item = 0
	buff = []


class Research(object):
	research_id = 0
	buff_id = 0
	buff_num = 0
	buff_type = 0
	buff_time = 0
	max_level = 0


class GameTable(object):
	def __init__(self):
		self.__game_table_path = kit.get_ini_data(ini_path=conf_path, section="path", section_item="game_json")
		self.__game_data = kit.read_json_file(file_path=self.__game_table_path)

		self.game_version = self.__game_data['game_version']
		self.game_vip = self.__game_data['game_vip']
		self.game_guardian = self.__game_data['game_guardian']
		self.game_instant_gems = self.__game_data['game_instant_gems']
		self.game_sub_quest = self.__game_data['game_sub_quest']
		self.game_basic = self.__game_data['game_basic']
		self.game_dragon = self.__game_data['game_dragon']
		self.game_dragon_exp = self.__game_data['game_dragon_exp']
		self.game_lord_exp = self.__game_data['game_lord_exp']
		self.game_research_factor = self.__game_data['game_research_factor']
		self.game_throne_research_factor = self.__game_data['game_throne_research_factor']
		self.game_building = self.__game_data['game_building']
		self.game_research = self.__game_data['game_research']
		self.game_throne_research = self.__game_data['game_throne_research']
		self.game_show_research = self.__game_data['game_show_research']
		self.game_throne_show_research = self.__game_data['game_throne_show_research']
		self.game_troop = self.__game_data['game_troop']
		self.game_heal_troop = self.__game_data['game_heal_troop']
		self.game_conn_login = self.__game_data['game_conn_login']
		self.game_fort = self.__game_data['game_fort']
		self.game_dragon_skill = self.__game_data['game_dragon_skill']
		self.game_dragon_show_skill = self.__game_data['game_dragon_show_skill']
		self.game_dragon_skill_monster = self.__game_data['game_dragon_skill_monster']
		self.game_dragon_show_skill_monster = self.__game_data['game_dragon_show_skill_monster']
		self.game_lord_skill = self.__game_data['game_lord_skill']
		self.game_lord_show_skill = self.__game_data['game_lord_show_skill']
		self.game_buff_func_info = self.__game_data['game_buff_func_info']
		self.game_buff_type = self.__game_data['game_buff_type']
		self.game_item = self.__game_data['game_item']
		self.game_chest = self.__game_data['game_chest']
		self.game_quest = self.__game_data['game_quest']
		self.game_dragon_level_up = self.__game_data['game_dragon_level_up']
		self.game_lord_level_up = self.__game_data['game_lord_level_up']
		self.game_init_data = self.__game_data['game_init_data']
		self.game_encourage_mail = self.__game_data['game_encourage_mail']
		self.game_space_open = self.__game_data['game_space_open']
		self.game_basic_buff = self.__game_data['game_basic_buff']
		self.game_conn_reward = self.__game_data['game_conn_reward']
		self.game_active_quest = self.__game_data['game_active_quest']
		self.game_active_reward = self.__game_data['game_active_reward']
		self.game_lottery = self.__game_data['game_lottery']
		self.game_heal_fort = self.__game_data['game_heal_fort']
		self.game_task = self.__game_data['game_task']
		self.game_special_task = self.__game_data['game_special_task']
		self.game_monster_hit = self.__game_data['game_monster_hit']
		self.game_title = self.__game_data['game_title']
		self.game_al_gift_new = self.__game_data['game_al_gift_new']
		self.game_al_gift_pack = self.__game_data['game_al_gift_pack']
		self.game_rally_war = self.__game_data['game_rally_war']
		self.game_throne_buff = self.__game_data['game_throne_buff']
		self.game_province_buff = self.__game_data['game_province_buff']
		self.game_equip_open = self.__game_data['game_equip_open']
		self.game_research_tree = self.__game_data['game_research_tree']
		self.game_throne_research_tree = self.__game_data['game_throne_research_tree']
		self.game_dragon_combo = self.__game_data['game_dragon_combo']
		self.game_dragon_ally_combo = self.__game_data['game_dragon_ally_combo']
		self.game_scout = self.__game_data['game_scout']
		self.game_broadcast = self.__game_data['game_broadcast']
		self.game_func_open = self.__game_data['game_func_open']
		self.game_throne_tax = self.__game_data['game_throne_tax']
		self.game_capture_dragon_buff = self.__game_data['game_capture_dragon_buff']
		self.game_city_skin_item = self.__game_data['game_city_skin_item']
		self.game_dragon_skin_item = self.__game_data['game_dragon_skin_item']
		self.game_gems_factory = self.__game_data['game_gems_factory']
		self.game_hero = self.__game_data['game_hero']
		self.game_hero_skill = self.__game_data['game_hero_skill']
		self.game_hero_common = self.__game_data['game_hero_common']
		self.game_hero_summon = self.__game_data['game_hero_summon']
		self.game_bandit = self.__game_data['game_bandit']
		self.game_monster = self.__game_data['game_monster']
		self.game_building_pos = self.__game_data['game_building_pos']

	def get_item(self, item_id: int) -> Item:
		item_id = str(item_id)
		if item_id in self.game_item.keys():
			item_info = self.game_item[item_id]
			Item.item_price = item_info["a0"]
			Item.is_show = item_info["a3"]
			Item.allow_use = item_info["a4"]
			Item.sale_price = item_info["a5"]
			Item.loyalty_price = item_info["a10"]
			Item.auto_use = item_info["a12"]
			Item.item_buff = item_info["a13"]
		return Item()

	def get_factor(self, factor_id: int) -> int:
		factor_id = str(factor_id)
		if factor_id not in self.game_basic.keys():
			return 0
		else:
			return self.game_basic[factor_id]

	def get_troop(self, troop_id: int) -> Troop:
		troop_data = self.game_troop
		if len(troop_data) > troop_id >= 0:
			troop_info = troop_data[troop_id]
			Troop.speed = troop_info["a"]["a3"]
			Troop.life = troop_info["a"]["a1"]
			Troop.defence = troop_info["a"]["a17"]
			Troop.upkeep = troop_info["a"]["a8"]
			Troop.load = troop_info["a"]["a4"]
			Troop.speed_buff = troop_info["ab"]["speed"]
			Troop.attack_buff = troop_info["ab"]["attack"]
			Troop.defense_buff = troop_info["ab"]["defense"]
			Troop.life_buff = troop_info["ab"]["life"]
			Troop.upkeep_buff = troop_info["ab"]["upkeep"]
			Troop.load_buff = troop_info["ab"]["load"]
		return Troop()

	def get_building(self, build_id: int, level: int) -> Building:
		build_id = str(build_id)
		if build_id in self.game_building.keys():
			building_info = self.game_building[build_id]
			building_pos = self.game_building_pos

			build_pos = []
			for pos_id, pos_info in building_pos.items():
				if int(build_id) in pos_info["building"]:
					build_pos.append(int(pos_id))

			Building.can_build_pos = build_pos

			Building.level = level
			Building.can_remove = bool(building_info["a"]["a3"])
			Building.can_upgrade = bool(building_info["a"]["a15"])
			Building.is_multiple_build = bool(building_info["a"]["a2"])

			Building.upgrade_time = building_info["r"]["r0"][level - 1]["a0"]
		return Building()

	def get_vip(self, vip_lv: int) -> Vip:
		vip_data = self.game_vip
		if len(vip_data) > vip_lv >= 0:
			Vip.up_point = vip_data[vip_lv - 1]["a"][0]
			Vip.stage = vip_data[vip_lv - 1]["a"][1]
			Vip.unlock_next_stage_item = vip_data[vip_lv - 1]["a"][2]
			Vip.buff = vip_data[vip_lv - 1]["b"]
		return Vip()

	def get_research(self, research_id: int, research_level: int):
		research_level = research_level - 1
		research_id = str(research_id)
		if research_id in self.game_research.keys():
			research_data = self.game_research[research_id]
			Research.research_id = int(research_id)
			Research.max_level = len(research_data["b"]["b0"])
			buff_data = list(research_data["b"]["b0"][research_level].keys())
			buff_data = research_data["b"]["b0"][research_level][buff_data[0]]
			Research.buff_id = buff_data[0]
			Research.buff_num = buff_data[1]
			Research.buff_time = buff_data[2]
			Research.buff_type = buff_data[3]

		return Research()


game_table = GameTable()


class ErrorTable(object):

	def __init__(self):
		self.__error_table = kit.get_ini_data(ini_path=conf_path, section="path", section_item="error_json")
		self.__error_data = kit.read_json_file(file_path=self.__error_table)

	def get_error(self, error_id: int):
		if str(error_id) not in self.__error_data.keys():
			return "Error ID : %s Non-Existent" % error_id
		else:
			return self.__error_data[str(error_id)]["info"]


error_table = ErrorTable()


class EquipTable(object):

	def __init__(self):
		self.__equip_table = kit.get_ini_data(ini_path=conf_path, section="path", section_item="equip_json")
		self.__equip_data = kit.read_json_file(file_path=self.__equip_table)

		self.equip_equipment = self.__equip_data["equip_equipment"]
		self.equip_material = self.__equip_data["equip_material"]
		self.equip_crystal = self.__equip_data["equip_crystal"]


equip_table = EquipTable()
