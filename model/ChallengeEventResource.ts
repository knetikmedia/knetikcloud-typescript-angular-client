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

export interface ChallengeEventResource {
    /**
     * The id of the challenge
     */
    "challengeId"?: number;
    /**
     * The end date in seconds
     */
    "endDate"?: number;
    /**
     * The id of the challenge event
     */
    "id"?: number;
    /**
     * Indicate if the rewards have been given out already 
     */
    "rewardStatus"?: ChallengeEventResource.RewardStatusEnum;
    /**
     * The start date in seconds
     */
    "startDate"?: number;
}

export namespace ChallengeEventResource {
    export enum RewardStatusEnum {
        Pending = <any> 'pending',
        Failed = <any> 'failed',
        Complete = <any> 'complete',
        Partial = <any> 'partial'
    }
}
