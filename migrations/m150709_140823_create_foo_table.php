<?php

use yii\db\Schema;
use yii\db\Migration;

class m150709_140823_create_foo_table extends Migration
{
    public function up()
    {
        $this->createTable( 'foo', [
            'id' => Schema::TYPE_PK,
            'one' => Schema::TYPE_STRING,
            'two' => Schema::TYPE_STRING,
            'three' => Schema::TYPE_STRING,
        ] );
    }

    public function down()
    {
        $this->dropTable( 'foo' );
    }
}
