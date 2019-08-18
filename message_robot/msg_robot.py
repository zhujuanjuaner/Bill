#!/usr/bin/python3
# -*- coding: utf-8 -*-
import os
import config
import requests
import util
import logging
import bs4
import json
import time

from selenium import webdriver


class ConfigManager(object):

	@classmethod
	def set_request_wait_time(cls, request_wait_time):
		config.request_wait_time = request_wait_time

	@classmethod
	def set_send_text_wait_time(cls, send_text_wait_time):
		config.send_text_wait_time = send_text_wait_time

	@classmethod
	def set_is_request_all_plat_form(cls, is_request_all_plat_form):
		config.is_request_all_plat_form = is_request_all_plat_form

	@classmethod
	def set_is_request_all_game(cls, is_request_all_game):
		config.is_request_all_game = is_request_all_game


config_manage = ConfigManager()


class UrlGenerator(object):

	def __init__(self):
		self.browser = webdriver.PhantomJS()

		self.directory_games = dict()

		# 有效斗鱼房间列表 - 不包含已经拥有工会或者官方直播间
		self.douyu_rooms = list()

		# 有效虎牙房间列表 - 不包含已经拥有工会或者官方直播间
		self.huya_rooms = list()
		self.__get_douyu_rooms()

	def __get_douyu_rooms(self):
		# 获取斗鱼平台直播的所有房间
		self.browser.get(config.douyu.base_url + "/directory")

		# util.write_data(write_path=config.douyu.directory_path, data=self.browser.page_source)

		soup_menu = bs4.BeautifulSoup(self.browser.page_source, "html.parser")

		for data in soup_menu.select("script"):
			data = str(data)
			if "DATA" in data:
				data = data.split("var $DATA =")[-1].split(";")[0]
				self.directory_games = json.loads(data)
				print(self.directory_games)

		# 所有游戏类型,包含游戏名称列表
		category_list = self.directory_games["firstCategory"]

		# 游戏名称 eg.LOL
		game_relative_path_list = []
		game_url_list = []

		for category in category_list:
			for relative in category["secondCategory"]:
				game_relative_path_list.append(relative["cate2Url"])

		for game_relative_path in game_relative_path_list:
			url = config.douyu.base_url + game_relative_path
			game_url_list.append(url)

		util.write_json_file(os.getcwd() + "\\game_url.json", data=game_url_list)

		# 获取房间号
		# TODO 获取房间属性 -- 关注量，名称等等，用于实现筛选功能，过滤官方直播间。可用class 描述属性实现
		for game_url in game_url_list:
			time.sleep(config.request_wait_time)
			game_url_result = requests.get(game_url)
			if game_url_result.status_code == 200:
				logging.info("%s 访问成功" % game_url)
			else:
				logging.error("%s 访问失败" % game_url)
				continue
			soup_game = bs4.BeautifulSoup(game_url_result.text, "html.parser")

			game_room_list = soup_game.select(".layout-Cover-item")

			for game_room in game_room_list:
				self.douyu_rooms.append("%s/%s" % (config.douyu.base_url, game_room.select("a")[0].get("href")))

		logging.info("斗鱼旗下所有直播间的数量为 : %s" % len(self.douyu_rooms))
		util.write_json_file(os.getcwd() + "\\room_url.json", data=self.douyu_rooms)


url_pool = UrlGenerator()
