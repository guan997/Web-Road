$(function() {
    setTimeout(function() {
         $("div").addClass("comein");
        },200);
    $("div").removeClass("comein");
    $("#fullpage").fullpage({
        // 显示项目符号
        navigation: true,
        // 循环滚动
        loopBottom: true,
        onLeave: function(index, nextIndex, direction) {
            if(nextIndex != 1) {
                // 如果不是第一屏幕，就给背景添加旋转
                $("#bg").addClass("rotate");
            }else {
                $("#bg").removeClass("rotate");
            }
        }
    })
})