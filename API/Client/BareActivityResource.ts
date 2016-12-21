/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface BareActivityResource {
        /**
         * The date/time this resource was created in seconds since unix epoch
         */
        "createdDate"?: number;

        /**
         * The unique ID for that resource
         */
        "id"?: number;

        /**
         * Details about how to launch the activity
         */
        "launch"?: string;

        /**
         * The user friendly name of that resource. Defaults to blank string
         */
        "longDescription"?: string;

        /**
         * The user friendly name of that resource
         */
        "name": string;

        /**
         * The user friendly name of that resource. Defaults to blank string
         */
        "shortDescription"?: string;

        /**
         * Whether this activity is a template for other activities. Default: false
         */
        "template"?: boolean;

        /**
         * The type of the activity
         */
        "type": string;

        /**
         * The unique key (for static reference in code) of the activity
         */
        "uniqueKey"?: string;

        /**
         * The date/time this resource was last updated in seconds since unix epoch
         */
        "updatedDate"?: number;

    }

}
