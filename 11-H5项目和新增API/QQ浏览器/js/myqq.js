$(function() {
    setTimeout(function() {
         $(".section1").addClass("comein");
        },200);
    $("#fullpage").fullpage({
        // 显示项目符号
        navigation: true,
        // 循环滚动
        loopBottom: true,
        onLeave: function(index, nextIndex, direction) {
            // 当我们离开第一屏幕的时候，section1 就移除 comein 
    		$(".section1").removeClass('comein');
            // 如果下一平魔的索引号是1 说明回到了第一屏幕 添加comein
            if(nextIndex == 1) {
                $(".section").addClass("comein");
            }
            if(nextIndex != 1) {
                // 如果不是第一屏幕，就给背景添加旋转
                $("#bg").addClass("rotate");
            }else {
                $("#bg").removeClass("rotate");
            }
            // 第二屏幕
            // 进入第二屏幕时 53图片变大
            if(nextIndex == 2) {
                // jQuery里面的animate不支持transform
                // jQuery中通过css加transition也能实现类似animate效果
                $(".p2").css("transform", "translateX(-50%) translateY(-50%) translateZ(0px) scale(1)");
            }else {
                $(".p2").css("transform", "translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)");
            }
            // 第三屏幕
            // 进入第3屏幕时 盒子进入屏幕
            if(nextIndex == 3) {
                $(".p3").css("transform", "translateZ(-50px) rotateX(30deg)")
    			$(".title3").css("transform", "translateZ(0px) rotateX(0deg)")
            }
            // 第四屏幕
            // 进入第4屏幕时 盒子进入屏幕
            if(nextIndex == 4) {
                $(".p3").css("transform","translateZ(-200px) rotateX(-45deg) translateX(3000px)");
                $(".title3").css("transform","translateZ(12000px) rotateY(-60deg)");
            }
        }
    })
})