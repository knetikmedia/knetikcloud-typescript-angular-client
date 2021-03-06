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

import { BreTriggerResource } from '../model/breTriggerResource';
import { IntWrapper } from '../model/intWrapper';
import { LevelingResource } from '../model/levelingResource';
import { PageResourceLevelingResource } from '../model/pageResourceLevelingResource';
import { PageResourceUserLevelingResource } from '../model/pageResourceUserLevelingResource';
import { Result } from '../model/result';
import { UserLevelingResource } from '../model/userLevelingResource';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class Gamification_LevelingService {

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
     * <b>Permissions Needed:</b> LEVELING_ADMIN
     * @summary Create a level schema
     * @param level The level schema definition
     */
    public createLevel(level?: LevelingResource, extraHttpRequestParams?: any): Observable<LevelingResource> {
        return this.createLevelWithHttpInfo(level, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> LEVELING_ADMIN
     * @summary Delete a level
     * @param name The level schema name
     */
    public deleteLevel(name: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteLevelWithHttpInfo(name, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> LEVELING_USER
     * @summary Retrieve a level
     * @param name The level schema name
     */
    public getLevel(name: string, extraHttpRequestParams?: any): Observable<LevelingResource> {
        return this.getLevelWithHttpInfo(name, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> LEVELING_ADMIN
     * @summary Get the list of triggers that can be used to trigger a leveling progress update
     */
    public getLevelTriggers(extraHttpRequestParams?: any): Observable<Array<BreTriggerResource>> {
        return this.getLevelTriggersWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Get a list of levels schemas with optional filtering. <br><br><b>Permissions Needed:</b> LEVELING_USER
     * @summary List and search levels
     * @param filterName Filter for level schemas whose name contains a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getLevels(filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceLevelingResource> {
        return this.getLevelsWithHttpInfo(filterName, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> LEVELING_USER or self
     * @summary Get a user's progress for a given level schema
     * @param userId The id of the user or &#39;me&#39;
     * @param name The level schema name
     */
    public getUserLevel(userId: string, name: string, extraHttpRequestParams?: any): Observable<UserLevelingResource> {
        return this.getUserLevelWithHttpInfo(userId, name, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Filtering and sorting is based on the LevelingResource object, not the UserLevelingResource that is returned here. <br><br><b>Permissions Needed:</b> LEVELING_USER or self
     * @summary Get a user's progress for all level schemas
     * @param userId The id of the user or &#39;me&#39;
     * @param filterName Filter for level schemas whose name contains a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getUserLevels(userId: string, filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceUserLevelingResource> {
        return this.getUserLevelsWithHttpInfo(userId, filterName, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * If no progress record yet exists for the user, it will be created. Otherwise the provided value will be added to it. May be negative. If progress meets or exceeds the level's max_value it will be marked as earned and a BRE event will be triggered for the <code>BreAchievementEarnedTrigger</code>. <br><br><b>Permissions Needed:</b> LEVELING_ADMIN
     * @summary Update or create a leveling progress record for a user
     * @param userId The id of the user
     * @param name The level schema name
     * @param progress The amount of progress to add
     */
    public incrementProgress(userId: number, name: string, progress?: IntWrapper, extraHttpRequestParams?: any): Observable<{}> {
        return this.incrementProgressWithHttpInfo(userId, name, progress, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * If no progress record yet exists for the user, it will be created. Otherwise it will be updated to the provided value. If progress meets or exceeds the level's max_value it will be marked as earned and a BRE event will be triggered for the <code>BreAchievementEarnedTrigger</code>. <br><br><b>Permissions Needed:</b> LEVELING_ADMIN
     * @summary Set leveling progress for a user
     * @param userId The id of the user
     * @param name The level schema name
     * @param progress The new progress amount
     */
    public setProgress(userId: number, name: string, progress?: IntWrapper, extraHttpRequestParams?: any): Observable<{}> {
        return this.setProgressWithHttpInfo(userId, name, progress, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> LEVELING_ADMIN
     * @summary Update a level
     * @param name The level schema name
     * @param newLevel The level schema definition
     */
    public updateLevel(name: string, newLevel?: LevelingResource, extraHttpRequestParams?: any): Observable<LevelingResource> {
        return this.updateLevelWithHttpInfo(name, newLevel, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create a level schema
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param level The level schema definition
     */
    public createLevelWithHttpInfo(level?: LevelingResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/leveling';

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
            body: level == null ? '' : JSON.stringify(level), // https://github.com/angular/angular/issues/10612
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
     * Delete a level
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param name The level schema name
     */
    public deleteLevelWithHttpInfo(name: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/leveling/${name}'
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteLevel.');
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
     * Retrieve a level
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER
     * @param name The level schema name
     */
    public getLevelWithHttpInfo(name: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/leveling/${name}'
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getLevel.');
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
     * Get the list of triggers that can be used to trigger a leveling progress update
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     */
    public getLevelTriggersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/leveling/triggers';

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
     * List and search levels
     * Get a list of levels schemas with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER
     * @param filterName Filter for level schemas whose name contains a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getLevelsWithHttpInfo(filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/leveling';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (filterName !== undefined) {
            queryParameters.set('filter_name', <any>filterName);
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
     * Get a user&#39;s progress for a given level schema
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER or self
     * @param userId The id of the user or &#39;me&#39;
     * @param name The level schema name
     */
    public getUserLevelWithHttpInfo(userId: string, name: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/leveling/${name}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserLevel.');
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getUserLevel.');
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
     * Get a user&#39;s progress for all level schemas
     * Filtering and sorting is based on the LevelingResource object, not the UserLevelingResource that is returned here. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER or self
     * @param userId The id of the user or &#39;me&#39;
     * @param filterName Filter for level schemas whose name contains a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getUserLevelsWithHttpInfo(userId: string, filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/leveling'
                    .replace('${' + 'user_id' + '}', String(userId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserLevels.');
        }
        if (filterName !== undefined) {
            queryParameters.set('filter_name', <any>filterName);
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
     * Update or create a leveling progress record for a user
     * If no progress record yet exists for the user, it will be created. Otherwise the provided value will be added to it. May be negative. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param userId The id of the user
     * @param name The level schema name
     * @param progress The amount of progress to add
     */
    public incrementProgressWithHttpInfo(userId: number, name: string, progress?: IntWrapper, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/leveling/${name}/progress'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling incrementProgress.');
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling incrementProgress.');
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

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: progress == null ? '' : JSON.stringify(progress), // https://github.com/angular/angular/issues/10612
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
     * Set leveling progress for a user
     * If no progress record yet exists for the user, it will be created. Otherwise it will be updated to the provided value. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param userId The id of the user
     * @param name The level schema name
     * @param progress The new progress amount
     */
    public setProgressWithHttpInfo(userId: number, name: string, progress?: IntWrapper, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/leveling/${name}/progress'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setProgress.');
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling setProgress.');
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

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: progress == null ? '' : JSON.stringify(progress), // https://github.com/angular/angular/issues/10612
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
     * Update a level
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param name The level schema name
     * @param newLevel The level schema definition
     */
    public updateLevelWithHttpInfo(name: string, newLevel?: LevelingResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/leveling/${name}'
                    .replace('${' + 'name' + '}', String(name));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateLevel.');
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

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: newLevel == null ? '' : JSON.stringify(newLevel), // https://github.com/angular/angular/issues/10612
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
