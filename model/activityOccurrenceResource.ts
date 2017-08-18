/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ActivityEntitlementResource } from './activityEntitlementResource';
import { ActivityUserResource } from './activityUserResource';
import { SelectedSettingResource } from './selectedSettingResource';


/**
 * A occurrence of an activity (the actual game for example). Used to track scores, participants, and provide settings
 */
export interface ActivityOccurrenceResource {
    /**
     * The id of the activity
     */
    activityId: number;

    /**
     * The id of the challenge activity (as part of the event, required if eventId set)
     */
    challengeActivityId?: number;

    /**
     * The date this occurrence was created, unix timestamp in seconds
     */
    createdDate?: number;

    /**
     * The entitlement item required to enter the occurrence. Required if not part of an event. Must come from the set of entitlement items listed in the activity
     */
    entitlement?: ActivityEntitlementResource;

    /**
     * The id of the event
     */
    eventId?: number;

    /**
     * The id of the activity occurrence
     */
    id?: number;

    /**
     * Indicate if the rewards have been given out already
     */
    rewardStatus?: ActivityOccurrenceResource.RewardStatusEnum;

    /**
     * The values selected from the available settings defined for the activity. Ex: difficulty: hard. Can be left out if the activity is played during an event and the settings are already set at the event level. Ex: every monday, difficulty: hard, number of questions: 10, category: sport. Otherwise, the set must exactly match those of the activity.
     */
    settings?: Array<SelectedSettingResource>;

    /**
     * Whether this occurrence will be ran as a simulation. Simulations will not be rewarded. Useful for bot play or trials
     */
    simulated?: boolean;

    /**
     * The date this occurrence was started, unix timestamp in seconds. null if not yet started
     */
    startDate?: number;

    /**
     * The current status of the occurrence (default: OPEN)
     */
    status?: ActivityOccurrenceResource.StatusEnum;

    /**
     * The date this occurrence was last updated, unix timestamp in seconds
     */
    updatedDate?: number;

    /**
     * The list of users participating in this occurrence. Can only be set directly with ACTIVITIES_ADMIN permission
     */
    users?: Array<ActivityUserResource>;

}
export namespace ActivityOccurrenceResource {
    export enum RewardStatusEnum {
        Pending = <any> 'pending',
        Failed = <any> 'failed',
        Complete = <any> 'complete',
        Partial = <any> 'partial'
    }
    export enum StatusEnum {
        SETUP = <any> 'SETUP',
        OPEN = <any> 'OPEN',
        PLAYING = <any> 'PLAYING',
        FINISHED = <any> 'FINISHED',
        ABANDONED = <any> 'ABANDONED'
    }
}