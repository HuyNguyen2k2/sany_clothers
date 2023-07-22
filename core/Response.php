<?php
class Response{
    function redirect($uri=''){
        // Kiểm tra xem uri có bắt đầu bằng 'http' hoặc 'https'
        if(preg_match('~^(http|https)~is',$uri)){
            $url=$uri;  // Nếu có, sử dụng uri làm url chuyển hướng
        }else{
            // Nếu URI không bắt đầu bằng 'http' hoặc 'https', nối nó vào '_WEB_ROOT/'
            $url=_WEB_ROOT.'/'.$uri;
        }
        // Gửi header 'Location' với URL chuyển hướng
        header('location:'.$url);
        exit;
    }
}