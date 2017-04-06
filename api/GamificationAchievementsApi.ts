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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class GamificationAchievementsApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Create a new achievement definition
        * If the definition contains a trigger event name, a BRE rule is created, so that tracking logic is executed when the triggering event occurs. If no trigger event name is specified, the user&#39;s achievement status must manually be updated via the API.
        * @param achievement The achievement definition
        */
    public createAchievement (achievement?: models.AchievementDefinitionResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AchievementDefinitionResource> {
        const localVarPath = this.basePath + '/achievements';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: achievement,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create an achievement template
        * Achievement templates define a type of achievement and the properties they have
        * @param template The achievement template to be created
        */
    public createAchievementTemplate (template?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/achievements/templates';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: template,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete an achievement definition
        * Will also disable the associated generated rule, if any.
        * @param name The name of the achievement
        */
    public deleteAchievement (name: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/achievements/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteAchievement.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete an achievement template
        * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
        * @param id The id of the template
        * @param cascade The value needed to delete used templates
        */
    public deleteAchievementTemplate (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/achievements/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteAchievementTemplate.');
        }
        if (cascade !== undefined) {
            queryParameters['cascade'] = cascade;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Get a single achievement definition
        * 
        * @param name The name of the achievement
        */
    public getAchievement (name: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AchievementDefinitionResource> {
        const localVarPath = this.basePath + '/achievements/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getAchievement.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Get a single achievement template
        * 
        * @param id The id of the template
        */
    public getAchievementTemplate (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/achievements/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAchievementTemplate.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * List and search achievement templates
        * 
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getAchievementTemplates (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceTemplateResource> {
        const localVarPath = this.basePath + '/achievements/templates';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        if (order !== undefined) {
            queryParameters['order'] = order;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Get the list of triggers that can be used to trigger an achievement progress update
        * 
        */
    public getAchievementTriggers (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.BreTriggerResource>> {
        const localVarPath = this.basePath + '/achievements/triggers';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Get all achievement definitions in the system
        * 
        * @param filterTagset Filter for achievements with specified tags (separated by comma)
        * @param filterName Filter for achievements whose name contains a string
        * @param filterHidden Filter for achievements that are hidden or not
        * @param filterDerived Filter for achievements that are derived from other services
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getAchievements (filterTagset?: string, filterName?: string, filterHidden?: boolean, filterDerived?: boolean, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceAchievementDefinitionResource> {
        const localVarPath = this.basePath + '/achievements';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterTagset !== undefined) {
            queryParameters['filter_tagset'] = filterTagset;
        }

        if (filterName !== undefined) {
            queryParameters['filter_name'] = filterName;
        }

        if (filterHidden !== undefined) {
            queryParameters['filter_hidden'] = filterHidden;
        }

        if (filterDerived !== undefined) {
            queryParameters['filter_derived'] = filterDerived;
        }

        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        if (order !== undefined) {
            queryParameters['order'] = order;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Get a list of derived achievements
        * Used by other services that depend on achievements
        * @param name The name of the derived achievement
        */
    public getDerivedAchievements (name: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.AchievementDefinitionResource>> {
        const localVarPath = this.basePath + '/achievements/derived/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getDerivedAchievements.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Retrieve progress on a given achievement for a given user
        * Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
        * @param userId The user&#39;s id
        * @param achievementName The achievement&#39;s name
        */
    public getUserAchievementProgress (userId: number, achievementName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserAchievementGroupResource> {
        const localVarPath = this.basePath + '/users/{user_id}/achievements/{achievement_name}'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'achievement_name' + '}', String(achievementName));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAchievementProgress.');
        }
        // verify required parameter 'achievementName' is not null or undefined
        if (achievementName === null || achievementName === undefined) {
            throw new Error('Required parameter achievementName was null or undefined when calling getUserAchievementProgress.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Retrieve progress on achievements for a given user
        * Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
        * @param userId The user&#39;s id
        * @param filterAchievementDerived Filter for achievements that are derived from other services
        * @param filterAchievementTagset Filter for achievements with specified tags (separated by comma)
        * @param filterAchievementName Filter for achievements whose name contains a string
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUserAchievementsProgress (userId: number, filterAchievementDerived?: boolean, filterAchievementTagset?: string, filterAchievementName?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUserAchievementGroupResource> {
        const localVarPath = this.basePath + '/users/{user_id}/achievements'
            .replace('{' + 'user_id' + '}', String(userId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAchievementsProgress.');
        }
        if (filterAchievementDerived !== undefined) {
            queryParameters['filter_achievement_derived'] = filterAchievementDerived;
        }

        if (filterAchievementTagset !== undefined) {
            queryParameters['filter_achievement_tagset'] = filterAchievementTagset;
        }

        if (filterAchievementName !== undefined) {
            queryParameters['filter_achievement_name'] = filterAchievementName;
        }

        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Retrieve progress on a given achievement for all users
        * Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.
        * @param achievementName The achievement&#39;s name
        * @param filterAchievementDerived Filter for achievements that are derived from other services
        * @param filterAchievementTagset Filter for achievements with specified tags (separated by comma)
        * @param filterAchievementName Filter for achievements whose name contains a string
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUsersAchievementProgress (achievementName: string, filterAchievementDerived?: boolean, filterAchievementTagset?: string, filterAchievementName?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUserAchievementGroupResource> {
        const localVarPath = this.basePath + '/users/achievements/{achievement_name}'
            .replace('{' + 'achievement_name' + '}', String(achievementName));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'achievementName' is not null or undefined
        if (achievementName === null || achievementName === undefined) {
            throw new Error('Required parameter achievementName was null or undefined when calling getUsersAchievementProgress.');
        }
        if (filterAchievementDerived !== undefined) {
            queryParameters['filter_achievement_derived'] = filterAchievementDerived;
        }

        if (filterAchievementTagset !== undefined) {
            queryParameters['filter_achievement_tagset'] = filterAchievementTagset;
        }

        if (filterAchievementName !== undefined) {
            queryParameters['filter_achievement_name'] = filterAchievementName;
        }

        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Retrieve progress on achievements for all users
        * Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.
        * @param filterAchievementDerived Filter for achievements that are derived from other services
        * @param filterAchievementTagset Filter for achievements with specified tags (separated by comma)
        * @param filterAchievementName Filter for achievements whose name contains a string
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUsersAchievementsProgress (filterAchievementDerived?: boolean, filterAchievementTagset?: string, filterAchievementName?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUserAchievementGroupResource> {
        const localVarPath = this.basePath + '/users/achievements';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterAchievementDerived !== undefined) {
            queryParameters['filter_achievement_derived'] = filterAchievementDerived;
        }

        if (filterAchievementTagset !== undefined) {
            queryParameters['filter_achievement_tagset'] = filterAchievementTagset;
        }

        if (filterAchievementName !== undefined) {
            queryParameters['filter_achievement_name'] = filterAchievementName;
        }

        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Increment an achievement progress record for a user
        * If no progress record yet exists for the user, it will be created. Otherwise it will be updated and the provided value added to the existing progress. May be negative. If progress meets or exceeds the achievement&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
        * @param userId The user&#39;s id
        * @param achievementName The achievement&#39;s name
        * @param progress The amount to add to the progress value
        */
    public incrementAchievementProgress (userId: number, achievementName: string, progress?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserAchievementGroupResource> {
        const localVarPath = this.basePath + '/users/{user_id}/achievements/{achievement_name}/progress'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'achievement_name' + '}', String(achievementName));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling incrementAchievementProgress.');
        }
        // verify required parameter 'achievementName' is not null or undefined
        if (achievementName === null || achievementName === undefined) {
            throw new Error('Required parameter achievementName was null or undefined when calling incrementAchievementProgress.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: progress,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Set an achievement progress record for a user
        * If no progress record yet exists for the user, it will be created. Otherwise it will be updated and progress set to the provided value. If progress meets or exceeds the achievement&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
        * @param userId The user&#39;s id
        * @param achievementName The achievement&#39;s name
        * @param progress The new progress value
        */
    public setAchievementProgress (userId: number, achievementName: string, progress?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserAchievementGroupResource> {
        const localVarPath = this.basePath + '/users/{user_id}/achievements/{achievement_name}/progress'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'achievement_name' + '}', String(achievementName));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setAchievementProgress.');
        }
        // verify required parameter 'achievementName' is not null or undefined
        if (achievementName === null || achievementName === undefined) {
            throw new Error('Required parameter achievementName was null or undefined when calling setAchievementProgress.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: progress,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update an achievement definition
        * The existing generated rule, if any, will be deleted. A new rule will be created if a trigger event name is specified in the new version.
        * @param name The name of the achievement
        * @param achievement The achievement definition
        */
    public updateAchievement (name: string, achievement?: models.AchievementDefinitionResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AchievementDefinitionResource> {
        const localVarPath = this.basePath + '/achievements/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateAchievement.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: achievement,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update an achievement template
        * 
        * @param id The id of the template
        * @param template The updated template
        */
    public updateAchievementTemplate (id: string, template?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/achievements/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateAchievementTemplate.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: template,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
