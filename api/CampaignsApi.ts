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

export class CampaignsApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Add a challenge to a campaign
        * 
        * @param id The id of the campaign
        * @param challengeId The id of the challenge
        */
    public addChallengeToCampaign (id: number, challengeId?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/campaigns/{id}/challenges'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addChallengeToCampaign.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: challengeId,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a campaign
        * 
        * @param campaignResource The campaign resource object
        */
    public createCampaign (campaignResource?: models.CampaignResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CampaignResource> {
        const localVarPath = this.basePath + '/campaigns';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: campaignResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a campaign template
        * Campaign Templates define a type of campaign and the properties they have
        * @param campaignTemplateResource The campaign template resource object
        */
    public createCampaignTemplate (campaignTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/campaigns/templates';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: campaignTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete a campaign
        * 
        * @param id The campaign id
        */
    public deleteCampaign (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/campaigns/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCampaign.');
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
        * Delete a campaign template
        * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
        * @param id The id of the template
        * @param cascade The value needed to delete used templates
        */
    public deleteCampaignTemplate (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/campaigns/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCampaignTemplate.');
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
        * Returns a single campaign
        * 
        * @param id The campaign id
        */
    public getCampaign (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CampaignResource> {
        const localVarPath = this.basePath + '/campaigns/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCampaign.');
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
        * List the challenges associated with a campaign
        * 
        * @param id The campaign id
        */
    public getCampaignChallenges (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceChallengeResource> {
        const localVarPath = this.basePath + '/campaigns/{id}/challenges'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCampaignChallenges.');
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
        * Get a single campaign template
        * 
        * @param id The id of the template
        */
    public getCampaignTemplate (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/campaigns/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCampaignTemplate.');
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
        * List and search campaign templates
        * 
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getCampaignTemplates (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceTemplateResource> {
        const localVarPath = this.basePath + '/campaigns/templates';

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
        * List and search campaigns
        * 
        * @param filterActive Filter for campaigns that are active
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getCampaigns (filterActive?: boolean, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceCampaignResource> {
        const localVarPath = this.basePath + '/campaigns';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterActive !== undefined) {
            queryParameters['filter_active'] = filterActive;
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
        * Remove a challenge from a campaign
        * 
        * @param campaignId The campaign id
        * @param id The challenge id
        */
    public removeChallengeFromCampaign (campaignId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/campaigns/{campaign_id}/challenges/{id}'
            .replace('{' + 'campaign_id' + '}', String(campaignId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling removeChallengeFromCampaign.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeChallengeFromCampaign.');
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
        * Update a campaign
        * 
        * @param id The campaign id
        * @param campaignResource The campaign resource object
        */
    public updateCampaign (id: number, campaignResource?: models.CampaignResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CampaignResource> {
        const localVarPath = this.basePath + '/campaigns/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateCampaign.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: campaignResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update an campaign template
        * 
        * @param id The id of the template
        * @param campaignTemplateResource The campaign template resource object
        */
    public updateCampaignTemplate (id: string, campaignTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/campaigns/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateCampaignTemplate.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: campaignTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
