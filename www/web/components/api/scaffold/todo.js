'use strict';

angular.module( 'pikarla.api.scaffold.todo', [
    'pikarla.utils.api-utils'
] )

    .service( 'todoAPI', [ '$http', 'apiUtils', function ( $http, apiUtils ) {

        var API = this,
            resource = _.partial( apiUtils.buildResourceUrl, 'scaffold/to-do' );

        API.all = function () {
            return $http.get( resource() );
        };

    } ] );
