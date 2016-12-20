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

    export class ReportingUsageApi {
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
         * Returns aggregated endpoint usage information by the day
         * 
         * @param startDate The beginning of the range being requested, unix timestamp in seconds
         * @param endDate The ending of the range being requested, unix timestamp in seconds
         * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public getUsageByDayUsingGET (startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageResourceUsageInfo> {
            const localVarPath = this.basePath + '/reporting/usage/day';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'startDate' is not null or undefined
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling getUsageByDayUsingGET.');
            }
            // verify required parameter 'endDate' is not null or undefined
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling getUsageByDayUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
            }

            if (combineEndpoints !== undefined) {
                queryParameters['combine_endpoints'] = combineEndpoints;
            }

            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
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
         * Returns aggregated endpoint usage information by hour
         * 
         * @param startDate The beginning of the range being requested, unix timestamp in seconds
         * @param endDate The ending of the range being requested, unix timestamp in seconds
         * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public getUsageByHourUsingGET (startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageResourceUsageInfo> {
            const localVarPath = this.basePath + '/reporting/usage/hour';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'startDate' is not null or undefined
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling getUsageByHourUsingGET.');
            }
            // verify required parameter 'endDate' is not null or undefined
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling getUsageByHourUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
            }

            if (combineEndpoints !== undefined) {
                queryParameters['combine_endpoints'] = combineEndpoints;
            }

            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
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
         * Returns aggregated endpoint usage information by minute
         * 
         * @param startDate The beginning of the range being requested, unix timestamp in seconds
         * @param endDate The ending of the range being requested, unix timestamp in seconds
         * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public getUsageByMinuteUsingGET (startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageResourceUsageInfo> {
            const localVarPath = this.basePath + '/reporting/usage/minute';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'startDate' is not null or undefined
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling getUsageByMinuteUsingGET.');
            }
            // verify required parameter 'endDate' is not null or undefined
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling getUsageByMinuteUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
            }

            if (combineEndpoints !== undefined) {
                queryParameters['combine_endpoints'] = combineEndpoints;
            }

            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
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
         * Returns aggregated endpoint usage information by month
         * 
         * @param startDate The beginning of the range being requested, unix timestamp in seconds
         * @param endDate The ending of the range being requested, unix timestamp in seconds
         * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public getUsageByMonthUsingGET (startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageResourceUsageInfo> {
            const localVarPath = this.basePath + '/reporting/usage/month';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'startDate' is not null or undefined
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling getUsageByMonthUsingGET.');
            }
            // verify required parameter 'endDate' is not null or undefined
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling getUsageByMonthUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
            }

            if (combineEndpoints !== undefined) {
                queryParameters['combine_endpoints'] = combineEndpoints;
            }

            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
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
         * Returns aggregated endpoint usage information by year
         * 
         * @param startDate The beginning of the range being requested, unix timestamp in seconds
         * @param endDate The ending of the range being requested, unix timestamp in seconds
         * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public getUsageByYearUsingGET (startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageResourceUsageInfo> {
            const localVarPath = this.basePath + '/reporting/usage/year';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'startDate' is not null or undefined
            if (startDate === null || startDate === undefined) {
                throw new Error('Required parameter startDate was null or undefined when calling getUsageByYearUsingGET.');
            }
            // verify required parameter 'endDate' is not null or undefined
            if (endDate === null || endDate === undefined) {
                throw new Error('Required parameter endDate was null or undefined when calling getUsageByYearUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
            }

            if (combineEndpoints !== undefined) {
                queryParameters['combine_endpoints'] = combineEndpoints;
            }

            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
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
    }
}
