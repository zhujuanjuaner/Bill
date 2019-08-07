using System;
using System.Collections.Generic;
using System.Reflection;

public static class ViewNames
{
    public const string ViewTaskTestPop = nameof(ViewTaskTestPop);

    // Common
    public const string ViewCommonChangeNamePop = nameof(ViewCommonChangeNamePop);
    public const string ViewCommonChangeLanguagePop = nameof(ViewCommonChangeLanguagePop);
    public const string ViewCommonNoticePop = nameof(ViewCommonNoticePop);
    public const string ViewCommonUseSpecialItemPop = nameof(ViewCommonUseSpecialItemPop);
    public const string ViewPlayerDetailPop = nameof(ViewPlayerDetailPop);
    public const string ViewLoading = nameof(ViewLoading);
    public const string ViewMask = nameof(ViewMask);
    public const string ViewEmpty = nameof(ViewEmpty);
    public const string ViewCloud = nameof(ViewCloud);
    public const string ViewRewardDialogPop = nameof(ViewRewardDialogPop);
    public const string ViewAttentionPop = nameof(ViewAttentionPop);
    public const string ViewInfo = nameof(ViewInfo);
    public const string ViewCommonInfoPop = nameof(ViewCommonInfoPop);
    public const string ViewCommonBuffInfo = nameof(ViewCommonBuffInfo);
    public const string ViewTroopMoreInfoPop = nameof(ViewTroopMoreInfoPop);
    public const string ViewFloatTextWarning = nameof(ViewFloatTextWarning);
    public const string ViewHeroSelectPop = nameof(ViewHeroSelectPop);
    public const string ViewCommonEnergyInfoPop = nameof(ViewCommonEnergyInfoPop);
    public const string ViewCommonLoyaltyInfoPop = nameof(ViewCommonLoyaltyInfoPop);
    public const string ViewFloatReportWarning = nameof(ViewFloatReportWarning);
    public const string ViewKeyboardMask = nameof(ViewKeyboardMask);
    public const string ViewForceUpdatePop = nameof(ViewForceUpdatePop);

    //Iap
    public const string ViewIapMain = nameof(ViewIapMain);
	public const string ViewIapDetailPop = nameof(ViewIapDetailPop);
    public const string ViewIapSuccessPop = nameof(ViewIapSuccessPop);
	public const string ViewIapWelfareMain = nameof(ViewIapWelfareMain);
	public const string ViewIapWelfareDetail = nameof(ViewIapWelfareDetail);
	public const string ViewIapWelfareGrowingDetail = nameof(ViewIapWelfareGrowingDetail);

	//Effect
	public const string ViewEffectRewardCollect = nameof(ViewEffectRewardCollect);
    public const string ViewEffectAttackWarning = nameof(ViewEffectAttackWarning);

    // Broadcast
    public const string ViewBroadCast = nameof(ViewBroadCast);

    // Boost
    public const string ViewBoostsList = nameof(ViewBoostsList);
    public const string ViewBoostsDetail = nameof(ViewBoostsDetail);

    // Chat
    public const string ViewChatMain = nameof(ViewChatMain);
    public const string ViewChatMultiCoordSharePop = nameof(ViewChatMultiCoordSharePop);

    //Kingdom Map
    public const string ViewWorldWildResourcePop = nameof(ViewWorldWildResourcePop);
    public const string ViewWorldWildEmptyPop = nameof(ViewWorldWildEmptyPop);
    public const string ViewWorldWildCityPop = nameof(ViewWorldWildCityPop);
    public const string ViewWorldWildMonsterPop = nameof(ViewWorldWildMonsterPop);
    public const string ViewWorldWildMonsterNestPop = nameof(ViewWorldWildMonsterNestPop);
    public const string ViewWorldWildThronePop = nameof(ViewWorldWildThronePop);
    public const string ViewWorldWildIdolPop = nameof(ViewWorldWildIdolPop);
    public const string ViewWorldWildBanditPop = nameof(ViewWorldWildBanditPop);

