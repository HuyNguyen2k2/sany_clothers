<?php

class HomeModel extends Model{
    function getClient(){
        $sql='SELECT * FROM KHACH_HANG ';
        $value=$this->db->query($sql)->fetch_all();
        return $value;
    }
}