<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php 基础语法 函数</title>
    <script>
        function foo(info) {
            console.log(info);
            return info;
        }
        var ret = foo('hello');
        console.log(ret);
    </script>
</head>

<body>
<div>
    <?php
    // 函数的名字不缺被大小写
    // php也有预解析

    // 自定义函数
    $ret = Foo('hi tom');
    echo $ret;
    function foo($info){
        return $info;
    }
    // 系统函数
    $arr1 = array(111,222,333);
    $arr2 = array("aa"=>"1","bb"=>"2","cc"=>3);
    $ret1 = json_encode($arr1);
    echo $ret1.'<br>';
    $ret2 = json_encode($arr2);
    echo $ret2;
    // 数值可以不加双引号，其他类型可以不加，一般都加双引号，
    ?>
</div>
</body>

</html>