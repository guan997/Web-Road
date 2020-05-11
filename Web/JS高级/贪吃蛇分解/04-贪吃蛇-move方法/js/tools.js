// 1.减少作用于查找范围
// 2.在代码压缩的时候可以减少文件体积
// 3.声明依赖
;
(function (window) {
    var Tools = {
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    // 将内部的util提升到window，外部就可以访问到了
    window.Tools = Tools;
})(window)
// 或者
// var Tools = {
//     getRandom: function (min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) +  min;
//     }
//   }
