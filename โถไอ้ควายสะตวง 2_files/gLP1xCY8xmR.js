if (self.CavalryLogger) { CavalryLogger.start_js(["Z4YMI"]); }

__d('AdsConversionsOfflineCampaignOptimizationPlugin',['AdConvViewAttrWindows','AdsAPIObjectives','AdsAPIOptimizationGoals','AdsConversionsCampaignOptimizationPlugin','AdsDefaultCampaignOptimizationPlugin','AdsPromotedObjectTypes'],(function a(b,c,d,e,f,g){'use strict';var h=babelHelpers['extends']({},c('AdsDefaultCampaignOptimizationPlugin'),c('AdsConversionsCampaignOptimizationPlugin'),{type:'campaign/optimization',key:'conversions/offline',pivots:{objective:c('AdsAPIObjectives').CONVERSIONS,promotedObjectType:c('AdsPromotedObjectTypes').OFFLINE_EVENT_SET},getDefaultViewConversionWindowLength:function i(){return c('AdConvViewAttrWindows').ATTR_7_DAY;},getDefaultOptimizationGoal:function i(j){return c('AdsAPIOptimizationGoals').OFFLINE_CONVERSIONS;}});f.exports=h;}),null);