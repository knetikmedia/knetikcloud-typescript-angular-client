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

export interface Config {
    /**
     * The description of the config.  Max 140 characters
     */
    "description"?: string;
    /**
     * The name of the config
     */
    "name": string;
    /**
     * Whether the config is public for viewing. True means that it can be publicly viewed by all. Default: false
     */
    "publicRead"?: boolean;
    /**
     * The value of the config
     */
    "value"?: string;
}

