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



export interface ErrorResource {
    /**
     * Extra details about the error, if needed
     */
    details?: any;

    /**
     * The JSON key the message pertains to
     */
    field?: any;

    /**
     * The message explaining the error
     */
    message?: string;

}
