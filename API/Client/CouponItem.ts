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

    export interface CouponItem {
        /**
         * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type, or be an extra not from the template
         */
        "additionalProperties"?: { [key: string]: Property; };

        /**
         * The behaviors linked to the item, describing various options and interactions. May not be included in item lists
         */
        "behaviors"?: Array<Behavior>;

        /**
         * A category for filtering items
         */
        "category"?: string;

        /**
         * The type of coupon
         */
        "couponTypeHint": CouponItem.CouponTypeHintEnum;

        /**
         * The date the item was created, unix timestamp in seconds
         */
        "createdDate"?: number;

        /**
         * The amount this coupon is maxed out at.  Applies if coupon_type_hint is coupon_cart
         */
        "discountMax"?: number;

        /**
         * The minimium amount needed in the cart for the coupon to apply.  Applies if coupon_type_hint is coupon_cart
         */
        "discountMinCartValue"?: number;

        /**
         * The type of coupon discount
         */
        "discountType": CouponItem.DiscountTypeEnum;

        /**
         * The amount the coupon will discount the item
         */
        "discountValue": number;

        /**
         * Whether or not the item is currently displayable.  Default = true
         */
        "displayable"?: boolean;

        /**
         * Whether this coupon is exclusive or not (true means cannot be in same cart as another).  Default = false
         */
        "exclusive"?: boolean;

        /**
         * A list of country ID to include in the blacklist/whitelist geo policy
         */
        "geoCountryList"?: Array<string>;

        /**
         * Whether to use the geo_country_list as a black list or white list for item geographical availability
         */
        "geoPolicyType"?: CouponItem.GeoPolicyTypeEnum;

        /**
         * The id of the item
         */
        "id"?: number;

        /**
         * The id of the item the coupon is applied to.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher
         */
        "itemId"?: number;

        /**
         * A long description of the item
         */
        "longDescription"?: string;

        /**
         * The maximum quantity of items the coupon can apply to, null if no limit and minimum 1 otherwise.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher
         */
        "maxQuantity"?: number;

        /**
         * The name of the item
         */
        "name": string;

        /**
         * Whether this coupon is exclusive to itself or not (true means cannot add two of this same coupon to the same cart).  Default = false
         */
        "selfExclusive"?: boolean;

        /**
         * Provides the abstract shipping needs if this item is physical and can be shipped.  A value of zero means no shipping needed.  Default = 0
         */
        "shippingTier"?: number;

        /**
         * A short description of the item, max 255 chars
         */
        "shortDescription"?: string;

        /**
         * The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
         */
        "skus": Array<Sku>;

        /**
         * A number to use in sorting items.  Default 500
         */
        "sort"?: number;

        /**
         * The date the item will leave the store, unix timestamp in seconds.  If set to null, item will never leave the store
         */
        "storeEnd"?: number;

        /**
         * The date the item will appear in the store, unix timestamp in seconds.  If set to null, item will appear in store immediately
         */
        "storeStart"?: number;

        /**
         * List of tags used for filtering items
         */
        "tags"?: Array<string>;

        /**
         * An item template this item is validated against.  May be null and no validation of additional_properties will be done.  Default = null
         */
        "template"?: string;

        /**
         * The type of the item
         */
        "typeHint": string;

        /**
         * The unique key for the item
         */
        "uniqueKey"?: string;

        /**
         * The date the item was last updated, unix timestamp in seconds
         */
        "updatedDate"?: number;

        /**
         * A list of tags for a coupon.  The coupon can only apply to an item that has at least one of these tags.  Applies if coupon_type_hint is coupon_tag
         */
        "validForTags"?: Array<string>;

        /**
         * The vendor who provides the item
         */
        "vendorId": number;

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
        export enum GeoPolicyTypeEnum {
            Whitelist = <any> 'whitelist',
            Blacklist = <any> 'blacklist'
        }
    }
}
