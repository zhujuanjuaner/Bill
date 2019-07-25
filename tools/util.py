#!/usr/bin/python3
# -*- coding: utf-8 -*-
import json
import os
import logging
import configparser

from logging.handlers import RotatingFileHandler

log_style = "%(asctime)s - %(levelname)s - %(filename)s[line:%(lineno)d] : %(message)s"
logging.basicConfig(format=log_style, level=logging.DEBUG)
logging.getLogger("requests").setLevel(logging.WARNING)


def get_ini_data(ini_path: str, section: str, section_item: str) -> str:
	conf = configparser.ConfigParser()
	conf.read(filenames=ini_path, encoding="UTF-8")
	section_name = section
	section = conf.items(section=section_name)
	conf_section_data = {}
	for (key, value) in section:
		conf_section_data.setdefault(key, value)
	try:
		if section_name == "path":
			if section_item in conf_section_data.keys():
				section_data = "%s%s" % (os.getcwd(), conf_section_data[section_item])
			else:
				section_data = str()
			
			if section_data == "":
				return section_data
			
			if not os.path.exists(section_data):
				os.makedirs(section_data)
			logging.info("section_data : %s" % section_data)
			return section_data
		else:
			return conf_section_data[section_item]
	except KeyError:
		raise KeyError("Not Find '%s' In %s" % (section_item, section))


def read_json_file(file_path: str, mode="r", encoding="UTF-8") -> json:
	if not os.path.exists(path=file_path) or not os.path.isfile(path=file_path):
		raise FileNotFoundError("File Not Found,File Path : %s " % file_path)
	with open(file=file_path, mode=mode, encoding=encoding) as rd:
		return json.loads(rd.read())


def write_json_file(file_path: str, data: json, mode="w", encoding="UTF-8"):
	if not os.path.exists(path=file_path) or not os.path.isfile(path=file_path):
		raise FileNotFoundError("File Path Error,Need A File Not Dir")
	with open(file=file_path, mode=mode, encoding=encoding) as wd:
		json.dump(data, wd)


def write_data(write_path: str, data: str, mode="w", encoding="UTF-8"):
	with open(write_path, mode, encoding=encoding) as wr:
		wr.write(data)


def logger(log_name: str, log_path: str, log_lv=logging.INFO, mode="a+"):
	if not os.path.exists(log_path):
		os.makedirs(log_path)
	handler = RotatingFileHandler(os.path.join(log_path, log_name + ".log"), mode=mode)
	logging.getLogger("requests").setLevel(logging.WARNING)
	fmt = logging.Formatter('[%(asctime)s][%(levelname)s] %(message)s')
	fmt.datefmt = '%Y-%m-%d %H:%M:%S'
	handler.setFormatter(fmt)
	handler.setLevel(log_lv)
	
	kit_logger = logging.getLogger(log_name)
	kit_logger.addHandler(handler)
	kit_logger.root.setLevel(log_lv)
	
	return kit_logger
