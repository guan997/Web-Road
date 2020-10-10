// 获取元素
var box = my$('box');
var arr = my$('arr');
var arrLeft = my$('left');
var arrRight = my$('right');

var screen = box.children[0];
var ul = screen.children[0];
var ol = screen.children[1];

//  动态获取图片数量
var count = ul.children.length;
// 图片的宽度
var imgWidth = screen.offsetWidth;
for (var i = 0; i < count; i++) {
    var li = document.createElement('li');
    ol.appendChild(li);
    setInnerText(li, i + 1);
    // if( i === 0) {
    //     li.className = 'current';
    // }
    // 点击序号 动画切换图片
    li.onclick = liClick;
    //  让当前li记录它的索引
    // 设置标签的自定义
    li.setAttribute('index', i)
}
function liClick() {
    // 取消其他li的高亮显示，让当前li高亮显示
    for (var i = 0; i < ol.children.length; i++) {
        var li = ol.children[i];
        li.className = '';
    }
    // 让当前的li高亮显示
    this.className = 'current';
    // 点击图片，动画的方式切换到当前点击的图片位置
    // 获取自定义属性
    var liIndex = parseInt(this.getAttribute('index'));
    animate(ul, -liIndex * imgWidth);
    // 全局变量liindex 和li中的index保持一致
    index = liIndex;
}
// 让序号1高亮显示
ol.children[0].className = 'current';

// 鼠标放到盒子上显示箭头
// mouseenter   mouseleave     不会触发事件冒泡
// mouseover   mouseout        会触发事件冒泡
box.onmouseenter = function () {
    arr.style.display = 'block';
    // 清除定时器
    clearInterval(timerIdTwo);
}
box.onmouseleave = function () {
    arr.style.display = 'none';
    // 重新开启定时器
    timerIdTwo = setInterval(function () {
        arrRight.click();
    }, 2000)
}
// 实现上一张下一张的功能
// 下一张
var index = 0;// 第一张图片的索引
arrRight.onclick = function () {
    // 判断是否是克隆的第一张图片，如果是克隆的第一张图片，此时修改ul
    // 的坐标，显示真正的第一张图片
    if (index === count) {
        ul.style.left = '0px';
        index = 0;
    }
    // 总共有5张图片，但是还有一张克隆的图片  克隆的图片的索引是5
    // 4 < 5
    index++;
    if (index < count) {
        // animate(ul,-i * imgWidth);
        // 获取图片对应的序号，让序号点击
        ol.children[index].click();
    } else {
        // 如果是最后一张图片以动画的方式，移动到克隆的第一张图片
        animate(ul, -index * imgWidth);
        // 取消所有的高亮显示，让第一序号高亮显示
        for (var i = 0; i < ol.children.length; i++) {
            var li = ol.children[i];
            li.className = '';
        }
        ol.children[0].className = 'current';
    }
}
// 上一张
arrLeft.onclick = function () {
    // 如果当前是第一张图片，此事要偷偷的切换到最后一张图片的位置
    // （克隆第一张图片）
    if (index === 0) {
        index = count;
        ul.style.left = - index * imgWidth + 'px';
    }
    index--;
    ol.children[index].click();
    // // 如果不是第一张的话，index--
    // if (index > 0) {
    //     index--;
    //     // animate(ul,-i * imgWidth);
    //     ol.children[index].click();
    // }
}
// 无缝滚动
// 获取ul中的第一个li
var firstLi = ul.children[0];
// 克隆li cloneNode() 复制节点
// 参数 true 复制节点中的内容
// false只复制当前节点，不复制里面的内容
var cloneLi = firstLi.cloneNode(true);
ul.appendChild(cloneLi);
// 自动切换图片
var timerIdTwo = setInterval(function () {
    // 切换到下一张图片
    arrRight.click();
}, 2000)