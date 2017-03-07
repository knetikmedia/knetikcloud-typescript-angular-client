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

export interface ClientResource {
    /**
     * The time limit of the token in seconds
     */
    "accessTokenValiditySeconds"?: number;
    /**
     * The client key, cannot be edited once created
     */
    "clientKey": string;
    /**
     * The grant types of the client
     */
    "grantTypes"?: Array<string>;
    /**
     * The id of the client
     */
    "id"?: number;
    /**
     * Whether the client is public or not
     */
    "isPublic"?: boolean;
    /**
     * Whether a client is locked from being deleted
     */
    "locked"?: boolean;
    /**
     * The name of the client
     */
    "name": string;
    /**
     * The redirect uris of the client
     */
    "redirectUris"?: Array<string>;
    /**
     * The time limit of the refresh token in seconds
     */
    "refreshTokenValiditySeconds"?: number;
    /**
     * The secret key of the client
     */
    "secret": string;
}