    public const string ViewWorldMonsterInfoPop = nameof(ViewWorldMonsterInfoPop);
    public const string ViewWorldMonsterNestInfoPop = nameof(ViewWorldMonsterNestInfoPop);
    public const string ViewWorldTeleportAdvancedPop = nameof(ViewWorldTeleportAdvancedPop);
    public const string ViewWorldServerBlockPop = nameof(ViewWorldServerBlockPop);
    public const string ViewWorldDragonCapturePop = nameof(ViewWorldDragonCapturePop);
    public const string ViewWorldMapWildSearch = nameof(ViewWorldMapWildSearch);

    public const string ViewWorldMapCoordSearchPop = nameof(ViewWorldMapCoordSearchPop);
    public const string ViewWorldMapServerSearchPop = nameof(ViewWorldMapServerSearchPop);
    public const string ViewBookmarkList = nameof(ViewBookmarkList);
    public const string ViewWorldBookmarkPop = nameof(ViewWorldBookmarkPop);
    public const string ViewWorldCityMoveWarningPop = nameof(ViewWorldCityMoveWarningPop);

    // Throne
    public const string ViewWorldThroneMain = nameof(ViewWorldThroneMain);
    public const string ViewWorldThroneTroop = nameof(ViewWorldThroneTroop);
    public const string ViewWorldThronePrivilegesPop = nameof(ViewWorldThronePrivilegesPop);
    public const string ViewWorldThroneRankPop = nameof(ViewWorldThroneRankPop);
    public const string ViewWorldThroneTaxPop = nameof(ViewWorldThroneTaxPop);
    public const string ViewWorldThroneTitle = nameof(ViewWorldThroneTitle);

    // Idol
    public const string ViewWorldIdolRankPop = nameof(ViewWorldIdolRankPop);
    public const string ViewWorldIdolBuffPop = nameof(ViewWorldIdolBuffPop);

    // March
    public const string ViewMarchSelect = nameof(ViewMarchSelect);
    public const string ViewTransportSelect = nameof(ViewTransportSelect);
    public const string ViewMarchBoost = nameof(ViewMarchBoost);
    public const string ViewMarchBoostPop = nameof(ViewMarchBoostPop);
    public const string ViewMarchScoutPop = nameof(ViewMarchScoutPop);
    public const string ViewMarchList = nameof(ViewMarchList);
    public const string ViewMarchDetailPop = nameof(ViewMarchDetailPop);
    public const string ViewMarchDetailTransportPop = nameof(ViewMarchDetailTransportPop);
    public const string ViewMarchMarchingPop = nameof(ViewMarchMarchingPop);

    // Item
    public const string ViewItemShopDetailPop = nameof(ViewItemShopDetailPop);
    public const string ViewItemChestOpenPop = nameof(ViewItemChestOpenPop);
    public const string ViewItemChestMaxOpenPop = nameof(ViewItemChestMaxOpenPop);
    public const string ViewMysteryGiftPop = nameof(ViewMysteryGiftPop);
    public const string ViewItemShopList = nameof(ViewItemShopList);
    public const string ViewItemResource = nameof(ViewItemResource);
    public const string ViewItemSpeedUp = nameof(ViewItemSpeedUp);
    public const string ViewItemSpecialGet = nameof(ViewItemSpecialGet);
    public const string ViewItemUsePortraitPop = nameof(ViewItemUsePortraitPop);

    // VIP
    public const string ViewVipAddPoint = nameof(ViewVipAddPoint);
    public const string ViewVipMain = nameof(ViewVipMain);
    public const string ViewVipChestDetailPop = nameof(ViewVipChestDetailPop);
    public const string ViewVipDailyPop = nameof(ViewVipDailyPop);

