#!/usr/bin/python3
# -*- coding: utf-8 -*-
from robot.svr_data import UserData
from robot.protocol import Protocol
from robot.table_data import game_table
import logging


class Research(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.__request = protocol
		self.get = protocol.request
	
	def __research_upgrade(self, up_type, research_type, target_level, cost, exp=0, req_hep=0):
		"""
		/*
		科技升级
		command = research_upgrade
		key0 = upgrade type(0: normal, 1: instant(材料足够,消耗材料), 2: buy(材料不足,不消耗材料))
		key1 = research type
		key2 = target level
		key3 = gem cost or cost time
		key4 = exp
		key5 = 是否直接req help
		*/
		"""
		return self.get(command="research_upgrade", key0=up_type, key1=research_type, key2=target_level, key3=cost,
						key4=exp, key5=req_hep)
