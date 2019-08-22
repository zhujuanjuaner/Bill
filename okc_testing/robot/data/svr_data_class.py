#!/usr/bin/python3
# -*- coding: utf-8 -*-
import logging


class SvrPlayer(object):
	def __init__(self, player_data):
		self.aid = int()
		self.al_nick_name = str()
		self.al_stat = list()
		self.alname = str()
		self.alpos = int()
		self.avatar = int()
		self.bandit_win_lv = int()
		self.can_invite = int()
		self.city_pos = int()
		self.cname = str()
		self.csid = int()
		self.ctime = int()
		self.dragon = dict()
		self.energy = int()
		self.evil_force_kill = int()
		self.evil_troop_kill = int()
		self.exp = int()
		self.finish_guide_list = list()
		self.force = int()
		self.force_got = int()
		self.force_kill = int()
		self.guide_id = int()
		self.has_dragon = int()
		self.is_sking = int()
		self.key = dict()
		self.ksid = int()
		self.last_rev_energy_time = int()
		self.level = int()
		self.reinforce = list()
		self.req_al = int()
		self.res_time = int()
		self.rev_energy_time_span = int()
		self.sid = int()
		self.sk_score = dict()
		self.status = int()
		self.title = list()
		self.uid = int()
		self.uname = str()
		self.utime = int()
		self.vip_etime = int()
		self.vip_level = int()
		self.vip_point = int()
		self.vip_stage = int()
		
		self.__init_data(data=player_data)
		self.dragon = self.__get_dragon_data()
	
	def __init_data(self, data):
		for init_table in self.__dict__.keys():
			if init_table in data.keys():
				self.__dict__[init_table] = data[init_table]
			else:
				logging.warning("%s not in svr_data" % init_table)
	
	def __get_dragon_data(self):
		class DragonNickData(object):
			def __init__(self, dragon_data):
				self.action_id = 0
				self.avatar = 0
				self.dragon_image = 0
				self.energy = 0
				self.equip = {}
				self.exp = 0
				self.killed_info = None
				self.last_recovery_time = 0
				self.lv = 0
				self.name = ""
				self.plan_id = 0
				self.rev_energy_time_span = 2
				self.status = 0
				
				self.__init_data(data=dragon_data)
			
			def __init_data(self, data):
				for init_table in self.__dict__.keys():
					if init_table in data.keys():
						self.__dict__[init_table] = data[init_table]
					else:
						logging.warning("%s not in svr_data" % init_table)
		
		return DragonNickData(dragon_data=self.dragon)
