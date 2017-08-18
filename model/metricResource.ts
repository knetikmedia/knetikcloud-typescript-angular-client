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



export interface MetricResource {
    /**
     * The id of the activity occurence where this score/metric occurred
     */
    activityOccurenceId: number;

    /**
     * Any tags for the metric. Each unique tag will translate into a unique leaderboard. Maximum 5 tags and 50 characters each
     */
    tags?: Array<string>;

    /**
     * The value/score of the metric
     */
    value: number;

}