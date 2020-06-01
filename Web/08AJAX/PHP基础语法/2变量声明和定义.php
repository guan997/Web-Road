<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2变量声明和定义</title>
    <script>
    // js的变量声明
    var aa = 12;
    console.log(aa);
    // js的字符串拼接
    var str = '编号为： '+ aa;
    console.log(str);
    // js中处理字符串单引号与双引号的作用基本相同；只有json格式的数据必须使用双引号
    var str1 = 'hi';
    var str2 = 'girl';
    console.log(str1,str2);
    var json = '{"username":"xiaoming","age":"18","sex":"nan"}';
    var obj = JSON.parse(json);
    console.dir(obj);
    </script>
</head>
<body>
    <div> welcome to php page </div>
    <?php
    // 知识点 
    // 1. 变量声明
    // 2.字符串拼接
    // 3.单引号和双引号的差异

    // php的变量声明，变量名的规则：由字符数字下划线组成并且不可以以数字开始，变量名对大小写是敏感的
        // php当中的字符串拼接用的是.

        // 单引号对于其中的变量当作普通的字符串来处理
        // 双引号对于其中的变量会把变量解析成变量值
        $num = 1234;
        $Num = 123;
        // echo '<div>编号为：'.$num.'</div>';
        // echo '<div>编号为：$num</div>';
        echo "<div>编号为：$num - $Num</div>";
        // --------------------------------------------
        // 1. 所有的php相关的代码都要写到这里面
        // 2. echo 的作用就是向页面当中输出字符串
        echo '<div>Hello World!</div>';

    ?>
</body>
</html>