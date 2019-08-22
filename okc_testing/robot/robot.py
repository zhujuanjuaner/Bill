#!/usr/bin/python3
# -*- coding: utf-8 -*-
from robot.protocol import Protocol
from robot.data import SvrData


class Robot(object):
	def __init__(self, sid: int, uid: int = 0, ksid: int = 0):
		self.sid = sid
		self.uid = uid
		self.ksid = ksid
		
		self.protocol = Protocol(sid=self.sid, uid=self.uid, ksid=self.ksid)
		
		if self.ksid == 0:
			self.ksid = sid
		
		if uid <= 0:
			self.uid = self.protocol.create_account()
			if self.uid == -1:
				return
			self.protocol = Protocol(sid=self.sid, uid=self.uid, ksid=self.ksid)
		
		self.has_login = self.__has_login()
		
		self.data = SvrData(uid=self.uid)
	
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
