// DOM查询做缓存

// 不缓存DOM查询结果
// for(let i = 0; i < document.getElementsByTagName('p').length; i++){
//     // 每次循环，都会计算length，频繁进行DOM计算
// }

// // 缓存DOM查询结果
// const pList = document.getElementsByTagName('p')
// const length = pList.length
// for(let i = 0; i < length; i++){
//     // 缓存length，只进行一次Dom查询
// }


// 将频繁操作改为一次性操作
const list = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到DOM结构中
const frag = document.createDocumentFragment()

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = 'List item' + i
    frag.appendChild(li)
}

// 都完成后，插入到Dom树中
list.appendChild(frag)