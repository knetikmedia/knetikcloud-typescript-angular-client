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

export interface CommentResource {
    /**
     * The comment content of that resource
     */
    "content": string;
    /**
     * The type of object this comment applies to (ex: video, article, etc). Required when passed to /comments
     */
    "context"?: string;
    /**
     * The id of the object this comment applies to.  Required when passed to /comments
     */
    "contextId"?: number;
    /**
     * The date/time this resource was created in seconds since epoch
     */
    "createdDate"?: number;
    /**
     * The unique ID for that resource
     */
    "id"?: number;
    /**
     * The summary of that resource
     */
    "summary"?: string;
    /**
     * The date/time this resource was last updated in seconds since epoch
     */
    "updatedDate"?: number;
    /**
     * The user who created the comment
     */
    "user"?: models.SimpleUserResource;
}

