# HTML和CSS
## 瀑布流

`[艾涵](https://www.cnblogs.com/ainyi/)`

### 纯 css 写瀑布流
#### 1.multi-columns 方式：
通过 Multi-columns 相关的属性 column-count、column-gap 配合 break-inside 来实现瀑布流布局。
multi-columns
多列
columns：<' column-width '> || <' column-count '>
设置或检索对象的列数和每列的宽度。复合属性
设置这样的 html 结构：

```css
/*列数及列宽固定*/
-moz-columns:200px 3;
-webkit-columns:200px 3;
columns:200px 3;

/*列宽固定，根据容器宽度液态分布列数*/
-moz-columns:200px;
-webkit-columns:200px;
columns:200px;
```
column-width：<length> | auto
设置或检索对象每列的宽度；
auto：根据 <' column-count '> 自定分配宽度
```css
/*列宽固定，根据容器宽度液态分布列数*/
-moz-column-width:200px;
-webkit-column-width:200px;
column-width:200px;
```
column-count：<integer> | auto
设置或检索对象的列数；
auto：根据 <' column-width '> 自定分配宽度
```css
/*列数固定，根据容器宽度液态分布列宽*/
-moz-column-count:5;
-webkit-column-count:5;
column-count:5;
```
column-gap：<length> | normal
设置或检索对象的列与列之间的间隙
```css
/*固定列间隙为40px*/
-moz-column-gap:40px;
-webkit-column-gap:40px;
column-gap:40px;

/*列间隙column-gap:normal；font-size为14px时，列间隙column-gap:normal的计算值也为14px*/
-moz-column-gap:normal;
-webkit-column-gap:normal;
column-gap:normal;
```
当然为了布局具有响应式效果，可以借助媒体查询属性，在不同屏幕大小的条件下设置瀑布流容器 masonry 的 `column-count 来自适应改变列数`：

```css
@media screen and (max-width: 800px) {
                .masonry {
                    column-count: 2; // two columns on larger phones
                }
            }
            @media screen and (max-width: 500px) {
                .masonry {
                    column-count: 1; // two columns on larger phones
                }
            }
```

#### 2.flexbox 方式：

通过采用 flex-flow 来控制列，并且允许它换行。

这里关键是容器的高度，这里要显式的设置 height 属性，当然除了设置 px 值，还可以设置%，让容器的高度和浏览器视窗高度一样。

这里height可以设置成任何高度值（采用任何的单位），但不能不显式的设置，如果没有显式的设置，容器就无法包裹住项目列表。
`WaterfallFlow.html`

我们可以发现，使用纯 css 写瀑布流，每一块 item 都是从上往下排列，不能做到从左往右排列：

![img](https://images2018.cnblogs.com/blog/1344447/201804/1344447-20180410131318225-135739229.png)

 

 

这样子若是动态加载图片的瀑布流，体验就会很不好

我们想要的是这样：

![img](https://images2018.cnblogs.com/blog/1344447/201804/1344447-20180410131140018-1659527281.png)

 

这样做只能通过 js 来写瀑布流

### js 瀑布流实现方式：

css 的绝对定位方式：根据每张图片的位置设置 top 和 left 值：
css内容
```css
.masonry {
                width: 100%;
                margin-top: 50px;
                position:relative;
            }
            .item {
                z-index: 10;
                transition: 0.25s;
                overflow: hidden;
                position: absolute;
            }
            .item img{
                width: 100%;
                height:100%;
                transition: 0.25s;
            }
            .item:hover img{
                z-index: 100;
                transition: 0.25s;
                overflow: hidden;
                animation: bounceIn 0.25s ease-in 2 alternate;
            }
            @keyframes bounceIn{
                100% {
                    transform: scale(1.07);
                }
            }
```
```js
//瀑布流效果
//这里有一个坑（已经修复）：
//因为是动态加载远程图片，在未加载完全无法获取图片宽高
//未加载完全就无法设定每一个item(包裹图片)的top。

//item的top值：第一行：top为0
//            其他行：必须算出图片宽度在item宽度的缩小比例，与获取的图片高度相乘，从而获得item的高度
//                   就可以设置每张图片在瀑布流中每块item的top值（每一行中最小的item高度，数组查找）
//item的left值：第一行：按照每块item的宽度值*块数
//             其他行：与自身上面一块的left值相等
function waterFall() {
    // 1- 确定图片的宽度 - 滚动条宽度
    var pageWidth = getClient().width-8;
    var columns = 3; //3列
    var itemWidth = parseInt(pageWidth/columns); //得到item的宽度
    $(".item").width(itemWidth); //设置到item的宽度

    var arr = [];

    $(".masonry .item").each(function(i){
        var height = $(this).find("img").height();
        var width = $(this).find("img").width();
        var bi = itemWidth/width; //获取缩小的比值
        var boxheight = parseInt(height*bi); //图片的高度*比值 = item的高度

        if (i < columns) {
            // 2- 确定第一行
            $(this).css({
                top:0,
                left:(itemWidth) * i
            });
            arr.push(boxheight);

        } else {
            // 其他行
            // 3- 找到数组中最小高度  和 它的索引
            var minHeight = arr[0];
            var index = 0;
            for (var j = 0; j < arr.length; j++) {
                if (minHeight > arr[j]) {
                    minHeight = arr[j];
                    index = j;
                }
            }
            // 4- 设置下一行的第一个盒子位置
            // top值就是最小列的高度
            $(this).css({
                top:arr[index],
                left:$(".masonry .item").eq(index).css("left")
            });

            // 5- 修改最小列的高度
            // 最小列的高度 = 当前自己的高度 + 拼接过来的高度
            arr[index] = arr[index] + boxheight;
        }
    });
}


//clientWidth 处理兼容性
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}



 // 页面尺寸改变时实时触发
window.onresize = function() {
    //重新定义瀑布流
    waterFall();
};



//初始化
window.onload = function(){

    //实现瀑布流
    waterFall();

}
```