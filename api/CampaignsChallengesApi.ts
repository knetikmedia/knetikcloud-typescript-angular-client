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

export class CampaignsChallengesApi {
    protected basePath = 'https://integration.knetikcloud.com/';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Create a challenge
        * Challenges do not run on their own.  They must be added to a campaign before events will spawn.
        * @param challengeResource The challenge resource object
        */
    public createChallenge (challengeResource?: models.ChallengeResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChallengeResource> {
        const localVarPath = this.basePath + '/challenges';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: challengeResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a challenge activity
        * 
        * @param challengeId The challenge id
        * @param challengeActivityResource The challenge activity resource object
        * @param validateSettings Whether to validate the settings being sent against the available settings on the base activity.
        */
    public createChallengeActivity (challengeId: number, challengeActivityResource?: models.ChallengeActivityResource, validateSettings?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChallengeActivityResource> {
        const localVarPath = this.basePath + '/challenges/{challenge_id}/activities'
            .replace('{' + 'challenge_id' + '}', String(challengeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'challengeId' is not null or undefined
        if (challengeId === null || challengeId === undefined) {
            throw new Error('Required parameter challengeId was null or undefined when calling createChallengeActivity.');
        }
        if (validateSettings !== undefined) {
            queryParameters['validateSettings'] = validateSettings;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: challengeActivityResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a challenge template
        * Challenge Templates define a type of challenge and the properties they have
        * @param challengeTemplateResource The challenge template resource object
        */
    public createChallengeTemplate (challengeTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/challenges/templates';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: challengeTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete a challenge
        * 
        * @param id The challenge id
        */
    public deleteChallenge (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/challenges/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteChallenge.');
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
        * Delete a challenge activity
        * 
        * @param activityId The activity id
        * @param challengeId The challenge id
        */
    public deleteChallengeActivity (activityId: number, challengeId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/challenges/{challenge_id}/activities/{activity_id}'
            .replace('{' + 'activity_id' + '}', String(activityId))
            .replace('{' + 'challenge_id' + '}', String(challengeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'activityId' is not null or undefined
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling deleteChallengeActivity.');
        }
        // verify required parameter 'challengeId' is not null or undefined
        if (challengeId === null || challengeId === undefined) {
            throw new Error('Required parameter challengeId was null or undefined when calling deleteChallengeActivity.');
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
        * Delete a challenge event
        * 
        * @param id The challenge event id
        */
    public deleteChallengeEvent (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/challenges/events/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteChallengeEvent.');
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
        * Delete a challenge template
        * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
        * @param id The id of the template
        * @param cascade The value needed to delete used templates
        */
    public deleteChallengeTemplate (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/challenges/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteChallengeTemplate.');
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
        * Retrieve a challenge
        * 
        * @param id The challenge id
        */
    public getChallenge (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChallengeResource> {
        const localVarPath = this.basePath + '/challenges/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getChallenge.');
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
        * List and search challenge activities
        * 
        * @param challengeId The challenge id
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getChallengeActivities (challengeId: number, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceBareChallengeActivityResource> {
        const localVarPath = this.basePath + '/challenges/{challenge_id}/activities'
            .replace('{' + 'challenge_id' + '}', String(challengeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'challengeId' is not null or undefined
        if (challengeId === null || challengeId === undefined) {
            throw new Error('Required parameter challengeId was null or undefined when calling getChallengeActivities.');
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
        * Get a single challenge activity
        * 
        * @param activityId The activity id
        */
    public getChallengeActivity (activityId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChallengeActivityResource> {
        const localVarPath = this.basePath + '/challenges/{challenge_id}/activities/{activity_id}'
            .replace('{' + 'activity_id' + '}', String(activityId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'activityId' is not null or undefined
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling getChallengeActivity.');
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
        * Retrieve a single challenge event details
        * 
        * @param id The challenge event id
        */
    public getChallengeEvent (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChallengeEventResource> {
        const localVarPath = this.basePath + '/challenges/events/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getChallengeEvent.');
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
        * Retrieve a list of challenge events
        * 
        * @param filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the event start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
        * @param filterEndDate A comma separated string without spaces.  First value is the operator to search on, second value is the event end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
        * @param filterCampaigns check only for events from currently running campaigns
        * @param filterChallenge check only for events from the challenge specified by id
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getChallengeEvents (filterStartDate?: string, filterEndDate?: string, filterCampaigns?: boolean, filterChallenge?: number, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceChallengeEventResource> {
        const localVarPath = this.basePath + '/challenges/events';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterStartDate !== undefined) {
            queryParameters['filter_start_date'] = filterStartDate;
        }

        if (filterEndDate !== undefined) {
            queryParameters['filter_end_date'] = filterEndDate;
        }

        if (filterCampaigns !== undefined) {
            queryParameters['filter_campaigns'] = filterCampaigns;
        }

        if (filterChallenge !== undefined) {
            queryParameters['filter_challenge'] = filterChallenge;
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
        * Get a single challenge template
        * 
        * @param id The id of the template
        */
    public getChallengeTemplate (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/challenges/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getChallengeTemplate.');
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
        * List and search challenge templates
        * 
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getChallengeTemplates (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceTemplateResource> {
        const localVarPath = this.basePath + '/challenges/templates';

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
        * Retrieve a list of challenges
        * 
        * @param filterTemplate Filter for challenges that are not tied to campaigns (templates)
        * @param filterActiveCampaign Filter for challenges that are tied to active campaigns
        */
    public getChallenges (filterTemplate?: boolean, filterActiveCampaign?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceChallengeResource> {
        const localVarPath = this.basePath + '/challenges';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterTemplate !== undefined) {
            queryParameters['filter_template'] = filterTemplate;
        }

        if (filterActiveCampaign !== undefined) {
            queryParameters['filter_active_campaign'] = filterActiveCampaign;
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
        * Update a challenge
        * If the challenge is a copy, changes will propagate to all the related challenges
        * @param id The challenge id
        * @param challengeResource The challenge resource object
        */
    public updateChallenge (id: number, challengeResource?: models.ChallengeResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ChallengeResource> {
        const localVarPath = this.basePath + '/challenges/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateChallenge.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: challengeResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update a challenge activity
        * 
        * @param activityId The activity id
        * @param challengeId The challenge id
        * @param challengeActivityResource The challenge activity resource object
        */
    public updateChallengeActivity (activityId: number, challengeId: number, challengeActivityResource?: models.ChallengeActivityResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/challenges/{challenge_id}/activities/{activity_id}'
            .replace('{' + 'activity_id' + '}', String(activityId))
            .replace('{' + 'challenge_id' + '}', String(challengeId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'activityId' is not null or undefined
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling updateChallengeActivity.');
        }
        // verify required parameter 'challengeId' is not null or undefined
        if (challengeId === null || challengeId === undefined) {
            throw new Error('Required parameter challengeId was null or undefined when calling updateChallengeActivity.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: challengeActivityResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update a challenge template
        * 
        * @param id The id of the template
        * @param challengeTemplateResource The challenge template resource object
        */
    public updateChallengeTemplate (id: string, challengeTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/challenges/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateChallengeTemplate.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: challengeTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
