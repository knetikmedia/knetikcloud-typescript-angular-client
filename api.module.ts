import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AWSS3Api', api.AWSS3Api)
.service('ActivitiesApi', api.ActivitiesApi)
.service('AuthClientsApi', api.AuthClientsApi)
.service('AuthPermissionsApi', api.AuthPermissionsApi)
.service('AuthRolesApi', api.AuthRolesApi)
.service('AuthTokensApi', api.AuthTokensApi)
.service('BRERuleEngineActionsApi', api.BRERuleEngineActionsApi)
.service('BRERuleEngineCategoriesApi', api.BRERuleEngineCategoriesApi)
.service('BRERuleEngineEventsApi', api.BRERuleEngineEventsApi)
.service('BRERuleEngineExpressionsApi', api.BRERuleEngineExpressionsApi)
.service('BRERuleEngineGlobalsApi', api.BRERuleEngineGlobalsApi)
.service('BRERuleEngineRulesApi', api.BRERuleEngineRulesApi)
.service('BRERuleEngineTriggersApi', api.BRERuleEngineTriggersApi)
.service('BRERuleEngineVariablesApi', api.BRERuleEngineVariablesApi)
.service('CampaignsApi', api.CampaignsApi)
.service('CampaignsChallengesApi', api.CampaignsChallengesApi)
.service('CampaignsRewardsApi', api.CampaignsRewardsApi)
.service('CategoriesApi', api.CategoriesApi)
.service('ConfigsApi', api.ConfigsApi)
.service('ContentArticlesApi', api.ContentArticlesApi)
.service('ContentCommentsApi', api.ContentCommentsApi)
.service('ContentPollsApi', api.ContentPollsApi)
.service('CurrenciesApi', api.CurrenciesApi)
.service('DevicesApi', api.DevicesApi)
.service('DispositionsApi', api.DispositionsApi)
.service('FulfillmentApi', api.FulfillmentApi)
.service('GamificationAchievementsApi', api.GamificationAchievementsApi)
.service('GamificationLeaderboardsApi', api.GamificationLeaderboardsApi)
.service('GamificationLevelingApi', api.GamificationLevelingApi)
.service('GamificationMetricsApi', api.GamificationMetricsApi)
.service('GamificationTriviaApi', api.GamificationTriviaApi)
.service('InvoicesApi', api.InvoicesApi)
.service('LocationsApi', api.LocationsApi)
.service('LogsApi', api.LogsApi)
.service('MediaArtistsApi', api.MediaArtistsApi)
.service('MediaModerationApi', api.MediaModerationApi)
.service('MediaVideosApi', api.MediaVideosApi)
.service('MessagingApi', api.MessagingApi)
.service('PaymentsApi', api.PaymentsApi)
.service('PaymentsAppleApi', api.PaymentsAppleApi)
.service('PaymentsGoogleApi', api.PaymentsGoogleApi)
.service('PaymentsOptimalApi', api.PaymentsOptimalApi)
.service('PaymentsPayPalClassicApi', api.PaymentsPayPalClassicApi)
.service('PaymentsStripeApi', api.PaymentsStripeApi)
.service('PaymentsTransactionsApi', api.PaymentsTransactionsApi)
.service('PaymentsWalletsApi', api.PaymentsWalletsApi)
.service('PaymentsXsollaApi', api.PaymentsXsollaApi)
.service('ReportingChallengesApi', api.ReportingChallengesApi)
.service('ReportingOrdersApi', api.ReportingOrdersApi)
.service('ReportingRevenueApi', api.ReportingRevenueApi)
.service('ReportingSubscriptionsApi', api.ReportingSubscriptionsApi)
.service('ReportingUsageApi', api.ReportingUsageApi)
.service('ReportingUsersApi', api.ReportingUsersApi)
.service('SearchApi', api.SearchApi)
.service('StoreApi', api.StoreApi)
.service('StoreBundlesApi', api.StoreBundlesApi)
.service('StoreCouponsApi', api.StoreCouponsApi)
.service('StoreSalesApi', api.StoreSalesApi)
.service('StoreShippingApi', api.StoreShippingApi)
.service('StoreShoppingCartsApi', api.StoreShoppingCartsApi)
.service('StoreSubscriptionsApi', api.StoreSubscriptionsApi)
.service('StoreVendorsApi', api.StoreVendorsApi)
.service('TaxesApi', api.TaxesApi)
.service('UsersApi', api.UsersApi)
.service('UsersAddressesApi', api.UsersAddressesApi)
.service('UsersFriendshipsApi', api.UsersFriendshipsApi)
.service('UsersGroupsApi', api.UsersGroupsApi)
.service('UsersInventoryApi', api.UsersInventoryApi)
.service('UsersRelationshipsApi', api.UsersRelationshipsApi)
.service('UsersSubscriptionsApi', api.UsersSubscriptionsApi)
.service('UtilBatchApi', api.UtilBatchApi)
.service('UtilHealthApi', api.UtilHealthApi)
.service('UtilMaintenanceApi', api.UtilMaintenanceApi)
.service('UtilSecurityApi', api.UtilSecurityApi)
.service('UtilVersionApi', api.UtilVersionApi)

export default apiModule;
