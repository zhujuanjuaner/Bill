#!/usr/bin/python3
# -*- coding: utf-8 -*-

import threading
import logging
import time
import os
from poco.exceptions import PocoNoSuchNodeException

from okc_test import okc_ui_test


def guide():
	t = str(time.strftime("%Y_%m_%d_%H_%M", time.localtime()))
	image_path = "%snew_teach_%s/" % (okc_ui_test.default_save_path, t)
	os.mkdir(path=image_path)
	dialogue = "operate_button"
	arrow = "btn_focus"
	collect_btn = "collect_btn"
	ok_btn = "ok_btn"
	view_vip_daily_pop = "ViewVipDailyPop"
	global failed_count
	new_teach_step = 0
	failed_count = 0
	while True:
		if failed_count >= 20:
			okc_ui_test.phone.kill_app(okc_ui_test.app_name)
			
			okc_ui_test.start_game()
			break
		if okc_ui_test.find_ui_node(dialogue):
			okc_ui_test.click_by_node_name(dialogue)
			new_teach_step += 1
			logging.info("step index : %s , ui node name : %s" % (new_teach_step, dialogue))
			failed_count = 0
			okc_ui_test.get_screenshots(image_name="step_%s" % new_teach_step, save_path=image_path)
			continue
		elif okc_ui_test.find_ui_node(arrow):
			okc_ui_test.click_by_node_name(arrow)
			new_teach_step += 1
			logging.info("step index : %s , ui node name : %s" % (new_teach_step, arrow))
			failed_count = 0
			okc_ui_test.get_screenshots(image_name="step_%s" % new_teach_step, save_path=image_path)
			continue
		elif okc_ui_test.find_ui_node(collect_btn):
			okc_ui_test.click_by_node_name(collect_btn)
			okc_ui_test.get_screenshots(image_name="step_%s" % new_teach_step, save_path=image_path)
			failed_count = 0
		elif okc_ui_test.find_ui_node(view_vip_daily_pop) and okc_ui_test.find_ui_node(ok_btn):
			okc_ui_test.get_screenshots(image_name="step_%s" % new_teach_step, save_path=image_path)
			okc_ui_test.click_by_node_name(ok_btn)
		else:
			failed_count += 1
			logging.info("failed_count: %s " % failed_count)


def ui_test_start():
	guide_task = threading.Thread(target=guide, name="guide", args=())
	guide_task.start()
	guide_task.join()


def create_account():
	new_teach_count = 0
	while True:
		new_teach_count += 1
		logging.info("第%s次新手开始" % new_teach_count)
		okc_ui_test.login(is_new_account=True)
		guide()
