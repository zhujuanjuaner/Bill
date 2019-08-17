#!/usr/bin/python3
# -*- coding: utf-8 -*-
import bs4
import requests
import time
import util


class UrlPool(object):
	pass


if __name__ == "__main__":
	base_url = "https://www.douyu.com"
	menu_path = "/directory"
	print(base_url + menu_path)
	game_url_list = []
	room_url_list = []
	result = requests.get(base_url + menu_path)
	print(result.url, result.status_code)
	
	soup_menu = bs4.BeautifulSoup(result.text, from_encoding="uft-8")
	link_list = soup_menu.select('.Aside-menu-item')
	for link in link_list:
		game_url_list.append("%s/%s" % (base_url, link.get("href")))
	
	for game_url in game_url_list:
		time.sleep(0.1)
		game_url_result = requests.get(game_url)
		print(game_url_result.url, game_url_result.status_code)
		soup_game = bs4.BeautifulSoup(game_url_result.text, from_encoding="uft-8")
		room_list = soup_game.select(".authorSpecial-item")
		for room in room_list:
			room_url_list.append("%s/%s" % (base_url, room.select("a")[0].get("href")))
	
	print(len(room_url_list))
	import os
	
	util.write_json_file(os.getcwd() + "\\url.txt", data=room_url_list)
	for room_url in room_url_list:
		print(room_url)
