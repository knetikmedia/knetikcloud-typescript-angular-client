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

    export interface DeltaResource {
        /**
         * The id of the category for question
         */
        "categoryId"?: string;

        /**
         * The media type of the question
         */
        "mediaType"?: string;

        /**
         * The id of the question
         */
        "questionId"?: string;

        /**
         * Whether the question was updated or removed
         */
        "state"?: DeltaResource.StateEnum;

        /**
         * The tags for the question
         */
        "tags"?: Array<string>;

        /**
         * The date this question was last updated in seconds since unix epoch
         */
        "updatedDate"?: number;

    }

    export namespace DeltaResource {
        export enum StateEnum {
            UPDATED = <any> 'UPDATED',
            REMOVED = <any> 'REMOVED'
        }
    }
}
