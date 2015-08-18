'use strict';

angular.module( 'pikarla.site.home', [ 'ngRoute' ] )

    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider.when( '/home', {
            templateUrl: 'site/home/home.html',
            controller: 'HomeController'
        } );
    } ] )

    .controller( 'HomeController', [ function () {

    } ] );