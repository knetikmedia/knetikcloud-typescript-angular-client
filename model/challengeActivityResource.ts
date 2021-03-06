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

import { ActivityEntitlementResource } from './activityEntitlementResource';
import { CoreChallengeActivitySettings } from './coreChallengeActivitySettings';
import { Property } from './property';
import { RewardSetResource } from './rewardSetResource';
import { SelectedSettingResource } from './selectedSettingResource';


export interface ChallengeActivityResource {
    /**
     * The id of the activity
     */
    activityId: number;

    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * The id of the challenge
     */
    challengeId?: number;

    /**
     * Defines core settings about the activity that affect how it can be created/played by users. Values may be left null to inherit from parent activity.
     */
    coreSettings?: CoreChallengeActivitySettings;

    /**
     * The entitlement item needed to participate in the activity as part of this event. Null indicates free entry. When creating/updating only id is used. Item must be pre-existing
     */
    entitlement?: ActivityEntitlementResource;

    /**
     * The unique ID for this resource
     */
    id?: number;

    /**
     * The rewards to give at the end of each occurence of the activity. When creating/updating only id is used. Reward set must be pre-existing
     */
    rewardSet?: RewardSetResource;

    /**
     * The list of settings and the select options
     */
    settings?: Array<SelectedSettingResource>;

    /**
     * A challenge activity template this challenge activity is validated against (private). May be null and no validation of additional_properties will be done
     */
    template?: string;

}
