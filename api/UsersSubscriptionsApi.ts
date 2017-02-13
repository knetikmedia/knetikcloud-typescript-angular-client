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

export class UsersSubscriptionsApi {
    protected basePath = 'https://integration.knetikcloud.com/';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Get details about a user&#39;s subscription
        * 
        * @param userId The id of the user
        * @param inventoryId The id of the user&#39;s inventory
        */
    public getUserSubscriptionDetails (userId: number, inventoryId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InventorySubscriptionResource> {
        const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'inventory_id' + '}', String(inventoryId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserSubscriptionDetails.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling getUserSubscriptionDetails.');
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
        * Get details about a user&#39;s subscriptions
        * 
        * @param userId The id of the user
        */
    public getUsersSubscriptionDetails (userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.InventorySubscriptionResource>> {
        const localVarPath = this.basePath + '/users/{user_id}/subscriptions'
            .replace('{' + 'user_id' + '}', String(userId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUsersSubscriptionDetails.');
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
        * Reactivate a subscription and charge fee
        * 
        * @param userId The id of the user
        * @param inventoryId The id of the user&#39;s inventory
        * @param reactivateSubscriptionRequest The reactivate subscription request object inventory
        */
    public reactivateUserSubscription (userId: number, inventoryId: number, reactivateSubscriptionRequest?: models.ReactivateSubscriptionRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InvoiceResource> {
        const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/reactivate'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'inventory_id' + '}', String(inventoryId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling reactivateUserSubscription.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling reactivateUserSubscription.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: reactivateSubscriptionRequest,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
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
    public setSubscriptionBillDate (userId: number, inventoryId: number, billDate: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/bill-date'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'inventory_id' + '}', String(inventoryId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setSubscriptionBillDate.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setSubscriptionBillDate.');
        }
        // verify required parameter 'billDate' is not null or undefined
        if (billDate === null || billDate === undefined) {
            throw new Error('Required parameter billDate was null or undefined when calling setSubscriptionBillDate.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: billDate,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
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
    public setSubscriptionPaymentMethod (userId: number, inventoryId: number, paymentMethodId?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/payment-method'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'inventory_id' + '}', String(inventoryId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setSubscriptionPaymentMethod.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setSubscriptionPaymentMethod.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: paymentMethodId,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
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
    public setSubscriptionStatus (userId: number, inventoryId: number, status: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/status'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'inventory_id' + '}', String(inventoryId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setSubscriptionStatus.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setSubscriptionStatus.');
        }
        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling setSubscriptionStatus.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: status,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
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
    public setUserSubscriptionPlan (userId: number, inventoryId: number, planId?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/users/{user_id}/subscriptions/{inventory_id}/plan'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'inventory_id' + '}', String(inventoryId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setUserSubscriptionPlan.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setUserSubscriptionPlan.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: planId,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}