<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php基础语法</title>
    <script>
    // 基本类型：number string boolean null undefined
    // 引用类型： object (Array Math RegExp Date Object Error Number String Boolean)

    var num = 123;
    console.log(typeof num);
    var str ='hello world';
    console.log(typeof str);
    var flag = true;
    console.log(typeof flag);
    var arr = [];
    console.log(typeof arr);
    console.log(typeof null);

    console.log(Object.prototype.toString.call([]));
    console.log(Object.prototype.toString.call({}));
    console.log(Object.prototype.toString.call(new Date(0)));
    </script>
</head>
<body>
    <?php
    // php的数据类型与JavaScript的数据类型是类似的，都是弱类型语言
    // gettype() 内置函数，用来判断变量的类型
    $num = 123;
    $str = 'hello';
    $float = 1.2;
    $flag = true;
    $a= null;
    $arr = array(1,23,4);

    echo gettype($num);//integer
    echo '<br>';
    echo gettype($str);
    echo '<br>';
    echo gettype($flag);
    echo '<br>';
    echo gettype($a);
    echo '<br>';
    echo gettype($arr);
    echo '<br>';
    // ---
    // count()是内置函数，用来计算数组的长度
    $arr1 = array(123,435,53);
    for($i=0;$i<count($arr1);$i++) {
        echo $arr1[$i].'<br>';//分号不可以省略，而js中的结尾分号可以省略，但是推荐加上分号。
    }
    foreach($arr1 as $value){
        echo $value.'---<br>';
    }
    $arr2 = array('username'=>'zhang','age'=>'19');
    foreach($arr2 as $key => $value){
        echo $key.'===='.$value.'<br>';
    }
    ?>
</body>
</html>