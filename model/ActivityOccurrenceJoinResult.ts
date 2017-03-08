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

export interface ActivityOccurrenceJoinResult {
    /**
     * The details on the entitlement object needed to enter the occurrence (if any)
     */
    "entitlement"?: models.ActivityEntitlementResource;
    /**
     * Zero if the user was/could be added to the occurrence. Jsapi error code indicating the reason of the failure otherwise
     */
    "errorCode": number;
    /**
     * An error message if failure
     */
    "message"?: string;
    /**
     * The user's id
     */
    "userId": number;
}

