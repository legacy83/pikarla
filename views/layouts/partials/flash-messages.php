<?php if ( Yii::$app->session->hasFlash( 'success' ) ): ?>

    <?php
    $alerts = Yii::$app->session->getFlash( 'success' );
    $alerts = is_array( $alerts ) ? $alerts : [ $alerts ];
    ?>

    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul><?php foreach ( $alerts as $alert ) echo "<li>$alert</li>"; ?></ul>
    </div>

<?php endif; ?>