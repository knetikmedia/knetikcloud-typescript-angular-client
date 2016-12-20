/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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

    export class UsersSubscriptionsApi {
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
         * Get details about a user&#39;s subscription
         * 
         * @param userId The id of the user
         * @param inventoryId The id of the user&#39;s inventory
         */
        public getSubscriptionDetailsUsingGET (userId: number, inventoryId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<InventorySubscriptionResource> {
            const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'inventory_id' + '}', String(inventoryId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getSubscriptionDetailsUsingGET.');
            }
            // verify required parameter 'inventoryId' is not null or undefined
            if (inventoryId === null || inventoryId === undefined) {
                throw new Error('Required parameter inventoryId was null or undefined when calling getSubscriptionDetailsUsingGET.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Get details about a user&#39;s subscriptions
         * 
         * @param userId The id of the user
         */
        public getSubscriptionDetailsUsingGET1 (userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<InventorySubscriptionResource>> {
            const localVarPath = this.basePath + '/users/{user_id}/subscriptions'
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getSubscriptionDetailsUsingGET1.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Reactivate a subscription and charge fee
         * 
         * @param userId The id of the user
         * @param inventoryId The id of the user&#39;s inventory
         * @param reactivateSubscriptionRequest The reactivate subscription request object inventory
         */
        public reactivateUsingPOST (userId: number, inventoryId: number, reactivateSubscriptionRequest?: ReactivateSubscriptionRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<InvoiceResource> {
            const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/reactivate'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'inventory_id' + '}', String(inventoryId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling reactivateUsingPOST.');
            }
            // verify required parameter 'inventoryId' is not null or undefined
            if (inventoryId === null || inventoryId === undefined) {
                throw new Error('Required parameter inventoryId was null or undefined when calling reactivateUsingPOST.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: reactivateSubscriptionRequest,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set a new date to bill a subscription on
         * 
         * @param userId The id of the user
         * @param inventoryId The id of the user&#39;s inventory
         * @param billDate The new bill date. Unix timestamp in seconds
         */
        public setBillDateUsingPUT (userId: number, inventoryId: number, billDate: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/bill-date'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'inventory_id' + '}', String(inventoryId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling setBillDateUsingPUT.');
            }
            // verify required parameter 'inventoryId' is not null or undefined
            if (inventoryId === null || inventoryId === undefined) {
                throw new Error('Required parameter inventoryId was null or undefined when calling setBillDateUsingPUT.');
            }
            // verify required parameter 'billDate' is not null or undefined
            if (billDate === null || billDate === undefined) {
                throw new Error('Required parameter billDate was null or undefined when calling setBillDateUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: billDate,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set the payment method to use for a subscription
         * May send null to use floating default
         * @param userId The id of the user
         * @param inventoryId The id of the user&#39;s inventory
         * @param paymentMethodId The id of the payment method
         */
        public setPaymentMethodUsingPUT (userId: number, inventoryId: number, paymentMethodId?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/payment-method'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'inventory_id' + '}', String(inventoryId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling setPaymentMethodUsingPUT.');
            }
            // verify required parameter 'inventoryId' is not null or undefined
            if (inventoryId === null || inventoryId === undefined) {
                throw new Error('Required parameter inventoryId was null or undefined when calling setPaymentMethodUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: paymentMethodId,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set the status of a subscription
         * The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases
         * @param userId The id of the user
         * @param inventoryId The id of the user&#39;s inventory
         * @param status The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;)
         */
        public setStatusUsingPUT (userId: number, inventoryId: number, status: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/status'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'inventory_id' + '}', String(inventoryId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling setStatusUsingPUT.');
            }
            // verify required parameter 'inventoryId' is not null or undefined
            if (inventoryId === null || inventoryId === undefined) {
                throw new Error('Required parameter inventoryId was null or undefined when calling setStatusUsingPUT.');
            }
            // verify required parameter 'status' is not null or undefined
            if (status === null || status === undefined) {
                throw new Error('Required parameter status was null or undefined when calling setStatusUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: status,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set a new subscription plan for a user
         * 
         * @param userId The id of the user
         * @param inventoryId The id of the user&#39;s inventory
         * @param planId The id of the new plan. Must be from the same subscription
         */
        public setUserPlanUsingPUT (userId: number, inventoryId: number, planId?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/plan'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'inventory_id' + '}', String(inventoryId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling setUserPlanUsingPUT.');
            }
            // verify required parameter 'inventoryId' is not null or undefined
            if (inventoryId === null || inventoryId === undefined) {
                throw new Error('Required parameter inventoryId was null or undefined when calling setUserPlanUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: planId,
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
