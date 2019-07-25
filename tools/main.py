#!/usr/bin/python3
# -*- coding: utf-8 -*-
import config
from okc_robot.data import game_table


def main():
	
	print("vip 3 point : %s" % game_table.get_vip(vip_level_idx=3).upgrade_score)
	print("item 0 price: %s" % game_table.get_item(item_id=0).item_price)
	print("troop 0 force: %s" % game_table.get_troop(troop_id=13).force)
	print("factor 1 data: %s" % game_table.get_factor(factor_id=1).data)
	print("instant gems 5 gems : %s " % game_table.get_instant_gems(time_idx=5).gems)
	print("instant gems 5 gems : %s " % game_table.get_research_buff(buff_id=1).get_buff_list(research_id=5))
	print("instant gems 5 gems : %s " % game_table.get_building_pos(pos_id=112).building_pos_build_id)
	print("instant gems 5 gems : %s " % game_table.get_building(building_id=18).get_upgrade_time(21))


if __name__ == "__main__":
	main()
