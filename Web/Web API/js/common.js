function my$(id) {
    return document.getElementById(id);
}


// 处理浏览器兼容性
// 获取第一个元素
function getFirstElementChild(element) {
    var node, nodes = element.childNodes, i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}
// 获取下一个兄弟元素
function getElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}

// 处理innerText和textContent的兼容性
// 设置标签之间的内容
function setInnerText(element, content) {
    // 判断当前浏览器是否支持 innerText
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

function liMouseOver() {
    // 鼠标经过高亮显示
    this.style.backgroundColor = 'yellow';
}
function liMouseOut() {
    // 鼠标离开高亮显示
    this.style.backgroundColor = '';
}
// 处理注册事件的兼容性问题
// eventName, 不带on， click mouseover  mouserout
function addEventListener(element, eventName, fn) {
    // 判断当前浏览器是否支持addEventListener 方法
    if (element.addEventListener) {
        element.addEventListener(eventName, fn);
        // 第三个参数 默认是false
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, fn);
    } else {
        // 相当于element.onclick = fn;
        element['on' + eventName] = fn;
    }
}

// 处理移除事件的兼容性问题
function removeEventListener(element, eventName, fn) {
    // 判断当前浏览器是否支持addEventListener 方法
    if (element.removeEventListener) {
        element.removeEventListener(eventName, fn);
        // 第三个参数 默认是false
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, fn);
    } else {
        // 相当于element.onclick = null;
        element['on' + eventName] = null;
    }
}
// 获取页面滚动距离的浏览器兼容性问题
// 获取页面滚动出去的距离
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    }

}
// 获取鼠标在页面的位置，处理浏览器兼容性
function getPage(e) {
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;
    return {
        pageX: pageX,
        pageY: pageY
    }
}
