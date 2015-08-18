'use strict';

angular.module( 'pikarla.scaffold.todo', [
    'ngRoute',
    'api.scaffold.todo'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@todo', {
            templateUrl: 'scaffold/todo/todo.html',
            controller: 'TodoController'
        } );
    } ] )

    .controller( 'TodoController',
    [ '$scope', 'todoAPI', function ( $scope, todoAPI ) {

        todoAPI.all().success( function ( data ) {
            $scope.models = data;
        } );

    } ] );