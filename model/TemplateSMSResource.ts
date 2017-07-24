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

export interface TemplateSMSResource {
    /**
     * The phone number to attribute the outgoing message to. Optional if the config text.out_number is set.
     */
    "from"?: string;
    "localizer"?: models.Localizer;
    /**
     * A list of user ids to send the message to.
     */
    "recipients": Array<number>;
    /**
     * The key for the template.
     */
    "templateKey": string;
    /**
     * A list of values to fill in the template. Order matters.
     */
    "templateVars"?: Array<string>;
}

