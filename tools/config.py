#!/usr/bin/python3
# -*- coding: utf-8 -*-

import os
import util
from okc_robot.okc_enum import OkcEnvironment, OkcRequestMode

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
