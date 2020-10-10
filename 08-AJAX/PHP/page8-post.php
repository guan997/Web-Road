<?php
// 根据表单中的name属性获取值
    $username = $_POST['username'];
    $pw = $_POST['password'];
    // 设置服务器响应的文件类型 编码格式
    header("Content-Type:text/plain; charset=utf-8");
    if ($username == 'aa' && $pw == 'aa') {
        echo '登陆成功';
    } else {
        echo '用户名或者密码错误';
    }
?>
