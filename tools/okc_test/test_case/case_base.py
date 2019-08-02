#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_test.test_ui import okc_ui_test
import logging
import time


class CaseHandle(object):
	def __init__(self):
		self.handle = None
		self.case_step = None
		self.ui_node_pos = None
		self.ui_node_name = None
		self.update = None
		
		self.is_finish = False


class LinkedNode(object):
	
	def __init__(self, data, linked_next=None):
		self.data = data
		self.next = linked_next


class Linked(object):
	def __init__(self):
		self.head = None
	
	def __len__(self):
		nonius_count = 0
		nonius = self.head
		while nonius is not None:
			nonius_count += 1
			nonius = nonius.next
		
		return nonius_count
	
	def is_empty(self):
		return self.head is None
	
	def add(self, data):
		new_node = LinkedNode(data=data)
		new_node.next = self.head
		self.head = new_node
	
	def append(self, data):
		new_node = LinkedNode(data=data)
		if self.is_empty():
			self.head = new_node
		else:
			nonius = self.head
			while nonius.next is not None:
				nonius = nonius.next
			nonius.next = new_node
	
	def travel(self):
		if self.is_empty():
			return
		nonius = self.head
		nonius.data: CaseHandle
		temp_pos = 0
		temp_node_name = ""
		count = 0
		while nonius is not None:
			count += 1
			if callable(nonius.data.ui_node_pos):
				nonius.data.ui_node_pos(node_name=nonius.data.ui_node_name)
			
			if callable(nonius.data.handle):
				nonius.data.handle(pos=nonius.data.ui_node_pos)
			
			if temp_pos != nonius.data.ui_node_pos or temp_node_name != nonius.data.ui_node_pos or count >= 5:
				nonius = nonius.next
			else:
				nonius.data.update()


def guide():
	dialogue = "operate_button"
	arrow = "focus_light"
	
	new_teach_step = 0
	failed_count = 0
	
	while True:
		if okc_ui_test.find_ui_node(dialogue):
			okc_ui_test.click_by_node_name(dialogue)
			new_teach_step += 1
			logging.info("step index : %s , ui node name : %s" % (new_teach_step, dialogue))
			failed_count = 0
			continue
		elif okc_ui_test.find_ui_node(arrow):
			okc_ui_test.click_by_node_name(arrow)
			new_teach_step += 1
			logging.info("step index : %s , ui node name : %s" % (new_teach_step, arrow))
			failed_count = 0
			continue
		else:
			new_teach_step = 0
			failed_count += 1
			logging.info("failed_count: %s " % failed_count)
		time.sleep(okc_ui_test.okc_app.default_wait_time)

