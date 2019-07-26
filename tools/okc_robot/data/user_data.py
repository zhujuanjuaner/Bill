#!/usr/bin/python3
# -*- coding: utf-8 -*-

import logging


class SvrAlliance(object):
	def __init__(self):
		self.al_gift_can_open_num: int = 0
		self.al_gift_list: list = []
		self.al_join_req_num: int = 0
		self.base: list = []
		self.can_assist_num: int = 0
		self.can_help_action_list: list = []
		self.can_help_action_num: int = 0
		self.hive_pos: int = 0
		self.hive_status: int = 0
		self.hive_svr: int = 0
		self.throne_pos: int = 0
		self.throne_status: int = 0
		self.wall_msg_num: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data.keys():
				self.__dict__[init_table] = data["%s" % init_table]


class SvrAltar(object):
	def __init__(self):
		self.kill_buff: dict = {}
		self.kill_history: dict = {}
		self.kill_total_num: dict = {}

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_altar'].keys():
				self.__dict__[init_table] = data['svr_altar'][init_table]


class SvrBag(object):

	def __init__(self):
		self.item_list: dict = {}

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_bag'].keys():
				self.__dict__[init_table] = data['svr_bag'][init_table]

	def get_own_item_num(self, item_id: int):
		item_id = str(item_id)
		if item_id in self.item_list:
			return self.item_list[item_id]
		else:
			return 0


class SvrBuffSourceDetail(object):
	def __init__(self):
		self.building: dict = {}
		self.research: dict = {}

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_buff_source_detail'].keys():
				self.__dict__[init_table] = data['svr_buff_source_detail'][init_table]


class SvrBuilding(object):
	def __init__(self):
		self.building: dict = {}
		self.castle_lv: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_building'].keys():
				self.__dict__[init_table] = data['svr_building'][init_table]


class SvrDailyLogin(object):
	def __init__(self):
		self.con_login_days: int = 0
		self.today_vip_point: int = 0
		self.tomorrow_vip_point: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_daily_login'].keys():
				self.__dict__[init_table] = data['svr_daily_login'][init_table]


class SvrEquipGride(object):
	def __init__(self):
		self.cost: int = 0
		self.limit: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_equip_gride'].keys():
				self.__dict__[init_table] = data['svr_equip_gride'][init_table]


class SvrFort(object):
	def __init__(self):
		self.fort: list = []
		self.fort_dead: list = []
		self.total_fort: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_fort'].keys():
				self.__dict__[init_table] = data['svr_fort'][init_table]


class SvrHeroDefendInfo(object):
	def __init__(self):
		self.buff: dict = {}
		self.slots: list = []

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_hero_defend_info'].keys():
				self.__dict__[init_table] = data['svr_hero_defend_info'][init_table]


class SvrLogin(object):
	def __init__(self):
		self.apns_switch: list = []
		self.appflyer_flag: int = 0
		self.client_seq: int = 0
		self.ctime: int = 0
		self.did: str = ""
		self.dragon_unlock_flag: int = 0
		self.first_al_time: int = 0
		self.gem: int = 0
		self.gem_buy: int = 0
		self.gem_cost: int = 0
		self.gem_seq: int = 0
		self.guide_flag: list = []
		self.iap_promote_num: int = 0
		self.idfa: str = ""
		self.is_npc: int = 0
		self.kf_lv: int = 0
		self.last_svr: int = 0
		self.login_time: int = 0
		self.rating_gem: int = 0
		self.rating_switch: int = 0
		self.uid: int = 0
		self.utime: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_login'].keys():
				self.__dict__[init_table] = data['svr_login'][init_table]


class SvrMysteryGift(object):
	def __init__(self):
		self.end_time: int = 0
		self.reward: list = []

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_mystery_gift'].keys():
				self.__dict__[init_table] = data['svr_mystery_gift'][init_table]


