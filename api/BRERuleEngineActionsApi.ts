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

export class BRERuleEngineActionsApi {
    protected basePath = 'https://localhost:8080/';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get a list of available actions
        * 
        * @param filterCategory Filter for actions that are within a specific category
        * @param filterName Filter for actions that have names containing the given string
        */
    public getBREActions (filterCategory?: string, filterName?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ActionResource>> {
        const localVarPath = this.basePath + '/bre/actions';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filterCategory !== undefined) {
            queryParameters['filter_category'] = filterCategory;
        }

        if (filterName !== undefined) {
            queryParameters['filter_name'] = filterName;
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
