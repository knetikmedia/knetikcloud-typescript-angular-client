/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface InvoiceItemResource {
    "affiliateId"?: number;
    "bundleSku"?: string;
    "currentFulfillmentStatus"?: string;
    "id"?: number;
    "invoiceId"?: number;
    "itemId"?: number;
    "itemName"?: string;
    "originalTotalPrice"?: number;
    "originalUnitPrice"?: number;
    "qty"?: number;
    "saleName"?: string;
    "sku"?: string;
    "skuDescription"?: string;
    "systemPrice"?: number;
    "totalPrice"?: number;
    "typeHint"?: string;
    "unitPrice"?: number;
}

