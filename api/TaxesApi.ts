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

export class TaxesApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Create a country tax
        * 
        * @param taxResource The tax object
        */
    public createCountryTax (taxResource?: models.CountryTaxResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CountryTaxResource> {
        const localVarPath = this.basePath + '/tax/countries';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: taxResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a state tax
        * 
        * @param countryCodeIso3 The iso3 code of the country
        * @param taxResource The tax object
        */
    public createStateTax (countryCodeIso3: string, taxResource?: models.StateTaxResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StateTaxResource> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}/states'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling createStateTax.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: taxResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Delete an existing tax
        * 
        * @param countryCodeIso3 The iso3 code of the country
        */
    public deleteCountryTax (countryCodeIso3: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling deleteCountryTax.');
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
        * Delete an existing state tax
        * 
        * @param countryCodeIso3 The iso3 code of the country
        * @param stateCode The code of the state
        */
    public deleteStateTax (countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}/states/{state_code}'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3))
            .replace('{' + 'state_code' + '}', String(stateCode));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling deleteStateTax.');
        }
        // verify required parameter 'stateCode' is not null or undefined
        if (stateCode === null || stateCode === undefined) {
            throw new Error('Required parameter stateCode was null or undefined when calling deleteStateTax.');
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
        * Get a single tax
        * 
        * @param countryCodeIso3 The iso3 code of the country
        */
    public getCountryTax (countryCodeIso3: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CountryTaxResource> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getCountryTax.');
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
        * List and search taxes
        * Get a list of taxes
        * @param size The number of objects returned per page
        * @param page The number of the page returned
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getCountryTaxes (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceCountryTaxResource> {
        const localVarPath = this.basePath + '/tax/countries';

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
        * Get a single state tax
        * 
        * @param countryCodeIso3 The iso3 code of the country
        * @param stateCode The code of the state
        */
    public getStateTax (countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StateTaxResource> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}/states/{state_code}'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3))
            .replace('{' + 'state_code' + '}', String(stateCode));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getStateTax.');
        }
        // verify required parameter 'stateCode' is not null or undefined
        if (stateCode === null || stateCode === undefined) {
            throw new Error('Required parameter stateCode was null or undefined when calling getStateTax.');
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
        * List and search taxes across all countries
        * Get a list of taxes
        * @param size The number of objects returned per page
        * @param page The number of the page returned
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getStateTaxesForCountries (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceStateTaxResource> {
        const localVarPath = this.basePath + '/tax/states';

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
        * List and search taxes within a country
        * Get a list of taxes
        * @param countryCodeIso3 The iso3 code of the country
        * @param size The number of objects returned per page
        * @param page The number of the page returned
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getStateTaxesForCountry (countryCodeIso3: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceStateTaxResource> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}/states'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getStateTaxesForCountry.');
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
        * Create or update a tax
        * 
        * @param countryCodeIso3 The iso3 code of the country
        * @param taxResource The tax object
        */
    public updateCountryTax (countryCodeIso3: string, taxResource?: models.CountryTaxResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CountryTaxResource> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling updateCountryTax.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: taxResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create or update a state tax
        * 
        * @param countryCodeIso3 The iso3 code of the country
        * @param stateCode The code of the state
        * @param taxResource The tax object
        */
    public updateStateTax (countryCodeIso3: string, stateCode: string, taxResource?: models.StateTaxResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.StateTaxResource> {
        const localVarPath = this.basePath + '/tax/countries/{country_code_iso3}/states/{state_code}'
            .replace('{' + 'country_code_iso3' + '}', String(countryCodeIso3))
            .replace('{' + 'state_code' + '}', String(stateCode));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling updateStateTax.');
        }
        // verify required parameter 'stateCode' is not null or undefined
        if (stateCode === null || stateCode === undefined) {
            throw new Error('Required parameter stateCode was null or undefined when calling updateStateTax.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: taxResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
