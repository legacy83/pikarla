'use strict';

angular.module( 'scaffold.todo.todoAPI', [] )

    .service( 'todoAPI', [ '$http', function ( $http ) {

        var API = this;

        API.all = function () {
            return $http.get( 'http://www.192.168.27.14.xip.io/index.php?r=scaffold/to-do' );
        };

    } ] );
