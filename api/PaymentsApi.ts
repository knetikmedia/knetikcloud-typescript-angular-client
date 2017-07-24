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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class PaymentsApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary Create a new payment method for a user
     * @param userId ID of the user for whom the payment method is being created
     * @param paymentMethod Payment method being created
     */
    public createPaymentMethod (userId: number, paymentMethod?: models.PaymentMethodResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PaymentMethodResource> {
        const localVarPath = this.basePath + '/users/{user_id}/payment-methods'
            .replace('{' + 'user_id' + '}', String(userId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling createPaymentMethod.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: paymentMethod,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Delete an existing payment method for a user
     * @param userId ID of the user for whom the payment method is being updated
     * @param id ID of the payment method being deleted
     */
    public deletePaymentMethod (userId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/users/{user_id}/payment-methods/{id}'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deletePaymentMethod.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePaymentMethod.');
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
     * 
     * @summary Get a single payment method for a user
     * @param userId ID of the user for whom the payment method is being retrieved
     * @param id ID of the payment method being retrieved
     */
    public getPaymentMethod (userId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PaymentMethodResource> {
        const localVarPath = this.basePath + '/users/{user_id}/payment-methods/{id}'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getPaymentMethod.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPaymentMethod.');
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
     * 
     * @summary Get all payment methods for a user
     * @param userId ID of the user for whom the payment methods are being retrieved
     * @param filterName Filter for payment methods whose name starts with a given string
     * @param filterPaymentType Filter for payment methods with a specific payment type
     * @param filterPaymentMethodTypeId Filter for payment methods with a specific payment method type by id
     * @param filterPaymentMethodTypeName Filter for payment methods whose payment method type name starts with a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getPaymentMethods (userId: number, filterName?: string, filterPaymentType?: string, filterPaymentMethodTypeId?: number, filterPaymentMethodTypeName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.PaymentMethodResource>> {
        const localVarPath = this.basePath + '/users/{user_id}/payment-methods'
            .replace('{' + 'user_id' + '}', String(userId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getPaymentMethods.');
        }
        if (filterName !== undefined) {
            queryParameters['filter_name'] = filterName;
        }

        if (filterPaymentType !== undefined) {
            queryParameters['filter_payment_type'] = filterPaymentType;
        }

        if (filterPaymentMethodTypeId !== undefined) {
            queryParameters['filter_payment_method_type_id'] = filterPaymentMethodTypeId;
        }

        if (filterPaymentMethodTypeName !== undefined) {
            queryParameters['filter_payment_method_type_name'] = filterPaymentMethodTypeName;
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
     * 
     * @summary Authorize payment of an invoice for later capture
     * @param request Payment authorization request
     */
    public paymentAuthorization (request?: models.PaymentAuthorizationResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PaymentAuthorizationResource> {
        const localVarPath = this.basePath + '/payment/authorizations';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Capture an existing invoice payment authorization
     * @param id ID of the payment authorization to capture
     */
    public paymentCapture (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/payment/authorizations/{id}/capture'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling paymentCapture.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
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
     * 
     * @summary Update an existing payment method for a user
     * @param userId ID of the user for whom the payment method is being updated
     * @param id ID of the payment method being updated
     * @param paymentMethod The updated payment method data
     */
    public updatePaymentMethod (userId: number, id: number, paymentMethod?: models.PaymentMethodResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PaymentMethodResource> {
        const localVarPath = this.basePath + '/users/{user_id}/payment-methods/{id}'
            .replace('{' + 'user_id' + '}', String(userId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updatePaymentMethod.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePaymentMethod.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: paymentMethod,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
