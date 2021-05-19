# HTML和CSS

## 布局方式

### 1.静态布局：

传统布局，屏幕宽高变化时，盒子使用横向或者竖向的滚动条来查看被遮挡部分，也就是不管浏览器窗口的大小怎么变化就按html语义标签排列的布局来布置。

### 2.弹性布局(flex)：

css3引入的，flex布局；优点在于其容易上手，根据flex规则很容易达到某个布局效果，然而缺点是：浏览器兼容性比较差，只能兼容到ie9及以上；

**Flex 布局**

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

**容器的属性**

- flex-direction决定主轴的方向（即项目的排列方向）。
  - row（默认值）：主轴为水平方向，起点在左端。
  - row-reverse：主轴为水平方向，起点在右端。
  - column：主轴为垂直方向，起点在上沿。
  - column-reverse：主轴为垂直方向，起点在下沿。
- flex-wrap 是否换行
  - flex-wrap: nowrap | wrap | wrap-reverse;
- flex-flow：flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
- justify-content定义了项目在主轴上的对齐方式。
  - flex-start（默认值）：左对齐
  - flex-end：右对齐
  - center： 居中
  - space-between：两端对齐，项目之间的间隔都相等。
  - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
- align-items：定义项目在交叉轴上如何对齐。
  - flex-start：交叉轴的起点对齐。
  - flex-end：交叉轴的终点对齐。
  - center：交叉轴的中点对齐。
  - baseline: 项目的第一行文字的基线对齐。
  - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
- align-content定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  - flex-start：与交叉轴的起点对齐。
  - flex-end：与交叉轴的终点对齐。
  - center：与交叉轴的中点对齐。
  - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  - stretch（默认值）：轴线占满整个交叉轴。

### 3.自适应布局：

分别为不同的屏幕分辨率定义布局，在每个布局中，页面元素不随窗口大小的调整而发生变化，当窗口大小到达一定分辨率时变化一次。

### 4.流式布局：

页面元素的宽度按照屏幕进行适配调整，元素的位置不变，大小变化，屏幕太大或者太小导致元素不能正常显示。

### 5.响应式布局：

<meta name="viewport" content="divice-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

使用meta标签设置，页面元素宽度随窗口调整自动适配。主要属性及其含义如下：name="viewport"：  名称=视图；width=device-width 页面宽度=设备宽度(可以理解为获取你手机的屏幕宽度)；initial-scale - 初始的缩放比例 ；minimum-scale - 允许用户缩放到的最小比例  ；maximum-scale - 允许用户缩放到的最大比例 ；user-scalable - 用户是否可以手动缩放 。

6.网格布局：grid

二维布局系统，随意的定义每行每列的数目和大小。也非常简单方便，兼容性较差。



作者：Beauty_Beast
链接：https://www.jianshu.com/p/6d647338f121
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

- - 

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