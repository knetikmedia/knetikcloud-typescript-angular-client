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

export interface UserLevelingResource {
    /**
     * The name of the last tier the user has qualified for
     */
    "lastTierName": string;
    /**
     * The progress level of the last tier the user has qualified for
     */
    "lastTierProgress": number;
    /**
     * The name of the level schema
     */
    "levelName": string;
    /**
     * The name of the next tier the user can qualify for
     */
    "nextTierName": string;
    /**
     * The progress needed to qualify for the next tier
     */
    "nextTierProgress": number;
    /**
     * The amount of progress the user has
     */
    "progress": number;
    /**
     * The names of the tiers the user has qualified for
     */
    "tierNames": Array<string>;
    /**
     * The ID of the user
     */
    "userId": number;
}

