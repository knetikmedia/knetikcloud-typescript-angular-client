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

export interface RewardCurrencyResource {
    /**
     * The code of the currency type to give
     */
    "currencyCode": string;
    /**
     * The name of the currency reward to give.  Set by currency_code)
     */
    "currencyName"?: string;
    /**
     * The highest number (worst) rank to give the reward to. Must be greater than or equal to minRank
     */
    "maxRank": number;
    /**
     * The lowest number (best) rank to give the reward to. Must be greater than zero
     */
    "minRank": number;
    /**
     * True if the value is actually a percentage of the intake
     */
    "percent": boolean;
    /**
     * The amount of currency to give. For percentage values, 0.5 is 50%
     */
    "value": number;
}

