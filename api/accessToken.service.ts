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

import { OAuth2Resource } from '../model/oAuth2Resource';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class Access_TokenService {

    protected basePath = 'https://jsapi-integration.us-east-1.elasticbeanstalk.com';
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
     * @summary Get access token
     * @param grantType Grant type
     * @param clientId The id of the client
     * @param clientSecret The secret key of the client.  Used only with a grant_type of client_credentials
     * @param username The username of the client. Used only with a grant_type of password
     * @param password The password of the client. Used only with a grant_type of password
     * @param token The 3rd party authentication token. Used only with a grant_type of facebook, google, etc (social plugins)
     * @param refreshToken The refresh token obtained during prior authentication. Used only with a grant_type of refresh_token
     */
    public getOAuthToken(grantType: string, clientId: string, clientSecret?: string, username?: string, password?: string, token?: string, refreshToken?: string, extraHttpRequestParams?: any): Observable<OAuth2Resource> {
        return this.getOAuthTokenWithHttpInfo(grantType, clientId, clientSecret, username, password, token, refreshToken, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get access token
     * 
     * @param grantType Grant type
     * @param clientId The id of the client
     * @param clientSecret The secret key of the client.  Used only with a grant_type of client_credentials
     * @param username The username of the client. Used only with a grant_type of password
     * @param password The password of the client. Used only with a grant_type of password
     * @param token The 3rd party authentication token. Used only with a grant_type of facebook, google, etc (social plugins)
     * @param refreshToken The refresh token obtained during prior authentication. Used only with a grant_type of refresh_token
     */
    public getOAuthTokenWithHttpInfo(grantType: string, clientId: string, clientSecret?: string, username?: string, password?: string, token?: string, refreshToken?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/oauth/token';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'grantType' is not null or undefined
        if (grantType === null || grantType === undefined) {
            throw new Error('Required parameter grantType was null or undefined when calling getOAuthToken.');
        }
        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling getOAuthToken.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];
        let canConsumeForm = this.canConsumeForm(consumes);
        let useForm = false;
        let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
          set(param: string, value: any): void;
        };

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

            
        if (grantType !== undefined) {
            formParams.set('grant_type', <any>grantType);
        }

        if (clientId !== undefined) {
            formParams.set('client_id', <any>clientId);
        }

        if (clientSecret !== undefined) {
            formParams.set('client_secret', <any>clientSecret);
        }

        if (username !== undefined) {
            formParams.set('username', <any>username);
        }

        if (password !== undefined) {
            formParams.set('password', <any>password);
        }

        if (token !== undefined) {
            formParams.set('token', <any>token);
        }

        if (refreshToken !== undefined) {
            formParams.set('refresh_token', <any>refreshToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: formParams.toString(),
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