    // Alliance
    public const string ViewAllianceHelp = nameof(ViewAllianceHelp);
    public const string ViewAllianceDetailPop = nameof(ViewAllianceDetailPop);
    public const string ViewAllianceAssistance = nameof(ViewAllianceAssistance);
    public const string ViewAllianceList = nameof(ViewAllianceList);
    public const string ViewAllianceRequest = nameof(ViewAllianceRequest);
    public const string ViewAllianceManagePositionPop = nameof(ViewAllianceManagePositionPop);
    public const string ViewAllianceJoinPop = nameof(ViewAllianceJoinPop);
    public const string ViewAllianceMember = nameof(ViewAllianceMember);
    public const string ViewAllianceMemberAction = nameof(ViewAllianceMemberAction);
    public const string ViewAllianceManagement = nameof(ViewAllianceManagement);
    public const string ViewAllianceMain = nameof(ViewAllianceMain);
    public const string ViewAllianceBannerPop = nameof(ViewAllianceBannerPop);
    public const string ViewAllianceCreatePop = nameof(ViewAllianceCreatePop);
    public const string ViewAllianceMessageBoardPostPop = nameof(ViewAllianceMessageBoardPostPop);
    public const string ViewAllianceMessageBoard = nameof(ViewAllianceMessageBoard);
    public const string ViewAllianceGift = nameof(ViewAllianceGift);
    public const string ViewAllianceRecommend = nameof(ViewAllianceRecommend);
    public const string ViewAllianceRecommendMore = nameof(ViewAllianceRecommendMore);
    public const string ViewAllianceReport = nameof(ViewAllianceReport);

    // Rank
    public const string ViewMoreRankDetail = nameof(ViewMoreRankDetail);
    public const string ViewMoreRankList = nameof(ViewMoreRankList);

    // More
    public const string ViewMoreMain = nameof(ViewMoreMain);
    public const string ViewMoreBlocklist = nameof(ViewMoreBlocklist);
    public const string ViewMoreNotification = nameof(ViewMoreNotification);
    public const string ViewMoreSetting = nameof(ViewMoreSetting);

    // Account
    public const string ViewAccountMainPop = nameof(ViewAccountMainPop);
    public const string ViewAccountLinkPop = nameof(ViewAccountLinkPop);
    public const string ViewAccountSwitchAlertPop = nameof(ViewAccountSwitchAlertPop);

    // Main
    public const string ViewMain = nameof(ViewMain);
    public const string ViewMainFitMetro = nameof(ViewMainFitMetro);
    public const string ViewMainOverviewQueue = nameof(ViewMainOverviewQueue);
    public const string ViewBuildingFunctionPop = nameof(ViewBuildingFunctionPop);

    // RallyWar
    public const string ViewRallyWar = nameof(ViewRallyWar);
    public const string ViewRallyWarDetail = nameof(ViewRallyWarDetail);
    public const string ViewRallyWarTimePop = nameof(ViewRallyWarTimePop);
    public const string ViewRallyWarBattleHistory = nameof(ViewRallyWarBattleHistory);

    // Mail && Report 
    public const string ViewMailMain = nameof(ViewMailMain);
    public const string ViewMailList = nameof(ViewMailList);
    public const string ViewMailDetail = nameof(ViewMailDetail);
    public const string ViewMailListFilterPop = nameof(ViewMailListFilterPop);
    public const string ViewMailBonusComparison = nameof(ViewMailBonusComparison);
    public const string ViewMailReportCombatDetail = nameof(ViewMailReportCombatDetail);
    public const string ViewMailReportDetail = nameof(ViewMailReportDetail);
    public const string ViewMailClaimAllPop = nameof(ViewMailClaimAllPop);
    public const string ViewMailChatDetailEditPop = nameof(ViewMailChatDetailEditPop);
    public const string ViewMailChatDetail = nameof(ViewMailChatDetail);
    public const string ViewMailWritePop = nameof(ViewMailWritePop);

