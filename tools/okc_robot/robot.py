#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.protocol import Protocol
from okc_robot.data import data_manage
import okc_robot.module as cmd


class Robot(object):
	def __init__(self, sid: int, uid: int = 0, ksid: int = 0):
		self.sid = sid
		self.uid = uid
		self.ksid = ksid
		
		self.protocol = Protocol(sid=self.sid, uid=self.uid, ksid=self.ksid)
		
		self.protocol.logger.debug("-" * 60)
		
		if self.ksid == 0:
			self.ksid = sid
		
		if uid <= 0:
			self.uid = self.protocol.create_account()
			if self.uid == -1:
				return
			self.protocol = Protocol(sid=self.sid, uid=self.uid, ksid=self.ksid)
		
		self.has_login = self.__has_login()
		
		self.data = data_manage.init_user_data(uid=self.uid)
		
		self.cmd_user = cmd.User(user_data=self.data, protocol=self.protocol)
		self.cmd_dragon = cmd.Dragon(user_data=self.data, protocol=self.protocol)
		self.cmd_map = cmd.Map(user_data=self.data, protocol=self.protocol)
		self.cmd_alliance = cmd.Alliance(user_data=self.data, protocol=self.protocol)
		self.cmd_build = cmd.Building(user_data=self.data, protocol=self.protocol)
		
		self.protocol.logger.info("sid : %s ; uid : %s ; ksid : %s" % (self.sid, self.uid, self.ksid))
		
		print("-" * 150)
	
	def __has_login(self) -> bool:
		login_get = self.protocol.operate_login_get()
		if login_get.ret_code == 1:
			self.uid = self.protocol.create_account()
			if self.uid != -1:
				return True
			else:
				return False
		else:
			if login_get.is_right_ret_code:
				return True
			else:
				return False
