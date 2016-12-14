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

    export interface PollResponseResource {
        /**
         * The answer to the poll
         */
        "answer": string;

        /**
         * The date the poll was answered, in seconds since unix epoc
         */
        "answeredDate"?: number;

        /**
         * The id of the poll response
         */
        "id"?: string;

        /**
         * The id of the poll
         */
        "pollId": string;

        /**
         * The user
         */
        "user": SimpleUserResource;

    }

}
