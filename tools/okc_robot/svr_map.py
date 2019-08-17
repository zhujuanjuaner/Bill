#!/usr/bin/python3
# -*- coding: utf-8 -*-
import logging


class PlotInfo(object):
	def __init__(self, position_data):
		self.pos = position_data[0]
		self.bid = position_data[1]
		self.type = position_data[2]
		self.level = position_data[3]
		self.status = position_data[4]
		self.force = position_data[5]
		self.force_kill = position_data[6]
		self.uid = position_data[7]
		self.player_name = position_data[8]
		self.aid = position_data[9]
		self.al_name = position_data[10]
		self.city_name = position_data[11]
		self.the_rest = position_data[12]
		self.wild_type = position_data[13]
		self.player_avatar = position_data[14]
		self.is_center_plot = position_data[15]
		self.al_nick_name = position_data[16]
		self.block_num = position_data[17]
		self.smoking_end_time = position_data[18]
		self.monster_life_left = position_data[19]
		self.plot_end_time = position_data[20]
		self.svr_id = position_data[21]
		self.svr_name = position_data[22]
		self.prison_is_empty = position_data[23]
		self.file_end_time = position_data[24]
		self.reinforce_num_limit = position_data[25]
		self.age = position_data[26]
		self.vip_lv = position_data[27]
		self.vip_end_time = position_data[28]
		self.al_pos = position_data[29]
		self.lord_level = position_data[30]
		self.protect_end_time = position_data[31]
		self.center_pos = position_data[32]
		self.has_moved = position_data[33]
		self.occupy_person_num = position_data[34]
		self.ksid = position_data[35]
		self.city_skin_id = position_data[36]
		self.last_login_time = position_data[37]
		self.al_flag = position_data[38]
		self.lair_type = position_data[39]


class SvrMap(object):
	
	def __init__(self, svr_map_data: dict):
		self.map_data: dict = {}
		self.map_action_list: dict = {}
		self.sid_bid_info: dict = {}
		self.__update_data(svr_map_data)
	
	def __update_data(self, svr_map_data: dict):
		if svr_map_data == {}:
			logging.error("svr_map_data is None")
		else:
			self.map_data = svr_map_data["svr_map"]["list"]
			self.map_action_list = svr_map_data["svr_map"]["map_action_list"]
			self.sid_bid_info = svr_map_data["svr_map"]["sid_bid_info"]
	
	def get_positions(self) -> dict:
		if self.map_data == {}:
			return {}
		
		positions: dict = {}
		
		for pos_by_blocks in self.map_data.values():
			positions.update(pos_by_blocks)
		
		return positions
	
	def get_position_info(self, position) -> PlotInfo:
		positions = self.get_positions()
		if str(position) not in positions.keys():
			return PlotInfo({})
		else:
			return PlotInfo(positions[str(position)]["basic"])
	
	def get_positions_by_type(self, position_type) -> list:
		positions = self.get_positions()
		get_positions = []
		for position, position_info in positions.items():
			if PlotInfo(position_info["basic"]).type == position_type:
				get_positions.append(position)
		return get_positions


class PlayerInfo(object):
	def __init__(self, player_data=None):
		self.aid: int = -1
		self.al_nick_name: str = ""
		self.al_stat: dict = {}
		self.alname: str = ""
		self.alpos: int = -1
		self.avatar: int = -1
		self.bandit_win_lv: int = -1
		self.can_invite: int = -1
		self.city_pos: int = -1
		self.cname: str = ""
		self.csid: int = 0
		self.ctime: int = 1555675051
		self.dragon: dict = {}
		self.energy: int = -1
		self.evil_force_kill: int = 0
		self.evil_troop_kill: int = 0
		self.exp: int = 1609
		self.force: int = 598
		self.force_got: int = 0
		self.force_kill: int = 0
		self.has_dragon: int = 0
		self.is_sking: int = -1
		self.key: dict = {}
		self.ksid: int = 0
		self.last_rev_energy_time: int = -1
		self.level: int = 1
		self.reinforce: list = []
		self.req_al: int = 0
		self.res_time: int = -1
		self.rev_energy_time_span: int = 0
		self.sid: int = -1
		self.sk_score: int = -1
		self.status: int = -1
		self.title: list = []
		self.uid: int = -1
		self.uname: str = ""
		self.utime: int = -1
		self.vip_etime: int = -1
		self.vip_level: int = -1
		self.vip_point: int = -1
		self.vip_stage: int = -1
		self.__update_data(player_data)
	
	def __update_data(self, player_data: dict = None):
		if player_data is None:
			return
		else:
			self.aid = player_data["aid"]
			self.al_nick_name = player_data["al_nick_name"]
			self.al_stat = player_data["al_stat"]
			self.alname = player_data["alname"]
			self.alpos = player_data["alpos"]
			self.avatar = player_data["avatar"]
			self.bandit_win_lv = player_data["bandit_win_lv"]
			self.can_invite = player_data["can_invite"]
			self.city_pos = player_data["city_pos"]
			self.cname = player_data["cname"]
			self.csid = player_data["csid"]
			self.ctime = player_data["ctime"]
			self.dragon = player_data["dragon"]
			self.energy = player_data["energy"]
			self.evil_force_kill = player_data["evil_force_kill"]
			self.evil_troop_kill = player_data["evil_troop_kill"]
			self.exp = player_data["exp"]
			self.force = player_data["force"]
			self.force_got = player_data["force_got"]
			self.force_kill = player_data["force_kill"]
			self.has_dragon = player_data["has_dragon"]
			self.is_sking = player_data["is_sking"]
			self.key = player_data["key"]
			self.ksid = player_data["ksid"]
			self.last_rev_energy_time = player_data["last_rev_energy_time"]
			self.level = player_data["level"]
			self.reinforce = player_data["reinforce"]
			self.req_al = player_data["req_al"]
			self.res_time = player_data["res_time"]
			self.rev_energy_time_span = player_data["rev_energy_time_span"]
			self.sid = player_data["sid"]
			self.sk_score = player_data["sk_score"]
			self.status = player_data["status"]
			self.title = player_data["title"]
			self.uid = player_data["uid"]
			self.uname = player_data["uname"]
			self.utime = player_data["utime"]
			self.vip_level = player_data["vip_level"]
			self.vip_point = player_data["vip_point"]
