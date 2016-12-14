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

    export interface Config {
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

}
