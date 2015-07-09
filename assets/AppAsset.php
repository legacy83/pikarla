<?php

namespace app\assets;

use yii\web\AssetBundle;

class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'app/app.css',
    ];
    public $js = [
        'app/app.js',
        'app/site/home/home.js',
    ];
    public $depends = [
        'app\assets\AppBowerAsset',
    ];
}