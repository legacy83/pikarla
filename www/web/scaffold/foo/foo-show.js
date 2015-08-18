'use strict';

angular.module( 'pikarla.scaffold.foo-show', [
    'ngRoute',
    'pikarla.api.scaffold.foo',
    'pikarla.flash.flash'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/@foo/show/:id', {
            templateUrl: 'scaffold/foo/foo-show.html',
            controller: 'FooShowController'
        } );
    } ] )

    .controller( 'FooShowController',
    [ '$scope', '$routeParams', 'fooAPI',
        function ( $scope, $routeParams, fooAPI ) {

            fooAPI.get( $routeParams.id ).success( function ( result ) {
                $scope.model = result;
            } );

        }
    ] );