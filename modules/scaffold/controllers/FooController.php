<?php

namespace scaffold\controllers;

use scaffold\models\Foo;
use yii\web\Controller;

class FooController extends Controller
{
    public function actionIndex()
    {
        $foos = array();
        foreach ( range( 1, 6 ) as $id ) {
            $foos[ ] = Foo::buildFromId( $id );
        }

        return $this->render( 'index', [
            'models' => $foos,
        ] );
    }

    public function actionShow()
    {
        $request = \Yii::$app->request;

        $foo = Foo::buildFromId(
            $request->get( 'id' )
        );

        return $this->render( 'show', [
            'model' => $foo,
        ] );
    }

    public function actionCreate()
    {
        $request = \Yii::$app->request;
        $session = \Yii::$app->session;

        if ( $request->post( 'createSubmitCreate' ) ) {
            $session->setFlash( 'success', '@foo created successfully' );

            return $this->redirect( [ '/scaffold/foo' ] );
        }

        if ( $request->post( 'createSubmitCancel' ) ) {
            return $this->redirect( [ '/scaffold/foo' ] );
        }

        return $this->render( 'create' );
    }

    public function actionEdit()
    {
        $request = \Yii::$app->request;
        $session = \Yii::$app->session;

        if ( $request->post( 'editSubmitSave' ) ) {
            $session->setFlash( 'success', '@foo modified successfully' );

            return $this->redirect( [ '/scaffold/foo' ] );
        }

        if ( $request->post( 'editSubmitCancel' ) ) {
            return $this->redirect( [ '/scaffold/foo' ] );
        }

        $foo = Foo::buildFromId(
            $request->get( 'id' )
        );

        return $this->render( 'edit', [
            'model' => $foo,
        ] );
    }

    public function actionDestroy()
    {
        $request = \Yii::$app->request;
        $session = \Yii::$app->session;

        if ( $request->post( 'destroySubmitYes' ) ) {
            $session->setFlash( 'success', '@foo destroyed successfully' );

            return $this->redirect( [ '/scaffold/foo' ] );
        }

        if ( $request->post( 'destroySubmitNo' ) ) {
            return $this->redirect( [ '/scaffold/foo' ] );
        }

        $foo = Foo::buildFromId(
            $request->get( 'id' )
        );

        return $this->render( 'destroy', [
            'model' => $foo,
        ] );
    }
}
