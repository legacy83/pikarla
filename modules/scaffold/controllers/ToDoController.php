<?php

namespace scaffold\controllers;

use scaffold\rest\Controller;

class ToDoController extends Controller
{
    public function actionIndex()
    {
        $todo = new \stdClass();
        $todo->title = '@todo';
        $todo->content = 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.';

        return [ $todo, $todo ];
    }
}
