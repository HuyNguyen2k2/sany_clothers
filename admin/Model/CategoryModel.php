<?php

class CategoryModel extends Model{
    
    function add($value){
        if(!empty($value)){
            $sql = "INSERT INTO `nhom_danh_muc`(`NDM_id`, `NDM_Ten`) VALUES (NULL, '".$value."') ";
            $result = $this->db->query($sql);
            if($result){
                return $result;
            }else{
                return false;
            }
        }
    }

    function delete($id){
        if(!empty($id)){
            $sql = " DELETE FROM `nhom_danh_muc` WHERE `nhom_danh_muc`.`NDM_id` = '".$id."' ";
            $sql_2 = " SELECT * FROM `danh_muc` WHERE NDM_id = $id ";
            $arr = $this->db->query($sql_2)->fetch_all();
            if(count($arr) == 0){
                $result = $this->db->query($sql);
                if($result){
                    return $result;
                }else{
                    return false;
                }
            }
        }
    }

    function change($value, $id){
        if(!empty($value)){
            $sql = " UPDATE `nhom_danh_muc` SET `NDM_Ten`='".$value."' WHERE `nhom_danh_muc`.`NDM_id` = '".$id."' ";
            $result = $this->db->query($sql);
            if($result){
                return $result;
            }else{
                return false;
            }
        }
    }

}