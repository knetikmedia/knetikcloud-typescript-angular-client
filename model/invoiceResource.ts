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

import { InvoiceItemResource } from './invoiceItemResource';
import { SimpleUserResource } from './simpleUserResource';


export interface InvoiceResource {
    /**
     * Line one of the customer's billing address
     */
    billingAddress1?: string;

    /**
     * Line two of the customer's billing address
     */
    billingAddress2?: string;

    /**
     * The city for the customer's billing address
     */
    billingCityName?: string;

    /**
     * The country for the customer's billing address
     */
    billingCountryName?: string;

    /**
     * The customer's name for the billing address
     */
    billingFullName?: string;

    /**
     * The postal code for the customer's billing address
     */
    billingPostalCode?: string;

    /**
     * The state for the customer's billing address
     */
    billingStateName?: string;

    /**
     * The guid of the cart this invoice came from
     */
    cartId?: string;

    /**
     * The date the invoice was created, unix timestamp in seconds
     */
    createdDate?: number;

    /**
     * The code for the currency invoice prices are in
     */
    currency?: string;

    /**
     * The fulfillment status of the invoice
     */
    currentFulfillmentStatus?: string;

    /**
     * The payment status of the invoice
     */
    currentPaymentStatus?: string;

    /**
     * The amount of money saved through coupons
     */
    discount?: number;

    /**
     * The customer's email address
     */
    email?: string;

    /**
     * An external reference to filter on
     */
    externalRef?: string;

    /**
     * The amount of federal tax added
     */
    fedTax?: number;

    /**
     * The final price of the invoice
     */
    grandTotal?: number;

    /**
     * The id of the invoice
     */
    id?: number;

    /**
     * A reference number for the invoice
     */
    invoiceNumber?: string;

    /**
     * A list of items within the invoice
     */
    items?: Array<InvoiceItemResource>;

    /**
     * The customer's name prefix
     */
    namePrefix?: string;

    /**
     * Notes about the order
     */
    orderNotes?: string;

    /**
     * The id of an invoice this is a child of
     */
    parentInvoiceId?: number;

    /**
     * The id of a saved payment method used to pay for the invoice
     */
    paymentMethodId?: number;

    /**
     * The customer's phone number
     */
    phone?: string;

    /**
     * The customer's phone number
     */
    phoneNumber?: string;

    /**
     * The shipping cost
     */
    shipping?: number;

    /**
     * Line one of the customer's shipping address
     */
    shippingAddress1?: string;

    /**
     * Line two of the customer's shipping address
     */
    shippingAddress2?: string;

    /**
     * The city for the customer's shipping address
     */
    shippingCityName?: string;

    /**
     * The country for the customer's shipping address
     */
    shippingCountryName?: string;

    /**
     * The customer's name for the shipping address
     */
    shippingFullName?: string;

    /**
     * The postal code for the customer's shipping address
     */
    shippingPostalCode?: string;

    /**
     * The state for the customer's shipping address
     */
    shippingStateName?: string;

    /**
     * A number to use in sorting items. default 500.
     */
    sort?: number;

    /**
     * The amount of state tax added
     */
    stateTax?: number;

    /**
     * The sum price of all items before shipping, coupons and tax
     */
    subtotal?: number;

    /**
     * The date the invoice was last updated, unix timestamp in seconds
     */
    updatedDate?: number;

    /**
     * The owner of the invoice
     */
    user?: SimpleUserResource;

    /**
     * The id of the vendor
     */
    vendorId?: number;

    /**
     * The name of the invoice
     */
    vendorName?: string;

}