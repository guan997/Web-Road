// 封装一些通用的工具方法，放到util命名空间中
// 1.减少作用于查找范围
// 2.在代码压缩的时候可以减少文件体积
// 3.声明依赖
;
(function (window) {
    var util = {
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }
    // 将内部的util提升到window，外部就可以访问到了
    window.util = util;
})(window)