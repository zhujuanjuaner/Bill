#!/usr/bin/python3
# -*- coding: utf-8 -*-
from robot.data import data_pool
from robot.data.svr_data_class import SvrPlayer


class SvrData(object):
	def __init__(self, uid):
		self.__uid = uid
	
	def get_svr_player(self):
		return SvrPlayer(data_pool.svr_data_pool.get_svr_data(self.__uid)["svr_player"])


