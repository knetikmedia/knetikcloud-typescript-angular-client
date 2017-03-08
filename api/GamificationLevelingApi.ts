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

export class GamificationLevelingApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Create a level schema
        * 
        * @param level The level schema definition
        */
    public createLevel (level?: models.LevelingResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.LevelingResource> {
        const localVarPath = this.basePath + '/leveling';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: level,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete a level
        * 
        * @param name The level schema name
        */
    public deleteLevel (name: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/leveling/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteLevel.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
        * Retrieve a level
        * 
        * @param name The level schema name
        */
    public getLevel (name: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.LevelingResource> {
        const localVarPath = this.basePath + '/leveling/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getLevel.');
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
        * Get the list of triggers that can be used to trigger a leveling progress update
        * 
        */
    public getLevelTriggers (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.BreTriggerResource>> {
        const localVarPath = this.basePath + '/leveling/triggers';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
        * List and search levels
        * Get a list of levels schemas with optional filtering
        * @param filterName Filter for level schemas whose name contains a given string
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getLevels (filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceLevelingResource> {
        const localVarPath = this.basePath + '/leveling';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterName !== undefined) {
            queryParameters['filter_name'] = filterName;
        }

        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
        }

        if (order !== undefined) {
            queryParameters['order'] = order;
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
        * Get a user&#39;s progress for a given level schema
        * 
        * @param userId The id of the user
        * @param name The level schema name
        */
    public getUserLevel (userId: number, name: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserLevelingResource> {
        const localVarPath = this.basePath + '/users/{user_id}/leveling/{name}'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserLevel.');
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getUserLevel.');
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
        * Get a user&#39;s progress for all level schemas
        * 
        * @param userId The id of the user
        */
    public getUserLevels (userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceUserLevelingResource> {
        const localVarPath = this.basePath + '/users/{user_id}/leveling'
            .replace('{' + 'user_id' + '}', String(userId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserLevels.');
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
        * Update a level
        * 
        * @param name The level schema name
        * @param newLevel The level schema definition
        */
    public updateLevel (name: string, newLevel?: models.LevelingResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.LevelingResource> {
        const localVarPath = this.basePath + '/leveling/{name}'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateLevel.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: newLevel,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update or create a leveling progress record for a user
        * If no progress record yet exists for the user, it will be created. Otherwise it will be updated. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
        * @param userId The id of the user
        * @param name The level schema name
        * @param progress The current progress amount
        */
    public updateUserLevel (userId: number, name: string, progress?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/users/{user_id}/leveling/{name}'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserLevel.');
        }
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateUserLevel.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: progress,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
