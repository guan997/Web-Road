// 使用自调用函数，创建一个新的局部作用域，防止命名冲突
(function () {
    // 记录游戏对象
    var that;
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.start = function () {
        // 1.把蛇和食物对象，渲染到地图上
        this.food.render(this.map);
        // this.snake.move();
        this.snake.render(this.map);
        // 2.开始游戏的逻辑
        // 2.1 让蛇移动起来
        // 2.2 当蛇遇到边界游戏结束
        runSnake();
        // 2.3 通过键盘控制蛇移动的方向
        bindKey();
        // 2.4 当蛇遇到食物
    }
    // 通过键盘控制蛇移动的方向
    function bindKey() {
        document.addEventListener('keydown', function (e) {
            // console.log(e.keyCode);
            // 37 left
            // 38 top
            // 39 right
            // 40 bottom
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        },false);
    }
    // 私有的函数 让蛇移动
    function runSnake() {
        var timerId = setInterval(function () {
            // 让蛇走一格
            // 在定时器的function中this是指向window对象的
            // this.snake
            // 要获取游戏对象中的蛇属性
            that.snake.move(that.food,that.map);
            that.snake.render(that.map);
            // 2.2 当蛇遇到边界游戏结束
            // 获取蛇头的坐标
            var maxX =that.map.offsetWidth / that.snake.width;
            var maxY =that.map.offsetHeight / that.snake.height;
            var headX =that.snake.body[0].x;
            var headY = that.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                alert('Game over');
                clearInterval(timerId);
            }
            if (headY < 0 || headY >= maxY) {
                alert('Game over');
                clearInterval(timerId);
            }

        }, 150);
    }
    // 暴露构造函数给外部
    window.Game = Game;
})();
