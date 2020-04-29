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
    var el =element;
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
    }else {
        element.textContent = content;
    }
}

function liMouseOver () {
    // 鼠标经过高亮显示
    this.style.backgroundColor = 'yellow';
}
function liMouseOut() {
    // 鼠标离开高亮显示
    this.style.backgroundColor = '';
}