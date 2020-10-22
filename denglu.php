<?php
header("content-type:text/html;charset=utf-8");
$name = $_POST['name'];
$word = $_POST['word'];
$com = mysqli_connect('localhost','root','root','shop');
$cha = "SELECT *FROM `xiaomi` WHERE `_name`='$name' AND  `word`='$word'";
$ret = mysqli_query($com,$cha);
$jie = mysqli_fetch_assoc($ret);

mysqli_close($com);
    if($jie){
        echo '1'  ;
    }else{
        echo '0' ;
    }
?>