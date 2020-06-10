<?php
// 后台接口
echo '后台接口';
header('Content-Type:text/html;charset=utf-8');
     // 单引号对于其中的变量当作普通的字符串来处理
        // 双引号对于其中的变量会把变量解析成变量值
echo '<div style="color:red;"><span>测试数据</span><span>测试数据</span><span>测试数据</span></div>';
// json_encode();//把数组或者对象转换成字符串
// 数组
$arr = array(123,345,456);
echo json_encode($arr);
// 数组的第二种形式
$arr1 = array("username"=>"张三","age"=>"12","sex"=>"male");
echo json_encode($arr1);
// \u5f20\u4e09这种形式就是Unicode编码(中文)
echo ("\u5f20\u4e09").'<br>';
// 二维数组
$arr2['123'] = array('username'=>'zhangzhi','chinese'=>'89');
$arr2['223'] = array('username'=>'zhangzhi','chinese'=>'89');
$arr2['323'] = array('username'=>'shishi','chinese'=>'89');
echo json_encode($arr);
$f= $_GET['flag'];
if($f == 1) {
    echo 1;
}else {
    echo 2;
}
