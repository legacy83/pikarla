'use strict';

angular.module( 'api.scaffold.todo', [ 'apiUtils' ] )

    .service( 'todoAPI', [ '$http', 'apiUtils', function ( $http, apiUtils ) {

        var API = this,
            resource = _.partial( apiUtils.buildResourceUrl, 'scaffold/to-do' );

        API.all = function () {
            return $http.get( resource() );
        };

    } ] );
