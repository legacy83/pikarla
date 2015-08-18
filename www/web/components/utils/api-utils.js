'use strict';

angular.module( 'utils.apiUtils', [] )

    .service( 'apiUtils', [ '$location', function ( $location ) {

        var apiUtils = this,
            host = $location.host(),
            protocol = $location.protocol(),
            isIdentity = function ( identity ) {
                return !_.isNaN( parseInt( identity ) );
            };

        host = host.replace( 'www', 'api' );

        /**
         * Build the resource url.
         *
         * @param r
         * @param identity
         * @returns {string}
         */
        apiUtils.buildResourceUrl = function ( r, identity ) {
            var apiLocation = [ protocol, '://', host, '/', r ];
            if ( isIdentity( identity ) ) {
                apiLocation.push( '/' );
                apiLocation.push( identity );
            }

            return apiLocation.join( '' );
        };

    } ] );
