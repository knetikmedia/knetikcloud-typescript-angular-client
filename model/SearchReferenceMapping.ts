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

export interface SearchReferenceMapping {
    /**
     * Unique identifier for the mapping to protect against duplicates
     */
    "id": string;
    /**
     * The field within the type that contains the id from the refType
     */
    "refIdField": string;
    /**
     * The index type that the mapping pulls data from
     */
    "refType": string;
    /**
     * A map whose keys are the field names in the refType and values are the field name in the type
     */
    "sourceFieldToDestinationField": { [key: string]: string; };
    /**
     * The index type that the mapping is for
     */
    "type": string;
}

