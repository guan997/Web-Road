$(function() {
    var k = $(window).height();// 当前屏幕的高度
    var flag = false;//动画是否执行完毕
	$('#fullpage').fullpage({// fullpage()方法接受的是json对象
        navigation: true,// 是否显示项目导航
        // navigationPosition: 'left', // 项目导航的位置，可选 left 或 right
        // loopBottom: true, // 滚动到最底部后是否滚回顶部
        scrollingSpeed: 1200, // 滚动速度，单位为毫秒
        // 滚动到第二屏后的回调函数，接收 anchorLink 和 index 两个参数，
        // anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function(anchorLink, index) {
            if(index == 2 && flag == false) {
                // 缓动动画要加到时间的后面，函数的前面
                $(".search").show().animate({"right": 370},1500,"easeOutBack", function() {
                    // 方块走进来，沙发2个字显示
                    $(".search-words").animate({'opacity': 1},500, function() {
                        $(".search").hide();
                        // 图片往右上角缩小
                        $(".search-02-1").show().animate({"height": 30, "right": 250, "bottom": 452},1000,function(){
                            flag = true; // flag为true说明所有动画执行完毕
                        });
                        // 同时沙发图片变大
                        $(".goods-02").show().animate({"height": 218},1000);
                        // 同时白色文字渐渐显示出来
                        $(".words-02").animate({"opacity": 1},500);
                    });
                })
            }
        },
        // 刚开始滚动屏幕就触发的回调函数 onLeave
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 
        // 3个参数：index 是离开的“页面”的序号，从1开始计算；
        // nextIndex 是滚动到的“页面”的序号，从1开始计算；
        // direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(index, nextIndex, direction) {
            if(index == 2 && nextIndex == 3 && flag == true) {
                // 第二屏幕往第三屏幕滚动的时候，沙发往第三屏幕跑
                $(".shirt-02").show().animate({"bottom": -(k - 250), "width": 207, "left": 260},2000, function() {
                    $(".img-01-a").animate({"opacity": 1},500,function() {
                        $(".btn-01-a").animate({"opacity": 1},500);
                    });
                });
                $(".cover").show();
            }
            // 第3屏幕往第4屏幕滚动的时候
            if(index == 3 && nextIndex == 4) {
                $(".shirt-02").hide();
                // 沙发的距离 当前屏幕的高度 - 250 + 第3屏幕的50距离
                $(".t1f").show().animate({"bottom": -((k - 250) + 50), "left": 260,},2000,function () {
                    $(this).hide(); //动画完毕之后，自动隐藏
                    $(".car-img").show();
                    // 购物车开始往右走
                    $(".car").animate({"left":1500},3000,"easeInElastic",function() {
                        $(".note").show();
                        $(".note-img, .words-4-a").animate({"opacity":1},1000);
                    });
                })
            }
             // 第4屏幕往第5屏幕滚动的时候
             if(index == 4 && nextIndex == 5) {
                //  小手上来
                $(".hand-05").animate({"bottom":0}, 1000, function () {
                    // 鼠标显示
                    $(".mouse-05-a").fadeIn();
                    // 沙发800-70
                    $(".t1f-05").animate({"bottom":70}, 1000, function() {
                        // 单子上来
                        $(".order-05").animate({"bottom":390});
                    });
                })
            }
        }
    }); 
});