<?php 
class HomeController extends Controller{

    public $dataHome=[];
    public $homeModel;

    public function renderListClient(){
        $this->homeModel=$this->model('HomeModel');
        $this->dataHome['client']=$this->homeModel->getClient();
        extract($this->dataHome);
    }
    
}