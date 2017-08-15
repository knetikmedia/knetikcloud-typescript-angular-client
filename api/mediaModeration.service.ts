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

import { FlagReportResource } from '../model/flagReportResource';
import { PageResourceFlagReportResource } from '../model/pageResourceFlagReportResource';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MediaModerationService {

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
     * @summary Get a flag report
     * @param id The flag report id
     */
    public getModerationReport(id: number, extraHttpRequestParams?: any): Observable<FlagReportResource> {
        return this.getModerationReportWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Context can be either a free-form string or a pre-defined context name
     * @summary Returns a page of flag reports
     * @param excludeResolved Ignore resolved context
     * @param filterContext Filter by moderation context
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getModerationReports(excludeResolved?: boolean, filterContext?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceFlagReportResource> {
        return this.getModerationReportsWithHttpInfo(excludeResolved, filterContext, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of 'banned' you will need to pass the reason.
     * @summary Update a flag report
     * @param id The flag report id
     * @param flagReportResource The new flag report
     */
    public updateModerationReport(id: number, flagReportResource?: FlagReportResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateModerationReportWithHttpInfo(id, flagReportResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get a flag report
     * 
     * @param id The flag report id
     */
    public getModerationReportWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/moderation/reports/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getModerationReport.');
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

    /**
     * Returns a page of flag reports
     * Context can be either a free-form string or a pre-defined context name
     * @param excludeResolved Ignore resolved context
     * @param filterContext Filter by moderation context
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getModerationReportsWithHttpInfo(excludeResolved?: boolean, filterContext?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/moderation/reports';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (excludeResolved !== undefined) {
            queryParameters.set('exclude_resolved', <any>excludeResolved);
        }

        if (filterContext !== undefined) {
            queryParameters.set('filter_context', <any>filterContext);
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

    /**
     * Update a flag report
     * Lets you set the resolution of a report. Resolution types is {banned,ignore} in case of &#39;banned&#39; you will need to pass the reason.
     * @param id The flag report id
     * @param flagReportResource The new flag report
     */
    public updateModerationReportWithHttpInfo(id: number, flagReportResource?: FlagReportResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/moderation/reports/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateModerationReport.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: flagReportResource == null ? '' : JSON.stringify(flagReportResource), // https://github.com/angular/angular/issues/10612
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
