<?php

$account=[];
if(isset($_POST['confirm'])){
    $name=$_POST['userName'];
    $pw=$_POST['password'];
    $account['username'] = $name;
    $account['password'] = $pw;
}

setcookie("accountSany", json_encode($account), time() + 3600);

?>