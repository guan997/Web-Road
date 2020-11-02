// 作用域
let a, h
for (let i = 0; i < 10; i++) {
    // 如果i是全局作用域，则弹出来的li都为10，因为addEventListener不会立即执行
    // 故把li设置为块级作用域
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(i) //10
    })
    document.body.appendChild(a)
}
h = document.createElement('h3')
h.innerHTML = '创建10个<a>标签，点击的是时候弹出来对应的序号'
document.body.appendChild(h)