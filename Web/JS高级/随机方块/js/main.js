;
(function (window, document, unit, Food, Snake) {
    var foods = [];
    for (var i = 0; i < 10; i++) {
        foods.push(new Food({
            color: `rgb(${util.getRandom(0, 256)},
            ${util.getRandom(0,256)},${util.getRandom(0,256)})`
        }))
    }
    window.setInterval(function () {
        foods.forEach(function (item) {
            item.render();
        })
    },500)
})(window, document, util, Food)