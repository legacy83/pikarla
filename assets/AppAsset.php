<?php

namespace app\assets;

use yii\web\AssetBundle;

class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
    ];
    public $js = [
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\web\JqueryAsset',
    ];

    public function registerAssetFiles( $view )
    {
        $view->registerCssFile( 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css' );
        $view->registerJsFile( 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js' );
        parent::registerAssetFiles( $view );
    }
}