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

import { Property } from './property';


export interface GroupResource {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * A description of the group. Max 250 characters
     */
    description?: string;

    /**
     * The number of users in the group
     */
    memberCount?: number;

    /**
     * A message of the day for members of the group
     */
    messageOfTheDay?: string;

    /**
     * The name of the group. Max 50 characters
     */
    name: string;

    /**
     * The unique name of another group that this group is a subset of
     */
    parent?: string;

    /**
     * The status which describes whether other users can freely join the group or not
     */
    status: GroupResource.StatusEnum;

    /**
     * The number of users in child groups
     */
    subMemberCount?: number;

    /**
     * Tags for search
     */
    tags?: Array<string>;

    /**
     * A group template this group is validated against. May be null and no validation of additional_properties will be done
     */
    template?: string;

    /**
     * Unique name used in url and references. Uppercase, lowercase, numbers and hyphens only. Max 50 characters. Cannot be altered once created. Default: random UUID
     */
    uniqueName?: string;

}
export namespace GroupResource {
    export enum StatusEnum {
        Open = <any> 'open',
        Closed = <any> 'closed'
    }
}
