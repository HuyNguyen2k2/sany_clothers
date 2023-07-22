<?php
class Connect{
  public $dataConnect=null;
  public function __construct(){
    global $database;
    $conn = new mysqli($database['servername'],$database['username'], $database['password'], $database['dbname']);
    if ($conn->connect_error){
      die("Connection failed: " . $conn->connect_error);
    }
    $this->dataConnect=$conn;
  }

}