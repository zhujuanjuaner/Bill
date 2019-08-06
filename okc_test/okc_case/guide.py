#!/usr/bin/python3
# -*- coding: utf-8 -*-
from test_ui_base import okc_ui_test
import time
import os
import logging
from okc_robot import Robot


class Guide(object):
	def __init__(self):
		self.guide_dialogue = "operate_button"
		self.guide_arrow = "btn_focus"
		self.castle_collect_btn = "collect_btn"
		self.vip_ok_btn = "ok_btn"
		
		self.more_btn = "more_btn"
		self.more_main_item = "more_main_item"
		self.debug_btn = "bg"
		
		t = str(time.strftime("%Y_%m_%d_%H_%M", time.localtime()))
		self.image_path = "%snew_teach_%s/" % (okc_ui_test.default_save_path, t)
		os.mkdir(path=self.image_path)
		self.step_count = 0
	
	def guide_base(self, node_name):
		find_node_name_count = 0
		while not okc_ui_test.find_ui_node(ui_node_name=node_name):
			if okc_ui_test.find_ui_node(self.guide_dialogue):
				okc_ui_test.click_by_node_name(self.guide_dialogue)
				self.step_count += 1
				logging.info("step index : %s , ui node name : %s" % (self.step_count, self.guide_dialogue))
				okc_ui_test.get_screenshots(image_name="step_%s" % self.step_count, save_path=self.image_path)
				continue
			elif okc_ui_test.find_ui_node(self.guide_arrow):
				okc_ui_test.click_by_node_name(self.guide_arrow)
				self.step_count += 1
				logging.info("step index : %s , ui node name : %s" % (self.step_count, self.guide_arrow))
				okc_ui_test.get_screenshots(image_name="step_%s" % self.step_count, save_path=self.image_path)
				continue
			else:
				find_node_name_count += 1
				if find_node_name_count <= 5:
					logging.info("第%s次,没有找到指引按钮，也没有找到UI节点名为%s" % (find_node_name_count, node_name))
					continue
				logging.info("无指引，无主城升级弹窗")
				return
		
		return True
	
	def guide_new_account(self):
		if not okc_ui_test.find_ui_node(ui_node_name="ViewRootMain"):
			okc_ui_test.login(is_new_account=True)
		return self.guide_base(node_name=self.castle_collect_btn)
	
	def guide_summon_and_train(self):
		if not self.guide_new_account():
			return
		okc_ui_test.click_by_node_name(self.castle_collect_btn)
		
		return self.guide_base(node_name=self.vip_ok_btn)
	
	def get_uid(self):
		# if not self.guide_summon_and_train():
		# 	return
		
		# okc_ui_test.login(is_new_account=True)
		# okc_ui_test.click_by_node_name(node_name=self.vip_ok_btn)
		okc_ui_test.click_by_node_name(node_name=self.more_btn)
		if okc_ui_test.find_ui_node(ui_node_name=self.more_main_item):
			import pprint
			pprint.pprint(okc_ui_test.poco.agent.hierarchy.dump())
			# okc_ui_test.poco.click(okc_ui_test.poco(self.more_main_item).children())
			if okc_ui_test.find_ui_node("uid"):
				uid = okc_ui_test.poco("uid").get_text()
			else:
				return False
			if okc_ui_test.find_ui_node("sid"):
				sid = okc_ui_test.poco("sid").get_text()
			else:
				return False
			if okc_ui_test.find_ui_node("kid"):
				ksid = okc_ui_test.poco("kid").get_text()
			else:
				return False
			return {"sid": sid, "uid": uid, "ksid": ksid}
		else:
			logging.error("find uid error")
			return False