class SvrPlayer(object):
	def __init__(self):
		self.aid: int = 0
		self.al_nick_name: str = ""
		self.al_stat: list = []
		self.alname: str = ""
		self.alpos: int = 0
		self.avatar: int = 0
		self.bandit_win_lv: int = 0
		self.birthday: int = 0
		self.can_invite: int = 0
		self.city_pos: int = 0
		self.cname: str = ""
		self.csid: int = 0
		self.ctime: int = 0
		self.dragon: dict = {}
		self.energy: int = 0
		self.evil_force_kill: int = 0
		self.evil_troop_kill: int = 0
		self.exp: int = 0
		self.finish_guide_list: list = []
		self.force: int = 0
		self.force_got: int = 0
		self.force_kill: int = 0
		self.guide_id: int = 0
		self.has_dragon: int = 0
		self.is_sking: int = 0
		self.key: dict = {}
		self.ksid: int = 0
		self.last_rev_energy_time: int = 0
		self.level: int = 0
		self.reinforce: list = []
		self.req_al: int = 0
		self.res_time: int = 0
		self.rev_energy_time_span: int = 0
		self.sid: int = 0
		self.sk_score: dict = {}
		self.status: int = 0
		self.title: list = []
		self.uid: int = 0
		self.uname: str = ""
		self.utime: int = 0
		self.vip_etime: int = 0
		self.vip_level: int = 0
		self.vip_point: int = 0
		self.vip_stage: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_player'].keys():
				self.__dict__[init_table] = data['svr_player'][init_table]


class SvrResource(object):
	def __init__(self):
		self.production: dict = {}
		self.resource: list = []

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_resource'].keys():
				self.__dict__[init_table] = data['svr_resource'][init_table]


class SvrSummonInfo(object):
	def __init__(self):
		self.free_normal_num: int = 0
		self.next_advanced_enabled_time: int = 0
		self.next_normal_cooldown_time: int = 0
		self.show_cornermark: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_summon_info'].keys():
				self.__dict__[init_table] = data['svr_summon_info'][init_table]


class SvrTask(object):
	def __init__(self):
		self.completed_tasks: list = []
		self.completed_tasks_num: int = 0
		self.corner_mark: int = 0
		self.is_open: int = 0
		self.normal_tasks: list = []
		self.recommended_task: dict = {}

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_task'].keys():
				self.__dict__[init_table] = data['svr_task'][init_table]


class SvrThroneInfoNew(object):
	def __init__(self):
		self.alid: int = 0
		self.buff: list = []
		self.pos: int = 0
		self.reinforce_limit: int = 0
		self.reinforce_num: int = 0
		self.reinforce_troop_limit: int = 0
		self.reinforce_troop_num: int = 0

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_throne_info_new'].keys():
				self.__dict__[init_table] = data['svr_throne_info_new'][init_table]


class SvrTroop(object):
	def __init__(self):
		self.live_troop: list = []
		self.live_troop_num: int = self.__get_live_troop_num()
		self.total_troop: int = 0
		self.troop: list = []
		self.troop_wounded: list = []

	def update_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data['svr_troop'].keys():
				self.__dict__[init_table] = data['svr_troop'][init_table]

	def get_troop_num_in_city(self, troop_id: int):
		if troop_id >= len(self.troop):
			return 0
		else:
			return self.troop[troop_id]

	def __get_live_troop_num(self):
		live_num = 0
		for troop_id_num in self.live_troop:
			live_num += troop_id_num
		return live_num


class HeroInfo(object):
	def __init__(self, hero_data):
		self.exp = hero_data["exp"]
		self.lv = hero_data["lv"]
		self.march_size = hero_data["march_size"]
		self.star_lv = hero_data["star_lv"]
		self.status = hero_data["status"]  # 1代表出去了,0代表在城里
		self.tid = hero_data["tid"]


class ArrestDragonInfo(object):
	def __init__(self, dragon_datas):
		self.can_kill = dragon_datas["can_kill"]
		self.uid = dragon_datas["uid"]
		self.al_nick = dragon_datas["al_nick"]
		self.uname = dragon_datas["uname"]
		self.dragon_level = dragon_datas["dragon_lv"]
		self.dragon_status = dragon_datas["dragon_status"]
		self.can_kill_time = dragon_datas["can_kill_time"]


