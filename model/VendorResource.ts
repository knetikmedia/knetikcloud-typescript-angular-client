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

export interface VendorResource {
    /**
     * Whether the vendor is active.  Default = true
     */
    "active"?: boolean;
    /**
     * The date the vendor was added. Unix timestamp in seconds
     */
    "createDate"?: number;
    /**
     * A description of the vendor
     */
    "description"?: string;
    /**
     * The id of the vendor
     */
    "id"?: number;
    /**
     * The url of an image for the vendor
     */
    "imageUrl"?: string;
    /**
     * Whether the vendor needs to manually approve invoices before they are paid.  A separate checkout flow is required in this case.  Default: false
     */
    "manualApproval"?: boolean;
    /**
     * The name of the vendor
     */
    "name": string;
    /**
     * The primary email address for the vendor
     */
    "primaryContactEmail"?: string;
    /**
     * The name of the primary contact for the vendor
     */
    "primaryContactName"?: string;
    /**
     * The primary phone number for the vendor
     */
    "primaryContactPhone"?: string;
    /**
     * The email address for sale inquiries for the vendor
     */
    "salesEmail"?: string;
    /**
     * The email address for support inquiries for the vendor
     */
    "supportEmail"?: string;
    /**
     * The date the vendor was last updated. Unix timestamp in seconds
     */
    "updateDate"?: number;
    /**
     * The url for the vendor's site
     */
    "url"?: string;
}

