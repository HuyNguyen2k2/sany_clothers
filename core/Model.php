<?php
class Model{
    private $_data=null;

    public $db=null;
    public function __construct(){
        $this->_data= new Connect();
        $this->db=$this->_data->dataConnect;
    }

}