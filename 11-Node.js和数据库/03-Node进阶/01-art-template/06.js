const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');

// 导入模板变量
template.defaults.imports.dateFormat = dateFormat;

// const views = path.join(__dirname, 'views','06.art');
// const views2 = path.join(__dirname, 'views','05.art');
// const views3 = path.join(__dirname, 'views','04.art');

// 设置模板的根目录
template.defaults.root = path.join(__dirname,'views');

// 配置模板的默认后缀
template.defaults.extname = '.html';

// 只需要写模板名字就可以设置模板目录
const html = template('06.art',{
    time:new Date()
})

console.log(template('07', {}));
console.log(html);
