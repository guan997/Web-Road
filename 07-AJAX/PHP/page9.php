<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>成绩</title>
</head>
<body>
    <?php
    // 服务器渲染页面
    $arr = array() ;
    $arr['123'] = array("username"=>"张三","chinese"=>"130","math"=>"149","english"=>"146","summary"=>"298");
    $arr['124'] = array("username"=>"李四","chinese"=>"100","math"=>"140","english"=>"136","summary"=>"298");
    $arr['125'] = array("username"=>"王五","chinese"=>"90","math"=>"139","english"=>"126","summary"=>"298");
    $arr['126'] = array("username"=>"赵六","chinese"=>"30","math"=>"50","english"=>"80","summary"=>"100");
    $code = $_POST['code'];
    if($code == 'aa') {
        foreach($arr as $value){
            echo "<ul><li>姓名：$value[username]</li>
            <li>语文：$value[chinese]</li>
            <li>数学：$value[math]</li>
            <li>英语：$value[english]</li>
            <li>综合：$value[summary]</li>
            </li>";
        }
    }else{
        $score = $arr[$code];
        echo "<ul><li>姓名：$score[username]</li>
        <li>语文：$score[chinese]</li>
        <li>数学：$score[math]</li>
        <li>英语：$score[english]</li>
        <li>综合：$score[summary]</li>
        </li>";
    }
    ?>
</body>
</html>