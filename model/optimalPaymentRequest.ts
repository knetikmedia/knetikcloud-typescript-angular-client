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



export interface OptimalPaymentRequest {
    /**
     * The email address of the user
     */
    email?: string;

    /**
     * The first name of the user
     */
    firstName?: string;

    /**
     * The id of the invoice to pay
     */
    invoiceId: number;

    /**
     * The last name of the user
     */
    lastName?: string;

    /**
     * The url to redirect the user to after declining payment
     */
    onDecline: string;

    /**
     * The url to redirect the user to after an error in payment
     */
    onError: string;

    /**
     * The url to redirect the user to after successful payment
     */
    onSuccess: string;

}
