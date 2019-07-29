#!/usr/bin/python3
# -*- coding: utf-8 -*-
from enum import Enum, unique


class ResourceType(object):
	GoldStation = 101
	FoodStation = 102
	WoodStation = 103
	StoneStation = 104
	IronStation = 105
	GemStation = 106
	
	GoldNestStation = 121
	FoodNestStation = 122
	WoodNestStation = 123
	StoneNestStation = 124
	IronNestStation = 125
	GemNestStation = 126


class MarchActionType(object):
	Transport = 8
	Reinforce = 9
	Scout = 10
	Attack = 12
	Occupy = 13
	Camp = 17
	DragonAttack = 22
	DragonOccupy = 23
	RallyWar = 24
	RallyReinforce = 25
	AttackThrone = 39
	RallyWarThrone = 40
	ReinforceThrone = 41
	AttackIdol = 43
	AttackSuperThrone = 51
	RallyWarSuperThrone = 52
	ReinforceSuperThrone = 53
	AttackBandit = 60


@unique
class ActionType(Enum):
	BuildUpgrade = 1
	BuildRemove = 2
	Research = 3
	TroopTrain = 4
	CityWallTrain = 5
	Heal = 6
	
	Transport = 8
	Reinforce = 9
	Scout = 10
	Item = 11
	Attack = 12
	Occupy = 13
	Camp = 17
	EquipUpgrade = 18
	FortRepair = 19
	RemoveObstacle = 20
	RandomMoveCity = 21
	DragonAttack = 22
	DragonOccupy = 23
	RallyWar = 24
	RallyReinforce = 25
	
	ThroneDonate = 35
	EscortDragon = 37
	ReleaseDragon = 38
	
	AttackThrone = 39
	RallyWarThrone = 40
	ReinforceThrone = 41
	DispatchThrone = 42
	AttackIdol = 43
	KvkMove = 49
	
	AttackSuperThrone = 51
	RallyWarSuperThrone = 52
	ReinforceSuperThrone = 53
	DispatchSuperThrone = 54
	AttackBandit = 60


@unique
class MoveCityType(Enum):
	Unknown = 0
	KingdomMove = 1
	KingdomRandomMove = 2
	KvkMove = 3
	NewPlayerMove = 4
	ReturnMove = 5
	ImmigrateMove = 6
	SKvkMove = 7


@unique
class MarchType(Enum):
	Attack = 0
	Scout = 1
	Transport = 2
	Reinforce = 3
	Occupy = 4
	DragonAttack = 5
	RallyWar = 7
	RallyReinforce = 8
	DragonRelease = 11
	DragonEscort = 12
	Camp = 13
	ReinforceThrone = 16
	AttackBandit = 17
	Null = 18


class MapWild(Enum):
	Other = -1
	Normal = 0  # 后台用，[0 50) 的后台都只返回0
	Grassland = 0
	Plain = 1
	Wood = 2
	Hill = 3
	Mountain = 4
	Surface = 5
	GrassFade = 6
	Lake = 7
	Desert = 8
	Snow = 9
	
	City = 50
	Camp = 51
	Throne = 52  # 王座
	Idol = 53  # 神像
	SuperThrone = 54  # 超级王座
	
	GoldStation = 101
	FoodStation = 102
	WoodStation = 103
	StoneStation = 104
	IronStation = 105
	GemStation = 106
	
	GoldNestStation = 121
	FoodNestStation = 122
	WoodNestStation = 123
	StoneNestStation = 124
	IronNestStation = 125
	GemNestStation = 126
	Monster = 109  # 英雄打怪
	Province = 111  # 省会
	Bandit = 201


