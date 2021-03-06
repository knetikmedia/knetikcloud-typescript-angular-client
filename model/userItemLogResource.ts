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

import { SimpleReferenceResourceint } from './simpleReferenceResourceint';
import { SimpleUserResource } from './simpleUserResource';


export interface UserItemLogResource {
    /**
     * The log entry id
     */
    id?: number;

    /**
     * Additional information defined by the type
     */
    info?: string;

    /**
     * The item interacted with
     */
    item?: SimpleReferenceResourceint;

    /**
     * The date/time this event occurred in seconds since epoch
     */
    logDate?: number;

    /**
     * The type of event
     */
    type?: string;

    /**
     * The user making the interaction
     */
    user?: SimpleUserResource;

    /**
     * The id of the inventory entry this event is related to, if any
     */
    userInventory?: number;

}