    // Building
    public const string ViewBuildingCommonInfo = nameof(ViewBuildingCommonInfo);
    public const string ViewBuildingCommonDeconstructPop = nameof(ViewBuildingCommonDeconstructPop);
    public const string ViewBuildingCreateList = nameof(ViewBuildingCreateList);
    public const string ViewBuildingCommon = nameof(ViewBuildingCommon); //TODO black guide 在使用，等待black删除
    public const string ViewBuildingCommonUpgrade = nameof(ViewBuildingCommonUpgrade);
    public const string ViewBuildingTimeBonusPop = nameof(ViewBuildingTimeBonusPop);
    public const string ViewCivicCenterMilitaryDetailPop = nameof(ViewCivicCenterMilitaryDetailPop);
    public const string ViewCivicCenterResourceDetailPop = nameof(ViewCivicCenterResourceDetailPop);
    public const string ViewCivicCenterMain = nameof(ViewCivicCenterMain);
    public const string ViewHospitalMain = nameof(ViewHospitalMain);
    public const string ViewTroopMain = nameof(ViewTroopMain);
    public const string ViewTroopAdvantagePop = nameof(ViewTroopAdvantagePop);
    public const string ViewTroopDetailPop = nameof(ViewTroopDetailPop);
    public const string ViewTroopDismissPop = nameof(ViewTroopDismissPop);
    public const string ViewTroopRelevantInfoPop = nameof(ViewTroopRelevantInfoPop);
    public const string ViewTrapMain = nameof(ViewTrapMain);
    public const string ViewTrapRepair = nameof(ViewTrapRepair);
    public const string ViewTrapAdvantagePop = nameof(ViewTrapAdvantagePop);
    public const string ViewAltarMain = nameof(ViewAltarMain);
    public const string ViewAltarExecutedHistory = nameof(ViewAltarExecutedHistory);
    public const string ViewJailMain = nameof(ViewJailMain);
    public const string ViewJailDetail = nameof(ViewJailDetail);
    public const string ViewJailSuccessfullyExecutedPop = nameof(ViewJailSuccessfullyExecutedPop);
    public const string ViewRallyFieldPreset = nameof(ViewRallyFieldPreset);
    public const string ViewRallyFieldEditPreset = nameof(ViewRallyFieldEditPreset);
    public const string ViewEmbassMain = nameof(ViewEmbassMain);
    public const string ViewEmbassReinforceDetailPop = nameof(ViewEmbassReinforceDetailPop);
    public const string ViewEmbassReinforceTotalTroopPop = nameof(ViewEmbassReinforceTotalTroopPop);
    public const string ViewWatchtowerMain = nameof(ViewWatchtowerMain);
    public const string ViewWatchtowerAttackDetailPop = nameof(ViewWatchtowerAttackDetailPop);
    public const string ViewWatchtowerReinforceDetailPop = nameof(ViewWatchtowerReinforceDetailPop);
    public const string ViewWatchtowerTransportDetailPop = nameof(ViewWatchtowerTransportDetailPop);
    public const string ViewTotemMain = nameof(ViewTotemMain);
    public const string ViewTotemSummonHero = nameof(ViewTotemSummonHero);
    public const string ViewTotemSummonItem = nameof(ViewTotemSummonItem);
    public const string ViewTotemBuyPop = nameof(ViewTotemBuyPop);
    public const string ViewTotemRewardListPop = nameof(ViewTotemRewardListPop);
    public const string ViewCityWallDefense = nameof(ViewCityWallDefense);

    // Building-Forge
    public const string ViewForgeMain = nameof(ViewForgeMain);
    public const string ViewForgeBagMain = nameof(ViewForgeBagMain);
    public const string ViewForgeDrawingList = nameof(ViewForgeDrawingList);
    public const string ViewForgeGetMaterialBoxItem = nameof(ViewForgeGetMaterialBoxItem);
    public const string ViewForgeEquipBag = nameof(ViewForgeEquipBag);
    public const string ViewForgeMaterialBag = nameof(ViewForgeMaterialBag);
    public const string ViewForgeMaterialDetailPop = nameof(ViewForgeMaterialDetailPop);
    public const string ViewForgeGetRequireMaterialPop = nameof(ViewForgeGetRequireMaterialPop);
    public const string ViewForgeSucceedPop = nameof(ViewForgeSucceedPop);
    public const string ViewForgeEquipForge = nameof(ViewForgeEquipForge);
    public const string ViewForgeFilterPop = nameof(ViewForgeFilterPop);
    public const string ViewForgeCrystalBag = nameof(ViewForgeCrystalBag);
    public const string ViewForgeCrystalDetailFusePop = nameof(ViewForgeCrystalDetailFusePop);
    public const string ViewForgeEquipDetail = nameof(ViewForgeEquipDetail);
    public const string ViewForgeEquipCrystalInlayPop = nameof(ViewForgeEquipCrystalInlayPop);
    public const string ViewForgeEquipCrystalRemove = nameof(ViewForgeEquipCrystalRemove);
    public const string ViewForgeEquipDismantlePop = nameof(ViewForgeEquipDismantlePop);

    // Research
    public const string ViewResearchTree = nameof(ViewResearchTree);
    public const string ViewResearchMain = nameof(ViewResearchMain);
    public const string ViewResearchDetailPop = nameof(ViewResearchDetailPop);

