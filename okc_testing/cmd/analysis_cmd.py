#!/usr/bin/python3
# -*- coding: utf-8 -*-

from cmd.load import LoadRobot
from robot import Robot


class AnalysisCommand(LoadRobot):
	
	def __init__(self, sid: int = 0, start_uid: int = 0, robot_num: int = 0):
		super(AnalysisCommand, self).__init__(sid=sid, start_uid=start_uid, robot_num=robot_num)
	
	def update(self, params):
		""" login get"""
		pass
