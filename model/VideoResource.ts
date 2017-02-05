/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface VideoResource {
    /**
     * Whether the video is available, based on various factors
     */
    "active"?: boolean;
    /**
     * The original artist of the media
     */
    "author"?: models.SimpleReferenceResourcelong;
    /**
     * The date the media was created as a unix timestamp in seconds
     */
    "authored"?: number;
    /**
     * Whether the video has been banned or not
     */
    "banned"?: boolean;
    /**
     * The category of the video
     */
    "category": models.SimpleReferenceResourcestring;
    /**
     * The comments of the video
     */
    "comments"?: Array<models.CommentResource>;
    /**
     * Artists that contributed to the creation. See separate endpoint to add to list
     */
    "contributors"?: Array<models.ContributionResource>;
    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    "createdDate"?: number;
    /**
     * The country of an embedable version
     */
    "embed"?: string;
    /**
     * The file extension of the media file. 1-5 characters
     */
    "extension": string;
    /**
     * The height of the video in px
     */
    "height": number;
    /**
     * The unique ID for that resource
     */
    "id"?: number;
    /**
     * The length of the video in seconds
     */
    "length": number;
    /**
     * The country of the media. Typically a url. Cannot be blank
     */
    "location": string;
    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    "longDescription"?: string;
    /**
     * The mime-type of the media
     */
    "mimeType"?: string;
    /**
     * The user friendly name of that resource
     */
    "name": string;
    /**
     * The sort order of the video. default: 100
     */
    "priority"?: number;
    /**
     * The privacy setting. default: private
     */
    "privacy"?: VideoResource.PrivacyEnum;
    /**
     * Whether the video has been made public. Default true
     */
    "published"?: boolean;
    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    "shortDescription"?: string;
    /**
     * The size of the media. Minimum 0 if supplied
     */
    "size"?: number;
    /**
     * The tags for the video
     */
    "tags"?: Array<string>;
    /**
     * The country of a thumbnail version. Typically a url
     */
    "thumbnail"?: string;
    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    "updatedDate"?: number;
    /**
     * The user the media was uploaded by. May be null for system uploaded media. May only be set to a user other than the current caller if VIDEOS_ADMIN permission. Null will mean the caller is the uploader unless the caller has VIDEOS_ADMIN permission, in which case it will be set to null
     */
    "uploader"?: models.SimpleUserResource;
    /**
     * The view count of the video
     */
    "views"?: number;
    /**
     * The width of the video in px
     */
    "width": number;
}

export namespace VideoResource {
    export enum PrivacyEnum {
        Private = <any> 'private',
        Friends = <any> 'friends',
        Public = <any> 'public'
    }
}
