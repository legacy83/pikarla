'use strict';

angular.module( 'ngUba', [
    'ngRoute',
    //'site.home',

    /*
     * You can copy and paste from scaffold
     * modules when creating new functionality.
     */
    //'scaffold.foo',
    //'scaffold.todo'
] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.otherwise( { redirectTo: '/home' } );
    } ] );