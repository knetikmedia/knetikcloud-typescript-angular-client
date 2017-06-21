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

export class BRERuleEngineVariablesApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get a list of variable types available
        * Types include integer, string, user and invoice. These are used to qualify trigger parameters and action variables with strong typing.
        */
    public getBREVariableTypes (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.VariableTypeResource>> {
        const localVarPath = this.basePath + '/bre/variable-types';

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
        * List valid values for a type
        * Used to lookup users to fill in a user constant for example. Only types marked as enumerable are suppoorted here.
        * @param name The name of the type
        * @param filterName Filter results by those with names starting with this string
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getBREVariableValues (name: string, filterName?: string, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceSimpleReferenceResourceobject> {
        const localVarPath = this.basePath + '/bre/variable-types/{name}/values'
            .replace('{' + 'name' + '}', String(name));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getBREVariableValues.');
        }
        if (filterName !== undefined) {
            queryParameters['filter_name'] = filterName;
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
}
