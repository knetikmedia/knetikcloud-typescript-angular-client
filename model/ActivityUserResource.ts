/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface ActivityUserResource {
    /**
     * Whether this user is the 'host' of the occurrence and has increased access to settings/etc (default: false)
     */
    "host"?: boolean;
    /**
     * The id of the activity user entry
     */
    "id"?: number;
    /**
     * The date this user last joined the occurrence, unix timestamp in seconds
     */
    "joinedDate"?: number;
    /**
     * The date this user last left the occurrence, unix timestamp in seconds. Null if still present
     */
    "leftDate"?: number;
    /**
     * The metric for the user's results, after the game is over
     */
    "metric"?: models.MetricResource;
    /**
     * The current status of the user in the occurrence (default: present)
     */
    "status"?: ActivityUserResource.StatusEnum;
    /**
     * The user
     */
    "user": models.SimpleUserResource;
}

export namespace ActivityUserResource {
    export enum StatusEnum {
        Present = <any> 'present',
        Ready = <any> 'ready',
        Left = <any> 'left',
        Surrendered = <any> 'surrendered',
        Disconnected = <any> 'disconnected'
    }
}
