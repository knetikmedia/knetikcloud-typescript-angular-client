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

    export class StoreVendorsApi {
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
         * Create a vendor
         * 
         * @param vendor The vendor
         */
        public createVendorUsingPOST (vendor?: VendorResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<VendorResource> {
            const localVarPath = this.basePath + '/vendors';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: vendor,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete a vendor
         * 
         * @param id The id of the vendor
         */
        public deleteVendorUsingDELETE (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/vendors/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteVendorUsingDELETE.');
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
         * Get a single vendor
         * 
         * @param id The id of the vendor
         */
        public getVendorUsingGET (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<VendorResource> {
            const localVarPath = this.basePath + '/vendors/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getVendorUsingGET.');
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
         * List and search vendors
         * 
         * @param filterName Filters vendors by name starting with the text provided in the filter
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getVendorsUsingGET (filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageVendorResource> {
            const localVarPath = this.basePath + '/vendors';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (filterName !== undefined) {
                queryParameters['filter_name'] = filterName;
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
         * Update a vendor
         * 
         * @param id The id of the vendor
         * @param vendor The vendor
         */
        public updateVendorUsingPUT (id: number, vendor?: VendorResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/vendors/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateVendorUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: vendor,
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
