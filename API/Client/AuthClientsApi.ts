/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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

    export class AuthClientsApi {
        protected basePath = 'https://devsandbox.knetikcloud.com/';
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
         * Set grant types for a client
         * 
         * @param clientKey The key of the client
         * @param grantList A list of unique grant types
         */
        public assignClientGrantTypesUsingPUT (clientKey: string, grantList?: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/auth/clients/{client_key}/grant-types'
                .replace('{' + 'client_key' + '}', String(clientKey));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'clientKey' is not null or undefined
            if (clientKey === null || clientKey === undefined) {
                throw new Error('Required parameter clientKey was null or undefined when calling assignClientGrantTypesUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: grantList,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set redirect uris for a client
         * 
         * @param clientKey The key of the client
         * @param redirectList A list of unique redirect uris
         */
        public assignClientRedirectUrisUsingPUT (clientKey: string, redirectList?: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/auth/clients/{client_key}/redirect-uris'
                .replace('{' + 'client_key' + '}', String(clientKey));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'clientKey' is not null or undefined
            if (clientKey === null || clientKey === undefined) {
                throw new Error('Required parameter clientKey was null or undefined when calling assignClientRedirectUrisUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: redirectList,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Create a new client
         * 
         * @param clientResource The client resource object
         */
        public createClientUsingPOST (clientResource?: ClientResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<ClientResource> {
            const localVarPath = this.basePath + '/auth/clients';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: clientResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete a client
         * 
         * @param clientKey The key of the client
         */
        public deleteClientUsingDELETE (clientKey: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/auth/clients/{client_key}'
                .replace('{' + 'client_key' + '}', String(clientKey));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'clientKey' is not null or undefined
            if (clientKey === null || clientKey === undefined) {
                throw new Error('Required parameter clientKey was null or undefined when calling deleteClientUsingDELETE.');
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
         * Get a single client
         * 
         * @param clientKey The key of the client
         */
        public getClientUsingGET (clientKey: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<ClientResource> {
            const localVarPath = this.basePath + '/auth/clients/{client_key}'
                .replace('{' + 'client_key' + '}', String(clientKey));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'clientKey' is not null or undefined
            if (clientKey === null || clientKey === undefined) {
                throw new Error('Required parameter clientKey was null or undefined when calling getClientUsingGET.');
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
         * List and search clients
         * 
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getClientsUsingGET (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageClientResource> {
            const localVarPath = this.basePath + '/auth/clients';

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
         * List available client grant types
         * 
         */
        public listAvailableGrantTypesUsingGET (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<GrantTypeResource>> {
            const localVarPath = this.basePath + '/auth/clients/grant-types';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
         * Update a client
         * 
         * @param clientKey The key of the client
         * @param clientResource The client resource object
         */
        public updateClientUsingPUT (clientKey: string, clientResource?: ClientResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/auth/clients/{client_key}'
                .replace('{' + 'client_key' + '}', String(clientKey));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'clientKey' is not null or undefined
            if (clientKey === null || clientKey === undefined) {
                throw new Error('Required parameter clientKey was null or undefined when calling updateClientUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: clientResource,
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
