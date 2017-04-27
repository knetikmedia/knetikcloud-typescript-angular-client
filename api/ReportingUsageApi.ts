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

export class ReportingUsageApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Returns aggregated endpoint usage information by day
        * 
        * @param startDate The beginning of the range being requested, unix timestamp in seconds
        * @param endDate The ending of the range being requested, unix timestamp in seconds
        * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
        * @param method Filter for a certain endpoint method.  Must include url as well to work
        * @param url Filter for a certain endpoint.  Must include method as well to work
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUsageByDay (startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUsageInfo> {
        const localVarPath = this.basePath + '/reporting/usage/day';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByDay.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByDay.');
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

        if (method !== undefined) {
            queryParameters['method'] = method;
        }

        if (url !== undefined) {
            queryParameters['url'] = url;
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
        * Returns aggregated endpoint usage information by hour
        * 
        * @param startDate The beginning of the range being requested, unix timestamp in seconds
        * @param endDate The ending of the range being requested, unix timestamp in seconds
        * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
        * @param method Filter for a certain endpoint method.  Must include url as well to work
        * @param url Filter for a certain endpoint.  Must include method as well to work
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUsageByHour (startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUsageInfo> {
        const localVarPath = this.basePath + '/reporting/usage/hour';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByHour.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByHour.');
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

        if (method !== undefined) {
            queryParameters['method'] = method;
        }

        if (url !== undefined) {
            queryParameters['url'] = url;
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
        * Returns aggregated endpoint usage information by minute
        * 
        * @param startDate The beginning of the range being requested, unix timestamp in seconds
        * @param endDate The ending of the range being requested, unix timestamp in seconds
        * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
        * @param method Filter for a certain endpoint method.  Must include url as well to work
        * @param url Filter for a certain endpoint.  Must include method as well to work
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUsageByMinute (startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUsageInfo> {
        const localVarPath = this.basePath + '/reporting/usage/minute';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByMinute.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByMinute.');
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

        if (method !== undefined) {
            queryParameters['method'] = method;
        }

        if (url !== undefined) {
            queryParameters['url'] = url;
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
        * Returns aggregated endpoint usage information by month
        * 
        * @param startDate The beginning of the range being requested, unix timestamp in seconds
        * @param endDate The ending of the range being requested, unix timestamp in seconds
        * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
        * @param method Filter for a certain endpoint method.  Must include url as well to work
        * @param url Filter for a certain endpoint.  Must include method as well to work
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUsageByMonth (startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUsageInfo> {
        const localVarPath = this.basePath + '/reporting/usage/month';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByMonth.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByMonth.');
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

        if (method !== undefined) {
            queryParameters['method'] = method;
        }

        if (url !== undefined) {
            queryParameters['url'] = url;
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
        * Returns aggregated endpoint usage information by year
        * 
        * @param startDate The beginning of the range being requested, unix timestamp in seconds
        * @param endDate The ending of the range being requested, unix timestamp in seconds
        * @param combineEndpoints Whether to combine counts from different endpoints. Removes the url and method from the result object
        * @param method Filter for a certain endpoint method.  Must include url as well to work
        * @param url Filter for a certain endpoint.  Must include method as well to work
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUsageByYear (startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUsageInfo> {
        const localVarPath = this.basePath + '/reporting/usage/year';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByYear.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByYear.');
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

        if (method !== undefined) {
            queryParameters['method'] = method;
        }

        if (url !== undefined) {
            queryParameters['url'] = url;
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
        * Returns list of endpoints called (method and url)
        * 
        * @param startDate The beginning of the range being requested, unix timestamp in seconds
        * @param endDate The ending of the range being requested, unix timestamp in seconds
        */
    public getUsageEndpoints (startDate: number, endDate: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
        const localVarPath = this.basePath + '/reporting/usage/endpoints';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageEndpoints.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageEndpoints.');
        }
        if (startDate !== undefined) {
            queryParameters['start_date'] = startDate;
        }

        if (endDate !== undefined) {
            queryParameters['end_date'] = endDate;
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
}
