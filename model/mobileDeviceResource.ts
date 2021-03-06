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

import { DeviceResource } from './deviceResource';
import { Property } from './property';
import { SimpleUserResource } from './simpleUserResource';


export interface MobileDeviceResource extends DeviceResource {
    /**
     * The authorization code for push notifications provided by the provider platform (APNS, GCM, etc).
     */
    authorization?: string;

    imei?: string;

    /**
     * The platform used for push notifications. Only Apple and Android are supported at the moment.
     */
    notificationPlatform?: MobileDeviceResource.NotificationPlatformEnum;

    /**
     * The phone number associated with this device if applicable, in international format
     */
    number?: string;

}
export namespace MobileDeviceResource {
    export enum NotificationPlatformEnum {
        APNS = <any> 'APNS',
        GCM = <any> 'GCM'
    }
}
