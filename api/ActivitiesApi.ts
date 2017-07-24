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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class ActivitiesApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary Create an activity
     * @param activityResource The activity resource object
     */
    public createActivity (activityResource?: models.ActivityResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ActivityResource> {
        const localVarPath = this.basePath + '/activities';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: activityResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Has to enforce extra rules if not used as an admin
     * @summary Create a new activity occurrence. Ex: start a game
     * @param test if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings
     * @param activityOccurrenceResource The activity occurrence object
     */
    public createActivityOccurrence (test?: boolean, activityOccurrenceResource?: models.ActivityOccurrenceResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ActivityOccurrenceResource> {
        const localVarPath = this.basePath + '/activity-occurrences';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (test !== undefined) {
            queryParameters['test'] = test;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: activityOccurrenceResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Activity Templates define a type of activity and the properties they have
     * @summary Create a activity template
     * @param activityTemplateResource The activity template resource object
     */
    public createActivityTemplate (activityTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/activities/templates';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: activityTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Delete an activity
     * @param id The id of the activity
     */
    public deleteActivity (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/activities/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteActivity.');
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
     * If cascade = 'detach', it will force delete the template even if it's attached to other objects
     * @summary Delete a activity template
     * @param id The id of the template
     * @param cascade The value needed to delete used templates
     */
    public deleteActivityTemplate (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/activities/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteActivityTemplate.');
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
     * 
     * @summary List activity definitions
     * @param filterTemplate Filter for activities that are templates, or specifically not if false
     * @param filterName Filter for activities that have a name starting with specified string
     * @param filterId Filter for activities with an id in the given comma separated list of ids
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivities (filterTemplate?: boolean, filterName?: string, filterId?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceBareActivityResource> {
        const localVarPath = this.basePath + '/activities';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterTemplate !== undefined) {
            queryParameters['filter_template'] = filterTemplate;
        }

        if (filterName !== undefined) {
            queryParameters['filter_name'] = filterName;
        }

        if (filterId !== undefined) {
            queryParameters['filter_id'] = filterId;
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
     * 
     * @summary Get a single activity
     * @param id The id of the activity
     */
    public getActivity (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ActivityResource> {
        const localVarPath = this.basePath + '/activities/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivity.');
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
     * 
     * @summary Get a single activity template
     * @param id The id of the template
     */
    public getActivityTemplate (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/activities/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivityTemplate.');
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
     * 
     * @summary List and search activity templates
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivityTemplates (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceTemplateResource> {
        const localVarPath = this.basePath + '/activities/templates';

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
     * 
     * @summary Sets the status of an activity occurrence to FINISHED and logs metrics
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityOccurrenceResults The activity occurrence object
     */
    public setActivityOccurrenceResults (activityOccurrenceId: number, activityOccurrenceResults?: models.ActivityOccurrenceResultsResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ActivityOccurrenceResults> {
        const localVarPath = this.basePath + '/activity-occurrences/{activity_occurrence_id}/results'
            .replace('{' + 'activity_occurrence_id' + '}', String(activityOccurrenceId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'activityOccurrenceId' is not null or undefined
        if (activityOccurrenceId === null || activityOccurrenceId === undefined) {
            throw new Error('Required parameter activityOccurrenceId was null or undefined when calling setActivityOccurrenceResults.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: activityOccurrenceResults,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Update an activity
     * @param id The id of the activity
     * @param activityResource The activity resource object
     */
    public updateActivity (id: number, activityResource?: models.ActivityResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ActivityResource> {
        const localVarPath = this.basePath + '/activities/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateActivity.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: activityResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * If setting to 'FINISHED' you must POST to /results instead to record the metrics and get synchronous reward results
     * @summary Updated the status of an activity occurrence
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityCccurrenceStatus The activity occurrence status object
     */
    public updateActivityOccurrence (activityOccurrenceId: number, activityCccurrenceStatus?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/activity-occurrences/{activity_occurrence_id}/status'
            .replace('{' + 'activity_occurrence_id' + '}', String(activityOccurrenceId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'activityOccurrenceId' is not null or undefined
        if (activityOccurrenceId === null || activityOccurrenceId === undefined) {
            throw new Error('Required parameter activityOccurrenceId was null or undefined when calling updateActivityOccurrence.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: activityCccurrenceStatus,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Update an activity template
     * @param id The id of the template
     * @param activityTemplateResource The activity template resource object
     */
    public updateActivityTemplate (id: string, activityTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/activities/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateActivityTemplate.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: activityTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
