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

    export class UsersFriendshipsApi {
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
         * Add a friend
         * As a user, either creates or confirm a pending request. As an admin, call this endpoint twice while inverting the IDs to create a confirmed friendship.
         * @param userId The id of the user or &#39;me&#39; if logged in
         * @param id The id of the user to befriend
         */
        public addFriendUsingPOST (userId: string, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/friends/{id}'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling addFriendUsingPOST.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addFriendUsingPOST.');
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
         * Redeem friendship token
         * Immediately connects the requested user with the user mapped by the provided invite token
         * @param userId The id of the user or &#39;me&#39; if logged in
         * @param token The invite token
         */
        public connectUsingTokenUsingPOST (userId: string, token?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/friends/tokens'
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling connectUsingTokenUsingPOST.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: token,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Get friends list
         * 
         * @param userId The id of the user or &#39;me&#39;
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getFriendsUsingGET (userId: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageResourceSimpleUserResource> {
            const localVarPath = this.basePath + '/users/{user_id}/friends'
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getFriendsUsingGET.');
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
         * Returns the invite token
         * This is a unique invite token that allows direct connection to the request user.  Exposing that token presents privacy issues if the token is leaked. Use friend request flow instead if confirmation is required
         * @param userId The id of the user or &#39;me&#39; if logged in
         */
        public getInviteTokenUsingGET (userId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/users/{user_id}/invite-token'
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getInviteTokenUsingGET.');
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
         * Get pending invites
         * Invites that the specified user received
         * @param userId The id of the user or &#39;me&#39;
         * @param size The number of objects returned per page
         * @param page The number of the page returned, starting with 1
         * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
         */
        public getInvitesUsingGET (userId: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<PageResourceSimpleUserResource> {
            const localVarPath = this.basePath + '/users/{user_id}/invites'
                .replace('{' + 'user_id' + '}', String(userId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling getInvitesUsingGET.');
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
         * Remove or decline a friend
         * 
         * @param userId The id of the user or &#39;me&#39; if logged in
         * @param id The id of the user to befriend
         */
        public removeFriendUsingDELETE (userId: string, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/users/{user_id}/friends/{id}'
                .replace('{' + 'user_id' + '}', String(userId))
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new Error('Required parameter userId was null or undefined when calling removeFriendUsingDELETE.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling removeFriendUsingDELETE.');
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
    }
}
