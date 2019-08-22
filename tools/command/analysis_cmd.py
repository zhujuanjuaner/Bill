#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot import Robot
from okc_robot import game_table, equip_table

import logging
import random
import wx
from command.load import LoadRobot


class AnalysisCommand(LoadRobot):
	
	def __init__(self, sid: int = 0, start_uid: int = 0, robot_num: int = 0):
		super(AnalysisCommand, self).__init__(sid=sid, start_uid=start_uid, robot_num=robot_num)
		
		self.save_path = ""
	
	def update(self, params):
		""" login get"""
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.protocol.operate_login_get().is_right_ret_code:
				break
	
	def build_upgrade(self, params):
		""" build id """
		try:
			build_id, upgrade_type = params.split()
			build_id = int(build_id)
			upgrade_type = int(upgrade_type)
			if upgrade_type != 0:
				upgrade_type = 1
			for robot in self.robot_object_list:
				robot: Robot = robot
				robot.cmd_build.upgrade_build(build_id, upgrade_type=upgrade_type)
		except ValueError:
			build_id = params.split()
			build_id = int(build_id)
			
			for robot in self.robot_object_list:
				robot: Robot = robot
				robot.cmd_build.upgrade_build(build_id)
	
	def build_create(self, params):
		"""  build id  """
		build_id, = params.split()
		build_id = int(build_id)
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_build.build_create(build_id)
	
	def set_all_resource(self, params):
		""" resource num """
		resource_num, = params.split()
		resource_num = int(resource_num)
		for robot in self.robot_object_list:
			robot: Robot = robot
			for rss_id in range(0, 5):
				robot.protocol.op_self_set_resource(rss_id=rss_id, rss_num=resource_num)
	
	def set_item(self, params):
		""" item id , num """
		item_id, item_num = params.split()
		item_id = int(item_id)
		item_num = int(item_num)
		
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.protocol.op_self_set_item(item_id=item_id, num=item_num)
	
	def al_help_request(self, params):
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_alliance.alliance_help_request()
	
	def build_upgrade_cancel(self, params):
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_build.upgrade_cancel()
	
	def name_change(self, params):
		""" name -- 输入为空的时候默认是玩家uid,输入name后是 (uid + name)"""
		name, = params.split()
		for robot in self.robot_object_list:
			robot: Robot = robot
			# robot.lord.player_name_change(name=name)
			robot.cmd_user.player_name_change(name=name)
	
	def dragon_name_change(self, params):
		""" name 可不输 """
		try:
			name, = params.split()
			for robot in self.robot_object_list:
				robot: Robot = robot
				robot.cmd_dragon.dragon_name_change(name=name)
		except ValueError:
			for robot in self.robot_object_list:
				robot: Robot = robot
				robot.cmd_dragon.dragon_name_change()
	
	def al_join(self, params):
		""" uid """
		uid, = params.split()
		uid = int(uid)
		
		aid = self.robot.protocol.get_player_data(uid=uid).aid
		if aid == 0:
			logging.error("This Player Has Not Alliance")
			return
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_alliance.alliance_join(aid=aid)
	
	def al_leave(self, params):
		""" nothing """
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_alliance.alliance_leave()
	
	def al_help(self, params):
		""" uid """
		uid, = params.split()
		uid = int(uid)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_alliance.alliance_help(uid=uid).is_right_ret_code:
				break
	
	def al_request(self, params):
		""" rss num """
		num, = params.split()
		num = int(num)
		for robot in self.robot_object_list:
			robot: Robot = robot
			rss_id = random.randint(0, 4)
			if not robot.cmd_alliance.alliance_assist_send({rss_id: num}).is_right_ret_code:
				break
	
	def move(self, params):
		""" 移城目标position ,radius"""
		position, radius = str(params).split()
		position = int(position)
		radius = int(radius)
		move_pos = self.robot.cmd_map.get_move_pos(target_pos=position, radius=radius)
		
		if len(move_pos) < len(self.robot_object_list):
			print("pos little".title())
			return
		count = 0
		for robot in self.robot_object_list:
			robot: Robot = robot
			if len(move_pos) > 0:
				if robot.cmd_map.kingdom_move(move_pos[0]).is_right_ret_code:
					count += 1
			else:
				break
			move_pos.pop(0)
		
		logging.info("move success : %s ,total : %s " % (count, len(self.robot_object_list)))
	
	def super(self, params):
		""" troop_num,hero_list """
		
		hero_list = list(game_table.game_hero.keys())
		for hero_idx in range(0, len(hero_list)):
			hero_list[hero_idx] = int(hero_list[hero_idx])
		troop_num, = str(params).split()
		troop_num = int(troop_num)
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.protocol.op_upgrade_acc_to_high(troop_num=troop_num, hero_list=hero_list)
	
	def scout(self, params):
		""" target_pos"""
		target_pos, = str(params).split()
		target_pos = int(target_pos)
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_map.march_scout(target=target_pos)
	
	def attack(self, params):
		""" 攻击目标的坐标,带龙加1"""
		try:
			target, with_dragon = str(params).split()
			target = int(target)
			with_dragon = int(with_dragon)
			if with_dragon != 1:
				with_dragon = 0
			for robot in self.robot_object_list:
				robot: Robot = robot
				if not robot.cmd_map.march_attack(target=target, with_dragon=with_dragon,
												  with_hero=0).is_right_ret_code:
					break
		except (ValueError, TypeError):
			print("Input Error...")
	
	def rally(self, params):
		""" 攻击目标的坐标 """
		target, = str(params).split()
		target = int(target)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_map.march_rally(target=target, with_dragon=0, with_hero=0).is_right_ret_code:
				break
	
	def reinforce(self, params):
		""" 增援目标的坐标 """
		target, = str(params).split()
		target = int(target)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_map.march_reinforce(target=target, with_hero=0).is_right_ret_code:
				break
	
	def rally_reinforce(self, params):
		""" 增援目标的uid """
		uid, = str(params).split()
		uid = int(uid)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_map.march_rally_reinforce(uid=uid, with_hero=0).is_right_ret_code:
				break
	
	def transport(self, params):
		""" 运输目标的uid """
		uid, = str(params).split()
		uid = int(uid)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_map.march_transport(uid=uid):
				break
	
	def occupy(self, params):
		""" 采集目标的坐标 """
		target, = str(params).split()
		target = int(target)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_map.march_occupy(target=target, with_hero=0, with_dragon=0).is_right_ret_code:
				break
	
	def camp(self, params):
		""" camp的坐标 , camp 的范围 """
		target, radius = str(params).split()
		target = int(target)
		radius = int(radius)
		
		camp_pos = self.robot.cmd_map.get_camp_pos(target_pos=target, radius=radius)
		
		if len(camp_pos) < len(self.robot_object_list):
			logging.error("camp position little,add radius")
			return
		
		count = 0
		for robot in self.robot_object_list:
			robot: Robot = robot
			
			if len(camp_pos) > 0:
				if robot.cmd_map.march_camp(target=camp_pos[0], with_hero=0).is_right_ret_code:
					count += 1
			else:
				break
			camp_pos.pop(0)
		
		logging.info("camp success : %s ,total : %s " % (count, len(self.robot_object_list)))
	
	def dragon_attack(self, params):
		""" 目标坐标 """
		target, = str(params).split()
		target = int(target)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_map.march_dragon_attack(pos=target).is_right_ret_code:
				break
	
	def bandit_attack(self, params):
		""" 目标坐标 """
		target, = str(params).split()
		target = int(target)
		for robot in self.robot_object_list:
			robot: Robot = robot
			if not robot.cmd_map.march_attack_bandit(target=target, with_dragon=True,
													 with_hero=True).is_right_ret_code:
				break
	
	def march_recall(self, params):
		""" is_dismiss_throne 0 || 1 """
		is_dismiss_throne, = str(params).split()
		is_dismiss_throne = int(is_dismiss_throne)
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_map.march_recall(is_dismiss_throne=is_dismiss_throne)
	
	def speed(self, params):
		""" nothing """
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_map.march_speed()
	
	def set_all_build_lv(self, params):
		""" build level """
		level, = str(params).split()
		level = int(level)
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_user.set_all_build_level(level=level)
	
	def release_self_dragon(self, params):
		""" 释放自己的龙，龙被抓后可使用"""
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.protocol.op_self_release_dragon()
	
	def send_mail(self, params):
		""" 接收邮件者的UID"""
		uid, = str(params).split()
		uid = int(uid)
		
		player_data = self.robot.protocol.get_player_data(uid=uid)
		player_name = player_data.uname
		
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_user.mail_send(player_name=player_name)
	
	def add_grid(self):
		""" 增加装备背包容量"""
		gem_cost = 300
		num = 4
		item = 0
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.protocol.add_equip_grid(gem_cost=gem_cost, num=num, item_id=item)
	
	def add_equip(self, params):
		""" 装备ID，如果没有输入，就加所有装备 """
		try:
			equip_id, level = str(params).split()
			equip_id = int(equip_id)
			level = int(level)
			
			for robot in self.robot_object_list:
				robot: Robot = robot
				robot.protocol.op_set_add_normal_equip(equip_type=equip_id, lv=level)
		except ValueError:
			level = 6
			for robot in self.robot_object_list:
				robot: Robot = robot
				add_equip_count = 0
				for equip_id in equip_table.equip_equipment.keys():
					if add_equip_count >= 4:
						add_equip_count = 0
						self.add_grid()
					if robot.protocol.op_set_add_normal_equip(equip_type=equip_id, lv=level).is_right_ret_code:
						add_equip_count += 1
					else:
						break
	
	def add_crystal(self, params):
		""" 水晶ID，如果没有输入，就加所有水晶2000个 """
		try:
			crystal_id, num = str(params).split()
			crystal_id = int(crystal_id)
			num = int(num)
			
			for robot in self.robot_object_list:
				robot: Robot = robot
				robot.protocol.op_set_add_crystal(crystal_id=crystal_id, num=num)
		except ValueError:
			num = 2000
			for robot in self.robot_object_list:
				robot: Robot = robot
				for crystal_id in equip_table.equip_crystal.keys():
					robot.protocol.op_set_add_crystal(crystal_id=crystal_id, num=num)
	
	def add_material(self, params):
		""" 材料ID，如果没有输入，就加所有材料2000 """
		try:
			material_id, num = str(params).split()
			material_id = int(material_id)
			num = int(num)
			
			for robot in self.robot_object_list:
				robot: Robot = robot
				robot.protocol.op_set_add_material(material_id=material_id, num=num)
		except ValueError:
			num = 2000
			for robot in self.robot_object_list:
				robot: Robot = robot
				for material_id in equip_table.equip_material.keys():
					robot.protocol.op_set_add_material(material_id=material_id, num=num)
	
	def peace_time(self, params):
		""" None"""
		item_id = 17
		gem = 1000
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.protocol.start_peace_time(item_id=item_id, gem_cost=gem)
	
	def remove_all_build(self, params):
		"""  """
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_build.remove_all_build()
	
	def upgrade_build(self, params):
		""" build id"""
		build_id, = params.split()
		
		build_id = int(build_id)
		
		for robot in self.robot_object_list:
			robot: Robot = robot
			robot.cmd_build.upgrade_build(build_id=build_id)
	
	def choose_save_path(self, params):
		""" 手机截屏保存路径选择 """
		
		def get_dlg():
			dlg1 = wx.DirDialog(None)
			if dlg1.ShowModal() == wx.ID_OK:
				image_save_path = dlg1.GetPath()
			else:
				image_save_path = ""
			return dlg1, image_save_path
		
		app = wx.App()
		dlg = get_dlg()
		frame = dlg[0]
		self.save_path = dlg[1]
		frame.Show(True)
		app.MainLoop()
		
		logging.info("image save path : %s" % self.save_path)
	
	def get_image(self, params):
		""" 手机截屏 需要连接手机 image name"""
		print("not support")
		pass
	
	def task(self, params):
		print("not support")
		pass
	
	@staticmethod
	def create_account_test(params):
		""" 新手账号 -- 手机"""
		print("not support")
		# ui_test.create_account_test()
		pass
