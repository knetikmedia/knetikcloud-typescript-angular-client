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

    export interface FinalizeBillingAgreementRequest {
        /**
         * The ID of the invoice being paid along with the creation of this agreement
         */
        "invoiceId"?: number;

        /**
         * Whether the new payment method created should be the user's default
         */
        "newDefault"?: boolean;

        /**
         * The payer ID from PayPal (passed as a parameter in the return URL). Only required if an invoice ID was included
         */
        "payerId"?: string;

        /**
         * The token from PayPal (passed as a parameter in the return URL)
         */
        "token": string;

        /**
         * The ID of the user. Defaults to the logged in user
         */
        "userId"?: number;

    }

}
