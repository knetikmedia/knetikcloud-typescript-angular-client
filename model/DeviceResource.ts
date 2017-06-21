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

export interface DeviceResource {
    /**
     * The authorization code for the device
     */
    "authorization"?: string;
    /**
     * The current condition of the device (New, Defective, Reconditioned)
     */
    "condition"?: DeviceResource.ConditionEnum;
    /**
     * The date the device log was created
     */
    "createdDate"?: number;
    /**
     * The key/value pairs for extended data
     */
    "data"?: { [key: string]: string; };
    /**
     * The description of the device
     */
    "description"?: string;
    /**
     * The type of the device
     */
    "deviceType"?: string;
    /**
     * The unique ID for this device. Cannot be changed once created
     */
    "id": number;
    /**
     * The location of the device
     */
    "location"?: string;
    /**
     * The MAC (media access control) address of the device
     */
    "macAddress"?: string;
    /**
     * The make of the device
     */
    "make"?: string;
    /**
     * The model of the device
     */
    "model"?: string;
    /**
     * The name of the device
     */
    "name"?: string;
    /**
     * The OS (operating system) on the device
     */
    "os"?: string;
    /**
     * The serial number of the device
     */
    "serial"?: string;
    /**
     * The current status the device (Active, Pending Active, Inactive, Repair
     */
    "status"?: DeviceResource.StatusEnum;
    /**
     * The date the device log was updated
     */
    "updatedDate"?: number;
    /**
     * The user that owns the device
     */
    "user"?: models.SimpleUserResource;
    /**
     * The users currently using the device
     */
    "users"?: Array<models.SimpleUserResource>;
}

export namespace DeviceResource {
    export enum ConditionEnum {
        New = <any> 'New',
        Defective = <any> 'Defective',
        Reconditioned = <any> 'Reconditioned'
    }
    export enum StatusEnum {
        Active = <any> 'Active',
        PendingActive = <any> 'PendingActive',
        Inactive = <any> 'Inactive',
        Repair = <any> 'Repair'
    }
}
