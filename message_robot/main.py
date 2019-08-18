#!/usr/bin/python3
# -*- coding: utf-8 -*-
import bs4
import requests
import time
import util
import config
import os
import json
import pprint
from selenium import webdriver
import bs4

if __name__ == "__main__":



	xpath = '//*[@id="js-player-title"]/div/div[3]/div[3]/div[5]/span'
	# wb = webdriver.PhantomJS()
	# wb.get("https://www.douyu.com/52876")
	# wb.find_element_by_xpath(xpath=xpath)

	# import logging
	#
	# url = "https://passport.douyu.com/index/login?passport_reg_callback=PASSPORT_REG_SUCCESS_CALLBACK&passport_login_callback=PASSPORT_LOGIN_SUCCESS_CALLBACK&passport_close_callback=PASSPORT_CLOSE_CALLBACK&passport_dp_callback=PASSPORT_DP_CALLBACK&type=login&client_id=1&state=https%3A%2F%2Fwww.douyu.com%2F&source=click_topnavi_login"
	#
	# params = {
	# 	"areaCode": "0086",
	# 	"phoneNum": "13510435910",
	# 	"password": "4baaff6b7de8b99179f2ffeb4e64d16d",
	# 	"room_id": "0",
	# 	"code_verify_data[code_type]": "1",
	# 	"code_verify_data[code_token]": "a2406ed74bdf4af0b56f531209cd7ab9",
	# 	"code_verify_data[code_data][geetest_challenge]": "3366cc1021a4397636067b16c1a2890d",
	# 	"code_verify_data[code_data][id]": "9e296fca9afdfa4703b9f4bee02820af",
	# 	"code_verify_data[code_data][gt_version]": "v4",
	# 	"redirect_url": "https://passport.douyu.com/index/login?passport_reg_callback=PASSPORT_REG_SUCCESS_CALLBACK&passport_login_callback=PASSPORT_LOGIN_SUCCESS_CALLBACK&passport_close_callback=PASSPORT_CLOSE_CALLBACK&passport_dp_callback=PASSPORT_DP_CALLBACK&type=login&client_id=1&state=https%3A%2F%2Fwww.douyu.com%2F475252",
	# 	"t": "1566100967988",
	# 	"client_id": "1",
	# 	"sm_did": "WHJMrwNw1k/EB0mjgb166Bc5Vjt+UJbkN5+4PmR4zVoMDJvIo6RbO/FO7T2GHe5b0EiTLYmwBc+ienyjMY7jOg6bPThvPLTQfvBzQ6y/qRr4ILO61cHh9HQ/GllaqVP3BvWdC0QQex8hgHRgAMMmaIj/EMUiZVINRQqQMeoFSGmPCKPWgO9vrCeQ5jKOhar/7qhTTnlO1jlPq6sEop3iSw2udRJSPKqeB5gEfVE2k7lU6G1MxTvqpalc9vi51FtMr/vW8Xl3QJd9NDMFkC520HA==1487582755342",
	# 	"did": "",
	# 	"lang": ""
	# }
	#
	# header = {
	# 	"Accept": "application/json, text/javascript, */*; q=0.01",
	# 	"Origin": "https://passport.douyu.com",
	# 	"X-Requested-With": "XMLHttpRequest",
	# 	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
	# 	"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
	# 	"Referer": "https://passport.douyu.com/index/login?passport_reg_callback=PASSPORT_REG_SUCCESS_CALLBACK&passport_login_callback=PASSPORT_LOGIN_SUCCESS_CALLBACK&passport_close_callback=PASSPORT_CLOSE_CALLBACK&passport_dp_callback=PASSPORT_DP_CALLBACK&type=login&client_id=1&state=https%3A%2F%2Fwww.douyu.com%2Fdirectory%2Fall",
	# 	"Accept-Encoding": "gzip, deflate, br",
	# 	"Accept-Language": "zh-CN,zh;q=0.9",
	# }
	#
	# cookies = {
	# 	"dy_did": "e210be71e4854de7c404861f00001501",
	# 	"acf_did": "e210be71e4854de7c404861f00001501",
	# 	"smidV2": "2019081812001359c7e5f700f42119cbc58ee7ff44ad0200f1ea4edd2e4af50",
	# 	"PHPSESSID": "3prbulbbd2t6lil2504k3clfp2",
	# 	"Hm_lvt_e99aee90ec1b2106afe7ec3b199020a7": "1566056082, 1566099903, 1566107091",
	# 	"Hm_lpvt_e99aee90ec1b2106afe7ec3b199020a7": "1566108091",
	# 	"sm_did": "WC39ZUyXRgdHUGIC38vq07cwTCahiEETj4RcxhPER7fdgPoswWkNLYPwLa47Vwr99mU8nkiKOY8yV9S08GezvTX8K9wijsUeQOQRoGB9HEgDo16hgZws91XmOFg7mZIOpkJlhk % 252FgbBtr8WQCkkJTqhEZ8pCNkGi2yItb53rdVGDi9tTMkkx5iE % 252F0UXWTsybn % 252BAD9XWhrlL36742hCXke9ITv9fVMe7bAHdMoDN % 252FBIFGtzldybvnzj2rl6kK27XCBF1487577677129"
	# }
	# from msg_robot import url_pool

	# chrome = webdriver.Chrome()
	# chrome.get(config.douyu.base_url)
	#
	# time.sleep(2)
	#
	# # chrome.maximize_window()
	#
	# chrome.find_element_by_xpath(xpath='//*[@id="loginbox"]/div[2]/div[2]/div[3]/div/span[2]').click()
	#
	# time.sleep(2)
	# chrome.find_element_by_xpath(xpath='//*[@id="js-header"]/div/div/div[3]/div[7]').click()
	#
	# time.sleep(2)
	#
	# chrome.find_element_by_xpath('//*[@id="loginbox"]/div[2]/div[2]/div[3]/div/span[2]').click()
	# time.sleep(2)
	#
	# phone_num = chrome.find_element_by_xpath('//*[@id="loginbox"]/div[3]/div[2]/div[2]/form/div[1]/div/input')
	# phone_num.send_keys("13510435910")
	# time.sleep(2)
	# password = chrome.find_element_by_xpath('//*[@id="loginbox"]/div[3]/div[2]/div[2]/form/div[3]/input[1]')
	# password.send_keys("mayuanyuaner!520")
	# time.sleep(2)
	# chrome.find_element_by_xpath('//*[@id="loginbox"]/div[3]/div[2]/div[2]/form/div[6]/input').click()
	#
	# print(chrome.get_cookies())

	# u-login fl 登陆/密码登陆/phoneNum/password/登陆

	"""
	# url = "https://passport.douyu.com/iframe/loginNew"
	wb = webdriver.PhantomJS()
	# wb.add_cookie(cookie_dict=cookies)
	wb.get(url)
	phone_num = wb.find_element_by_name(name="phoneNum")
	phone_num.send_keys("13510435910")
	logging.info("phone num ********** %s" % phone_num)
	password = wb.find_element_by_name(name="password")
	password.send_keys("mayuanyuaner!520")
	logging.info("password ************ %s" % password)
	login = wb.find_elements_by_class_name("loginbox-sbt").click()

	logging.info("login ************ %s" % login)

	print(wb.get_cookies())
	"""

