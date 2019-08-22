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


class SvrDataPool(object):
	def __init__(self):
		self.__svr_data = {}
		self.__map_data = {}
		self.__player_data = {}
		self.__throne_data = {}
	
	def update_svr_data(self, data: Response):
		if int(data.uid) != 0:
			self.__svr_data[str(data.uid)] = data.res_data
		else:
			logging.info("don't update ‘create account’data")
	
	def update_map_data(self, data: Response):
		self.__map_data = data.res_data
	
	def update_player_data(self, data: Response):
		self.__player_data = data.res_data
	
	def update_throne_data(self, data: Response):
		self.__throne_data = data.res_data
	
	def get_svr_data(self, uid):
		uid = str(uid)
		if uid not in self.__svr_data.keys():
			logging.error("no data. uid : %s" % uid)
		else:
			return self.__svr_data[uid]
	
	def get_player_data(self):
		return self.__player_data
	
	def get_map_data(self):
		return self.__map_data
	
	def get_throne_data(self):
		return self.__throne_data


svr_data_pool = SvrDataPool()