    // Lord
    public const string ViewLordMain = nameof(ViewLordMain);
    public const string ViewLordImageEditPop = nameof(ViewLordImageEditPop);
    public const string ViewLordDetailOwn = nameof(ViewLordDetailOwn);
    public const string ViewLordDetailOther = nameof(ViewLordDetailOther);
    public const string ViewLordSkillDetailPop = nameof(ViewLordSkillDetailPop);
    public const string ViewLordSkillResetPop = nameof(ViewLordSkillResetPop);
    public const string ViewLordActionPointAdd = nameof(ViewLordActionPointAdd);
    public const string ViewLordTalentDetailPop = nameof(ViewLordTalentDetailPop);
    public const string ViewLordTalentActivePop = nameof(ViewLordTalentActivePop);

    // Guide
    public const string ViewGuide = nameof(ViewGuide);

    // Castle && Lord Level Up 
    public const string ViewLordLevelUpPop = nameof(ViewLordLevelUpPop);
    public const string ViewCivicCenterUpgradePop = nameof(ViewCivicCenterUpgradePop);

    // Event
    public const string ViewEventMain = nameof(ViewEventMain);
    public const string ViewEventPointDetailPop = nameof(ViewEventPointDetailPop);

    // Dragon
    public const string ViewDragonMain = nameof(ViewDragonMain);
    public const string ViewDragonEquipWear = nameof(ViewDragonEquipWear);
    public const string ViewDragonInfo = nameof(ViewDragonInfo);
    public const string ViewDragonLevelUpPop = nameof(ViewDragonLevelUpPop);
    public const string ViewDragonSkill = nameof(ViewDragonSkill);
    public const string ViewDragonCapturedDead = nameof(ViewDragonCapturedDead);
    public const string ViewDragonExpAdd = nameof(ViewDragonExpAdd);
    public const string ViewDragonEnergyAdd = nameof(ViewDragonEnergyAdd);

    // Hero
    public const string ViewHeroMain = nameof(ViewHeroMain);
    public const string ViewHeroDetail = nameof(ViewHeroDetail);
    public const string ViewHeroBagPop = nameof(ViewHeroBagPop);
    public const string ViewHeroCombine = nameof(ViewHeroCombine);
    public const string ViewHeroDevelopmentBoostPop = nameof(ViewHeroDevelopmentBoostPop);
    public const string ViewHeroExpAddPop = nameof(ViewHeroExpAddPop);
    public const string ViewHeroFragmentAccessPop = nameof(ViewHeroFragmentAccessPop);
    public const string ViewHeroFragmentExchangePop = nameof(ViewHeroFragmentExchangePop);
    public const string ViewHeroSkillDetailPop = nameof(ViewHeroSkillDetailPop);
    public const string ViewHeroStarUp = nameof(ViewHeroStarUp);

    // Task
    public const string ViewTaskMain = nameof(ViewTaskMain);
    public const string ViewTaskDailyChestDetailPop = nameof(ViewTaskDailyChestDetailPop);

    // Maintain
    public const string ViewMaintainPrePop = nameof(ViewMaintainPrePop);
    public const string ViewMaintainIngPop = nameof(ViewMaintainIngPop);
    public const string ViewMaintainIngLoadingPop = nameof(ViewMaintainIngLoadingPop);
    public const string ViewForceReloadPop = nameof(ViewForceReloadPop);

    // Debug
    public const string ViewEnvironmentSelect = nameof(ViewEnvironmentSelect);
    public const string ViewDebugMain = nameof(ViewDebugMain);

    private static readonly List<string> _listNames;

    static ViewNames()
    {
        _listNames = new List<string>();
        Type typeNames = typeof(ViewNames);
        foreach (FieldInfo field in typeNames.GetFields(BindingFlags.Static | BindingFlags.Public))
        {
            _listNames.Add(field.Name);
        }
    }

    public static void Register()
    {
        foreach (string viewName in _listNames)
        {
            MgrPlugin.AddPlugin(new PluginView(viewName));
        }
    }

    public static void UnRegister()
    {
        foreach (string viewName in _listNames)
        {
            MgrPlugin.RemovePlugin(viewName);
        }
    }
}