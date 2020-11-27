// 引入router模块
const getRouter = require('router');

// 获取路由对象
const router = getRouter();

// 引入path模板
const path = require('path');

// 引入模板引擎
const template = require('art-template');

// // 引入处理日期的第三方模块
const dateformat = require('dateformat');

// 引入querystring模块
const querystring = require('querystring');

//  配置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat; 

// 学生信息集合
const Student = require('../model/user')

// 呈递学生档案信息页面
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
})
// 呈递学生档案信息列表页面
router.get('/list', async(req, res) => {
    const students = await Student.find();
    // console.log(students);
    let html = template('list.art', {
        students:students
    });
    res.end(html);
})

// 实现学生档案信息页面
router.post('/add', (req, res) => {
    // 接收post请求参数
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async () => {
        await Student.create(querystring.parse(formData))
            .then(result => console.log(result))
            .catch(error => {
                // console.log(error);
                // 获取错误信息
                const err = error.errors;
                // 循环错误信息对象
                for (var attr in err) {
                    // 将错误信息打印到控制台中
                    console.log(err[attr]['message']);
                }
            });
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();
    })
})
// 暴露router让外部可用
module.exports = router;
