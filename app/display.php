<!DOCTYPE html>
<html lang="en">

<?php require_once 'view/blocks/head.php' ?>

<body>

<?php require_once 'view/blocks/header.php' ?>




<?php require_once 'controller/HomeController.php';
    $controller= new HomeController();
    $controller->renderListClient();
?>


<?php require_once 'view/page/home.php' ?>

<?php require_once 'view/blocks/footer.php' ?>

</body>

<?php require_once 'view/blocks/js.php' ?>
</html>