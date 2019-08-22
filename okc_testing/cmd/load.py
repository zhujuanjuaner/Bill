#!/usr/bin/python3
# -*- coding: utf-8 -*-

from util import write_json_file, read_json_file
import os
import logging
import config

from robot import Robot


class LoadRobot(object):
	def __init__(self, sid: int = 0, start_uid: int = 0, robot_num: int = 0):
		self.__sid: int = sid
		self.__start_uid: int = start_uid
		self.__robots_num: int = robot_num
		self.robot_object_list = list()
		self.__robots_data = dict()
		self.__init_robots()
	
	def __init_robots(self):
		value_count = 0
		if self.__start_uid > 0:
			uid_list = list()
			for uid in [uid for uid in range(self.__start_uid, self.__start_uid + self.__robots_num)]:
				player = Robot(sid=self.__sid, uid=uid, ksid=self.__sid)
				if player.has_login:
					self.robot_object_list.append(player)
					uid_list.append(uid)
					value_count += 1
				else:
					logging.error("%s login failed" % uid)
		else:
			uid_list = []
			robot_count = 0
			while robot_count < self.__robots_num:
				player = Robot(sid=self.__sid, uid=0, ksid=self.__sid)
				if player.has_login:
					self.robot_object_list.append(player)
					uid_list.append(player.uid)
					value_count += 1
				else:
					logging.error("create account failed")
				robot_count += 1
		logging.info("login success num: %s ; total num : %s" % (value_count, self.__robots_num))
		try:
			self.__robots_data = read_json_file(file_path=config.robots_json_data_path)
		except FileNotFoundError:
			self.__robots_data[str(config.okc_environment)] = {str(self.__sid): uid_list}
		logging.info("robots_data : %s" % self.__robots_data)
		try:
			old_uid = set(self.__robots_data[str(config.okc_environment)][str(self.__sid)])
			new_uid = set(uid_list)
			self.__robots_data[str(config.okc_environment)][str(self.__sid)] = list(old_uid | new_uid)
		except KeyError:
			import traceback
			logging.error(traceback.print_exc())
		
		last_load = {"env": config.okc_environment, "kingdom": self.__sid, "sid": self.__sid, "uid": uid_list}
		self.__robots_data["last_load"] = last_load
		write_json_file(file_path=config.robots_json_data_path, data=self.__robots_data)
	
	def executive_order(self, order, **kwargs):
		scs_count = 0
		for robot in self.robot_object_list:
			if order(**kwargs):
				scs_count += 1
			else:
				logging.error("%s failed" % robot.uid)
		
		logging.info("success num: %s ; total num : %s" % (scs_count, len(self.robot_object_list)))
