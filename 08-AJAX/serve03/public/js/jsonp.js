function jsonp(options) {
    // 动态创建script
    var script = document.createElement('script')
    // 拼接字符串的变量
    var params = ''
    for (var attr in options.data) {
        params += '&' + attr + '=' + options.data[attr]
    }
    // myJson2143
    var fnName = 'myJsonp' + Math.random().toString().replace('.', '')
    // 它已经不是一个全局函数了
    // 我们要想办法将它变成全局函数
    window[fnName] = options.success
    // 设置src属性
    script.src = options.url + '?callback=' + fnName + params
    // 将script标签追加到页面中
    document.body.appendChild(script)
    // 为script标签添加onload事件
    script.onload = function () {
        // 将body中的script标签删除掉
        document.body.removeChild(script)
    }
}