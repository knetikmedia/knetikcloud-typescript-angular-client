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

export interface GroupMemberResource {
    /**
     * The url of the user's avatar image
     */
    "avatarUrl"?: string;
    /**
     * The public username of the user
     */
    "displayName"?: string;
    /**
     * The id of the user
     */
    "id": number;
    /**
     * The member's access level. Default: member
     */
    "status": GroupMemberResource.StatusEnum;
    /**
     * The username of the user
     */
    "username"?: string;
}

export namespace GroupMemberResource {
    export enum StatusEnum {
        Moderator = <any> 'moderator',
        Member = <any> 'member'
    }
}
