'use strict';

angular.module( 'pikarla', [
    'ngRoute',
    'pikarla.site.home',

    /*
     * You can copy and paste from scaffold
     * modules when creating new functionality.
     */
    'pikarla.scaffold.foo',
    'pikarla.scaffold.todo'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.otherwise( { redirectTo: '/home' } );
    } ] );