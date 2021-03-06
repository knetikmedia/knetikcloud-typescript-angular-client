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



export interface FinalizePayPalPaymentRequest {
    /**
     * The ID of the invoice that is being paid. Must match the invoice sent in originally
     */
    invoiceId: number;

    /**
     * The ID of the payer that PayPal returned with the user at the return URL
     */
    payerId: string;

    /**
     * The token that PayPal returned with the user in the return URL
     */
    token: string;

}
