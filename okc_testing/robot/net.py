#!/usr/bin/python3
# -*- coding: utf-8 -*-

import config
import time
import requests
import logging

from robot.data import data_pool, Response, error_table


class OkcRequest(object):
	
	def __init__(self):
		self.__request_url = str()
		self.__request_interval = config.request_interval
	
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
			try:
				request_result = requests.get(self.__request_url)
				if request_result.status_code == 200:
					response = Response(request_result.json())
					response.url = self.__request_url
					return response
				else:
					response = Response()
					response.url = self.__request_url
					return response
			except requests.exceptions.ConnectionError:
				logging.error("connection server error")
				return Response()
		else:
			logging.warning("Unrealized.")
	
	def get(self, **kwargs) -> Response:
		response = self.__okc_request(**kwargs)
		command = kwargs["command"]
		if response.is_right_ret_code:
			if command == "map_get":
				data_pool.svr_data_pool.update_map_data(response)
			elif command == "player_info_get":
				data_pool.svr_data_pool.update_player_data(response)
			elif command == "get_throne_info":
				data_pool.svr_data_pool.update_throne_data(response)
			else:
				data_pool.svr_data_pool.update_svr_data(response)
		else:
			error_id = int(response.ret_code)
			error_info = error_table.get_error(error_id)
			logging.error("%s - %s" % (error_id, error_info))
		
		return response


request = OkcRequest()
