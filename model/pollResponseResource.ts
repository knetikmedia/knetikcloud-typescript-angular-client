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

import { SimpleUserResource } from './simpleUserResource';


export interface PollResponseResource {
    /**
     * The answer to the poll
     */
    answer: string;

    /**
     * The date the poll was answered, in seconds since unix epoc
     */
    answeredDate?: number;

    /**
     * The id of the poll response
     */
    id?: string;

    /**
     * The id of the poll
     */
    pollId: string;

    /**
     * The user
     */
    user: SimpleUserResource;

}
