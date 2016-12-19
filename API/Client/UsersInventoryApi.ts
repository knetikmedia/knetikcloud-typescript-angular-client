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

    export class UsersInventoryApi {
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
         * Adds an item to the user inventory
         * The inventory is fulfilled asynchronously UNLESS the invoice is explicitely skipped. Depending on the use case, it might require the client to verify that the entitlement was added after the fact or configure a BRE rule to get a notification in real time
         * @param id The id of the user
         * @param userInventoryAddRequest The user inventory add request object
         */
        public addItemUsingPOST1 (id: number, userInventoryAddRequest?: UserInventoryAddRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<InvoiceResource> {
            const localVarPath = this.basePath + '/users/{id}/inventory'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addItemUsingPOST1.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: userInventoryAddRequest,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Create an entitlement item
         * 
         * @param entitlementItem The entitlement item object
         */
        public createItemUsingPOST (entitlementItem?: EntitlementItem, extraHttpRequestParams?: any ) : ng.IHttpPromise<EntitlementItem> {
            const localVarPath = this.basePath + '/entitlements';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: entitlementItem,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Create an entitlement template
         * Entitlement templates define a type of entitlement and the properties they have
         * @param template The entitlement template to be created
         */
        public createTemplateUsingPOST3 (template?: ItemTemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<ItemTemplateResource> {
            const localVarPath = this.basePath + '/entitlements/templates';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: template,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete an entitlement template
         * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
         * @param id The id of the template
         * @param cascade The value needed to delete used templates
         */
        public deleteEntitlementTemplateUsingDELETE (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/entitlements/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteEntitlementTemplateUsingDELETE.');
            }
            if (cascade !== undefined) {
                queryParameters['cascade'] = cascade;
            }

            let httpRequestParams: any = {
                method: 'DELETE',
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
         * Delete an entitlement item
         * 
         * @param entitlementId The id of the entitlement
         */
        public deleteItemUsingDELETE (entitlementId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/entitlements/{entitlement_id}'
                .replace('{' + 'entitlement_id' + '}', String(entitlementId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'entitlementId' is not null or undefined
            if (entitlementId === null || entitlementId === undefined) {
                throw new Error('Required parameter entitlementId was null or undefined when calling deleteItemUsingDELETE.');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
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
         * Check for access to an item without consuming
         * Useful for pre-check and accounts for all various buisness rules
         * @param userId The id of the user to check for or &#39;me&#39; for logged in user
         * @param itemId The id of the item
         * @param sku The specific sku of an entitlement list addition to check entitlement for. This is of very limited and specific use and should generally be left out
         */
        public entitlementCheckUsingGET (userId: string, itemId: number, sku?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/entitlements/{item_id}/check'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'item_id' + '}', String(itemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling entitlementCheckUsingGET.');
            }
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling entitlementCheckUsingGET.');
            }
            if (sku !== undefined) {
                queryParameters['sku'] = sku;
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
         * Use an item
         * 
         * @param userId The id of the user to check for or &#39;me&#39; for logged in user
         * @param itemId The id of the item
         * @param sku The specific sku of an entitlement_list addition to check entitlement for. This is of very limited and specific use and should generally be left out
         * @param info Any additional info to add to the log about this use
         */
        public entitlementUseUsingPOST (userId: string, itemId: number, sku?: string, info?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/entitlements/{item_id}/use'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'item_id' + '}', String(itemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling entitlementUseUsingPOST.');
            }
            // verify required parameter 'itemId' is not null or undefined
            if (itemId === null || itemId === undefined) {
                throw new Error('Required parameter itemId was null or undefined when calling entitlementUseUsingPOST.');
            }
            if (sku !== undefined) {
                queryParameters['sku'] = sku;
            }

            if (info !== undefined) {
                queryParameters['info'] = info;
            }

            let httpRequestParams: any = {
                method: 'POST',
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
         * List and search entitlement items
         * 
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getCurrenciesUsingGET1 (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageEntitlementItem> {
            const localVarPath = this.basePath + '/entitlements';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
            }

            if (order !== undefined) {
                queryParameters['order'] = order;
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
         * Get a single entitlement template
         * 
         * @param id The id of the template
         */
        public getEntitlementTemplateUsingGET (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<ItemTemplateResource> {
            const localVarPath = this.basePath + '/entitlements/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getEntitlementTemplateUsingGET.');
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
         * List and search entitlement templates
         * 
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getEntitlementTemplatesUsingGET (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageItemTemplateResource> {
            const localVarPath = this.basePath + '/entitlements/templates';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
            }

            if (order !== undefined) {
                queryParameters['order'] = order;
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
         * List the user inventory entries for all users
         * 
         * @param inactive If true, accepts inactive user inventories
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param filterItemName Filter by items whose name starts with a string
         * @param filterUsername Filter by entries owned by the user with the specified username
         * @param filterGroup Filter by entries owned by the users in a given group, by unique name
         * @param filterDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE).
         */
        public getInventoryListUsingGET (inactive?: boolean, size?: number, page?: number, filterItemName?: string, filterUsername?: string, filterGroup?: string, filterDate?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageUserInventoryResource> {
            const localVarPath = this.basePath + '/inventories';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (inactive !== undefined) {
                queryParameters['inactive'] = inactive;
            }

            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
            }

            if (filterItemName !== undefined) {
                queryParameters['filter_item_name'] = filterItemName;
            }

            if (filterUsername !== undefined) {
                queryParameters['filter_username'] = filterUsername;
            }

            if (filterGroup !== undefined) {
                queryParameters['filter_group'] = filterGroup;
            }

            if (filterDate !== undefined) {
                queryParameters['filter_date'] = filterDate;
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
         * Get an inventory entry
         * 
         * @param userId The id of the inventory owner or &#39;me&#39; for the logged in user
         * @param id The id of the user inventory
         */
        public getInventoryUsingGET (userId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<UserInventoryResource> {
            const localVarPath = this.basePath + '/users/{user_id}/inventory/{id}'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getInventoryUsingGET.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getInventoryUsingGET.');
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
         * Get a single entitlement item
         * 
         * @param entitlementId The id of the entitlement
         */
        public getItemUsingGET (entitlementId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<EntitlementItem> {
            const localVarPath = this.basePath + '/entitlements/{entitlement_id}'
                .replace('{' + 'entitlement_id' + '}', String(entitlementId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'entitlementId' is not null or undefined
            if (entitlementId === null || entitlementId === undefined) {
                throw new Error('Required parameter entitlementId was null or undefined when calling getItemUsingGET.');
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
         * List the user inventory entries for a given user
         * 
         * @param id The id of the user
         * @param inactive If true, accepts inactive user inventories
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param filterItemName Filter by items whose name starts with a string
         * @param filterMinDate Filter for inventory added after the specified date, unix timestamp in seconds
         * @param filterMaxDate Filter for inventory added before the specified date, unix timestamp in seconds
         */
        public getUserInventoryListUsingGET (id: number, inactive?: boolean, size?: number, page?: number, filterItemName?: string, filterMinDate?: number, filterMaxDate?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageUserInventoryResource> {
            const localVarPath = this.basePath + '/users/{id}/inventory'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getUserInventoryListUsingGET.');
            }
            if (inactive !== undefined) {
                queryParameters['inactive'] = inactive;
            }

            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
            }

            if (filterItemName !== undefined) {
                queryParameters['filter_item_name'] = filterItemName;
            }

            if (filterMinDate !== undefined) {
                queryParameters['filter_min_date'] = filterMinDate;
            }

            if (filterMaxDate !== undefined) {
                queryParameters['filter_max_date'] = filterMaxDate;
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
         * List the log entries for this inventory entry.
         * 
         * @param userId The id of the inventory owner or &#39;me&#39; for the logged in user
         * @param id The id of the user inventory
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         */
        public getUserInventoryLogUsingGET (userId: string, id: number, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageUserItemLogResource> {
            const localVarPath = this.basePath + '/users/{user_id}/inventory/{id}/log'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getUserInventoryLogUsingGET.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getUserInventoryLogUsingGET.');
            }
            if (size !== undefined) {
                queryParameters['size'] = size;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
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
         * Update an entitlement item
         * 
         * @param entitlementId The id of the entitlement
         * @param entitlementItem The entitlement item object
         */
        public updateItemUsingPUT1 (entitlementId: number, entitlementItem?: EntitlementItem, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/entitlements/{entitlement_id}'
                .replace('{' + 'entitlement_id' + '}', String(entitlementId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'entitlementId' is not null or undefined
            if (entitlementId === null || entitlementId === undefined) {
                throw new Error('Required parameter entitlementId was null or undefined when calling updateItemUsingPUT1.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: entitlementItem,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Update an entitlement template
         * 
         * @param id The id of the template
         * @param template The updated template
         */
        public updateTemplateUsingPUT3 (id: string, template?: ItemTemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/entitlements/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateTemplateUsingPUT3.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: template,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set the behavior data for an inventory entry
         * 
         * @param userId The id of the user
         * @param id The id of the user inventory
         * @param data The data map
         */
        public updateUserInventoryBehaviorDataUsingPUT (userId: number, id: number, data?: any, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/inventory/{id}/behavior-data'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling updateUserInventoryBehaviorDataUsingPUT.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateUserInventoryBehaviorDataUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: data,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set the expiration date
         * Will change the current grace period for a subscription but not the bill date (possibly even ending before having the chance to re-bill)
         * @param userId user_id
         * @param id The id of the user inventory
         * @param timestamp The new expiration date as a unix timestamp in seconds. May be null (no body).
         */
        public updateUserInventoryExpiresUsingPUT (userId: number, id: number, timestamp?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/inventory/{id}/expires'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling updateUserInventoryExpiresUsingPUT.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateUserInventoryExpiresUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: timestamp,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Set the status for an inventory entry
         * 
         * @param userId The id of the user
         * @param id The id of the user inventory
         * @param inventoryStatus The inventory status object
         */
        public updateUserInventoryStatusUsingPUT (userId: number, id: number, inventoryStatus?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/inventory/{id}/status'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling updateUserInventoryStatusUsingPUT.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateUserInventoryStatusUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: inventoryStatus,
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
