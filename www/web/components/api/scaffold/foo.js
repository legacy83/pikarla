'use strict';

angular.module( 'api.scaffold.foo', [ 'utils.apiUtils' ] )

    .service( 'fooAPI', [ '$http', 'apiUtils', function ( $http, apiUtils ) {

        var API = this,
            resource = _.partial( apiUtils.buildResourceUrl, 'scaffold/foo' );

        API.all = function () {
            return $http.get( resource() );
        };

        API.get = function ( identity ) {
            return $http.get( resource( identity ) );
        };

        API.post = function ( model ) {
            return $http.post( resource(), model );
        };

        API.put = function ( model ) {
            return $http.put( resource( model.id ), model );
        };

        API.destroy = function ( identity ) {
            return $http.delete( resource( identity ) );
        };

    } ] );
