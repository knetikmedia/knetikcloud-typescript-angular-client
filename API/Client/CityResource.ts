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

    export interface CityResource {
        /**
         * The iso3 of the country this city is in
         */
        "countryCodeIso3"?: string;

        /**
         * The unique ID for this city
         */
        "id"?: number;

        /**
         * The name of the city
         */
        "name"?: string;

        /**
         * The code for the state this city is in
         */
        "stateCode"?: string;

    }

}
