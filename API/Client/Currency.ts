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

    export interface Currency {
        "active"?: boolean;

        "code"?: string;

        "dateCreated"?: number;

        "dateUpdated"?: number;

        "factor"?: number;

        "icon"?: string;

        "id"?: number;

        "name"?: string;

        "type"?: Currency.TypeEnum;

        "virtual"?: boolean;

    }

    export namespace Currency {
        export enum TypeEnum {
            Real = <any> 'real',
            Virtual = <any> 'virtual'
        }
    }
}
