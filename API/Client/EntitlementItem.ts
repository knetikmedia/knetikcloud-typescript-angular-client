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

    export interface EntitlementItem {
        /**
         * The behaviors linked to the item, describing various options and interactions. May not be included in item lists
         */
        "behaviors"?: Array<Behavior>;

        /**
         * The date the item was created, unix timestamp in seconds
         */
        "createdDate"?: number;

        /**
         * The id of the item
         */
        "id"?: number;

        /**
         * A long description of the item
         */
        "longDescription"?: string;

        /**
         * The name of the item
         */
        "name": string;

        /**
         * A short description of the item, max 255 chars
         */
        "shortDescription"?: string;

        /**
         * A number to use in sorting items.  Default 500
         */
        "sort"?: number;

        /**
         * The type of the item
         */
        "typeHint": string;

        /**
         * The unique key for the item
         */
        "uniqueKey"?: string;

        /**
         * The date the item was last updated, unix timestamp in seconds
         */
        "updatedDate"?: number;

    }

}
