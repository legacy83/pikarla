<?php

namespace scaffold\models;

use yii\db\ActiveRecord;

class Foo extends ActiveRecord
{
    public static function tableName()
    {
        return 'foo';
    }
}