@unique
class GameBasicFactor(Enum):
	AllianceLoyaltyBonus = 3
	AllianceLoyaltyEveryInterval = 4
	FirstJoinAllianceGem = 5
	AllianceMemberMaxNum = 6  # 联盟人数上限 - ---7
	AllianceCreateCastleLevel = 7  # 创建联盟需要的主基地等级 - ---25
	ChangAlliFlagGems = 8
	ChangeAllianceNamePrice = 9
	AllianceChancellorNumLimit = 10  # 联盟盟主个数限制 - -72
	AllianceViceChancellorNumLimit = 11  # 联盟副盟主个数限制 - -73
	AllianceMinisterNumLimit = 12  # 联盟长老个数限制 - -74
	AllianceViceMinisterNumLimit = 13  # 联盟精英成员个数限制 - -75
	AllianceMemberNumLimit = 14  # 联盟普通成员个数限制 - -76
	AllianceRequestIntervalTime = 15
	AllianceRequestValidTime = 16
	DragonDefaultEnergy = 21  # dragon默认体力上限 - --59
	AttackMonsterDefaultMarchSpeed = 24  # 英雄 default speed - --62
	DragonWeakBloodPercent = 28
	DragonLevelAltarBonus = 31
	RallyWarCityLv = 32  # rally war 目标等级限制 - -63
	RallyWarSlotLimit = 33  # rally war 集结队列上限 - -64
	MaxThroneTroop = 34  # 王座驻军最大值 - -66
	ThroneFightingContinueTime = 35  # 王座省会战斗持续期 - -70
	ThronePeaceTime = 36  # 王座省会PeaceTime - -71
	ThroneRepatriateTime = 37  # 王座进入保护期后军队遣返时间
	FreeInstantTime = 40  # 默认free instant finish时间 - --37
	ConsumeGemRemind = 42
	RankShowMaxNum = 43
	RankDragShowNum = 44
	RankRequestNum = 45
	BroadcastSeniorStayTime = 46
	MaxMarchSize = 48  # 最大行军距离
	TransportDefaultSpeed = 49
	SwampMarchSpeedEffect = 50
	SwampMarchMinTime = 51
	MarchBaseSpeed = 52
	ScoutBaseSpeed = 53
	AttackBanditDefaultMarchSpeed = 54
	MarchMinTime = 55
	GemGatheringRate = 59  # 采集宝石矿速度减益
	LordDefaultEnergy = 60  # 领主默认体力上限
	AttackBanditEnergyCost = 62
	NormalSummonFreeNumPerDay = 63  # 每天免费的普通召唤次数
	ExpPerTrainTime = 66  # 用户获得1点exp需要训练时间(单位秒) - ---17


@unique
class BuildingId(Enum):
	CivicCenter = 0  # 主城
	CityWall = 1  # 城墙
	Research = 2  # 研究院
	Embassy = 4  # 大使馆
	StoreHouse = 5  # 仓库
	RallyField = 6  # 集结地
	WatchTower = 7  # 瞭望塔
	Forge = 8  # 锻造所
	Jail = 9  # 监狱
	Market = 10  # 市场
	Altar = 11  # 祭坛
	House = 12  # 房屋
	Hospital = 14  # 医院
	Farm = 15  # 农场
	LumberMill = 16  # 伐木场
	Quarry = 17  # 石场
	Mine = 18  # 矿场
	Troop = 19  # 兵营
	Inn = 23  # 旅馆
	DragonFence = 25  # 龙坛
	Casern = 28  # 营房
	MysteryGift = 29  # 神秘礼物
	SummonHall = 30  # 召唤大厅
	Ward = 31  # 病房
	Trap = 32  # 防御工坊


