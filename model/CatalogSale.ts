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

export interface CatalogSale {
    /**
     * The iso3 code for the currency for this discountValue.  The sku purchased will have to match for it this sale to apply
     */
    "currencyCode": string;
    /**
     * The way in which the price is reduced. 'value' means subtracting directly, 'percentage' means subtracting by the price times the discountValue (1.0 == 100%)
     */
    "discountType": CatalogSale.DiscountTypeEnum;
    /**
     * The amount deducted from the price, in the same currencyCode as the item
     */
    "discountValue"?: number;
    /**
     * The id of the sale
     */
    "id"?: number;
    /**
     * The id of the item this sale applies to.  Leave null to use other filters
     */
    "item"?: number;
    /**
     * The long description of the sale
     */
    "longDescription"?: string;
    /**
     * The name of the sale.  Max 40 characters
     */
    "name": string;
    /**
     * The date the sale ends, null for never.  Unix timestamp in seconds
     */
    "saleEndDate"?: number;
    /**
     * The date the sale begins.  Unix timestamp in seconds
     */
    "saleStartDate": number;
    /**
     * The short description of the sale.  Max 140 characters
     */
    "shortDescription"?: string;
    /**
     * The tag this sale applies to.  Leave null to skip this filter (applies to all tags)
     */
    "tag"?: string;
    /**
     * The id of the vendor this sale applies to.  Leave null to skip this filter (applies to all vendors)
     */
    "vendor"?: number;
}

export namespace CatalogSale {
    export enum DiscountTypeEnum {
        Value = <any> 'value',
        Percentage = <any> 'percentage'
    }
}
