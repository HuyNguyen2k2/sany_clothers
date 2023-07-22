<?php


define('_DIR_ROOT',__DIR__);

// xu ly http root
if(!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on'){
    $web_root='https://'.$_SERVER['HTTP_HOST'];
}else{
    $web_root='http://'.$_SERVER['HTTP_HOST'];
}
$folder=str_replace(strtolower($_SERVER['DOCUMENT_ROOT']),'',strtolower(_DIR_ROOT));
$folder=ltrim($folder,'\\');
$web_root=$web_root.'/'.$folder;

define('_WEB_ROOT',$web_root);


require_once 'configs/database.php';

require_once 'core/connect.php';

require_once 'core/Response.php';

require_once 'core/Controller.php'; 

require_once 'core/Model.php';

require_once 'core/App.php';

