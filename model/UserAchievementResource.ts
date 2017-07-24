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

import * as models from './models';

export interface UserAchievementResource {
    /**
     * Flag indicating whether the user has earned the achievement
     */
    "achieved"?: boolean;
    /**
     * The achievement being tracked.  If used for Leveling, this represents the tier name
     */
    "achievementName": string;
    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    "createdDate"?: number;
    /**
     * The date/time the achievement was earned as a unix timestamp in seconds
     */
    "earnedDate"?: number;
    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    "updatedDate"?: number;
}

