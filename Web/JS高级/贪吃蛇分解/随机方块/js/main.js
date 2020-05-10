;
(function (window, document, unit, Food, Snake) {
    // 创建数组
    var foods = [];
    for (var i = 0; i < 10; i++) {
        // 把创建好的方块对象添加到数组中
        foods.push(new Food({
            color: `rgb(${util.getRandom(0, 256)},
            ${util.getRandom(0, 256)},${util.getRandom(0, 256)})`
        }))
    }
    window.setInterval(function () {
        foods.forEach(function (item) {
            item.render();
        })
    }, 500)
})(window, document, util, Food)