const mongoose = require('mongoose');
// 创建学生集合规则
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        // 必须字段
        require:[true,'请传入学生姓名'],
        // 字符串的最小长度
        minlength:[2,'学生姓名最小长度不能小于2'],
        // 字符串的最大长度
        maxlength:[10,'学生姓名最大长度不能超过10'],
        // 去除字符串两边的空格
        trim:true
    },
    age:{
        type:Number,
        // 数值的最小范围
        min:[10,'年龄太小'],
        // 数值的最大范围
        max:[25,'年龄太大']
    },
    sex:{type:String},
    email:String,
    hobbies:[String],
    collage:String,
    enterDate:{
        type:Date,
        // 默认值
        default:Date.now
    }
});
// 创建学生信息集合
const Student = mongoose.model('Student', studentSchema);
// 将学生信息集合进行导出
module.exports = Student;