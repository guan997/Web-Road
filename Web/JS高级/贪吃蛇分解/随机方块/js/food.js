// 代码不要裸奔
// 包一个匿名函数自执行作用域
// 1.保护内部的成员
// 2.防止全局命名空间污染
;
(function (window, util) {
    var map = document.querySelector('.map');
    // 一般构造函数的职责就是用来初始化数据
    function Food(options) {
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.x = 0;
        this.y = 0;
        this.color = options.color || 'hotlink';
        this.element = document.createElement('div');
        this.init();
    }
    // init 函数是基础功能；用来根据基本数据生成div添加到map地图中
    Food.prototype.init = function () {
        var div = this.element;
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
        // 脱离文档流
        div.style.position = 'absolute';
        this.render(); // 第一次初始化的时候先设置一个随机坐标
        map.appendChild(div);
    }
    // 随机变换坐标的方法，当蛇吃到食物了，让食物的坐标随机改变一下
    Food.prototype.render = function () {
        var div = this.element;
        this.x = util.getRandom(0, map.offsetWidth / this.width)
            * this.width;
        this.y = util.getRandom(0, map.offsetHeight / this.height)
            * this.height;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
    }
    // 导出到全局
    window.Food = Food;
})(window, util)