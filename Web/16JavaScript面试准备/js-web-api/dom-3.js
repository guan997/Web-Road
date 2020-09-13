// 将频繁操作改为一次性操作
const list = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到DOM结构中
const frag = document.createDocumentFragment()

for(let i = 0; i <10; i++){
    const li = document.createElement('li')
    li.innerHTML = 'List item' + i
    frag.appendChild(li)
}

// 都完成后，插入到Dom树中
list.appendChild(frag)