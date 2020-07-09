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
    })
})