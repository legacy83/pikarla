'use strict';

angular.module( 'apiUtils', [] )

    .service( 'apiUtils', [ 'apiBaseUrl', function ( apiBaseUrl ) {

        var apiUtils = this,
            isIdentity = function ( identity ) {
                return !_.isNaN( parseInt( identity ) );
            };

        apiUtils.routeTo = function ( r, identity ) {
            var query = { r: r };
            if ( isIdentity( identity ) ) {
                query.id = parseInt( identity );
            }

            return apiBaseUrl + $.param( query );
        };

    } ] ).constant( 'apiBaseUrl', 'http://www.192.168.27.14.xip.io?' );
