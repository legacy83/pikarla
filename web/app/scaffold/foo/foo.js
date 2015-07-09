'use strict';

angular.module( 'scaffold.foo', [
    'ngRoute',
    'flashMessages',
    'scaffold.foo.fooAPI'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo', {
            templateUrl: 'scaffold/foo/foo.html',
            controller: 'FooController'
        } );
    } ] )

    .controller( 'FooController',
    [ '$scope', 'fooAPI', function ( $scope, fooAPI ) {

        fooAPI.all().then( function ( result ) {
            $scope.models = result;
        } );

    }
    ] );