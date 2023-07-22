<?php

class Category extends Controller{

    public $response, $categoryModel;

    function __construct(){
        $this->response = new Response();
        $this->categoryModel = $this->model('CategoryModel');
    }

    function index(){
        $this->view('category/main');
    }

    //add and change
    function addCategory(){
        if(isset($_POST['confirmAddCatalog'])){
            if(!empty($_POST['nameCatalog'])){
                $name = $_POST['nameCatalog'];
                $add = $this->categoryModel->add($name);
                if($add){
                    $this->response->redirect('adm/category/');
                }
            }
        }
        
        if(isset($_POST['confirmChangeCatalog'])){
            if(!empty($_POST['nameCatalog'])){
                $name = $_POST['nameCatalog'];
                $id = $_POST['confirmChangeCatalog'];
                $change = $this->categoryModel->change($name, $id);
                if($change){
                    $this->response->redirect('adm/category/');
                }
            }
        }
    }

    function deleteCategory(){
        if(isset($_GET['idDelete'])){
            $id = $_GET['idDelete'];
            $delete = $this->categoryModel->delete($id);
            if($delete){
                $this->response->redirect('adm/category/');
            }
        }
    }

    function changeCategory(){

    }
    
}