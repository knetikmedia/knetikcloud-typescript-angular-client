import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { Access_TokenService } from './api/accessToken.service';
import { ActivitiesService } from './api/activities.service';
import { Amazon_Web_Services_S3Service } from './api/amazonWebServicesS3.service';
import { Auth_ClientsService } from './api/authClients.service';
import { Auth_PermissionsService } from './api/authPermissions.service';
import { Auth_RolesService } from './api/authRoles.service';
import { Auth_TokensService } from './api/authTokens.service';
import { CampaignsService } from './api/campaigns.service';
import { Campaigns_ChallengesService } from './api/campaignsChallenges.service';
import { Campaigns_RewardsService } from './api/campaignsRewards.service';
import { CategoriesService } from './api/categories.service';
import { ChatService } from './api/chat.service';
import { ConfigsService } from './api/configs.service';
import { Content_ArticlesService } from './api/contentArticles.service';
import { Content_CommentsService } from './api/contentComments.service';
import { CurrenciesService } from './api/currencies.service';
import { DevicesService } from './api/devices.service';
import { DispositionsService } from './api/dispositions.service';
import { FulfillmentService } from './api/fulfillment.service';
import { Gamification_AchievementsService } from './api/gamificationAchievements.service';
import { Gamification_LeaderboardsService } from './api/gamificationLeaderboards.service';
import { Gamification_LevelingService } from './api/gamificationLeveling.service';
import { Gamification_MetricsService } from './api/gamificationMetrics.service';
import { Gamification_TriviaService } from './api/gamificationTrivia.service';
import { InvoicesService } from './api/invoices.service';
import { LocationsService } from './api/locations.service';
import { LogsService } from './api/logs.service';
import { Media_ArtistsService } from './api/mediaArtists.service';
import { Media_ModerationService } from './api/mediaModeration.service';
import { Media_PollsService } from './api/mediaPolls.service';
import { Media_VideosService } from './api/mediaVideos.service';
import { MessagingService } from './api/messaging.service';
import { Messaging_TopicsService } from './api/messagingTopics.service';
import { NotificationsService } from './api/notifications.service';
import { ObjectsService } from './api/objects.service';
import { PaymentsService } from './api/payments.service';
import { Payments_AppleService } from './api/paymentsApple.service';
import { Payments_FattMerchantService } from './api/paymentsFattMerchant.service';
import { Payments_OptimalService } from './api/paymentsOptimal.service';
import { Payments_PayPalClassicService } from './api/paymentsPayPalClassic.service';
import { Payments_StripeService } from './api/paymentsStripe.service';
import { Payments_TransactionsService } from './api/paymentsTransactions.service';
import { Payments_WalletsService } from './api/paymentsWallets.service';
import { Payments_XsollaService } from './api/paymentsXsolla.service';
import { Reporting_ChallengesService } from './api/reportingChallenges.service';
import { Reporting_OrdersService } from './api/reportingOrders.service';
import { Reporting_RevenueService } from './api/reportingRevenue.service';
import { Reporting_SubscriptionsService } from './api/reportingSubscriptions.service';
import { Reporting_UsageService } from './api/reportingUsage.service';
import { Reporting_UsersService } from './api/reportingUsers.service';
import { Rule_Engine_ActionsService } from './api/ruleEngineActions.service';
import { Rule_Engine_EventsService } from './api/ruleEngineEvents.service';
import { Rule_Engine_ExpressionsService } from './api/ruleEngineExpressions.service';
import { Rule_Engine_GlobalsService } from './api/ruleEngineGlobals.service';
import { Rule_Engine_RulesService } from './api/ruleEngineRules.service';
import { Rule_Engine_TriggersService } from './api/ruleEngineTriggers.service';
import { Rule_Engine_VariablesService } from './api/ruleEngineVariables.service';
import { SearchService } from './api/search.service';
import { Social_FacebookService } from './api/socialFacebook.service';
import { Social_GoogleService } from './api/socialGoogle.service';
import { StoreService } from './api/store.service';
import { Store_BundlesService } from './api/storeBundles.service';
import { Store_CouponsService } from './api/storeCoupons.service';
import { Store_SalesService } from './api/storeSales.service';
import { Store_ShippingService } from './api/storeShipping.service';
import { Store_Shopping_CartsService } from './api/storeShoppingCarts.service';
import { Store_SubscriptionsService } from './api/storeSubscriptions.service';
import { Store_VendorsService } from './api/storeVendors.service';
import { TaxesService } from './api/taxes.service';
import { Templates_PropertiesService } from './api/templatesProperties.service';
import { UsersService } from './api/users.service';
import { Users_AddressesService } from './api/usersAddresses.service';
import { Users_FriendshipsService } from './api/usersFriendships.service';
import { Users_GroupsService } from './api/usersGroups.service';
import { Users_InventoryService } from './api/usersInventory.service';
import { Users_RelationshipsService } from './api/usersRelationships.service';
import { Users_SubscriptionsService } from './api/usersSubscriptions.service';
import { Util_BatchService } from './api/utilBatch.service';
import { Util_HealthService } from './api/utilHealth.service';
import { Util_MaintenanceService } from './api/utilMaintenance.service';
import { Util_SecurityService } from './api/utilSecurity.service';
import { Util_VersionService } from './api/utilVersion.service';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ Access_TokenService, ActivitiesService, Amazon_Web_Services_S3Service, Auth_ClientsService, Auth_PermissionsService, Auth_RolesService, Auth_TokensService, CampaignsService, Campaigns_ChallengesService, Campaigns_RewardsService, CategoriesService, ChatService, ConfigsService, Content_ArticlesService, Content_CommentsService, CurrenciesService, DevicesService, DispositionsService, FulfillmentService, Gamification_AchievementsService, Gamification_LeaderboardsService, Gamification_LevelingService, Gamification_MetricsService, Gamification_TriviaService, InvoicesService, LocationsService, LogsService, Media_ArtistsService, Media_ModerationService, Media_PollsService, Media_VideosService, MessagingService, Messaging_TopicsService, NotificationsService, ObjectsService, PaymentsService, Payments_AppleService, Payments_FattMerchantService, Payments_OptimalService, Payments_PayPalClassicService, Payments_StripeService, Payments_TransactionsService, Payments_WalletsService, Payments_XsollaService, Reporting_ChallengesService, Reporting_OrdersService, Reporting_RevenueService, Reporting_SubscriptionsService, Reporting_UsageService, Reporting_UsersService, Rule_Engine_ActionsService, Rule_Engine_EventsService, Rule_Engine_ExpressionsService, Rule_Engine_GlobalsService, Rule_Engine_RulesService, Rule_Engine_TriggersService, Rule_Engine_VariablesService, SearchService, Social_FacebookService, Social_GoogleService, StoreService, Store_BundlesService, Store_CouponsService, Store_SalesService, Store_ShippingService, Store_Shopping_CartsService, Store_SubscriptionsService, Store_VendorsService, TaxesService, Templates_PropertiesService, UsersService, Users_AddressesService, Users_FriendshipsService, Users_GroupsService, Users_InventoryService, Users_RelationshipsService, Users_SubscriptionsService, Util_BatchService, Util_HealthService, Util_MaintenanceService, Util_SecurityService, Util_VersionService ]
})
export class ApiModule {
    public static forConfig(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ {provide: Configuration, useFactory: configurationFactory}]
        }
    }
}
