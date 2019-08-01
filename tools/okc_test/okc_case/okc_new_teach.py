#!/usr/bin/python3
# -*- coding: utf-8 -*-

from okc_test.ui.okc_ui_test import okc_ui_test
from okc_test.ui.test import ui_test

import util
import config
import logging


def create_account_1():
	task_bar_pos = (200 / 750, 1083 / 1334)
	step = {
		1: "dialogue_continue",
		2: "dialogue_continue",
		3: "dialogue_continue",
		4: "dialogue_continue",
		5: "dialogue_continue",
		6: "dialogue_continue",
		7: "blank_build_cottage",
		8: "blank_build_cottage",
		9: "build_no_time",
		10: "build_have_time",
		11: "dialogue_continue",
		12: "dialogue_continue",
		13: "blank_build_cottage",
		14: "blank_build_farm",
		15: "build_no_time",
		16: "build_have_time",
		17: "dialogue_continue",
		18: "dialogue_continue",
		19: "blank_build_cottage",
		20: "building_castle",
		21: "building_upgrade",
		22: "upgrade_have_time",
		23: "dialogue_continue",
		24: "free"
	}
	
	image_dir = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="okc_test_create_account")
	
	log_text = "click button : "
	
	ui_test.click(image_path=ui_test.get_image_path(image_dir, "button_fake_sdk"))
	logging.info("%s button_fake_sdk" % log_text)
	ui_test.click(image_path=ui_test.get_image_path(image_dir, "button_new"))
	logging.info("%s button_new" % log_text)
	ui_test.click(image_path=ui_test.get_image_path(image_dir, "button_test"))
	logging.info("%s button_test" % log_text)
	
	for steps, image_name in step.items():
		if isinstance(image_name, tuple) or isinstance(image_name, list):
			ui_test.click_by_pos(pos=image_name)
			continue
		if not ui_test.click(ui_test.get_image_path(image_dir, image_name)):
			break
		else:
			continue


def create_account():
	step = {
		1: "operate_button",
		2: "operate_button",
		3: "operate_button",
		4: "operate_button",
		5: "operate_button",
		6: "operate_button",
		7: "btn_focus",
		8: "btn_focus",
		9: "btn_focus",
		10: "btn_focus",
		11: "operate_button",
		12: "operate_button",
		13: "btn_focus",
		14: "btn_focus",
		15: "btn_focus",
		16: "btn_focus",
		17: "operate_button",
		18: "operate_button",
		19: "btn_focus",
		20: "btn_focus",
		21: "btn_focus",
		22: "btn_focus",
		23: "operate_button",
		24: "btn_focus"
	}
	okc_ui_test.update_ui_node()
	okc_ui_test.create_new_account()
	okc_ui_test.choose_environment()
	for k, v in step.items():
		logging.info("step : %s" % k)
		new_pos = okc_ui_test.get_pos_by_node(node_name=v)
		okc_ui_test.click_by_pos(pos=new_pos)
