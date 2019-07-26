#!/usr/bin/python3
# -*- coding: utf-8 -*-
from okc_robot.request import request
from okc_robot.okc_enum import MoveCityType
from okc_robot.reponse import Response
from okc_robot.user_data import PlayerInfo
import util
import config
import time


class Protocol(object):
	def __init__(self, sid, uid, ksid):
		self.__sid = sid
		self.__uid = uid
		self.__ksid = ksid
		self.__log_path = config.okc_log_path[config.okc_environment]
		self.__protocol_path = config.okc_protocol_path[config.okc_environment]
		self.logger = util.logger(log_path=self.__log_path, log_name="Robot-%s" % self.__uid)
	
	def __save_protocol(self, protocol_data: str):
		log_name = "Robot-%s" % self.__uid
		log_path = "%s%s.log" % (self.__protocol_path, log_name)
		util.write_data(write_path=log_path, data=protocol_data + "\n\n", mode="a+")
	
	def request(self, **kwargs) -> Response:
		
		kwargs["ksid"] = self.__ksid
		kwargs["sid"] = self.__sid
		kwargs["uid"] = self.__uid
		request_result = request.get(**kwargs)
		t = str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
		result_data = str(request_result.request_data).replace('\'', "\"")
		if request_result.ret_code == 0:
			self.logger.info("sid : %s uid : %s command: %s " % (self.__sid, self.__uid, kwargs["command"]))
			self.__save_protocol("%s:\nurl:\n%s\nresult:\n%s\n\n" % (t, request_result.url, result_data))
		else:
			self.logger.error("sid : %s uid : %s command: %s " % (self.__sid, self.__uid, kwargs["command"]))
			self.logger.error("url : %s" % request_result.url)
			self.__save_protocol("%s:\nurl:\n%s\nresult:\n%s\n\n" % (t, request_result.url, result_data))
		
		return request_result
	
	""" Mail """
	
	def mail_send(self, mail_type, target_name, content, key2=""):
		return self.request(command="mail_send", key0=mail_type, key1=target_name, key2=key2, key3=content)
	
	def mail_send_by_id(self, mail_type: int, target_id: int, title: str, content: str):
		return self.request(command="mail_send_by_id", key0=mail_type, key1=target_id, key2=title, key3=content)
	
	def summon_hero(self, summon_type, spend_type, spend_num):
		"""
		| key0 | 召唤类型 | 0 普通召唤,  1 高级召唤 | 1 |
		| key1 | 消耗类型 | 0 消耗免费机会, 1 消耗道具, 2 消耗宝石 | 0 |
		| key2 | 消耗数量 | 当消耗类型为宝石时, 填消耗的宝石数量, 用于校验 | 200 |
		"""
		return self.request(command="summon_hero", key0=summon_type, key1=spend_type, key2=spend_num)
	
	def translate(self, text: str, target_lang, text_type):
		return self.request(command="translate", key0=text, key1=target_lang, key2=text_type)
	
	def get_player_data(self, uid: int):
		player_data = self.player_info_get(uid=uid)
		return PlayerInfo(player_data.res_data["svr_player_info_list"][0])
	
	def create_account(self) -> int:
		self.__uid = request.get(command="login_get", lg=1, eyou_id="fake-aeea67-63694419400213").uid
		self.guide_finish()
		return self.__uid
	
	def guide_finish(self):
		return self.request(command="guide_finish")
	
	def operate_login_get(self):
		return self.request(command="operate_login_get")
	
	def map_get(self, sid: int, block: list) -> Response:
		return self.request(command="map_get", key0="{\"%s\":%s}" % (str(sid), block))
	
	def get_throne_info(self, throne_pos: int, sid: int) -> Response:
		return self.request(command='get_throne_info', key0=throne_pos, key1=sid)
	
	def get_idol_info(self, sid: int, idol_pos: int) -> Response:
		return self.request(sid=sid, idol_pos=idol_pos)
	
	def player_info_get(self, uid: int) -> Response:
		return self.request(command='player_info_get', key0=uid)
	
	def al_wall_msg_get(self) -> Response:
		return self.request(command="al_wall_msg_get")
	
	def al_member_get(self, aid: int) -> Response:
		return self.request(command="al_member_get", aid=aid)
	
	def al_item_exchange(self, item_id: int, num: int):
		return self.request(command="al_item_exchange", key0=item_id, key1=num)
	
	def item_buy(self, item_id: int, item_price: int):
		return self.request(command="item_buy", key0=item_id, key1=item_price)
	
	def add_equip_grid(self, gem_cost: int, num: int, item_id: int):
		return self.request(command="add_equip_grid", key0=gem_cost, key1=num, key2=item_id)
	
	def lord_skill_reset(self, cost_type: int, gem_num: int, item_id: int):
		"""
		:param cost_type:0 消耗道具, 1消耗宝石
		:param gem_num:
		:param item_id:
		:return:
		"""
		return self.request(command="lord_skill_reset", key0=cost_type, key1=gem_num, key2=item_id)
	
	def lord_skill_upgrade_new(self, skill: str):
		return self.request(command="lord_skill_upgrade_new", key0=skill)
	
	def item_use(self, item_id: int, target_id: int, action_type: int, rally_war_id: int, is_attack: int):
		# rally_war_id 大于0 有效
		# is_attack 0:attack,1:defence
		return self.request(command="item_use", key0=item_id, key1=target_id, key2=action_type, key3=rally_war_id,
							key4=is_attack)
	
	def item_buy_and_use(self, item: int, target_id: int, price: int, action_type: int, rally_id: int, is_attack: int):
		return self.request(command="item_buy_and_use", key0=item, key1=target_id, key2=price, key3=action_type,
							key4=rally_id, key5=is_attack)
	
	def al_create(self, name: str, desc: str, lang: int, nick_name: str):
		return self.request(command="al_create", key0=name, key1=desc, key2=lang, key3=nick_name)
	
	def al_leave(self):
		return self.request(command="al_leave")
	
	def al_join(self, aid: int, is_invite: int):
		return self.request(command="al_join", key0=aid, key1=is_invite)
	
	def al_list_get(self, policy_type: int, alliance_name: str = ""):
		# policy_type 0:需要批准,1:自动加入,2:全部
		return self.request(command='al_list_get', key0=policy_type, key1=alliance_name)
	
	def al_assist_send(self, aid, assist_type, rss_list, cid, desc=""):
		return self.request(aid=aid, command="al_assist_send", key0=assist_type, key1=rss_list, key2=cid, key3=desc)
	
	def al_help(self, action_id: int, aid: int):
		return self.request(aid=aid, command="al_help", key0=action_id)
	
	def al_wall_msg_add(self, msg: str):
		return self.request(command="al_wall_msg_add", key0=msg)
	
	def al_wall_msg_del(self, msg_id: int):
		return self.request(command="al_wall_msg_del", key0=msg_id)
	
	def dragon_unlock_new(self):
		return self.request(command="dragon_unlock_new", sid=self.__sid, uid=self.__uid)
	
	def dragon_kill(self, target_uid: int, gem_cost: int, item_cost: int):
		return self.request(command="dragon_kill", key0=target_uid, key1=gem_cost, key2=item_cost)
	
	def dragon_revive(self):
		return self.request(command="dragon_revive")
	
	def dragon_name_change(self, name: str, gem: int, item_id: int):
		return self.request(command="dragon_name_change", key0=name, key1=gem, key2=item_id)
	
	def dragon_skill_upgrade_new(self, skill_info: str):
		return self.request(command="dragon_skill_upgrade_new", key0=skill_info)
	
	def dragon_monster_skill_upgrade_new(self, skill_info: str):
		return self.request(command="dragon_monster_skill_upgrade_new", key0=skill_info)
	
	def move_city_new(self, item_id, item_price, old_position, move_type, target_position, move_area=0, target_svr=1,
					  region_svr=0):
		if move_type == MoveCityType.KingdomMove:
			return self.request(command="move_city_new", key0=item_id, key1=item_price, key2=old_position,
								key3=move_type, key5=target_position)
		elif move_type == MoveCityType.KingdomRandomMove:
			return self.request(command="move_city_new", key0=item_id, key1=item_price, key2=old_position,
								key3=move_type, key6=region_svr)
		elif move_type == MoveCityType.NewPlayerMove:
			return self.request(command="move_city_new", key0=item_id, key1=item_price, key2=old_position,
								key3=move_type, key4=target_svr, key5=target_position)
		elif move_type == MoveCityType.KingdomRandomMove:
			return self.request(command="move_city_new", key0=item_id, key1=item_price, key2=old_position,
								key3=move_type, key4=target_svr, key6=move_area)
		else:
			# TODO Other Move Type
			print("Other Move Type Does Not Support")
			return Response()
	
	def bookmark_add(self, pos, name, mark_type, sid):
		return self.request(command="bookmark_add", key0=pos, key1=name, key2=mark_type, key3=sid)
	
	""" March """
	
	def action_recall(self, action_id: int, item_id: int, gem_num: int, is_dismiss_throne: int):
		return self.request(command="action_recall", key0=action_id, key1=item_id, key2=gem_num,
							key3=is_dismiss_throne)
	
	def rally_dismiss(self, action_id: int, item_id: int, gem_num: int, is_dismiss_throne: int):
		return self.request(command="rally_dismiss", key0=action_id, key1=item_id, key2=gem_num,
							key3=is_dismiss_throne)
	
	def march_scout(self, pos, cost_time, cost_gem, cost_rss):
		return self.request(command="march_scout", key0=cost_time, key1=pos, key2=cost_gem, key3=cost_rss)
	
	def march_attack(self, cost_time, pos, hero_list, troop_list, has_dragon):
		return self.request(command="march_attack", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list,
							key4=has_dragon)
	
	def march_camp(self, cost_time, pos, hero_list, troop_list):
		return self.request(command="march_camp", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list)
	
	def rally_attack(self, cost_time, pos, hero_list, troop_list, pre_time, has_dragon, has_notify):
		return self.request(command="rally_attack", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list,
							key4=pre_time, key5=has_dragon, key6=has_notify)
	
	def reinforce(self, cost_time, pos, hero_list, troop_list):
		return self.request(command="reinforce", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list)
	
	def rally_reinforce(self, cost_time, pos, hero_list, troop_list, action_id, is_attack):
		return self.request(command="rally_reinforce", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list,
							key4=action_id, key5=is_attack)
	
	def march_bandit_attack(self, cost_time, pos, hero_list, troop_list, has_dragon, is_max_attack):
		return self.request(command="march_bandit_attack", key0=cost_time, key1=pos, key2=hero_list,
							key3=troop_list, key4=has_dragon, key5=is_max_attack)
	
	def march_occupy(self, cost_time, pos, hero_list, troop_list, is_dragon_join, rss_num):
		return self.request(command="march_occupy", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list,
							key4=is_dragon_join, key5=rss_num)
	
	def march_dragon_attack(self, cost_time, pos, is_max_attack=1):
		return self.request(command="march_dragon_attack", key0=cost_time, key1=pos, key2=is_max_attack)
	
	def transport(self, cost_time, pos, rss_list, tax_list):
		return self.request(command="transport", key0=cost_time, key1=pos, key2=rss_list, key3=tax_list)
	
	def throne_attack(self, cost_time, pos, hero_list, troop_list, has_dragon):
		return self.request(command="throne_attack", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list,
							key4=has_dragon)
	
	def throne_rally_war(self, cost_time, pos, hero_list, troop_list, pre_time, has_dragon, has_notify):
		return self.request(command="throne_rally_war", key0=cost_time, key1=pos, key2=hero_list,
							key3=troop_list, key4=pre_time, key5=has_dragon, key6=has_notify)
	
	def throne_reinforce(self, cost_time, pos, hero_list, troop_list, has_dragon, is_king):
		if is_king:
			return self.request(command="throne_reinforce", key0=cost_time, key1=pos, key2=troop_list,
								key3=hero_list, key4=has_dragon)
		else:
			return self.request(command="throne_reinforce", key0=cost_time, key1=pos, key2=troop_list,
								key3=hero_list)
	
	def idol_attack(self, cost_time, pos, hero_list, troop_list, has_dragon):
		return self.request(command="idol_attack", key0=cost_time, key1=pos, key2=hero_list, key3=troop_list,
							key4=has_dragon)
	
	def player_name_change(self, name: str, gem: int, item_id: int):
		return self.request(command="player_name_change", key0=name, key1=gem, key2=item_id)
	
	def player_avatar_change(self, avatar_id: int, cost_type: int, gem_num: int, item_id: int):
		return self.request(command="player_avatar_change", key0=avatar_id, key1=cost_type, key2=gem_num, key3=item_id)
	
	def start_peace_time(self, item_id: int, gem_cost: int):
		return self.request(command="start_peace_time", key0=item_id, key1=gem_cost)
	
	""" op"""
	
	def op_self_set_gem(self, gem: int):
		return self.request(command="op_self_set_gem", key0=gem)
	
	def op_self_set_item(self, item_id: int, num: int):
		return self.request(command="op_self_set_item", key0=item_id, key1=num)
	
	def op_self_set_resource(self, rss_id: int, rss_num: int):
		return self.request(command="op_self_set_resource", key0=rss_id, key1=rss_num)
	
	def op_self_set_troop(self, troop_id: int, troop_num: int):
		return self.request(command="op_self_set_troop", key0=troop_id, key1=troop_num)
	
	def op_self_set_fort(self, fort_id: int, num: int):
		return self.request(command="op_self_set_fort", key0=fort_id, key1=num)
	
	def op_set_add_crystal(self, crystal_id: int, num: int):
		return self.request(command="op_set_add_crystal", key0=crystal_id, key1=num)
	
	def op_set_add_material(self, material_id: int, num: int):
		return self.request(command="op_set_add_material", key0=material_id, key1=num)
	
	def op_set_add_normal_equip(self, equip_type, lv):
		return self.request(command="op_set_add_normal_equip", key0=equip_type, key1=lv)
	
	def op_self_set_pos_building_lv(self, build_pos, build_lv):
		return self.request(command="op_self_set_pos_building_lv", key0=build_pos, key1=build_lv)
	
	def op_self_set_research_lv(self, research_id, level):
		return self.request(command="op_self_set_research_lv", key0=research_id, key1=level)
	
	def op_upgrade_acc_to_high(self, troop_num, hero_list):
		return self.request(command="op_upgrade_acc_to_high", key0=troop_num, key1=hero_list)
	
	def op_self_cut_prepare_time(self):
		return self.request(command="op_self_cut_prepare_time")
	
	def op_add_wild(self, pos, wild_type, lv):
		return self.request(command="op_add_wild", key0=pos, key1=wild_type, key2=lv)
	
	def op_self_add_hos_troop(self, troop_id: int, troop_num: int):
		return self.request(command="op_self_add_hos_troop", key0=troop_id, key1=troop_num)
	
	def op_self_add_dead_fort(self, fort_id: int, fort_num: int):
		return self.request(command="op_self_add_dead_fort", key0=fort_id, key1=fort_num)
	
	def op_self_set_dragon_execute_time(self, target_uid: int, execute_time: int):
		return self.request(command="op_self_set_dragon_execute_time", key0=target_uid, key1=execute_time)
	
	def op_self_release_dragon(self):
		return self.request(command="op_self_release_dragon")
	
	def op_self_set_consecutive_login(self, day_num: int):
		return self.request(command="op_self_set_consecutive_login", key0=day_num)
	
	def op_self_add_vip_point(self, vip_point: int):
		return self.request(command="op_self_add_vip_point", key0=vip_point)
	
	def op_self_add_clear_troop(self, troop_num: int, handle_type: int = 0):
		"""
		:param troop_num:
		:param handle_type: 0 增加 ; 1 清除
		:return:
		"""
		return self.request(command="op_self_add_clear_troop", key0=handle_type, key1=troop_num)
	
	def op_self_add_clear_resource(self, resource_num: int, handle_type: int = 0):
		"""
		:param resource_num:
		:param handle_type: 0 增加 ; 1 清除
		:return:
		"""
		return self.request(command="op_self_add_clear_resource", key0=handle_type, key1=resource_num)
