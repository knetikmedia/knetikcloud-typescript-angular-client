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

export interface PropertyDefinitionResource {
    /**
     * A list of the fields on both the property definition and property of this type
     */
    "fieldList"?: models.PropertyFieldListResource;
    /**
     * The name of the property
     */
    "name": string;
    /**
     * Whether the property is required
     */
    "required": boolean;
    /**
     * The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
     */
    "type": string;
}

