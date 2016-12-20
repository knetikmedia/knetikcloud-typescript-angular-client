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

    export class UsersGroupsApi {
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
         * Adds a new group in the system
         * 
         * @param groupResource The new group
         */
        public addGroupUsingPOST (groupResource?: GroupResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<GroupResource> {
            const localVarPath = this.basePath + '/users/groups';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: groupResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Adds a new member to the group
         * 
         * @param uniqueName The group unique name
         * @param username The username of a user to add to the group
         */
        public addMemberUsingPOST (uniqueName: string, username: GroupMemberResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<GroupMemberResource> {
            const localVarPath = this.basePath + '/users/groups/{unique_name}/members'
                .replace('{' + 'unique_name' + '}', String(uniqueName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'uniqueName' is not null or undefined
            if (uniqueName === null || uniqueName === undefined) {
                throw new Error('Required parameter uniqueName was null or undefined when calling addMemberUsingPOST.');
            }
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new Error('Required parameter username was null or undefined when calling addMemberUsingPOST.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: username,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Create a group template
         * Group Templates define a type of group and the properties they have
         * @param groupTemplateResource The group template resource object
         */
        public createGroupTemplateUsingPOST (groupTemplateResource?: TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<TemplateResource> {
            const localVarPath = this.basePath + '/users/groups/templates';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: groupTemplateResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete a group template
         * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
         * @param id The id of the template
         * @param cascade The value needed to delete used templates
         */
        public deleteGroupTemplateUsingDELETE (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/groups/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteGroupTemplateUsingDELETE.');
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
         * Removes a user from a group
         * 
         * @param uniqueName The group unique name
         * @param userId The id of the user to remove
         */
        public deleteGroupUsingDELETE (uniqueName: string, userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/groups/{unique_name}/members/{user_id}'
                .replace('{' + 'unique_name' + '}', String(uniqueName))
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'uniqueName' is not null or undefined
            if (uniqueName === null || uniqueName === undefined) {
                throw new Error('Required parameter uniqueName was null or undefined when calling deleteGroupUsingDELETE.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling deleteGroupUsingDELETE.');
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
         * Removes a group from the system IF no resources are attached to it
         * 
         * @param uniqueName The group unique name
         */
        public deleteGroupUsingDELETE1 (uniqueName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/groups/{unique_name}'
                .replace('{' + 'unique_name' + '}', String(uniqueName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'uniqueName' is not null or undefined
            if (uniqueName === null || uniqueName === undefined) {
                throw new Error('Required parameter uniqueName was null or undefined when calling deleteGroupUsingDELETE1.');
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
         * Get a single group template
         * 
         * @param id The id of the template
         */
        public getGroupTemplateUsingGET (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<TemplateResource> {
            const localVarPath = this.basePath + '/users/groups/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getGroupTemplateUsingGET.');
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
         * List and search group templates
         * 
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getGroupTemplatesUsingGET (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageTemplateResource> {
            const localVarPath = this.basePath + '/users/groups/templates';

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
         * Loads a specific group&#39;s details
         * 
         * @param uniqueName The group unique name
         */
        public getGroupUsingGET (uniqueName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<GroupResource> {
            const localVarPath = this.basePath + '/users/groups/{unique_name}'
                .replace('{' + 'unique_name' + '}', String(uniqueName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'uniqueName' is not null or undefined
            if (uniqueName === null || uniqueName === undefined) {
                throw new Error('Required parameter uniqueName was null or undefined when calling getGroupUsingGET.');
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
         * Lists members of the group
         * 
         * @param uniqueName The group unique name
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public searchGroupsUsingGET (uniqueName: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageGroupMemberResource> {
            const localVarPath = this.basePath + '/users/groups/{unique_name}/members'
                .replace('{' + 'unique_name' + '}', String(uniqueName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'uniqueName' is not null or undefined
            if (uniqueName === null || uniqueName === undefined) {
                throw new Error('Required parameter uniqueName was null or undefined when calling searchGroupsUsingGET.');
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
         * List and search groups
         * 
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public searchGroupsUsingGET1 (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageGroupResource> {
            const localVarPath = this.basePath + '/users/groups';

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
         * Update a group template
         * 
         * @param id The id of the template
         * @param groupTemplateResource The group template resource object
         */
        public updateGroupTemplateUsingPUT (id: string, groupTemplateResource?: TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/groups/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateGroupTemplateUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: groupTemplateResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Modifies a group&#39;s details
         * 
         * @param uniqueName The group unique name
         * @param groupResource The updated group
         */
        public updateGroupUsingPUT (uniqueName: string, groupResource?: GroupResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/groups/{unique_name}'
                .replace('{' + 'unique_name' + '}', String(uniqueName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'uniqueName' is not null or undefined
            if (uniqueName === null || uniqueName === undefined) {
                throw new Error('Required parameter uniqueName was null or undefined when calling updateGroupUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: groupResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Change a user&#39;s status
         * 
         * @param uniqueName The group unique name
         * @param userId The user id of the member to modify
         * @param status The new status for the user
         */
        public updateMemberStatusUsingPUT (uniqueName: string, userId: number, status: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/groups/{unique_name}/members/{user_id}/status'
                .replace('{' + 'unique_name' + '}', String(uniqueName))
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'uniqueName' is not null or undefined
            if (uniqueName === null || uniqueName === undefined) {
                throw new Error('Required parameter uniqueName was null or undefined when calling updateMemberStatusUsingPUT.');
            }
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling updateMemberStatusUsingPUT.');
            }
            // verify required parameter 'status' is not null or undefined
            if (status === null || status === undefined) {
                throw new Error('Required parameter status was null or undefined when calling updateMemberStatusUsingPUT.');
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
    }
}
