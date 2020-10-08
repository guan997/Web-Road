<template>
    <div v-click-outside>
        <input type="text" :value="formatDate">
         <!-- @focus="focus" @blur="blur" -->
        <div class="panel" v-if="isVisible">
            <!-- 这时候点击不到button就触发blur事件 ,找到document添加事件委托-->
            content<button></button>
        </div>
    </div>
</template>
<script>
import * as utils from './util'
export default {
    directives:{
        clickOutSide:{//指令的生命周期 
            bind(el,bindings,vnode){
                //把事件绑定到document上，看一下点击的是否是当前这个元素内部
                let handler = (e) => {
                    if(el.contains(e.target)){
                        console.log('包含');
                    }else{
                        console.log('不包含');
                    }
                }
                // 把handler绑定到dom上
                el.handler = handler;
                // 绑定点击事件
                document.addEventListener('click',handler);
            },
            unbind(el){
                // 解绑点击事件
                document.removeEventListener('click',el.handler);
            }
        }
    },
    data(){
        return{
            isVisible:false //这个变量控制面板是否可见
        }
    },
    // 父给子传值， 子组件不能更改父组件的数据，可以触发父组件的事件
    props:{
        value:{
            type:Date,
            // 默认值是当前时间
            // Invalid default value for prop "value": Props with type Object/Array must use a factory function to return the default value
            // 返回的默认值必须是函数类型(){}
            default:()=>new Date()
        }
    },
    methods: {
        // 鼠标点击显示面板
        focus(){
            this.isVisible= true;
        },
        // 鼠标离开隐藏面板
        blur(){
            this.isVisible = false
        }
    },
    computed: {
        formatDate(){
            let {year,month,day} = utils.getYearMontDay(this.value);
            // getFullYear getMonth GetDate
            return `${year}-${month+1}-${day}`
        }
    },
}
</script>

<style>
</style>