# util.write_data(os.getcwd() + "\\login.html", data=wb.page_source)
# wb.get(url)
# login = requests.post(url=url, headers=header, params=params, cookies=cookies)
# print(login.text)
#
# menu_path = "/directory"
# headers = {
# 	"authority": "www.douyu.com",
# 	"method": "GET",
# 	"path": "/directory",
# 	"scheme": "https",
# 	"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
# 	"accept-encoding": "gzip, deflate, br",
# 	"accept-language": "zh-CN,zh;q=0.9",
# 	"cookie": "dy_did=27796e0b45275cd1652254f300091501; acf_did=27796e0b45275cd1652254f300091501; smidV2=20190816225858e034169e6f6a4f00c6479904d7f38b7200264b62577286100; acf_auth=8f99PNQ7MPbjwVsD5A3ktvQrYxguH9X7IqbjmbdPzbdx2lR1rPltzCcGYZYvU6sh1xhOaRl3hjZqwNwF%2BBodBBXIqlh6yEus9brWA0Gzj%2FrvYncqGH9Gr6qI; wan_auth37wan=7055896a7aa3eF2Odcym6lbAwu1QR%2FnKf3ZCqN4KeVwlkbz54XO24phz7DfUrO6UDvWkev5cdl%2BKgsWyFavVfEGLVBKvsRXmewbOLEOpRr8p5n0FIQ; acf_uid=24086399; acf_username=qq_yPOxcnMA; acf_nickname=273339707; acf_own_room=0; acf_groupid=1; acf_phonestatus=1; acf_ct=0; acf_ltkid=46954237; acf_biz=1; acf_stk=66a6e974c9e057c1; acf_avatar=//apic.douyucdn.cn/upload/avatar/face/201603/c40f06465c3222745d3cfa7a12265b3f_; Hm_lvt_e99aee90ec1b2106afe7ec3b199020a7=1565966211,1566041006; PHPSESSID=vu7o1p470en880500trnu8r7i5; acf_ccn=7d28a62aeaeda5fde2e5a10457fdbe6c; Hm_lpvt_e99aee90ec1b2106afe7ec3b199020a7=1566043732",
# 	"cache-control": "max-age=0",
# 	"referer": "https://www.douyu.com/",
# 	"upgrade-insecure-requests": "1",
# 	"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
# }
# """
#
# """
# test = requests.get("https://www.douyu.com/ajax_api_cache").text
# util.write_data(os.getcwd() + "\\text.txt", data=test)
#
# print(base_url + menu_path)
# game_url_list = []
# room_url_list = []
# result = requests.get(base_url + menu_path, headers=headers)
# util.write_data(os.getcwd() + "\\temp.txt", data=result.text)
# print("header:", result.headers, result.url)
# print(result.url, result.status_code)
#
# soup_menu = bs4.BeautifulSoup(result.text, "html.parser")
# # 获取所有分类Item，但是返回的href 为空，暂时使用左侧的列表，TODO
# link_list = soup_menu.select(r'.layout-Classify-item')
# print(link_list)
# print(link_list[0])
# 获取左侧列表
# link_list = soup_menu.select('.Aside-menu-item')

