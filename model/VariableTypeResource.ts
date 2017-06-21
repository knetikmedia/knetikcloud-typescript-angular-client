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

export interface VariableTypeResource {
    /**
     * The base class of the type
     */
    "base": VariableTypeResource.BaseEnum;
    /**
     * Whether the type comes from a set of valid values that the system can provided (such as users)
     */
    "enumerable"?: boolean;
    /**
     * The name of the variable type. Used as the unique id
     */
    "name": string;
}

export namespace VariableTypeResource {
    export enum BaseEnum {
        NUMBER = <any> 'NUMBER',
        INTEGER = <any> 'INTEGER',
        STRING = <any> 'STRING',
        DATE = <any> 'DATE',
        BOOLEAN = <any> 'BOOLEAN'
    }
}