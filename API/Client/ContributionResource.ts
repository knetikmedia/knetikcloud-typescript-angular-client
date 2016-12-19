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

namespace API.Client {
    'use strict';

    export interface ContributionResource {
        /**
         * A reference to the contributing artist
         */
        "artist": SimpleReferenceResourcelong;

        /**
         * A reference to the media being contributed to
         */
        "media": SimpleReferenceResourcelong;

        /**
         * The nature of the contribution (role of the artist as in 'producer', 'performer', etc)
         */
        "role": string;

    }

}
