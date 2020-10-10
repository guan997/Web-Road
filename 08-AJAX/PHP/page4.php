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

        // $arr1 = array("username"=>"zhang","age"=>"18");//Array ( [username] => zhang [age] => 18 )
        // print_r($arr1);//Array([username] => zhang);
        // echo '<br>';
        // echo $arr1['username']; //zhang
        // echo '<br>';
        // var_dump($arr1);// array (size=2) 'username' => string 'zhang' (length=5)
        // 'age' => string '18' (length=2)

        // 二维数组
        // $arr = array();
        // $arr[0] = array(11,22,33);
        // $arr[1] = array(44,55,66);
        // $arr[2] = array(77,88,99);
        // print_r($arr);
        // Array ( [0] => Array ( [0] => 11 [1] => 22 [2] => 33 ) 
        // [1] => Array ( [0] => 44 [1] => 55 [2] => 66 ) 
        // [2] => Array ( [0] => 77 [1] => 88 [2] => 99 ) )

        $arr = array(123);
        $arr['apple'] = array('color'=>'red','shape'=>'round');
        $arr['origin'] = array('color'=>'origin','shape'=>'round');
        $arr['banana'] = array('color'=>'yellow','shape'=>'round');
        print_r($arr)
        // Array ( 
        //  [0] => 123 [apple] => Array ( [color] => red [shape] => round ) 
        //  [origin] => Array ( [color] => origin [shape] => round )
        //  [banana] => Array ( [color] => yellow [shape] => round ) )
        ?>
    </div>
</body>

</html>