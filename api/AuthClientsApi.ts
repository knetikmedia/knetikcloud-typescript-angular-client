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

export class AuthClientsApi {
    protected basePath = 'https://integration.knetikcloud.com/';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Create a new client
        * 
        * @param clientResource The client resource object
        */
    public createClient (clientResource?: models.ClientResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ClientResource> {
        const localVarPath = this.basePath + '/auth/clients';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: clientResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete a client
        * 
        * @param clientKey The key of the client
        */
    public deleteClient (clientKey: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/auth/clients/{client_key}'
            .replace('{' + 'client_key' + '}', String(clientKey));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'clientKey' is not null or undefined
        if (clientKey === null || clientKey === undefined) {
            throw new Error('Required parameter clientKey was null or undefined when calling deleteClient.');
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
        * Get a single client
        * 
        * @param clientKey The key of the client
        */
    public getClient (clientKey: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ClientResource> {
        const localVarPath = this.basePath + '/auth/clients/{client_key}'
            .replace('{' + 'client_key' + '}', String(clientKey));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'clientKey' is not null or undefined
        if (clientKey === null || clientKey === undefined) {
            throw new Error('Required parameter clientKey was null or undefined when calling getClient.');
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
        * List available client grant types
        * 
        */
    public getClientGrantTypes (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.GrantTypeResource>> {
        const localVarPath = this.basePath + '/auth/clients/grant-types';

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
        * List and search clients
        * 
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getClients (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceClientResource> {
        const localVarPath = this.basePath + '/auth/clients';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
        * Set grant types for a client
        * 
        * @param clientKey The key of the client
        * @param grantList A list of unique grant types
        */
    public setClientGrantTypes (clientKey: string, grantList?: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/auth/clients/{client_key}/grant-types'
            .replace('{' + 'client_key' + '}', String(clientKey));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'clientKey' is not null or undefined
        if (clientKey === null || clientKey === undefined) {
            throw new Error('Required parameter clientKey was null or undefined when calling setClientGrantTypes.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: grantList,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Set redirect uris for a client
        * 
        * @param clientKey The key of the client
        * @param redirectList A list of unique redirect uris
        */
    public setClientRedirectUris (clientKey: string, redirectList?: Array<string>, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/auth/clients/{client_key}/redirect-uris'
            .replace('{' + 'client_key' + '}', String(clientKey));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'clientKey' is not null or undefined
        if (clientKey === null || clientKey === undefined) {
            throw new Error('Required parameter clientKey was null or undefined when calling setClientRedirectUris.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: redirectList,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update a client
        * 
        * @param clientKey The key of the client
        * @param clientResource The client resource object
        */
    public updateClient (clientKey: string, clientResource?: models.ClientResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/auth/clients/{client_key}'
            .replace('{' + 'client_key' + '}', String(clientKey));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'clientKey' is not null or undefined
        if (clientKey === null || clientKey === undefined) {
            throw new Error('Required parameter clientKey was null or undefined when calling updateClient.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: clientResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
