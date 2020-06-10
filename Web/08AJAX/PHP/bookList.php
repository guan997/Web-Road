<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图书列表</title>
        <style>
            th,td{
                border-left: 1px solid red;
                border-top:  1px solid red;
            }
            table{
                border-right: 1px solid red;
                border-bottom:  1px solid red;
            }
        </style>
</head>
<body>
    <?php
    sleep(3);//执行到这里等待3秒
    /*这里的数据是假数据，真正的场景中数据基本上都是来自数据库。*/
    $arr = [];
    $arr[0] =array("name"=>"三国演义","author"=>"罗贯中","category"=>"古典文学","desc"=>"一个封建王朝的缩影");
    $arr[1] =array("name"=>"水浒传","author"=>"罗贯中","category"=>"古典文学","desc"=>"一个封建王朝的缩影");
    $arr[2] =array("name"=>"西游记","author"=>"罗贯中","category"=>"古典文学","desc"=>"一个封建王朝的缩影");
    $arr[3] =array("name"=>"红楼梦","author"=>"罗贯中","category"=>"古典文学","desc"=>"一个封建王朝的缩影");
    ?>
    <table cellspacing="0" cellpadding="0">
        <thead>
            <th>名称</th>
            <th>作者</th>
            <th>分类</th>
            <th>描述</th>
        </thead>
        <tbody>
            <?php foreach ($arr as $value){?>
            <tr>
                <td><?php echo $value['name']?></td>
                <td><?php echo $value['author']?></td>
                <td><?php echo $value['category']?></td>
                <td><?php echo $value['desc']?></td>
            </tr>
            <?php } ?>

        </tbody>
    </table>
</body>
</html>