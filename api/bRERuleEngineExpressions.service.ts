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

import { ExpressionResource } from '../model/expressionResource';
import { Result } from '../model/result';
import { StringWrapper } from '../model/stringWrapper';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BRERuleEngineExpressionsService {

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
     * <b>Permissions Needed:</b> BRE_RULE_ENGINE_EXPRESSIONS_USER
     * @summary Lookup a specific expression
     * @param type Specifiy the type of expression as returned by the listing endpoint
     */
    public getBREExpression(type: string, extraHttpRequestParams?: any): Observable<ExpressionResource> {
        return this.getBREExpressionWithHttpInfo(type, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Each resource contains a type and a definition that are read-only, all the other fields must be provided when using the expression in a rule. <br><br><b>Permissions Needed:</b> BRE_RULE_ENGINE_EXPRESSIONS_USER
     * @summary Get a list of supported expressions to use in conditions or actions
     * @param filterTypeGroup Filter for expressions by type group
     */
    public getBREExpressions(filterTypeGroup?: string, extraHttpRequestParams?: any): Observable<Array<ExpressionResource>> {
        return this.getBREExpressionsWithHttpInfo(filterTypeGroup, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> BRE_RULE_ENGINE_EXPRESSIONS_USER
     * @summary Returns the textual representation of an expression
     * @param expression The expression resource to be converted
     */
    public getExpressionAsText(expression?: ExpressionResource, extraHttpRequestParams?: any): Observable<StringWrapper> {
        return this.getExpressionAsTextWithHttpInfo(expression, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Lookup a specific expression
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EXPRESSIONS_USER
     * @param type Specifiy the type of expression as returned by the listing endpoint
     */
    public getBREExpressionWithHttpInfo(type: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/bre/expressions/${type}'
                    .replace('${' + 'type' + '}', String(type));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling getBREExpression.');
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
     * Get a list of supported expressions to use in conditions or actions
     * Each resource contains a type and a definition that are read-only, all the other fields must be provided when using the expression in a rule. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EXPRESSIONS_USER
     * @param filterTypeGroup Filter for expressions by type group
     */
    public getBREExpressionsWithHttpInfo(filterTypeGroup?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/bre/expressions';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (filterTypeGroup !== undefined) {
            queryParameters.set('filter_type_group', <any>filterTypeGroup);
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
     * Returns the textual representation of an expression
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EXPRESSIONS_USER
     * @param expression The expression resource to be converted
     */
    public getExpressionAsTextWithHttpInfo(expression?: ExpressionResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/bre/expressions';

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
            body: expression == null ? '' : JSON.stringify(expression), // https://github.com/angular/angular/issues/10612
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
