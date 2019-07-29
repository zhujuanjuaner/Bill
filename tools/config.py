#!/usr/bin/python3
# -*- coding: utf-8 -*-

import os
import util
from enum import Enum


class OkcRequestMode(Enum):
	Http = 0
	Tcp = 1


class OkcEnvironment(Enum):
	Test = 0
	Dev = 1
	OnlineTest = 2
	Online = 3


conf_path = os.path.join(os.getcwd(), "resource/conf.ini")

request_interval = 0.1

okc_environment = OkcEnvironment.Test.value

okc_request_mode = OkcRequestMode.Http.value

okc_test_url = util.get_ini_data(conf_path, section="url", section_item="okc_test")
okc_dev_url = util.get_ini_data(conf_path, section="url", section_item="okc_dev")
okc_online_test_url = util.get_ini_data(conf_path, section="url", section_item="okc_online_test")
okc_online_url = util.get_ini_data(conf_path, section="url", section_item="okc_online")

okc_log_dev_path = util.get_ini_data(conf_path, section="path", section_item="okc_log_dev")
okc_log_dev_protocol_path = util.get_ini_data(conf_path, section="path", section_item="okc_log_dev_protocol")

okc_log_test_path = util.get_ini_data(conf_path, section="path", section_item="okc_log_test")
okc_log_test_protocol_path = util.get_ini_data(conf_path, section="path", section_item="okc_log_test_protocol")

okc_log_online_test_path = util.get_ini_data(conf_path, section="path", section_item="okc_log_online_test")
okc_log_online_test_protocol_path = util.get_ini_data(conf_path, "path", "okc_log_online_test_protocol")

okc_log_online_path = util.get_ini_data(conf_path, section="path", section_item="okc_log_online")
okc_log_online_protocol_path = util.get_ini_data(conf_path, section="path", section_item="okc_log_online_protocol")

ENV = {0: "Test", 1: "Dev", 2: "Online Test", 3: "Online"}

okc_request_url = {
	OkcEnvironment.Dev.value: okc_dev_url,
	OkcEnvironment.Test.value: okc_test_url,
	OkcEnvironment.OnlineTest.value: okc_online_test_url,
	OkcEnvironment.Online.value: okc_online_url
}

okc_log_path = {
	OkcEnvironment.Dev.value: okc_log_dev_path,
	OkcEnvironment.Test.value: okc_log_test_path,
	OkcEnvironment.OnlineTest.value: okc_log_online_test_path,
	OkcEnvironment.Online.value: okc_log_online_path
}

okc_protocol_path = {
	OkcEnvironment.Dev.value: okc_log_dev_protocol_path,
	OkcEnvironment.Test.value: okc_log_test_protocol_path,
	OkcEnvironment.OnlineTest.value: okc_log_online_test_protocol_path,
	OkcEnvironment.Online.value: okc_log_online_protocol_path
}

throne_and_idol_coord = [(250, 596), (250, 598), (250, 600), (250, 602), (250, 604), (249, 597), (249, 599), (249, 601),
						 (249, 603), (248, 598), (248, 600), (248, 602), (247, 599), (247, 601), (246, 600), (251, 597),
						 (251, 599), (251, 601), (251, 603), (252, 598), (252, 600), (252, 602), (253, 599), (253, 601),
						 (254, 600), (278, 628), (280, 628), (277, 629), (279, 629), (281, 629), (278, 630), (280, 630),
						 (279, 627), (279, 631), (220, 628), (222, 628), (219, 629), (221, 629), (223, 629), (220, 630),
						 (222, 630), (221, 627), (221, 631), (250, 558), (251, 559), (249, 559), (248, 560), (250, 560),
						 (252, 560), (249, 561), (251, 561), (250, 562)]
