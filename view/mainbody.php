<!DOCTYPE html>
<html lang="en">

<?php require_once 'blocks/header.php'; ?>

<body>


<?php 
// <!-- // load main body -->
if(!empty($_GET['page'])){
    if(file_exists('view/page/'.$_GET['page'].'.php')){
        require_once 'page/'.$_GET['page'].'.php'; 
    }
}

// Cookie
$cookie_name = "user";



?>

</body>

<?php require_once 'blocks/footer.php'; ?>

</html>

