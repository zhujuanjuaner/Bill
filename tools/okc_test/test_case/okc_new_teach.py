#!/usr/bin/python3
# -*- coding: utf-8 -*-

from okc_test.ui.okc_ui_test import okc_ui_test
import threading
import logging
import time


def create_account():
	okc_ui_test.update_ui_node()
	
	# if not okc_ui_test.update_is_in_the_game():
	okc_ui_test.new_account()
	okc_ui_test.choose_environment()
	
	dialogue = "operate_button"
	arrow = "focus_light"
	
	new_teach_step = 0
	failed_count = 30
	
	while failed_count > 0:
		if okc_ui_test.find_ui_node(dialogue):
			okc_ui_test.click_by_node_name(dialogue)
			new_teach_step += 1
			logging.info("step index : %s , ui node name : %s" % (new_teach_step, dialogue))
			failed_count = 30
			continue
		elif okc_ui_test.find_ui_node(arrow):
			okc_ui_test.click_by_node_name(arrow)
			new_teach_step += 1
			logging.info("step index : %s , ui node name : %s" % (new_teach_step, arrow))
			failed_count = 30
			continue
		else:
			logging.info("failed_count: %s " % failed_count)
			failed_count -= 1
		time.sleep(1)


"""
step = {
	1: "operate_button",
	2: "operate_button",
	3: "operate_button",
	4: "operate_button",
	5: "operate_button",
	6: "operate_button",
	8: "btn_focus",
	9: "btn_focus",
	10: "btn_focus",
	11: "btn_focus",
	13: "operate_button",
	14: "operate_button",
	15: "btn_focus",
	16: "btn_focus",
	17: "btn_focus",
	18: "btn_focus",
	19: "operate_button",
	20: "operate_button",
	21: "btn_focus",
	22: "btn_focus",
	23: "btn_focus",
	24: "btn_focus",
	25: "operate_button",
	26: "btn_focus",
	27: "collect_btn",
	28: "operate_button",
	29: "operate_button",
	30: "btn_focus",
	31: "btn_focus",
	32: "operate_button",
	33: "btn_focus",
	34: "operate_button",
	35: "btn_focus",
	36: "btn_focus",
	37: "btn_focus",
	38: "operate_button",
	39: "operate_button",
	40: "btn_focus",
	41: "operate_button",
	42: "btn_focus",
	43: "btn_focus",
	44: "operate_button",
	45: "btn_focus",
	46: "btn_focus",
	47: "btn_focus",
	48: "operate_button",
	49: "btn_focus",
	50: "btn_focus",
	51: "btn_focus",
	52: "btn_focus",
	53: "btn_focus",
	54: "btn_focus",
	55: "btn_focus",
	56: "focus_light"
}
	okc_ui_test.login(is_new_account=True)
	
	guide_task = threading.Thread(target=guide, name="guide", args=())
	guide_task.join()
	guide_task.start()
"""
