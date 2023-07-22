<?php
class App{
    private $__page='adm';
    public function __construct()
    {
        if(!empty($_SERVER['PATH_INFO'])){
            $url=$_SERVER['PATH_INFO'];
            $urlArr=explode('/',$url);
            $urlArr=array_filter($urlArr);
            $urlArr=array_values($urlArr);
            if($urlArr[0]==$this->__page){
                require_once 'admin/display.php';
            }else{
                require_once 'app/display.php';
            }
        }else{
            require_once 'app/display.php';
        }
            
    }

}