const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views','02.art');
const html = template(views,{
    name:'小明',
    age:17,
    content:'<h1>输出与原文输出</h1>'
})
console.log(html);