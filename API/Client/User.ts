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

    export interface User {
        "additionalProperties"?: { [key: string]: Property; };

        "address"?: string;

        "address2"?: string;

        "affiliate"?: Affiliate;

        "avatarUrl"?: string;

        "children"?: Array<UserRelationship>;

        "city"?: string;

        "country"?: Country;

        "currency"?: Currency;

        "dateCreated"?: number;

        "dateOfBirth"?: number;

        "dateUpdated"?: number;

        "description"?: string;

        "displayName"?: string;

        "email"?: string;

        "firstName"?: string;

        "fullname"?: string;

        "gender"?: string;

        "groups"?: Array<GroupMember>;

        "guest"?: boolean;

        "id"?: number;

        "inviteToken"?: string;

        "lang"?: Language;

        "lastActivity"?: number;

        "lastLogin"?: number;

        "lastName"?: string;

        "lockoutAttempts"?: number;

        "lockoutDate"?: number;

        "mobileNumber"?: string;

        "oldId"?: number;

        "parents"?: Array<UserRelationship>;

        "password"?: string;

        "postalCode"?: string;

        "propertiesString"?: string;

        "roles"?: Array<Role>;

        "state"?: string;

        "status"?: string;

        "tagStrings"?: Array<string>;

        "tags"?: Array<UserTag>;

        "template"?: string;

        "timezone"?: Timezone;

        "token"?: string;

        "typeHint"?: string;

        "username"?: string;

    }

}
