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

    export class UsersApi {
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
         * Add a tag to a user
         * 
         * @param userId The id of the user
         * @param tag tag
         */
        public addTagUsingPOST1 (userId: number, tag: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/tags'
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling addTagUsingPOST1.');
            }
            // verify required parameter 'tag' is not null or undefined
            if (tag === null || tag === undefined) {
                throw new Error('Required parameter tag was null or undefined when calling addTagUsingPOST1.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: tag,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Create a user template
         * User Templates define a type of user and the properties they have
         * @param userTemplateResource The user template resource object
         */
        public createUserTemplateUsingPOST (userTemplateResource?: TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<TemplateResource> {
            const localVarPath = this.basePath + '/users/templates';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: userTemplateResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete a user template
         * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
         * @param id The id of the template
         * @param cascade The value needed to delete used templates
         */
        public deleteUserTemplateUsingDELETE (id: string, cascade?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteUserTemplateUsingDELETE.');
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
         * Choose a new password after a reset
         * Finish resetting a user&#39;s password using the secret provided from the password-reset endpoint.  Password should be in plain text and will be encrypted on receipt. Use SSL for security.
         * @param id The id of the user
         * @param newPasswordRequest The new password request object
         */
        public doPasswordResetUsingPUT (id: number, newPasswordRequest?: NewPasswordRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{id}/password-reset'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling doPasswordResetUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: newPasswordRequest,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * List tags for a user
         * 
         * @param userId The id of the user
         */
        public getTagsUsingGET3 (userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
            const localVarPath = this.basePath + '/users/{user_id}/tags'
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getTagsUsingGET3.');
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
         * Get a single user template
         * 
         * @param id The id of the template
         */
        public getUserTemplateUsingGET (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<TemplateResource> {
            const localVarPath = this.basePath + '/users/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getUserTemplateUsingGET.');
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
         * List and search user templates
         * 
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getUserTemplatesUsingGET (size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageTemplateResource> {
            const localVarPath = this.basePath + '/users/templates';

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
         * Get a single user
         * Additional private info is included as USERS_ADMIN
         * @param id The id of the user or &#39;me&#39;
         */
        public getUserUsingGET (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<UserResource> {
            const localVarPath = this.basePath + '/users/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getUserUsingGET.');
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
         * List and search users
         * Additional private info is included as USERS_ADMIN
         * @param filterRole Filter for users whose roles has the provided role
         * @param filterDisplayname Filter for users whose display name starts with provided string.
         * @param filterEmail Filter for users whose email starts with provided string. Requires USERS_ADMIN permission
         * @param filterFirstname Filter for users whose first name starts with provided string. Requires USERS_ADMIN permission
         * @param filterFullname Filter for users whose full name starts with provided string. Requires USERS_ADMIN permission
         * @param filterLastname Filter for users whose last name starts with provided string. Requires USERS_ADMIN permission
         * @param filterUsername Filter for users whose username starts with the provided string. Requires USERS_ADMIN permission
         * @param filterTag Filter for users who have a given tag
         * @param filterGroup Filter for users in a given group, by unique name
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getUsersUsingGET (filterRole?: string, filterDisplayname?: string, filterEmail?: string, filterFirstname?: string, filterFullname?: string, filterLastname?: string, filterUsername?: string, filterTag?: string, filterGroup?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageUserBaseResource> {
            const localVarPath = this.basePath + '/users';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (filterRole !== undefined) {
                queryParameters['filter_role'] = filterRole;
            }

            if (filterDisplayname !== undefined) {
                queryParameters['filter_displayname'] = filterDisplayname;
            }

            if (filterEmail !== undefined) {
                queryParameters['filter_email'] = filterEmail;
            }

            if (filterFirstname !== undefined) {
                queryParameters['filter_firstname'] = filterFirstname;
            }

            if (filterFullname !== undefined) {
                queryParameters['filter_fullname'] = filterFullname;
            }

            if (filterLastname !== undefined) {
                queryParameters['filter_lastname'] = filterLastname;
            }

            if (filterUsername !== undefined) {
                queryParameters['filter_username'] = filterUsername;
            }

            if (filterTag !== undefined) {
                queryParameters['filter_tag'] = filterTag;
            }

            if (filterGroup !== undefined) {
                queryParameters['filter_group'] = filterGroup;
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
         * Reset a user&#39;s password
         * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code; this can be routed to the user as needed and submitted to the &#39;choose a new password&#39; endpoint.
         * @param id The id of the user
         */
        public initiatePasswordResetUsingPOST (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{id}/password-reset'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling initiatePasswordResetUsingPOST.');
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
         * Register a new user
         * Password should be in plain text and will be encrypted on receipt. Use SSL for security
         * @param userResource The user resource object
         */
        public registerUserUsingPOST (userResource?: UserResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<UserResource> {
            const localVarPath = this.basePath + '/users';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: userResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Remove a tag from a user
         * 
         * @param userId The id of the user
         * @param tag The tag to remove
         */
        public removeTagUsingDELETE1 (userId: number, tag: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/tags/{tag}'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'tag' + '}', String(tag));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling removeTagUsingDELETE1.');
            }
            // verify required parameter 'tag' is not null or undefined
            if (tag === null || tag === undefined) {
                throw new Error('Required parameter tag was null or undefined when calling removeTagUsingDELETE1.');
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
         * Set a user&#39;s password
         * Password should be in plain text and will be encrypted on receipt. Use SSL for security.
         * @param id The id of the user
         * @param password The new plain text password
         */
        public setPasswordUsingPUT (id: number, password?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{id}/password'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling setPasswordUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: password,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Update a user template
         * 
         * @param id The id of the template
         * @param userTemplateResource The user template resource object
         */
        public updateUserTemplateUsingPUT (id: string, userTemplateResource?: TemplateResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/templates/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateUserTemplateUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: userTemplateResource,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Update a user&#39;s info
         * Password will not be edited on this endpoint, use password specific endpoints.
         * @param id The id of the user or &#39;me&#39;
         * @param userResource The user resource object
         */
        public updateUserUsingPUT (id: string, userResource?: UserResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateUserUsingPUT.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: userResource,
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
