'use strict';

angular.module( 'flash' )

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