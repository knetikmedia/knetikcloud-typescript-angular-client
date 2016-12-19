/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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

    export interface PermissionResource {
        /**
         * The date the permission was added. Unix timestamp in seconds
         */
        "createdDate"?: number;

        /**
         * The description of the permission
         */
        "description"?: string;

        /**
         * Whether a permission is locked from being deleted
         */
        "locked"?: boolean;

        /**
         * The name of the permission used for display purposes
         */
        "name": string;

        /**
         * The name of the parent of the permission
         */
        "parent"?: string;

        /**
         * The keyword that defines the permission
         */
        "permission": string;

        /**
         * The date the permission was updated. Unix timestamp in seconds
         */
        "updatedDate"?: number;

    }

}
