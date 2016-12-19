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

    export interface StoreListRequest {
        /**
         * Whether the location is ignored
         */
        "ignoreLocation"?: boolean;

        /**
         * Whether the item is in stock
         */
        "inStockOnly"?: boolean;

        /**
         * The amount of items returned
         */
        "limit"?: number;

        /**
         * The page of the request
         */
        "page"?: number;

        /**
         * Whether the catalog is used
         */
        "useCatalog"?: boolean;

    }

}
