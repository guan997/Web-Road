// 获取url参数
// 传统方式
function query(name){
    // 去除url参数中的?
    const search = location.search.substr(1) //类似array.slice()
    // search:'a=10&b=20&c=30'
    // 以^或者&开始，${name}获取name，拼接字符串=，以&或者$为结束
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
    const res = search.match(reg)
    if(res === null){
        return null
    }
    return res[2]
}
console.log(query('b'))

// URLSearchParams
function queryNew(name){
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)
}
console.log(queryNew('b'))

// 传统方式，分析search
function queryToObj(){
    const res = {}
    const search =location.search.substr(1)//去掉前面的`?`
    // 逐步拆分url
    search.split('&').forEach(paramStr => {
        const arr = paramStr.split('=')
        const key = arr[0]
        const val = arr[1]
        res[key] = val
    })
    return res
}
console.log(queryToObj())

// 使用URLSearchParams
function queryToObjNew(){
    const res = {}
    const pList = new URLSearchParams(location.search)
    pList.forEach((val, key) => {
        res[key] = val
    })
    return res
}
console.log(queryToObjNew())