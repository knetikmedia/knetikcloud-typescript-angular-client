/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class UtilBatchApi {
        protected basePath = 'https://localhost:8080/';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath !== undefined) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * Request to run API call given the method, content type, path url, and body of request
         * 
         * @param batch The batch object
         */
        public getBatchPOSTUsingPOST (batch?: Batch, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/batch';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: batch,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}
