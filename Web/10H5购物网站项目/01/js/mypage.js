$(function() {
	$('#fullpage').fullpage({// fullpage()方法接受的是json对象
        navigation: true,// 是否显示项目导航
        // navigationPosition: 'left', // 项目导航的位置，可选 left 或 right
        // loopBottom: true, // 滚动到最底部后是否滚回顶部
        scrollingSpeed: 1200, // 滚动速度，单位为毫秒
        // 滚动到第二屏后的回调函数，接收 anchorLink 和 index 两个参数，
        // anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function(anchorLink, index) {
            if(index == 2) {
                $(".search").show().animate({"right": 370},1500, function() {
                    // 方块走进来，沙发2个字显示
                    $(".search-words").animate({'opacity': 1},500, function() {
                        $(".search").hide();
                        $(".search-02-1").show().animate({"height": 30, "right": 250, "bottom": 452},500);
                    })
                })
            }
        }
    }); 
});