class ActionBasicInfo(object):
	def __init__(self, action_basic_data=None):
		self.action_id: int = 0
		self.source_user_id: int = 0
		self.source_city_pos: int = 0
		self.source_alliance_id: int = 0
		self.target_user_id: int = 0
		self.target_position: int = 0

		self.target_alliance_id = 0
		self.begin_time = 0
		self.cost_time = 0
		self.end_time = 0
		self.action_type = 0
		self.action_status = 0
		self.can_help_num = 0
		self.helped_num = 0
		try:
			if action_basic_data is not None and isinstance(action_basic_data, list):
				self.__on_init(action_basic_data=action_basic_data)
		except IndexError:
			logging.error("ActionBasicInfo Init Error,IndexError")

	def __on_init(self, action_basic_data: list):
		self.action_id: int = action_basic_data[0]
		self.source_user_id: int = action_basic_data[1]
		self.source_city_pos: int = action_basic_data[2]
		self.source_alliance_id: int = action_basic_data[3]
		self.target_user_id: int = action_basic_data[4]
		self.target_position = action_basic_data[5]

		self.target_alliance_id = action_basic_data[6]
		self.begin_time = action_basic_data[7]
		self.cost_time = action_basic_data[8]
		self.end_time = action_basic_data[9]
		self.action_type = action_basic_data[10]
		self.action_status = action_basic_data[11]
		self.can_help_num = action_basic_data[12]
		self.helped_num = action_basic_data[13]


class ActionInfo(object):
	def __init__(self, action_data_value: dict = None):
		self.basic: ActionBasicInfo = ActionBasicInfo()
		self.name_info: dict = {}
		self.can_recall: int = -1
		self.hide_notify: int = -1
		self.param: dict = {}
		self.seq: int = -1
		try:
			if action_data_value is not None and isinstance(action_data_value, dict):
				self.__on_init(action_data_value=action_data_value)
		except ValueError:
			logging.error("ActionInfo Init Error,ValueError")

	def __on_init(self, action_data_value: dict):
		self.basic = ActionBasicInfo(action_data_value["basic"])
		self.name_info = action_data_value["name_info"]
		self.can_recall = action_data_value["can_recall"]
		self.hide_notify = action_data_value["hide_notify"]
		self.param = action_data_value["param"]
		self.seq = action_data_value["seq"]


