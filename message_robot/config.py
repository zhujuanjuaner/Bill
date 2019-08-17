# -*- coding: utf-8 -*-

url = {
	"douyu": "https://www.douyu.com",
	"huya": "https://www.huya.com/"
}

# #### 默认请求间隔时间
request_wait_time = 1
# #### 两次弹幕发送间隔时间
send_text_wait_time = 60


class Platform(object):
	"""
	此为平台枚举,不要在任意地方更改
	避免使用Enum,控制包大小
	"""
	DOU_YU = 0
	HU_YA = 1


# #### 是否全平台发送弹幕
is_request_all_plat_form = True
# #### 初始平台
plat_form = Platform.HU_YA

# #### 是否全游戏发送弹幕
is_request_all_game = True
