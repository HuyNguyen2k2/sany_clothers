<?php
class Controller{

    public function model($modelName=''){
        $model='';
            if(file_exists(_DIR_ROOT.'/app/model/'.$modelName.'.php')){
                require_once _DIR_ROOT.'/app/model/'.$modelName.'.php';
                if(class_exists($modelName)){
                    $model= new $modelName();
                    return $model;
                }
            }else if(file_exists(_DIR_ROOT.'/admin/model/'.$modelName.'.php')){
                require_once _DIR_ROOT.'/admin/model/'.$modelName.'.php';
                if(class_exists($modelName)){
                    $model = new $modelName();
                    return $model;
                }
            }else{
                return false;
            }
    }

    public function view($view='',$data=[]){
        extract($data); 
        if(file_exists(_DIR_ROOT.'/admin/view/'.$view.'.php')){
            require_once _DIR_ROOT.'/admin/view/'.$view.'.php';
        }
    }
}