@unique
class BuffId(Enum):
	GoldProductionPercent = 1
	FoodProductionPercent = 2
	WoodProductionPercent = 3
	StoneProductionPercent = 4
	OreProductionPercent = 5
	ResourceCapacity = 6
	ResourceProtection = 7
	BuildingSpeedUpPercent = 8
	ResearchSpeedUpPercent = 9
	TroopLoadPercent = 34
	MarchSpeedPercent = 35
	AllResourceProductionPercent = 36
	AllResourceProtectionPercent = 38
	AllTroopAttack = 41
	AllTroopLife = 42
	AllTroopUpkeep = 43
	MarchQueueNum = 44
	PeaceTime = 45
	CollectSpeed = 46
	VipActivate = 47
	TroopSize = 48
	FoodCollectSpeed = 49
	WoodCollectSpeed = 50
	StoneCollectSpeed = 51
	OreCollectSpeed = 52
	GoldCollectSpeed = 53
	BuildWallSpeed = 54
	AllTroopDefense = 62
	ReinforceSpeedUpPercent = 66
	FoodProtection = 67
	WoodProtection = 68
	StoneProtection = 69
	OreProtection = 70
	HospitalCapacity = 72
	GoldCapacity = 73
	FoodCapacity = 74
	WoodCapacity = 75
	StoneCapacity = 76
	OreCapacity = 77
	TransportRate = 83
	AddForce = 84
	WallCapacity = 85
	GoldProduction = 86
	FoodProduction = 87
	WoodProduction = 88
	StoneProduction = 89
	OreProduction = 90
	FreeInstantFinishTime = 91
	GoldProtection = 99
	TransportLimit = 105
	SecondBuild = 106
	FortHospitalCapacity = 107
	MarchOneQueueCapacity = 110
	DragonMarchTime = 123
	DragonCombo = 125
	DragonStaminaUse = 127
	DragonStaminaLimit = 128
	JailLimit = 129
	RallyWarSize = 130
	FortHealSpeed = 153
	EquipmentCraftSpeed = 157
	EquipmentCraftCost = 158
	RallyWarSpeed = 165
	FortQueueNum = 170
	MarketRequestResource = 176
	RallyDefense = 181
	TransportSpeed = 185
	TransportQueueNum = 186
	TrainTroopNum = 187
	MarchDistance = 188
	FortTrainCost = 193
	ExecuteWaitTime = 194
	DragonLevelLimit = 195
	DragonAttackExpAdd = 196
	BuildBasicTimeReduce = 197
	ResearchBasicTimeReduce = 198
	BeReinforcedNum = 199
	ActiveThirdJewelry = 202
	IncreaseDragonSkillPoint = 203
	IncreaseLordSkillPoint = 204
	IncreaseMonsterSkillPoint = 205
	LordExpAdd = 206
	AntiScout = 207
	OpenCrystalMulti = 208
	OpenMaterialMulti = 209
	DesertOccupySpeed = 210
	
	HumanTroopAttack = 212
	HumanTroopDefence = 213
	HumanTroopLife = 214
	
	HumanInfantryAttackPercent = 215
	HumanInfantryDefensePercent = 216
	HumanInfantryLifePercent = 217
	HumanCavalryAttackPercent = 218
	HumanCavalryDefensePercent = 219
	HumanCavalryLifePercent = 220
	HumanRangedAttackPercent = 221
	HumanRangedDefensePercent = 222
	HumanRangedLifePercent = 223
	
	HumanSiegeAttack = 224
	HumanSiegeDefence = 225
	HumanSiegeLife = 226
	
	GatheringMarchSpeed = 242
	KvkMoveEndTime = 246
	DragonKillBySelf = 264
	CrystalMultiBuff = 265
	OpenMultiAllianceGift = 266
	FragmentSlotNum = 269
	DragonPlanNum = 272
	DesertMarchSpeedUp = 273
	AttackMarchSpeedUp = 274
	RallyReinforceSpeedUp = 275
	ReduceTransportRate = 285
	AltarDragonAtk = 291
	AltarDragonDef = 292
	AltarDragonLife = 293
	MarchHeroAssignNum = 294
	BanditAttackTimes = 297


@unique
class WildSubType(Enum):
	Grass = 0
	Lake = 1
	Snow = 2
	Desert = 3


@unique
class WildMainType(Enum):
	Empty = 0
	Wood = 1
	Stone = 2
	Mountain = 3


@unique
class TitleType(Enum):
	King = 1
	Dominator = 100
	Superking = 101


@unique
class ActionStatus(Enum):
	Marching = 0
	Fighting = 1
	Returning = 2
	Defending = 3
	Loading = 4
	Camping = 5
	PreLoading = 6
	UnLoading = 7
	Preparing = 8  # rally war
	Waiting = 9  # rally war
	Visiting = 12  # 等待接待
	CampProtect = 13
	CampNormal = 14
	PreReturn = 100


@unique
class BuffType(Enum):
	research = 0
	build_level = 1
	lord_skill = 2
	dragon_skill = 3
	vip_level = 4


@unique
class BuffTestType(Enum):
	attack = 0
	defence = 1
	life = 2


@unique
class DragonStatus(Enum):
	at_home = 0
	out_home = 1
	captured = 2
	dead = 3
	unlock = 4
