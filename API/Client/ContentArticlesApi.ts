/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class ContentArticlesApi {
        protected basePath = 'https://localhost:8080/';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath !== undefined) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * Create an article template
         * Article Templates define a type of article and the properties they have
         * @param articleTemplateResource The article template resource object
         */
        public createArticleTemplateUsingPOST (articleTemplateResource?: TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<TemplateResource> {
            const localVarPath = this.basePath + '/content/articles/templates';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: articleTemplateResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Create a new article
         * Articles are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.
         * @param articleResource The new article
         */
        public createArticleUsingPOST (articleResource?: ArticleResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<ArticleResource> {
            const localVarPath = this.basePath + '/content/articles';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: articleResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete an article template
         * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
         * @param id The id of the template
         * @param cascade The value needed to delete used templates
         */
        public deleteArticleTemplateUsingDELETE (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/content/articles/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteArticleTemplateUsingDELETE.');
            }
            if (cascade !== undefined) {
                queryParameters['cascade'] = cascade;
            }

            let httpRequestParams: any = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete an existing article
         * 
         * @param id The article id
         */
        public deleteArticleUsingDELETE (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/content/articles/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteArticleUsingDELETE.');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Get a single article template
         * 
         * @param id The id of the template
         */
        public getArticleTemplateUsingGET (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<TemplateResource> {
            const localVarPath = this.basePath + '/content/articles/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getArticleTemplateUsingGET.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * List and search article templates
         * 
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getArticleTemplatesUsingGET (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageTemplateResource> {
            const localVarPath = this.basePath + '/content/articles/templates';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
            }

            if (order !== undefined) {
                queryParameters['order'] = order;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Get a single article
         * 
         * @param id The article id
         */
        public getArticleUsingGET (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<ArticleResource> {
            const localVarPath = this.basePath + '/content/articles/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getArticleUsingGET.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * List and search articles
         * Get a list of articles with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single article&#39; to retrieve the full resource with assets for a given item as needed.
         * @param filterCategory Filter for articles from a specific category by id
         * @param filterTagset Filter for articles with specified tags (separated by comma)
         * @param filterTitle Filter for articles whose title contains a string
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getArticlesUsingGET (filterCategory?: string, filterTagset?: string, filterTitle?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageArticleResource> {
            const localVarPath = this.basePath + '/content/articles';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (filterCategory !== undefined) {
                queryParameters['filter_category'] = filterCategory;
            }

            if (filterTagset !== undefined) {
                queryParameters['filter_tagset'] = filterTagset;
            }

            if (filterTitle !== undefined) {
                queryParameters['filter_title'] = filterTitle;
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

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Update an article template
         * 
         * @param id The id of the template
         * @param articleTemplateResource The article template resource object
         */
        public updateArticleTemplateUsingPUT (id: string, articleTemplateResource?: TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/content/articles/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateArticleTemplateUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: articleTemplateResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Update an existing article
         * 
         * @param id The article id
         * @param articleResource The article object
         */
        public updateArticleUsingPUT (id: string, articleResource?: ArticleResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/content/articles/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateArticleUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: articleResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}
