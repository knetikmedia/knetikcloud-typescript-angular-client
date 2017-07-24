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

export interface BreRuleLog {
    /**
     * Whether the rule ran
     */
    "ran"?: boolean;
    /**
     * The reason for the rule
     */
    "reason"?: string;
    /**
     * The end date of the rule in seconds
     */
    "ruleEndDate"?: number;
    /**
     * The id of the rule
     */
    "ruleId"?: string;
    /**
     * The name of the rule
     */
    "ruleName"?: string;
    /**
     * The start date of the rule in seconds
     */
    "ruleStartDate"?: number;
}

