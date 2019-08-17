#!/usr/bin/python3
# -*- coding: utf-8 -*-
import config
import time
import requests
import logging
import util

from robot.svr_data import data_manage
from robot.table_data import error_table


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


class OkcRequest(object):
	
	def __init__(self):
		self.__request_url = str()
		self.__request_interval = config.request_interval
		self.__log_path = config.okc_log_path[config.okc_environment]
		t_now = str(time.strftime("%Y_%m_%d_%H_%M_%S", time.localtime()))
		self.g_logger = util.logger(log_path=self.__log_path, log_name=t_now)
	
	def __okc_request(self, **kwargs):
		time.sleep(self.__request_interval)
		
		if config.okc_request_mode == config.OkcRequestMode.Http.value:
			kwargs["checkac"] = 0
			kwargs["did"] = "moon_test"
			
			if config.okc_environment == config.OkcEnvironment.Online:
				kwargs["did"] = "self-system"
			self.__request_url = config.okc_request_url[config.okc_environment]
			
			for key, value in kwargs.items():
				self.__request_url += "&" + str(key) + "=" + str(value)
			
			request_result = requests.get(self.__request_url)
			if request_result.status_code == 200:
				response = Response(request_result.json())
				response.url = self.__request_url
				if response.ret_code == 0:
					self.g_logger.info(
						"sid : %s uid : %s command: %s " % (kwargs["sid"], kwargs["uid"], kwargs["command"]))
				else:
					self.g_logger.error("sid : %s uid : %s command: %s ret code :%s" % (
						kwargs["sid"], kwargs["uid"], kwargs["command"], response.ret_code))
				return response
			else:
				response = Response()
				response.url = self.__request_url
				return response
		else:
			logging.warning("Unrealized.")
	
	def get(self, **kwargs) -> Response:
		response = self.__okc_request(**kwargs)
		if response.is_right_ret_code:
			if kwargs["command"] == "map_get":
				data_manage.update_map_data(svr_map_data=response.res_data)
			elif kwargs["command"] == "player_info_get":
				data_manage.update_player_data(response.res_data)
			else:
				data_manage.update_user_data(data=response)
		else:
			error_id = int(response.ret_code)
			error_info = error_table.get_error(error_id)
			logging.error("%s - %s" % (error_id, error_info))
		
		return response


request = OkcRequest()
