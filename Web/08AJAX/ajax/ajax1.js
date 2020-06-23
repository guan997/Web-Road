function ajax(obj) {
    // 默认参数
    var defaults = {
        type: 'get',
        data: {},
        url: '#',
        dataType: 'text',
        async: true,
        success: function (data) { console.log(data) }
    }
    // 处理形参，传递参数的时候就覆盖默认参数，不传递就使用默认参数
    for (var key in obj) {
        defaults[key] = obj[key];
    }
    // 1、创建XMLHttpRequest对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 把对象形式的参数转化为字符串形式的参数
    /*
    {username:'zhangsan','password':123}
    转换为
    username=zhangsan&password=123
    */
   
}