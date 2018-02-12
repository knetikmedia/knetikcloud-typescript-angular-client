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

import { TemplatedEmail } from './templatedEmail';


export interface MessageContentResource {
    /**
     * The content of the email
     */
    email?: string;

    /**
     * The content of the mobile app push notification
     */
    push?: string;

    /**
     * The content of the sms
     */
    sms?: string;

    /**
     * The content of the templated email
     */
    templatedEmail?: TemplatedEmail;

    /**
     * The content of the websocket message
     */
    websocket?: any;

}
