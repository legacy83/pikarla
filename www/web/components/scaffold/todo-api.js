'use strict';

angular.module( 'scaffold.todo.todoAPI', [ 'apiUtils' ] )

    .service( 'todoAPI', [ '$http', 'apiUtils', function ( $http, apiUtils ) {

        var API = this,
            resource = _.partial( apiUtils.buildResourceUrl, 'scaffold/to-do' );

        API.all = function () {
            return $http.get( resource() );
        };

    } ] );
