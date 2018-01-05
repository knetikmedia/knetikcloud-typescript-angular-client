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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { PageResourceUsageInfo } from '../model/pageResourceUsageInfo';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReportingUsageService {

    protected basePath = 'https://devsandbox.knetikcloud.com';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @summary Returns aggregated endpoint usage information by day
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param method Filter for a certain endpoint method.  Must include url as well to work
     * @param url Filter for a certain endpoint.  Must include method as well to work
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByDay(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceUsageInfo> {
        return this.getUsageByDayWithHttpInfo(startDate, endDate, combineEndpoints, method, url, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Returns aggregated endpoint usage information by hour
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param method Filter for a certain endpoint method.  Must include url as well to work
     * @param url Filter for a certain endpoint.  Must include method as well to work
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByHour(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceUsageInfo> {
        return this.getUsageByHourWithHttpInfo(startDate, endDate, combineEndpoints, method, url, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Returns aggregated endpoint usage information by minute
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param method Filter for a certain endpoint method.  Must include url as well to work
     * @param url Filter for a certain endpoint.  Must include method as well to work
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByMinute(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceUsageInfo> {
        return this.getUsageByMinuteWithHttpInfo(startDate, endDate, combineEndpoints, method, url, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Returns aggregated endpoint usage information by month
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param method Filter for a certain endpoint method.  Must include url as well to work
     * @param url Filter for a certain endpoint.  Must include method as well to work
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByMonth(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceUsageInfo> {
        return this.getUsageByMonthWithHttpInfo(startDate, endDate, combineEndpoints, method, url, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Returns aggregated endpoint usage information by year
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoints. Removes the url and method from the result object
     * @param method Filter for a certain endpoint method.  Must include url as well to work
     * @param url Filter for a certain endpoint.  Must include method as well to work
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByYear(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceUsageInfo> {
        return this.getUsageByYearWithHttpInfo(startDate, endDate, combineEndpoints, method, url, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Returns list of endpoints called (method and url)
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     */
    public getUsageEndpoints(startDate: number, endDate: number, extraHttpRequestParams?: any): Observable<Array<string>> {
        return this.getUsageEndpointsWithHttpInfo(startDate, endDate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
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
    public getUsageByDayWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/usage/day';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByDay.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByDay.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }

        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
        }

        if (method !== undefined) {
            queryParameters.set('method', <any>method);
        }

        if (url !== undefined) {
            queryParameters.set('url', <any>url);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
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
    public getUsageByHourWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/usage/hour';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByHour.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByHour.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }

        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
        }

        if (method !== undefined) {
            queryParameters.set('method', <any>method);
        }

        if (url !== undefined) {
            queryParameters.set('url', <any>url);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
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
    public getUsageByMinuteWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/usage/minute';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByMinute.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByMinute.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }

        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
        }

        if (method !== undefined) {
            queryParameters.set('method', <any>method);
        }

        if (url !== undefined) {
            queryParameters.set('url', <any>url);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
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
    public getUsageByMonthWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/usage/month';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByMonth.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByMonth.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }

        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
        }

        if (method !== undefined) {
            queryParameters.set('method', <any>method);
        }

        if (url !== undefined) {
            queryParameters.set('url', <any>url);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
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
    public getUsageByYearWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, method?: string, url?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/usage/year';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByYear.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByYear.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }

        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
        }

        if (method !== undefined) {
            queryParameters.set('method', <any>method);
        }

        if (url !== undefined) {
            queryParameters.set('url', <any>url);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Returns list of endpoints called (method and url)
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     */
    public getUsageEndpointsWithHttpInfo(startDate: number, endDate: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/usage/endpoints';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageEndpoints.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageEndpoints.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
