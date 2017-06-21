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

export interface CouponItem extends StoreItem {
    /**
     * The type of coupon
     */
    "couponTypeHint": CouponItem.CouponTypeHintEnum;
    /**
     * The amount this coupon is maxed out at.  Applies if coupon_type_hint is coupon_cart
     */
    "discountMax"?: number;
    /**
     * The minimium amount needed in the cart for the coupon to apply.  Applies if coupon_type_hint is coupon_cart
     */
    "discountMinCartValue"?: number;
    /**
     * The type of discount in terms of how it deducts price. Value based discount not available for coupon_cart type coupons
     */
    "discountType": CouponItem.DiscountTypeEnum;
    /**
     * The amount the coupon will discount the item. If discount_type is 'value' this will be a flat amount of currency. If discount type is 'percentage' this will be a fraction (0.2 for 20% off) multiplied by the price of the matching item or items.
     */
    "discountValue": number;
    /**
     * Whether this coupon is exclusive or not (true means cannot be in same cart as another).  Default = false
     */
    "exclusive"?: boolean;
    /**
     * The id of the item the coupon is applied to.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher
     */
    "itemId"?: number;
    /**
     * The maximum quantity of items the coupon can apply to, null if no limit and minimum 1 otherwise.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher
     */
    "maxQuantity"?: number;
    /**
     * Whether this coupon is exclusive to itself or not (true means cannot add two of this same coupon to the same cart).  Default = false
     */
    "selfExclusive"?: boolean;
    /**
     * A list of tags for a coupon.  The coupon can only apply to an item that has at least one of these tags.  Applies if coupon_type_hint is coupon_tag
     */
    "validForTags"?: Array<string>;
}

export namespace CouponItem {
    export enum CouponTypeHintEnum {
        Cart = <any> 'coupon_cart',
        SingleItem = <any> 'coupon_single_item',
        Voucher = <any> 'coupon_voucher',
        Vendor = <any> 'coupon_vendor',
        Tag = <any> 'coupon_tag'
    }
    export enum DiscountTypeEnum {
        Value = <any> 'value',
        Percentage = <any> 'percentage'
    }
}