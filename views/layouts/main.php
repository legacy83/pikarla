<?php /* @var $this \yii\web\View */ ?>
<?php /* @var $content string */ ?>
<?php \app\assets\AppAsset::register( $this ); ?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language; ?>">
<head>
    <meta charset="<?= Yii::$app->charset; ?>">
    <title><?= \yii\helpers\Html::encode( $this->title ); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= \yii\helpers\Html::csrfMetaTags(); ?>
    <?php $this->head(); ?>
</head>
<body>

<?php $this->beginBody(); ?>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand brand" href="<?= Yii::$app->homeUrl; ?>">Yuba</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="<?= Yii::$app->homeUrl; ?>">Home</a></li>
                <li><a href="<?= \yii\helpers\Url::toRoute( [ '/scaffold/to-do' ] ); ?>">About</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="<?= \yii\helpers\Url::toRoute( [ '/scaffold/to-do' ] ); ?>">@todo</a></li>
                <li><a href="<?= \yii\helpers\Url::toRoute( [ '/scaffold/foo' ] ); ?>">@foo</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">

    <?= $this->render( 'partials/flash-messages.php' ); ?>

    <?= $content; ?>

    <hr>

    <footer>
        <p>&copy; Yuba <?php echo date( 'Y' ); ?></p>
    </footer>

</div>

<?php $this->endBody(); ?>

</body>
</html>

<?php $this->endPage(); ?>
