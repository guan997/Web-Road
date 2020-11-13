const fs = require('fs');

let promise = new Promise((resolve, reject) => {
    fs.readFile('./11.txt', 'utf8', (err, result) => {
        if(err != null){
            reject(err);
        }else{
            resolve(result);
        }
    })
})

promise.then((result) => {
    console.log('成功返回的结果',result);
}).catch((err) => {
    console.log('失败返回的结果',err);
})