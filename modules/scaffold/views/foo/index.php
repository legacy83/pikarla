<?php /* @var $this yii\web\View */ ?>
<?php /** @var $model scaffold\models\Foo */ ?>
<?php /** @var $models array */ ?>
<?php $this->title = '@foo'; ?>

<div class="page-header">
    <h1>@foo</h1>
</div>

<div class="row">

    <div class="col-md-12">

        <table class="table table-hover table-bordered">

            <thead>
            <tr>
                <th>ID</th>
                <th>@one</th>
                <th>@two</th>
                <th>@three</th>
                <th></th>
            </tr>
            </thead>

            <tbody>

            <?php foreach ( $models as $model ) : ?>

                <tr>
                    <td><?php echo $model->id; ?></td>
                    <td>@one</td>
                    <td>@two</td>
                    <td>@three</td>
                    <td>

                        <a href="<?= \yii\helpers\Url::toRoute( [ '/scaffold/foo/show', 'id' => $model->id ] ); ?>"><span class="glyphicon glyphicon-link"></span></a>
                        <a href="<?= \yii\helpers\Url::toRoute( [ '/scaffold/foo/edit', 'id' => $model->id ] ); ?>"><span class="glyphicon glyphicon-edit"></span></a>
                        <a href="<?= \yii\helpers\Url::toRoute( [ '/scaffold/foo/destroy', 'id' => $model->id ] ); ?>"><span class="glyphicon glyphicon-remove"></span></a>

                    </td>
                </tr>

            <?php endforeach; ?>

            </tbody>

        </table>

    </div>

    <div class="col-md-12">

        <div class="panel panel-default">
            <div class="panel-body">

                <div class="pull-left"></div>

                <div class="pull-right">

                    <a class="btn btn-primary" href="<?= \yii\helpers\Url::toRoute( [ '/scaffold/foo/create' ] ); ?>">New @foo</a>

                </div>

            </div>
        </div>

    </div>

</div>