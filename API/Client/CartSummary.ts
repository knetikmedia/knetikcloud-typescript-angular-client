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

    export interface CartSummary {
        /**
         * The date/time this resource was created in seconds since unix epoch
         */
        "createdDate"?: number;

        /**
         * The unique id code for the currency used in the cart
         */
        "currencyCode"?: string;

        /**
         * The grand total for the cart
         */
        "grandTotal"?: number;

        /**
         * The unique ID for the cart
         */
        "id"?: string;

        /**
         * The ID of the invoice associated with this cart
         */
        "invoiceId"?: number;

        /**
         * The number of items in the cart
         */
        "itemsInCart"?: number;

        /**
         * The status of the cart
         */
        "status"?: CartSummary.StatusEnum;

        /**
         * The subtotal of all items in the cart
         */
        "subtotal"?: number;

    }

    export namespace CartSummary {
        export enum StatusEnum {
            Active = <any> 'active',
            Processing = <any> 'processing',
            Closed = <any> 'closed',
            Onhold = <any> 'onhold'
        }
    }
}
