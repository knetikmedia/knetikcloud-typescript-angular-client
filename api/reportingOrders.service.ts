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

import { PageResourceAggregateInvoiceReportResource } from '../model/pageResourceAggregateInvoiceReportResource';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReportingOrdersService {

    protected basePath = 'https://sandbox.knetikcloud.com';
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
     * @summary Retrieve invoice counts aggregated by time ranges
     * @param currencyCode The code for a currency to get sales data for
     * @param granularity The time duration to aggregate by
     * @param filterPaymentStatus A payment status to filter results by, can be a comma separated list
     * @param filterFulfillmentStatus An invoice fulfillment status to filter results by, can be a comma separated list
     * @param startDate The start of the time range to return, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to return, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     */
    public getInvoiceReports(currencyCode: string, granularity?: string, filterPaymentStatus?: string, filterFulfillmentStatus?: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceAggregateInvoiceReportResource> {
        return this.getInvoiceReportsWithHttpInfo(currencyCode, granularity, filterPaymentStatus, filterFulfillmentStatus, startDate, endDate, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Retrieve invoice counts aggregated by time ranges
     * 
     * @param currencyCode The code for a currency to get sales data for
     * @param granularity The time duration to aggregate by
     * @param filterPaymentStatus A payment status to filter results by, can be a comma separated list
     * @param filterFulfillmentStatus An invoice fulfillment status to filter results by, can be a comma separated list
     * @param startDate The start of the time range to return, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to return, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     */
    public getInvoiceReportsWithHttpInfo(currencyCode: string, granularity?: string, filterPaymentStatus?: string, filterFulfillmentStatus?: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/orders/count/${currency_code}'
                    .replace('${' + 'currency_code' + '}', String(currencyCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling getInvoiceReports.');
        }
        if (granularity !== undefined) {
            queryParameters.set('granularity', <any>granularity);
        }

        if (filterPaymentStatus !== undefined) {
            queryParameters.set('filter_payment_status', <any>filterPaymentStatus);
        }

        if (filterFulfillmentStatus !== undefined) {
            queryParameters.set('filter_fulfillment_status', <any>filterFulfillmentStatus);
        }

        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
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
