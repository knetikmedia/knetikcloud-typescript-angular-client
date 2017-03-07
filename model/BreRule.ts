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

export interface BreRule {
    /**
     * A list of actions to execute, and the mapping for their parameters, when the rule runs. Minimum 1
     */
    "actions": models.ActionResource;
    /**
     * A condition expression that must be met in a given event for the rule to run. Empty to always run
     */
    "condition"?: models.PredicateOperation;
    /**
     * The condition as a readable string. Filled in by the system from the condition
     */
    "conditionText"?: string;
    /**
     * The human readable description of the rule
     */
    "description"?: string;
    /**
     * Whether the rule is enabled to run (in conjunction with dates). Default true
     */
    "enabled"?: boolean;
    /**
     * The date the rule ceases to take effect, or null if never. Unix timestamp in seconds
     */
    "endDate"?: number;
    /**
     * The event name of the trigger this rule runs for. Affects which parameters are available
     */
    "eventName": string;
    /**
     * The id of the rule for later references. If left null a random guid will be generated. Must be unique. Cannot be changed
     */
    "id"?: string;
    /**
     * The human readable name of the rule
     */
    "name": string;
    /**
     * Used to sort rules to control the order they run in. Larger numbered sort values run first.  Default 500
     */
    "sort"?: number;
    /**
     * The date the rule begins to take effect, or null if always. Unix timestamp in seconds
     */
    "startDate"?: number;
    /**
     * Whether the rule is a default part of the system. System rules cannot be edited or deleted, but may be disabled
     */
    "systemRule"?: boolean;
}
