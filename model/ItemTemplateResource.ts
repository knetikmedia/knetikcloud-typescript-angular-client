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

export interface ItemTemplateResource {
    /**
     * The customized behaviors that are required or default for this type of item
     */
    "behaviors"?: Array<models.ItemBehaviorDefinitionResource>;
    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    "createdDate"?: number;
    /**
     * The id of the template
     */
    "id"?: string;
    /**
     * The name of the template
     */
    "name": string;
    /**
     * The customized properties that are present
     */
    "properties"?: Array<models.PropertyDefinitionResource>;
    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    "updatedDate"?: number;
}

