'use strict';

angular.module( 'scaffold.todo.todoAPI', [] )

    .service( 'todoAPI', [ '$http', function ( $http ) {

        var API = this;

        API.all = function () {
            return $http.get( 'http://www.192.168.27.14.xip.io/index.php?r=scaffold/to-do' );
        };

        window.TODO = API;
        //API.get = function ( identity ) {
        //    return delaySuccess( function () {
        //        return _.find( getStorageItems(), byIdentity( identity ) );
        //    } );
        //};
        //
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