# for link in link_list:
# 	link_url = "%s%s" % (base_url, link.get("href"))
# 	print(link_url)
# 	game_url_list.append(link_url)
#
# print("game item num : %s" % len(game_url_list))
#
# # 用于调试
#
# game_url_result = requests.get(game_url_list[0])
#
# print("game_url_result header:", game_url_result.headers)
#
# soup_game = bs4.BeautifulSoup(game_url_result.text, "html.parser")
#
# game_room_list = soup_game.select(".layout-Cover-item")
#
# print("game room list : %s" % len(game_room_list))
# print("game room list type : %s " % type(game_room_list))
# room = game_room_list[0]
# print(str(room).split("href=")[-1].split(" target=")[0])

# for game_url in game_url_list:
# 	time.sleep(0.1)
# 	game_url_result = requests.get(game_url)
# 	print(game_url_result.url, game_url_result.status_code)
# 	soup_game = bs4.BeautifulSoup(game_url_result.text, from_encoding="uft-8")
# 	room_list = soup_game.select(".authorSpecial-item")
# 	for room in room_list:
# 		room_url_list.append("%s/%s" % (base_url, room.select("a")[0].get("href")))
#
# print(len(room_url_list))
#
#
# util.write_json_file(os.getcwd() + "\\url.txt", data=room_url_list)
# for room_url in room_url_list:
# 	print(room_url)
