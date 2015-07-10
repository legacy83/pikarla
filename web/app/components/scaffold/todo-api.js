'use strict';

angular.module( 'scaffold.todo.todoAPI', [] )

    .service( 'todoAPI', [ '$http', function ( $http ) {

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
            return $http.get( routeTo( 'scaffold/to-do' ) );
        };

    } ] );
