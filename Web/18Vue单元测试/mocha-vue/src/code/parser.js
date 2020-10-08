export let parser = (str) => {//name=adffa
    let obj = {};
    str.replace(/([^&=]*)=([^&=]*)/g,function(){
        obj[arguments[1]] = arguments[2];
    });
    return obj;//{name:adffa}
}
export let stringify = (obj) => {//{name:'asd'}
    let arr = [];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join('&'); //name=asd
}
// 前端测试的时候，1.自测不会保留测试代码，测试代码会混在源码中
// console.log(parser('name=asd')) //{ name: 'asd' }
// console.log(parser('name=1'))//{ name: '1' }
// console.log(stringify({name:'asd'}))//name=asd