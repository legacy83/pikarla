<?php

namespace scaffold\controllers;

use yii\web\Controller;

class ToDoController extends Controller
{
    public function actionIndex()
    {
        return $this->render( 'index' );
    }
}
