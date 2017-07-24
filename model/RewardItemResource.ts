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

export interface RewardItemResource {
    /**
     * The id of the item to reward
     */
    "itemId": number;
    /**
     * The name of the item to reward (read only, set by id)
     */
    "itemName"?: string;
    /**
     * The highest number (worst) rank to give the reward to. Must be greater than or equal to minRank
     */
    "maxRank": number;
    /**
     * The lowest number (best) rank to give the reward to. Must be greater than zero
     */
    "minRank": number;
    /**
     * How many copies to give
     */
    "quantity": number;
}

