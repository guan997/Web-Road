<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数组</title>
    <script>
        var arr =[123,455];
        <const class="l">(arr[0])</const>
    </script>
</head>
<body>
    <div>测试内容</div>
    <div>
    <!-- - echo：输出简单数据类型，如字符串、数值
    - print_r()：输出复杂数据类型，如数组
    - var_dump()：输出详细信息，如对象、数组 -->

        <?php
        $arr = array('hello',' world');
        // print_r($arr);//Array（[0] => hello [1] => world）hello
        // 打印字符串

        echo $arr[0];
        echo '<br>';
        echo $arr[1];
        $arr1 = array('username'=>"zhangsan","age"=>"19","sex"=>"male");

        // 打印对象

        print_r($arr1);//worldArray（[username] => zhangsan [age] => 19 [sex] => male）
        echo '<br>';
        // var_dump()：输出详细信息，如对象、数组 -->
        var_dump($arr1);
        ?>
    </div>
</body>
</html>