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

    export interface BreEvent {
        /**
         * The event name of the trigger to be fired
         */
        "eventName": string;

        /**
         * The parameters to the event. A Map (assosiative array) with a key for each trigger parameter name and a corrosponding value.
         */
        "params": any;

    }

}
