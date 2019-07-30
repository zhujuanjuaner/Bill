#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.data import UserData, ActionInfo
from okc_robot.protocol import Protocol
from okc_robot.net import Response

import okc_robot.okc_enum as Enum
import logging
import random
import string
import util


class Alliance(object):
	
	def __init__(self, user_data: UserData, protocol: Protocol):
		self.__data = user_data
		self.__sid = self.__data.svr_player.sid
		self.__uid = self.__data.svr_player.uid
		self.__ksid = self.__data.svr_player.ksid
		self.__request = protocol
	
	def alliance_join(self, aid: int, is_invite=0):
		if self.__data.svr_player.aid != 0:
			logging.error("You already have a alliance.")
			return Response()
		
		else:
			if self.__data.svr_player.aid != 0:
				logging.error("You already have a alliance.")
				return Response()
			else:
				return self.__request.al_join(aid=aid, is_invite=is_invite)
	
	def alliance_leave(self):
		if self.__data.svr_player.aid == 0:
			logging.error("No Alliance")
			return False
		return self.__request.al_leave()
	
	def alliance_help(self, uid: int):
		if self.__data.svr_player.aid == 0:
			logging.error("%s : 没有联盟，帮个锤子......" % self.__data.svr_player.uid)
			return False
		
		if self.__request.get_player_data(uid=uid).aid != self.__data.svr_player.aid:
			logging.error("和被帮助的玩家不在同一个联盟，帮个锤子....")
			return False
		
		action_data = self.__data.svr_al_action_list
		
		if action_data == {}:
			logging.warning("No Actions")
		
		for a_id, a_info in action_data.items():
			action_info = ActionInfo(a_info)
			can_help_num = action_info.basic.can_help_num
			helped_num = action_info.basic.helped_num
			if can_help_num > helped_num and can_help_num > 0:
				return self.__request.al_help(aid=self.__data.svr_player.aid, action_id=int(a_id))
			else:
				logging.error("can_help_num : %s --- helped_num : %s" % (can_help_num, helped_num))
				return Response()
	
	def alliance_create(self, name):
		# name, desc, lang, nick_name
		if self.__data.svr_player.aid != 0:
			logging.error("给老子的，有联盟了，创个球")
			return False
		name += "%s" % self.__data.svr_player.uid
		nick_name = "".join(random.sample(string.ascii_letters + string.digits, 3))
		desc = "Bill is the most handsome of the world"
		return self.__request.al_create(name=name, desc=desc, lang=0, nick_name=nick_name)
	
	def alliance_assist_send(self, rss_dict: dict):
		aid = self.__data.svr_player.aid
		
		if aid == 0:
			logging.error("no alliance".title())
			return Response
		key0 = 1
		rss_request_num = self.__data.get_base_buff_by_id(Enum.BuffId.MarketRequestResource)
		request_rss_num = 0
		for k, v in rss_dict.items():
			request_rss_num += int(v)
		if request_rss_num > rss_request_num:
			logging.error("Rss request too much")
			return Response
		rss = util.dict_to_str(dict_data=rss_dict, target_list=[x * 0 for x in range(0, 5)])
		coord = self.__data.svr_player.city_pos
		return self.__request.al_assist_send(aid=aid, assist_type=key0, rss_list=rss, cid=coord)
	
	def alliance_wall_msg_add(self, msg=""):
		if self.__data.svr_player.aid == 0:
			logging.error("no alliance".title())
			return False
		if msg == "":
			str_num = random.randint(3, 50)
			msg = "".join(random.sample(string.ascii_letters + string.digits, str_num))
		
		return self.__request.al_wall_msg_add(msg=msg)
