#!/usr/bin/python3
# -*- coding: utf-8 -*-
import config
import re
import traceback
import util
import logging
from command.analysis_command import AnalysisCommand


def okc_robot_start():
	print("welcome to use okc robot.\n\nthe environment : 0-test ,1-dev ,2-online test ,3-online .".title())
	print("no input or input error Use the environment where you last logged in.".title())
	print("If this is your first login, use test environment.\n".title())
	
	input_env = input("choose environment :\n".title())
	sid = input("enter sid:\n".title())
	start_uid = input("start uid:\n".title())
	robot_num = input("robot num:\n".title())
	
	env_path = util.get_ini_data(ini_path=config.conf_path, section="path", section_item="okc_environment")
	
	def get_help():
		help_info = "-" * 150 + "\n"
		for command_name in robots.__class__.__dict__.keys():
			if not re.match(r"__", command_name):
				help_info += "Command : %s  Params : %s" % (
					command_name + " " * (30 - len(command_name)) + "·" * 10,
					robots.__getattribute__(command_name).__doc__)
				help_info += "\n" + "-" * 150 + "\n"
		return help_info
	
	try:
		input_env = int(input_env)
		if input_env == 0:
			config.okc_environment = config.OkcEnvironment.Test.value
		elif input_env == 1:
			config.okc_environment = config.OkcEnvironment.Dev.value
		elif input_env == 2:
			config.okc_environment = config.OkcEnvironment.OnlineTest.value
		elif input_env == 3:
			config.okc_environment = config.OkcEnvironment.Online.value
		else:
			config.okc_environment = config.OkcEnvironment.Test.value
		logging.info("environment : %s " % config.ENV[config.okc_environment])
		sid = int(sid)
		start_uid = int(start_uid)
		player_num = int(robot_num)
		data = {"env": config.okc_environment, "sid": sid,
				"uid": list(range(start_uid, start_uid + player_num + 1))}
		util.write_json_file(env_path, data=data)
		robots = AnalysisCommand(sid=sid, start_uid=start_uid, robot_num=player_num)
	except ValueError:
		last_load = util.read_json_file(env_path)
		
		env = int(last_load["env"])
		config.okc_environment = env
		
		logging.info("environment : %s " % config.ENV[config.okc_environment])
		print("-" * 150)
		
		sid = int(last_load["sid"])
		start_uid = last_load["uid"][0]
		player_num = len(last_load["uid"])
		
		if start_uid == -1:
			robots = AnalysisCommand()
		else:
			robots = AnalysisCommand(sid=sid, start_uid=start_uid, robot_num=player_num)
	
	if not robots.robots:
		print("Robot Init Failed")
		return
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
		cmd_list = robots.__dir__()
		if cmd_name in cmd_list:
			cmd_value = getattr(robots, cmd_name)
			try:
				cmd_value(params)
			except:
				logging.error(traceback.print_exc())
		else:
			print("command -> '%s' isn't in cmd list.\n" % cmd_name)
			print(get_help())
			continue
