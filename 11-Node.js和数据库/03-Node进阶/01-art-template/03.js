const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views','03.art');
const html = template(views,{
    users: [{
        name:'张三',
        age:20,
        sex:'男'
    },{
        name:'李四',
        age:23,
        sex:'男'
    },{
        name:'迈瑞',
        age:19,
        sex:'女'
    }
    ]
})
console.log(html);