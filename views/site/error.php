<?php /* @var $this yii\web\View */ ?>
<?php /* @var $name string */ ?>
<?php /* @var $message string */ ?>
<?php /* @var $exception Exception */ ?>
<?php $this->title = $name; ?>

<div class="alert alert-danger">
    <?= nl2br( \yii\helpers\Html::encode( $message ) ); ?>
</div>

<div class="page-header">
    <h1><?= \yii\helpers\Html::encode( $this->title ); ?></h1>
</div>

<div class="row">

    <div class="col-md-12">

        <p>The above error occurred while the Web server was processing your request.</p>

        <p>Please contact us if you think this is a server error. Thank you.</p>

    </div>

</div>
