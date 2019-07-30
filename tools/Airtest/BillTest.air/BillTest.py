# -*- encoding=utf8 -*-
__author__ = "Administrator"

from airtest.core.api import *

auto_setup(__file__)

Entrance_VIP = exists(Template(r"tpl1541681714721.png", record_pos=(0.934, -0.215), resolution=(950, 820)))


if Entrance_VIP:
    touch(Entrance_VIP)
Entrance_ADDPOINTS = exists(Template(r"tpl1541682001198.png", record_pos=(0.89, 0.017), resolution=(950, 820)))
    
if Entrance_ADDPOINTS:
    touch(Entrance_ADDPOINTS)
GET_USE_POINTS_5000 = exists(Template(r"tpl1541682122768.png", record_pos=(1.042, 0.142), resolution=(950, 820)))
    
while GET_USE_POINTS_5000:
    GET_USE_POINTS_5000 = exists(Template(r"tpl1541682122768.png", record_pos=(1.042, 0.142), resolution=(950, 820)))

    touch(GET_USE_POINTS_5000)
    
