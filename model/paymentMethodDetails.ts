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



export interface PaymentMethodDetails {
    default?: boolean;

    /**
     * The expiration date for the payment method, expressed as seconds since epoch. Typically used for credit card payment methods
     */
    expirationDate?: number;

    /**
     * The expiration month (1 - 12) for the payment method. Typically used for credit card payment methods
     */
    expirationMonth?: number;

    /**
     * The expiration year for the payment method. Typically used for credit card payment methods
     */
    expirationYear?: number;

    /**
     * The last 4 digits of the account number for the payment method. Typically used for credit card payment methods
     */
    last4?: string;

    /**
     * The sort value for the payment method
     */
    sort?: number;

    /**
     * An optional unique identifier
     */
    uniqueKey?: string;

    verified?: boolean;

}
