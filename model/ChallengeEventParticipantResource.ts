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

export interface ChallengeEventParticipantResource {
    /**
     * The email address of the user
     */
    "email"?: string;
    /**
     * The full name of the user
     */
    "fullname"?: string;
    /**
     * The user's score
     */
    "score"?: number;
    /**
     * The id of the user
     */
    "userId"?: number;
    /**
     * The username of the user
     */
    "username"?: string;
}