class UserData(object):
	def __init__(self):
		self.svr_action_list: dict = {}
		self.svr_active_kingdom_buff: dict = {}
		self.svr_al_action_list: dict = {}
		self.svr_al_p_action_list: dict = {}
		self.svr_al_throne_svr_list: list = []
		self.svr_all_kingdom_title_info: dict = {}
		self.svr_alliance = SvrAlliance()
		self.svr_altar = SvrAltar()
		self.svr_bag = SvrBag()
		self.svr_betting_list: list = []
		self.svr_blacklist: list = []
		self.svr_bookmark_list: list = []
		self.svr_broadcast_new: dict = {}
		self.svr_buff: list = []
		self.svr_buff_base: list = []
		self.svr_buff_base_with_dragon: list = []
		self.svr_buff_hero_assign_effect: dict = {}
		self.svr_buff_hero_global_effect: dict = {}
		self.svr_buff_source_detail = SvrBuffSourceDetail()
		self.svr_buff_without_dragon: list = []
		self.svr_building = SvrBuilding()
		self.svr_castle_image_new: dict = {}
		self.svr_client_show_flag: list = []
		self.svr_compute_res: dict = {}
		self.svr_crystal: dict = {}
		self.svr_daily_login = SvrDailyLogin()
		self.svr_dragon_image: dict = {}
		self.svr_dragon_monster_skill: dict = {}
		self.svr_dragon_plan: dict = {}
		self.svr_dragon_skill: dict = {}
		self.svr_equip: dict = {}
		self.svr_equip_gride = SvrEquipGride()
		self.svr_event_info: dict = {}
		self.svr_event_reward_window: list = []
		self.svr_ex_queue: dict = {}
		self.svr_fort = SvrFort()
		self.svr_fragment: dict = {}
		self.svr_gem_mine: dict = {}
		self.svr_hero: dict = {}
		self.svr_hero_defend_info = SvrHeroDefendInfo()
		self.svr_iap_card: dict = {}
		self.svr_idol_detail_info: dict = {}
		self.svr_idol_info: list = []
		self.svr_login = SvrLogin()
		self.svr_lord_skill: dict = {}
		self.svr_mail_cornermark: dict = {}
		self.svr_mail_rewards: dict = {}
		self.svr_maintain_time: dict = {}
		self.svr_material: dict = {}
		self.svr_mystery_gift = SvrMysteryGift()
		self.svr_op_gift: dict = {}
		self.svr_p_action_list: dict = {}
		self.svr_parts: dict = {}
		self.svr_player = SvrPlayer()
		self.svr_prison: list = []
		self.svr_random_reward_info: list = []
		self.svr_rank_info: dict = {}
		self.svr_research: dict = {}
		self.svr_resource = SvrResource()
		self.svr_reward_window: dict = {}
		self.svr_reward_window_new: list = []
		self.svr_scroll_star_list: dict = {}
		self.svr_soul: dict = {}
		self.svr_sp_crystal: dict = {}
		self.svr_summon_info = SvrSummonInfo()
		self.svr_summon_result: dict = {}
		self.svr_task = SvrTask()
		self.svr_throne_info_new = SvrThroneInfoNew()
		self.svr_tips: list = []
		self.svr_title_new = []
		self.svr_troop = SvrTroop()
		self.svr_unlock_lord_image: list = []
		self.svr_user_betting: dict = {}
		self.svr_user_link: list = []

	def update_user_data(self, data: dict):
		for init_table in self.__dict__.keys():
			if init_table in data.keys():
				if type(self.__dict__[init_table]) == dict or type(self.__dict__[init_table]) == list:
					self.__dict__[init_table] = data[init_table]
				else:
					self.__dict__[init_table].update_data(data)

	def get_base_buff_by_id(self, buff_id: int):
		buff_data = self.svr_buff_base
		if buff_id >= len(buff_data):
			return 0
		else:
			return buff_data[buff_id]

	def get_base_buff_with_dragon_by_id(self, buff_id: int):
		buff_data = self.svr_buff_base_with_dragon
		if buff_id >= len(buff_data):
			return 0
		else:
			return buff_data[buff_id]

	def get_hero_info_by_id(self, hero_id):
		hero_id = str(hero_id)
		if self.svr_hero == {}:
			return 0
		if hero_id not in self.svr_hero.keys():
			return 0
		else:
			return HeroInfo(self.svr_hero[hero_id])

	def get_hero_list(self) -> list:
		if self.svr_hero == {}:
			return []
		else:
			return list(self.svr_hero.keys())

	def get_person_action_id_by_type(self, action_type) -> list:
		actions = []
		for action_id, action_detail in self.svr_action_list.items():
			if action_detail["basic"][10] == action_type:
				actions.append(action_id)
		return actions

	def get_al_action_id_by_type(self, action_type) -> list:
		actions = []
		for action_id, action_detail in self.svr_al_action_list.items():
			if action_detail["basic"][10] == action_type:
				actions.append(action_id)
		return actions

	def get_all_action_id_by_type(self, action_type) -> list:
		action_data = {}
		action_data.update(self.svr_p_action_list)
		action_data.update(self.svr_al_p_action_list)
		action_data.update(self.svr_action_list)
		action_data.update(self.svr_al_p_action_list)
		actions = []
		for action_id, action_detail in action_data.items():
			if action_detail["basic"][10] == action_type:
				actions.append(action_id)
		return actions


class DataManage(object):

	def __init__(self):
		self.__robots_uid = []
		self.users_data = self.__on_init()

	def __on_init(self):
		users_data = {}
		for robot_uid in self.__robots_uid:
			users_data[robot_uid] = UserData()
		return users_data

	def update_user_data(self, data):
		if data.uid in self.users_data:
			self.users_data[data.uid].update_user_data(data.res_data)
		else:
			self.users_data[data.uid] = UserData()
			self.users_data[data.uid].update_user_data(data.res_data)

	def init_user_data(self, uid: int) -> UserData:
		if uid not in self.users_data:
			self.users_data[uid] = UserData()
			return self.users_data[uid]
		else:
			return self.users_data[uid]


data_manage = DataManage()
