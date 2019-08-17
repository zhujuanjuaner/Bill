#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import json
import pprint


def read_json_file(file_path: str, mode="r", encoding="UTF-8") -> json:
	if not os.path.exists(path=file_path) or not os.path.isfile(path=file_path):
		raise FileNotFoundError("File Not Found,File Path : %s " % file_path)
	with open(file=file_path, mode=mode, encoding=encoding) as rd:
		return json.loads(rd.read())


def compare(original_path, new_path):
	original_data = read_json_file(file_path=original_path)
	new_data = read_json_file(file_path=new_path)
	
	if compare_json_file(original_data, new_data):
		print("PASS")
	else:
		print("Failed")


class Key(object):
	name = ""


def compare_json_file(data_original, data_new):
	# 不允许减少字段，只能增加字段
	# 列出更改的字段，用于确认更改
	# 列出增加的字段，用于确认更改
	if type(data_original) != type(data_new):
		# print("The data types are different".title())
		return False
	
	if id(data_original) == id(data_new):
		# print("They have the same memory address,Two Numbers are the same".title())
		return True
	
	if isinstance(data_new, dict):
		if len(data_new) < len(data_original):
			print("不允许减少字段，只能增加字段\n")
			for key in data_original.keys():
				if key not in data_new.keys():
					print("旧文件中的  %s  字段在新文件中没有\n")
			return False
		
		for key, value in data_new.items():
			Key.name = "%s -> " % key
			if key not in data_original.keys():
				print("%s 字段为新增字段\n" % key)
			if not compare_json_file(value, data_original[key]):
				print("%s 字段的值发生变化\n" % key)
		return True
	
	elif isinstance(data_original, list):
		if len(data_original) < len(data_new):
			print("不允许减少字段，只能增加字段\n")
			print("旧数据中的数组内容:\n")
			pprint.pprint(data_original)
			print("\n新数据中的数组内容:\n")
			pprint.pprint(data_new)
			return False
		
		list_idx = 0
		
		data_new_length = len(data_new)
		data_original_length = len(data_original)
		
		while True:
			if list_idx >= data_new_length:
				break
			if list_idx < data_original_length:
				if not compare_json_file(data_original[list_idx], data_new[list_idx]):
					print("%s -> Idx 为 : %s 字段的值发生变化\n" % (Key.name, list_idx))
			else:
				print("以下为新增字段:\n")
				print(data_new[list_idx])
			list_idx += 1
		
		return True
	elif isinstance(data_original, int) or isinstance(data_original, str) or isinstance(data_original,
																						bool) or isinstance(
		data_original, float):
		if data_original == data_new:
			return True
		else:
			return False
	else:
		pprint.pprint(data_original)
		print("Not Support")
		return False


original_file_path = r"E:\Space\Bill\tools\game.json"

new_file_path = r"E:\Space\Bill\tools\resource\okc_json_data\game.json"

compare(original_file_path, new_file_path)

os.system("pause")
