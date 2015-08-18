'use strict';

angular.module( 'scaffold.foo', [
    'ngRoute',
    'flashMessages',
    'api.scaffold.foo'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo', {
            templateUrl: 'scaffold/foo/foo.html',
            controller: 'FooController'
        } );
    } ] )

    .controller( 'FooController',
    [ '$scope', 'fooAPI', function ( $scope, fooAPI ) {

        fooAPI.all().success( function ( result ) {
            $scope.models = result;
        } );

    } ] );