#!/usr/bin/python3
# -*- coding: utf-8 -*-
import logging


class Response(object):
	def __init__(self, request_data: dict = None):
		self.request_data = request_data
		self.url = str()
		self.ret_code: int = -1
		self.sid: int = -1
		self.uid: int = -1
		self.res_data = {}
		self.__init_data()
		self.is_right_ret_code = self.__get_data_status()

	def __init_data(self):
		if self.request_data is not None:
			self.ret_code = self.request_data["res_header"]["ret_code"]
			self.sid = self.request_data["res_header"]["sid"]
			self.uid = self.request_data["res_header"]["uid"]
			self.res_data = self.request_data["res_data"]
		else:
			logging.error("request data is none".title())

	def __get_data_status(self) -> bool:
		if self.ret_code == 0:
			return True
		else:
			return False
