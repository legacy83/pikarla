'use strict';

angular.module( 'pikarla.flash.flash-messages', [] )

    .directive( 'flashMessages', [ 'flash', function ( flash ) {
        return {
            restrict: 'A',
            scope: {},
            controller: function ( $scope ) {
                $scope.flash = flash;
            },
            templateUrl: 'components/flash/flash-messages.html'
        };

    } ] );