#!/usr/bin/python3
# -*- coding: utf-8 -*-

import os
import logging
import traceback

import config
import re

from util import read_json_file
from command import AnalysisCommand


class TestingStart(object):
	
	def __init__(self):
		print(config.welcome.title())
		self.has_robot_data = False
		self.is_local_login = False
		self.has_load = False
		self.robots_data = dict()
		self.env = 0
		self.sid = 0
		self.start_uid = 0
		self.robot_num = 0
		
		self.load = None
		
		self.__init_robot()
	
	def __init_robot(self):
		self.env = self.get_environment()
		print(config.ENV[self.env])
		self.sid = self.get_kingdom()
		self.start_uid = self.get_start_uid()
		self.robot_num = self.get_robot_num()
		
		self.load = AnalysisCommand(sid=self.sid, start_uid=self.start_uid, robot_num=self.robot_num)
		
		if not self.load.robot_object_list:
			print("Robot Init Failed")
			return
		
		self.has_load = True
	
	def start(self):
		if not self.has_load:
			return
		
		def get_help():
			help_info = "-" * 150 + "\n"
			for command_name in self.load.__class__.__dict__.keys():
				if not re.match(r"__", command_name):
					help_info += "Command : %s  Params : %s" % (
						command_name + " " * (30 - len(command_name)) + "·" * 10,
						self.load.__getattribute__(command_name).__doc__)
					help_info += "\n" + "-" * 150 + "\n"
			return help_info
		
		while True:
			command = input("enter command : \n".title())
			cmd = re.match(r"(\w+)(:?\s+(.*))", command)
			if not cmd:
				print("Input Error.\n")
				print(get_help())
				continue
			try:
				cmd_name, params = cmd.group(1, 2)
			except ValueError:
				print("Input Params Error.\n")
				print(get_help())
				continue
			cmd_list = self.load.__dir__()
			if cmd_name in cmd_list:
				cmd_value = getattr(self.load, cmd_name)
				try:
					cmd_value(params)
				except:
					logging.error(traceback.print_exc())
			else:
				print("command -> '%s' isn't in cmd list.\n" % cmd_name)
				print(get_help())
				continue
	
	def get_robots_data(self):
		try:
			self.robots_data = read_json_file(file_path=config.robots_json_data_path)
			self.has_robot_data = True
			return True
		except FileNotFoundError:
			print("File Not Found,Must Enter Info By Yourself")
			return False
	
	def get_environment(self):
		env = input("choose environment :\n".title())
		while True:
			try:
				env = int(env)
				break
			except ValueError:
				if self.get_robots_data():
					try:
						env = self.robots_data["last_load"]["env"]
						break
					except KeyError:
						env = input("choose environment :\n".title())
						continue
				else:
					env = input("choose environment :\n".title())
					continue
		if env == 0:
			config.okc_environment = config.OkcEnvironment.Test.value
		elif env == 1:
			config.okc_environment = config.OkcEnvironment.Dev.value
		elif env == 2:
			config.okc_environment = config.OkcEnvironment.OnlineTest.value
		elif env == 3:
			config.okc_environment = config.OkcEnvironment.Online.value
		else:
			config.okc_environment = config.OkcEnvironment.Test.value
		return env
	
	def get_kingdom(self):
		kingdom = input("enter sid:\n".title())
		while True:
			try:
				kingdom = int(kingdom)
				break
			except ValueError:
				if self.has_robot_data:
					try:
						kingdom = self.robots_data["last_load"]["kingdom"]
						break
					except KeyError:
						kingdom = input("enter sid:\n".title())
						continue
				else:
					kingdom = input("enter sid:\n".title())
					continue
		
		return kingdom
	
	def get_start_uid(self):
		start_uid = input("start uid:\n".title())
		while True:
			try:
				start_uid = int(start_uid)
				break
			except ValueError:
				if self.has_robot_data:
					try:
						start_uid = self.robots_data["last_load"]["uid"][0]
						self.is_local_login = True
						break
					except KeyError:
						start_uid = input("start uid:\n".title())
						continue
				else:
					start_uid = input("start uid:\n".title())
					continue
		
		return start_uid
	
	def get_robot_num(self):
		robot_num = input("robot num:\n".title())
		while True:
			try:
				robot_num = int(robot_num)
				break
			except ValueError:
				if self.has_robot_data:
					try:
						robot_num = len(self.robots_data["last_load"]["uid"])
						break
					except KeyError:
						robot_num = input("robot num:\n".title())
						continue
				else:
					robot_num = input("robot num:\n".title())
					continue
		
		if robot_num > 100:
			robot_num = 100
		if robot_num < 1:
			robot_num = 1
		
		return robot_num


if __name__ == "__main__":
	testing = TestingStart()
	testing.start()
	os.system("pause")
