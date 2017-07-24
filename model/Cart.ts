/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Cart {
    "availableShippingOptions"?: Array<models.CartShippingOption>;
    "countryTax"?: number;
    "coupons"?: Array<models.CouponDefinition>;
    "created"?: number;
    "currencyCode"?: string;
    "discountTotal"?: number;
    "errorCode"?: number;
    "errorMessage"?: string;
    "grandTotal"?: number;
    "id"?: string;
    "invoiceId"?: number;
    "items"?: Array<models.CartLineItem>;
    "owner"?: number;
    "selectedShippingOptions"?: Array<models.CartShippingOption>;
    "shippable"?: boolean;
    "shippingAddress"?: models.CartShippingAddressRequest;
    "shippingCost"?: number;
    "stateTax"?: number;
    "status"?: Cart.StatusEnum;
    "subtotal"?: number;
    "updated"?: number;
}

export namespace Cart {
    export enum StatusEnum {
        Active = <any> 'active',
        Processing = <any> 'processing',
        Closed = <any> 'closed',
        Onhold = <any> 'onhold'
    }
}
