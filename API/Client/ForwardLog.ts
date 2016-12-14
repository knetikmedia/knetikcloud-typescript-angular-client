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

    export interface ForwardLog {
        /**
         * The end date of the forward log entry
         */
        "endDate"?: number;

        "errorMsg"?: string;

        /**
         * The http status code the forward log entry
         */
        "httpStatusCode"?: number;

        /**
         * The id of the forward log entry
         */
        "id"?: string;

        /**
         * The payload of the forward log entry
         */
        "payload"?: any;

        /**
         * The response string of the forward log entry
         */
        "response"?: string;

        /**
         * The retry count of the forward log entry
         */
        "retryCount"?: number;

        /**
         * The start date of the forward log entry
         */
        "startDate"?: number;

        /**
         * The endpoint url of the forward log entry
         */
        "url"?: string;

    }

}
