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

import { FileGroupPropertyDefinitionResource } from './fileGroupPropertyDefinitionResource';
import { PropertyFieldListResource } from './propertyFieldListResource';


export interface ImageGroupPropertyDefinitionResource extends FileGroupPropertyDefinitionResource {
    /**
     * If provided, the maximum height of each image
     */
    maxHeight?: number;

    /**
     * If provided, the maximum width of each image
     */
    maxWidth?: number;

    /**
     * If provided, the minimum height of each image
     */
    minHeight?: number;

    /**
     * If provided, the minumum width of each image
     */
    minWidth?: number;

}
