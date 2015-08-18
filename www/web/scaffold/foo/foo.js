'use strict';

angular.module( 'pikarla.scaffold.foo', [
    'ngRoute',
    'pikarla.api.scaffold.foo',
    'pikarla.scaffold.foo-create',
    'pikarla.scaffold.foo-destroy',
    'pikarla.scaffold.foo-edit',
    'pikarla.scaffold.foo-show'
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