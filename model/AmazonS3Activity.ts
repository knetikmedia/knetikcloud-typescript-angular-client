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

export interface AmazonS3Activity {
    /**
     * S3 action (i.e., 'PUT') associated with the activity
     */
    "action"?: string;
    /**
     * Date the resource was created in S3
     */
    "createdDate"?: number;
    /**
     * Name of the file being processed as a resource in S3
     */
    "filename"?: string;
    /**
     * Unique id of the S3 activity
     */
    "id"?: number;
    /**
     * S3 object key for the resource
     */
    "objectKey"?: string;
    /**
     * URL for accessing the S3 resource
     */
    "url"?: string;
    /**
     * The id of the user that created this S3 activity
     */
    "userId"?: number;
}

