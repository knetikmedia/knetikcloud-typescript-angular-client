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

import { SettingOption } from './settingOption';


/**
 * The definition of an activity parameters: ex: difficulty level
 */
export interface AvailableSettingResource {
    /**
     * Whether the setting is advanced. Default: false
     */
    advancedOption?: boolean;

    /**
     * The default value of the setting (must be in options array). Ex: easy
     */
    defaultValue: string;

    /**
     * The description of the setting: Ex: Choose the difficulty level to show more or less complicated questions (for a trivia activity)
     */
    description?: string;

    /**
     * The unique ID for the setting: Ex: difficulty
     */
    key: string;

    /**
     * The textual name of the setting: Ex: Difficulty Level
     */
    name: string;

    /**
     * The set of options available for this setting, Ex: easy, medium, hard
     */
    options: Array<SettingOption>;

}