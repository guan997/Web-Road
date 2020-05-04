 // 封装动画的函数(盒子，距离)
 function animate(element,target) {
    // 通过判断，保证页面上只有一个定时器在执行动画
    if (element.timerId) {
        clearInterval(element.timerId);
        timerId = null;
    }
    element.timerId = setInterval(function () {
        // 步进
        var step = 10;
        var current = element.offsetLeft ;
        // 盒子当前的位置
        // 当从400 到 800 执行动画
        // 当从800 到 400 不执行动画

        // 判断如果当前位置 > 目标位置 此时step 要小于0
        if(current > target) {
            step = - Math.abs(step);
        }
        
        if (Math.abs(current - target) < Math.abs(step)) {
            // 停止定时器
            clearInterval(element.timerId);
            // 设置横坐标为500
            element.style.left = target + 'px';
            // 退出函数
            return;
        }
        // 移动盒子
        current += step;
        element.style.left = current + 'px';
    }, 5);
}