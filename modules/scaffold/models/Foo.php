<?php

namespace scaffold\models;

use yii\base\Model;

class Foo extends Model
{
    public $id;

    static function buildFromId( $id )
    {
        $foo = new Foo();
        $foo->id = $id;

        return $foo;
    }
}
