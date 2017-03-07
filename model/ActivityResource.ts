/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface ActivityResource {
    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    "createdDate"?: number;
    /**
     * The list of items that can be used for entitlement (wager amounts/etc)
     */
    "entitlements"?: Array<models.ActivityEntitlementResource>;
    /**
     * The unique ID for that resource
     */
    "id"?: number;
    /**
     * Details about how to launch the activity
     */
    "launch"?: string;
    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    "longDescription"?: string;
    /**
     * The user friendly name of that resource
     */
    "name": string;
    /**
     * The rewards to give at the end of each occurence of the activity. When creating/updating only id is used. Reward set must be pre-existing
     */
    "rewardSet"?: models.RewardSetResource;
    /**
     * The list of settings and their options available for this activity. Not populated when getting listing
     */
    "settings"?: Array<models.AvailableSettingResource>;
    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    "shortDescription"?: string;
    /**
     * Whether this activity is a template for other activities. Default: false
     */
    "template"?: boolean;
    /**
     * The type of the activity
     */
    "type": string;
    /**
     * The unique key (for static reference in code) of the activity
     */
    "uniqueKey"?: string;
    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    "updatedDate"?: number;
}

