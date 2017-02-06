/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface CouponDefinition {
    "code"?: string;
    "description"?: string;
    "discountType"?: CouponDefinition.DiscountTypeEnum;
    "exclusive"?: boolean;
    "maxDiscount"?: number;
    "maxQuantity"?: number;
    "minCartTotal"?: number;
    "name"?: string;
    "selfExclusive"?: boolean;
    "targetItemId"?: number;
    "type"?: CouponDefinition.TypeEnum;
    "validForTags"?: Array<string>;
    "value"?: number;
    "vendorId"?: number;
}

export namespace CouponDefinition {
    export enum DiscountTypeEnum {
        Value = <any> 'value',
        Percentage = <any> 'percentage'
    }
    export enum TypeEnum {
        Cart = <any> 'coupon_cart',
        SingleItem = <any> 'coupon_single_item',
        Voucher = <any> 'coupon_voucher',
        Vendor = <any> 'coupon_vendor',
        Tag = <any> 'coupon_tag'
    }
}
