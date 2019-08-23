# -*- coding: utf-8 -*-
import util
import os

conf_path = os.path.join(os.getcwd(), "resource/conf.ini")
logo_path = util.get_ini_data(ini_path=conf_path, section="path", section_item="logo_path")

view_title = "弹幕机器人 ----------------- Bill Is Most Handsome Of The World -----------------"
parting_line = "-" * 200
# #### 默认请求间隔时间
request_wait_time = 1
# #### 两次弹幕发送间隔时间
send_text_wait_time = 60


class Platform(object):
	"""
	此为平台枚举,不要在任意地方更改
	避免使用Enum,控制包大小
	"""
	ALL = 0
	DOU_YU = 1
	HU_YA = 2


class Params(object):
	# #### 初始平台
	plat_form = Platform.ALL

	# # #### 是否全平台发送弹幕
	# is_request_all_plat_form = True
	#
	# # #### 是否全游戏发送弹幕
	# is_request_all_game = True
