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

    export interface CartLineItem {
        "currencyCode"?: string;

        "description"?: string;

        "discount"?: Discount;

        "lineTotal"?: number;

        "name"?: string;

        "originalLineTotal"?: number;

        "originalUnitPrice"?: number;

        "qty"?: number;

        "saleName"?: string;

        "sku"?: string;

        "skuDescription"?: string;

        "storeItemId"?: number;

        "tags"?: Array<string>;

        "thumbUrl"?: string;

        "unitPrice"?: number;

        "vendorId"?: number;

        "vendorName"?: string;

    }

}
