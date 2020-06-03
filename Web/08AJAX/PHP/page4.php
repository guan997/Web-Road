<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>二维数组</title>
    <script>
        // 一维数组
        var arr = [123, 345];
        console.log(arr[0]);
        console.log(arr[1]);
        var arr1 = [773, 399];
        console.log(arr1[0]);
        console.log(arr1[1]);
        // 二维数组
        var arr2 = [];
        arr2[0] = [1, 2, 3];
        arr2[1] = [2, 2, 3];
        arr2[2] = [3, 2, 3];
        arr2['hello'] = 'hi';
        console.dir(arr2);
        for (var i = 0; i < arr2.length; i++) {
            for (var j = 0; j < arr2[i].length; j++) {
                console.log('索引值:' + i + ',' + j + '----' + arr2[i][j]);
            }
        }
    </script>
</head>

<body>
    <div>测试内容</div>
    <div>
        <?php
        // 数组的两种形式
        // 1.$arr =array(1,2,3);//默认key从0开始

        // 2.$arr=array('a'=>'1','b'=>'2','c'=>'3');
        // $arr=array(1,2,3,4);
        // $arr1=array('hello','hi');
        // print_r($arr);//数组（[0] => 1 [1] => 2 [2] => 3 [3] => 4）
        // print_r($arr1);//数组（[0] => hello [1] => hi）
        // echo $arr[0];
        // echo '<br>';
        // echo $arr[1];
        // echo '<br>';

        
        ?>
    </div>
</body>

</html>