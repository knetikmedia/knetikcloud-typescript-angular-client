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

    export class ReportingRevenueApi {
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
         * Get revenue info by country
         * Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top
         * @param currencyCode The code for a currency to get sales data for
         * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
         * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public executiveRevenueCountrySalesUsingGET (currencyCode: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageRevenueCountryReportResource> {
            const localVarPath = this.basePath + '/reporting/revenue/countries/{currency_code}'
                .replace('{' + 'currency_code' + '}', String(currencyCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'currencyCode' is not null or undefined
            if (currencyCode === null || currencyCode === undefined) {
                throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueCountrySalesUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
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
         * Get item revenue info
         * Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range
         * @param currencyCode The code for a currency to get sales data for
         * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
         * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
         */
        public executiveRevenueItemSalesUsingGET (currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<RevenueReportResource> {
            const localVarPath = this.basePath + '/reporting/revenue/item-sales/{currency_code}'
                .replace('{' + 'currency_code' + '}', String(currencyCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'currencyCode' is not null or undefined
            if (currencyCode === null || currencyCode === undefined) {
                throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueItemSalesUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
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
         * Get revenue info by item
         * Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top
         * @param currencyCode The code for a currency to get sales data for
         * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
         * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public executiveRevenueProductSalesUsingGET (currencyCode: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageRevenueProductReportResource> {
            const localVarPath = this.basePath + '/reporting/revenue/products/{currency_code}'
                .replace('{' + 'currency_code' + '}', String(currencyCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'currencyCode' is not null or undefined
            if (currencyCode === null || currencyCode === undefined) {
                throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueProductSalesUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
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
         * Get refund revenue info
         * Get basic info about revenue loss from refunds (for all item types), summed up within a time range.
         * @param currencyCode The code for a currency to get refund data for
         * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
         * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
         */
        public executiveRevenueRefundsUsingGET (currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<RevenueReportResource> {
            const localVarPath = this.basePath + '/reporting/revenue/refunds/{currency_code}'
                .replace('{' + 'currency_code' + '}', String(currencyCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'currencyCode' is not null or undefined
            if (currencyCode === null || currencyCode === undefined) {
                throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueRefundsUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
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
         * Get subscription revenue info
         * Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range
         * @param currencyCode The code for a currency to get sales data for
         * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
         * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
         */
        public executiveRevenueSubscriptionSalesUsingGET (currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<RevenueReportResource> {
            const localVarPath = this.basePath + '/reporting/revenue/subscription-sales/{currency_code}'
                .replace('{' + 'currency_code' + '}', String(currencyCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'currencyCode' is not null or undefined
            if (currencyCode === null || currencyCode === undefined) {
                throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueSubscriptionSalesUsingGET.');
            }
            if (startDate !== undefined) {
                queryParameters['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                queryParameters['end_date'] = endDate;
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
