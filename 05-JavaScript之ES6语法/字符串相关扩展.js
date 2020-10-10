// 字符串相关扩展
// includes()
// 判断字符串中是否包含指定的子串（有的话返回true，否则返回false）
//             参数一：匹配的子串;参数二：从第几个开始匹配
// startWith() 判断字符串是否以特定的子串开始
// endWith() 判断字符串是否以特定的子串结束
// 模块字符串

// console.log('hello world'.includes('world',6)); //6 true 7 false 
// let url = 'admin/index.php';
// console.log(url.startsWith('aadmin'));
// ---
let obj = {
    username : 'list',
    age : '12',
    gender : 'male'
}
let tag = '<div><span>'+obj.username+'</span><span>'+
obj.age+'</span><span>'+obj.gender+'</span></div>'
console.log(tag);
// 反引号表示模板，模板中的内容可以有格式，通过${}方式填充数据
let fn = function(info){
    return info;
}
let tql = `
    <div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.gender}</span>
        <span>${1 + 1}</span>
        <span>${fn('niniao')}</span>
    </div>
`;
console.log(tql);
