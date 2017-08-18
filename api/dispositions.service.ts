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

import { DispositionCount } from '../model/dispositionCount';
import { DispositionResource } from '../model/dispositionResource';
import { PageResourceDispositionResource } from '../model/pageResourceDispositionResource';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DispositionsService {

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
     * @summary Add a new disposition
     * @param disposition The new disposition record
     */
    public addDisposition(disposition?: DispositionResource, extraHttpRequestParams?: any): Observable<DispositionResource> {
        return this.addDispositionWithHttpInfo(disposition, extraHttpRequestParams)
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
     * @summary Delete a disposition
     * @param id The id of the disposition record
     */
    public deleteDisposition(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteDispositionWithHttpInfo(id, extraHttpRequestParams)
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
     * @summary Returns a disposition
     * @param id The id of the disposition record
     */
    public getDisposition(id: number, extraHttpRequestParams?: any): Observable<DispositionResource> {
        return this.getDispositionWithHttpInfo(id, extraHttpRequestParams)
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
     * @summary Returns a list of disposition counts
     * @param filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     */
    public getDispositionCounts(filterContext?: string, filterOwner?: string, extraHttpRequestParams?: any): Observable<Array<DispositionCount>> {
        return this.getDispositionCountsWithHttpInfo(filterContext, filterOwner, extraHttpRequestParams)
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
     * @summary Returns a page of dispositions
     * @param filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getDispositions(filterContext?: string, filterOwner?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceDispositionResource> {
        return this.getDispositionsWithHttpInfo(filterContext, filterOwner, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Add a new disposition
     * 
     * @param disposition The new disposition record
     */
    public addDispositionWithHttpInfo(disposition?: DispositionResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dispositions';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


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

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: disposition == null ? '' : JSON.stringify(disposition), // https://github.com/angular/angular/issues/10612
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
     * Delete a disposition
     * 
     * @param id The id of the disposition record
     */
    public deleteDispositionWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dispositions/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteDisposition.');
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
            method: RequestMethod.Delete,
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
     * Returns a disposition
     * 
     * @param id The id of the disposition record
     */
    public getDispositionWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dispositions/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDisposition.');
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
     * Returns a list of disposition counts
     * 
     * @param filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     */
    public getDispositionCountsWithHttpInfo(filterContext?: string, filterOwner?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dispositions/count';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (filterContext !== undefined) {
            queryParameters.set('filter_context', <any>filterContext);
        }

        if (filterOwner !== undefined) {
            queryParameters.set('filter_owner', <any>filterOwner);
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
     * Returns a page of dispositions
     * 
     * @param filterContext Filter for dispositions within a context type (games, articles, polls, etc). Optionally with a specific id like filter_context&#x3D;video:47
     * @param filterOwner Filter for dispositions from a specific user by id or &#39;me&#39;
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getDispositionsWithHttpInfo(filterContext?: string, filterOwner?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/dispositions';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (filterContext !== undefined) {
            queryParameters.set('filter_context', <any>filterContext);
        }

        if (filterOwner !== undefined) {
            queryParameters.set('filter_owner', <any>filterOwner);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (order !== undefined) {
            queryParameters.set('order', <any>order);
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
