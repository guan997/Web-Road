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