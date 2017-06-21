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

export class ContentPollsApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Add your vote to a poll
        * 
        * @param id The poll id
        * @param answerKey The answer key
        */
    public answerPoll (id: string, answerKey?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PollResponseResource> {
        const localVarPath = this.basePath + '/media/polls/{id}/response'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling answerPoll.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: answerKey,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a new poll
        * Polls are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.
        * @param pollResource The poll object
        */
    public createPoll (pollResource?: models.PollResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PollResource> {
        const localVarPath = this.basePath + '/media/polls';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: pollResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a poll template
        * Poll templates define a type of poll and the properties they have
        * @param pollTemplateResource The poll template resource object
        */
    public createPollTemplate (pollTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/media/polls/templates';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: pollTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete an existing poll
        * 
        * @param id The poll id
        */
    public deletePoll (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/polls/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePoll.');
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
        * Delete a poll template
        * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
        * @param id The id of the template
        * @param cascade The value needed to delete used templates
        */
    public deletePollTemplate (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/polls/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePollTemplate.');
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
        * Get a single poll
        * 
        * @param id The poll id
        */
    public getPoll (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PollResource> {
        const localVarPath = this.basePath + '/media/polls/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPoll.');
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
        * Get poll answer
        * 
        * @param id The poll id
        */
    public getPollAnswer (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PollResponseResource> {
        const localVarPath = this.basePath + '/media/polls/{id}/response'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPollAnswer.');
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
        * Get a single poll template
        * 
        * @param id The id of the template
        */
    public getPollTemplate (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/media/polls/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPollTemplate.');
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
        * List and search poll templates
        * 
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getPollTemplates (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceTemplateResource> {
        const localVarPath = this.basePath + '/media/polls/templates';

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
        * List and search polls
        * Get a list of polls with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
        * @param filterCategory Filter for polls from a specific category by id
        * @param filterTagset Filter for polls with specified tags (separated by comma)
        * @param filterText Filter for polls whose text contains a string
        * @param size The number of objects returned per page
        * @param page The number of the page returned
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getPolls (filterCategory?: string, filterTagset?: string, filterText?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourcePollResource> {
        const localVarPath = this.basePath + '/media/polls';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterCategory !== undefined) {
            queryParameters['filter_category'] = filterCategory;
        }

        if (filterTagset !== undefined) {
            queryParameters['filter_tagset'] = filterTagset;
        }

        if (filterText !== undefined) {
            queryParameters['filter_text'] = filterText;
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
        * Update an existing poll
        * 
        * @param id The poll id
        * @param pollResource The poll object
        */
    public updatePoll (id: string, pollResource?: models.PollResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PollResource> {
        const localVarPath = this.basePath + '/media/polls/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePoll.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: pollResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update a poll template
        * 
        * @param id The id of the template
        * @param pollTemplateResource The poll template resource object
        */
    public updatePollTemplate (id: string, pollTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.TemplateResource> {
        const localVarPath = this.basePath + '/media/polls/templates/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePollTemplate.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: pollTemplateResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}