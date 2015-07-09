'use strict';

angular.module( 'scaffold.foo.fooAPI', [] )

    .service( 'fooAPI', [ '$http', function ( $http ) {

        var API = this;

        API.all = function () {
            return $http.get( 'http://www.192.168.27.14.xip.io/index.php?r=scaffold/foo' );
        };

        API.get = function ( identity ) {
            return $http.get( 'http://www.192.168.27.14.xip.io/index.php?r=scaffold/foo/view', {
                params: {
                    id: identity
                }
            } );
        };

        //API.post = function ( model ) {
        //    return delaySuccess( function () {
        //        var all = getStorageItems(),
        //            saved = { id: nextStorageId() };
        //
        //        all.push( _.merge( saved, model ) );
        //        saveStorageItems( all );
        //
        //        return saved;
        //    } );
        //};
        //
        //API.put = function ( model ) {
        //    return delaySuccess( function () {
        //        var all = getStorageItems(),
        //            saved = _.find( all, byIdentity( model.id ) );
        //
        //        _.merge( saved, model );
        //        saveStorageItems( all );
        //
        //        return saved;
        //    } );
        //};
        //

        API.destroy = function ( identity ) {
            return $http.delete( 'http://www.192.168.27.14.xip.io/index.php?r=scaffold/foo/delete', {
                params: {
                    id: identity
                }
            } );
        };

        //API.destroy = function ( model ) {
        //    return delaySuccess( function () {
        //        var all = getStorageItems(),
        //            destroyed = _.remove( all, byIdentity( model.id ) );
        //
        //        saveStorageItems( all );
        //
        //        return destroyed;
        //    } );
        //};

    } ] );
