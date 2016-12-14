/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface UserAchievementResource {
        /**
         * Flag indicating whether the user has earned the achievement
         */
        "achieved"?: boolean;

        /**
         * The achievement being tracked
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
         * The id of the achievement progress
         */
        "id"?: string;

        /**
         * The current progress of the user on the achievement
         */
        "progress": number;

        /**
         * The date/time this resource was last updated in seconds since unix epoch
         */
        "updatedDate"?: number;

        /**
         * The id of the user whose progress is being tracked
         */
        "userId": number;

    }

}
