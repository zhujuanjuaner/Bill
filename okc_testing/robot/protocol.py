#!/usr/bin/python3
# -*- coding: utf-8 -*-
from robot.net import request, Response


class Protocol(object):
	def __init__(self, sid, uid, ksid):
		self.__sid = sid
		self.__uid = uid
		self.__ksid = ksid
	
	def request(self, **kwargs) -> Response:
		kwargs["ksid"] = self.__ksid
		kwargs["sid"] = self.__sid
		kwargs["uid"] = self.__uid
		request_result = request.get(**kwargs)
		
		return request_result
	
	def create_account(self) -> int:
		self.__uid = request.get(command="login_get", lg=1, eyou_id="fake-aeea67-63694419400213").uid
		self.guide_finish()
		self.guide_finish_stage()
		return self.__uid
	
	def guide_finish(self):
		return self.request(command="guide_finish")
	
	def guide_finish_stage(self):
		self.request(command="guide_finish_stage", key0=4)
		self.request(command="guide_finish_stage", key0=3)
		self.request(command="guide_finish_stage", key0=6)
	
	def operate_login_get(self):
		return self.request(command="operate_login_get")
