<?php

class Path{

    private $__controller, $__action;

    function __construct(){
        $this->__controller = 'category';
        $this->__action = 'index';
        $this->handleUrl($this->getUrl());
    }

    function getUrl(){
        $url = '/';
        if(!empty($_SERVER['PATH_INFO'])){
            $url = $_SERVER['PATH_INFO'];
        }
        return $url;
    }

    function handleUrl($url){
        $urlArr = explode('/', $url);
        $urlArr = array_filter($urlArr);
        $urlArr = array_values($urlArr);

        $this->__controller = ucfirst($urlArr[1]); //ucfirst: bien chu cai dau cua chuoi thanh in hoa

        if(file_exists('admin/controller/'.$this->__controller.'.php')){
            require_once 'admin/controller/'.$this->__controller.'.php';
            if(class_exists($this->__controller)){
                $this->__controller = new $this->__controller();
            }
        }

        if(!empty($urlArr[2])){
            $this->__action=$urlArr[2];
        }

        if(method_exists($this->__controller, $this->__action)){
            call_user_func_array([$this->__controller, $this->__action],[]);
        }
        
        // echo '<pre>';
        // print_r();
        // echo '<pre>';
    }

}

?>