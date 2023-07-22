<?php ob_start(); ?>

<!DOCTYPE html>
<html lang="en">
    <?php require_once 'view/blocks/head.php' ?>
<body>
    <?php require_once 'view/blocks/header.php' ?> 
    <div class="container">
        <?php require_once 'view/blocks/menu.php' ?>
        <div class="right-side">
            <div class="main-content">

            <?php
            require_once 'Path.php';
            $path = new Path();
            ?>
            </div>
        </div>
    </div>
</body>
</html>

<?php ob_end_flush(); ?>
