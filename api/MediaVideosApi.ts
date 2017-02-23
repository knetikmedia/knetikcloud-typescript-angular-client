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

export class MediaVideosApi {
    protected basePath = 'https://sandbox.knetikcloud.com/';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Adds a user to a video&#39;s whitelist
        * Whitelisted users can view video regardless of privacy setting.
        * @param id The video id
        * @param userId The user id
        */
    public addUserToVideoWhitelist (id: number, userId?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{id}/whitelist'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addUserToVideoWhitelist.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: userId,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Adds a new video in the system
        * 
        * @param videoResource The video object
        */
    public addVideo (videoResource?: models.VideoResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.VideoResource> {
        const localVarPath = this.basePath + '/media/videos';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: videoResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Add a new video comment
        * 
        * @param videoId The video id 
        * @param commentResource The comment object
        */
    public addVideoComment (videoId: number, commentResource?: models.CommentResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CommentResource> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/comments'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling addVideoComment.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: commentResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Adds a contributor to a video
        * 
        * @param videoId The video id
        * @param contributionResource The contribution object
        */
    public addVideoContributor (videoId: number, contributionResource?: models.ContributionResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/contributors'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling addVideoContributor.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: contributionResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Add a new flag
        * 
        * @param videoId The video id
        * @param reason The flag reason
        */
    public addVideoFlag (videoId: number, reason?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.FlagResource> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/moderation'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling addVideoFlag.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: reason,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Adds one or more existing videos as related to this one
        * 
        * @param videoId The video id
        * @param videoRelationshipResource The video relationship object 
        */
    public addVideoRelationships (videoId: number, videoRelationshipResource?: models.VideoRelationshipResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.VideoRelationshipResource> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/related'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling addVideoRelationships.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: videoRelationshipResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Create a video disposition
        * 
        * @param videoId The video id
        * @param dispositionResource The disposition object
        */
    public createVideoDisposition (videoId: number, dispositionResource?: models.DispositionResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.DispositionResource> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/dispositions'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling createVideoDisposition.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: dispositionResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Deletes a video from the system if no resources are attached to it
        * 
        * @param id The video id
        */
    public deleteVideo (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteVideo.');
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
        * Delete a video comment
        * 
        * @param videoId The video id
        * @param id The comment id
        */
    public deleteVideoComment (videoId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/comments/{id}'
            .replace('{' + 'video_id' + '}', String(videoId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling deleteVideoComment.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteVideoComment.');
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
        * Delete a video disposition
        * 
        * @param dispositionId The disposition id
        */
    public deleteVideoDisposition (dispositionId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/dispositions/{disposition_id}'
            .replace('{' + 'disposition_id' + '}', String(dispositionId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'dispositionId' is not null or undefined
        if (dispositionId === null || dispositionId === undefined) {
            throw new Error('Required parameter dispositionId was null or undefined when calling deleteVideoDisposition.');
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
        * Delete a flag
        * 
        * @param videoId The video id
        */
    public deleteVideoFlag (videoId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/moderation'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling deleteVideoFlag.');
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
        * Delete a video&#39;s relationship
        * 
        * @param videoId The video id
        * @param id The relationship id
        */
    public deleteVideoRelationship (videoId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/related/{id}'
            .replace('{' + 'video_id' + '}', String(videoId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling deleteVideoRelationship.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteVideoRelationship.');
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
        * Get user videos
        * 
        * @param userId The user id
        * @param excludeFlagged Skip videos that have been flagged by the current user
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getUserVideos (userId: number, excludeFlagged?: boolean, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceVideoResource> {
        const localVarPath = this.basePath + '/users/{user_id}/videos'
            .replace('{' + 'user_id' + '}', String(userId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserVideos.');
        }
        if (excludeFlagged !== undefined) {
            queryParameters['exclude_flagged'] = excludeFlagged;
        }

        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
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
        * Loads a specific video details
        * 
        * @param id The video id
        */
    public getVideo (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.VideoResource> {
        const localVarPath = this.basePath + '/media/videos/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getVideo.');
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
        * Returns a page of comments for a video
        * 
        * @param videoId The video id
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getVideoComments (videoId: number, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceCommentResource> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/comments'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling getVideoComments.');
        }
        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
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
        * Returns a page of dispositions for a video
        * 
        * @param videoId The video id
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getVideoDispositions (videoId: number, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceDispositionResource> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/dispositions'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling getVideoDispositions.');
        }
        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
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
        * Returns a page of video relationships
        * 
        * @param videoId The video id
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        */
    public getVideoRelationships (videoId: number, size?: number, page?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceVideoRelationshipResource> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/related'
            .replace('{' + 'video_id' + '}', String(videoId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling getVideoRelationships.');
        }
        if (size !== undefined) {
            queryParameters['size'] = size;
        }

        if (page !== undefined) {
            queryParameters['page'] = page;
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
        * Search videos using the documented filters
        * 
        * @param excludeFlagged Skip videos that have been flagged by the current user
        * @param filterVideosByUploader Filter for videos by uploader id
        * @param filterCategory Filter for videos from a specific category by id
        * @param filterTagset Filter for videos with specified tags (separated by comma)
        * @param filterVideosByName Filter for videos which name *STARTS* with the given string
        * @param filterVideosByContributor Filter for videos with contribution from the artist specified by ID
        * @param filterVideosByAuthor Filter for videos with an artist as author specified by ID
        * @param filterHasAuthor Filter for videos that have an author set if true, or that have no author if false
        * @param filterHasUploader Filter for videos that have an uploader set if true, or that have no uploader if false
        * @param filterRelatedTo Filter for videos that have designated a particular video as the TO of a relationship. Pattern should match VIDEO_ID or VIDEO_ID:DETAILS to match with a specific details string as well
        * @param filterFriends Filter for videos uploaded by friends. &#39;true&#39; for friends of the caller (requires user token) or a user id for a specific user&#39;s friends (requires VIDEOS_ADMIN permission)
        * @param filterDisposition Filter for videos a given user has a given disposition towards. USER_ID:DISPOSITION where USER_ID is the id of the user who has this disposition or &#39;me&#39; for the caller (requires user token for &#39;me&#39;) and DISPOSITION is the name of the disposition. E.G. filter_disposition&#x3D;123:like or filter_disposition&#x3D;me:favorite
        * @param size The number of objects returned per page
        * @param page The number of the page returned, starting with 1
        * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
        */
    public getVideos (excludeFlagged?: boolean, filterVideosByUploader?: string, filterCategory?: string, filterTagset?: string, filterVideosByName?: string, filterVideosByContributor?: string, filterVideosByAuthor?: string, filterHasAuthor?: boolean, filterHasUploader?: boolean, filterRelatedTo?: string, filterFriends?: boolean, filterDisposition?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PageResourceVideoResource> {
        const localVarPath = this.basePath + '/media/videos';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (excludeFlagged !== undefined) {
            queryParameters['exclude_flagged'] = excludeFlagged;
        }

        if (filterVideosByUploader !== undefined) {
            queryParameters['filter_videos_by_uploader'] = filterVideosByUploader;
        }

        if (filterCategory !== undefined) {
            queryParameters['filter_category'] = filterCategory;
        }

        if (filterTagset !== undefined) {
            queryParameters['filter_tagset'] = filterTagset;
        }

        if (filterVideosByName !== undefined) {
            queryParameters['filter_videos_by_name'] = filterVideosByName;
        }

        if (filterVideosByContributor !== undefined) {
            queryParameters['filter_videos_by_contributor'] = filterVideosByContributor;
        }

        if (filterVideosByAuthor !== undefined) {
            queryParameters['filter_videos_by_author'] = filterVideosByAuthor;
        }

        if (filterHasAuthor !== undefined) {
            queryParameters['filter_has_author'] = filterHasAuthor;
        }

        if (filterHasUploader !== undefined) {
            queryParameters['filter_has_uploader'] = filterHasUploader;
        }

        if (filterRelatedTo !== undefined) {
            queryParameters['filter_related_to'] = filterRelatedTo;
        }

        if (filterFriends !== undefined) {
            queryParameters['filter_friends'] = filterFriends;
        }

        if (filterDisposition !== undefined) {
            queryParameters['filter_disposition'] = filterDisposition;
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
        * Removes a user from a video&#39;s whitelist
        * Remove the user with the id given in the path from the whitelist of users that can view this video regardless of privacy setting.
        * @param videoId The video id
        * @param id The user id
        */
    public removeUserFromVideoWhitelist (videoId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/whitelist/{id}'
            .replace('{' + 'video_id' + '}', String(videoId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling removeUserFromVideoWhitelist.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeUserFromVideoWhitelist.');
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
        * Removes a contributor from a video
        * 
        * @param videoId The video id
        * @param id The contributor id
        */
    public removeVideoContributor (videoId: number, id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/contributors/{id}'
            .replace('{' + 'video_id' + '}', String(videoId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling removeVideoContributor.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeVideoContributor.');
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
        * Modifies a video&#39;s details
        * 
        * @param id The video id
        * @param videoResource The video object
        */
    public updateVideo (id: number, videoResource?: models.VideoResource, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateVideo.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: videoResource,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update a video comment
        * 
        * @param videoId The video id
        * @param id The comment id
        * @param content The comment content
        */
    public updateVideoComment (videoId: number, id: number, content?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/comments/{id}/content'
            .replace('{' + 'video_id' + '}', String(videoId))
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling updateVideoComment.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateVideoComment.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: content,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Update a video&#39;s relationship details
        * 
        * @param videoId The video id
        * @param relationshipId The relationship id
        * @param details The video relationship details
        */
    public updateVideoRelationship (videoId: number, relationshipId: number, details?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{video_id}/related/{id}/relationship_details'
            .replace('{' + 'video_id' + '}', String(videoId))
            .replace('{' + 'relationship_id' + '}', String(relationshipId));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling updateVideoRelationship.');
        }
        // verify required parameter 'relationshipId' is not null or undefined
        if (relationshipId === null || relationshipId === undefined) {
            throw new Error('Required parameter relationshipId was null or undefined when calling updateVideoRelationship.');
        }
        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: details,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * Increment a video&#39;s view count
        * 
        * @param id The video id
        */
    public viewVideo (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/media/videos/{id}/views'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling viewVideo.');
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
}
