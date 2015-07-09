'use strict';

angular.module( 'scaffold.foo.fooAPI', [] )

    .service( 'fooAPI', [ '$http', function ( $http ) {

        var API = this,
            apiRouteUrl = 'http://www.192.168.27.14.xip.io?',
            isIdentity = function ( identity ) {
                return !_.isNaN( parseInt( identity ) );
            },
            routeTo = function ( r, identity ) {
                var query = { r: r };
                if ( isIdentity( identity ) ) {
                    query.id = parseInt( identity );
                }

                return apiRouteUrl + $.param( query );
            };

        API.all = function () {
            return $http.get( routeTo( 'scaffold/foo' ) );
        };

        API.get = function ( identity ) {
            return $http.get( routeTo( 'scaffold/foo/view', identity ) );
        };

        API.post = function ( model ) {
            return $http.post( routeTo( 'scaffold/foo/create' ), model );
        };

        API.put = function ( model ) {
            return $http.put( routeTo( 'scaffold/foo/update', model.id ), model );
        };

        API.destroy = function ( identity ) {
            return $http.delete( routeTo( 'scaffold/foo/delete', identity ) );
        };

    } ] );
