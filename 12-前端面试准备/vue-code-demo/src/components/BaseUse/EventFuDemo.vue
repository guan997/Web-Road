<template>
    <div>
        <!-- 事件修饰符 -->

        <!-- 阻止单击事件继续传播 -->
        <a href="#" v-on:click.stop="doThis">stop</a>
        <!-- 提交事件不在重载页面 -->
        <form action="#" v-on:submit.prevent="doThis">submit.prevent</form>
        <!-- 修饰符可以串联 -->
        <a href="#" v-on:click.stop.prevent="doThis">stop.prevent</a>
        <!-- 只有修饰符 -->
        <form action="#" v-on:submit.prevent>submit.prevent</form>
        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素出发的时间先在此处理，然后才由内部元素进行处理 -->
        <div v-on:click.capture="doThis">capture</div>
        <!-- 只在当event。target是在当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThis">self</div>

        <!-- 按键修饰符 -->
        <button @click.ctrl="onClick">ctrl</button>
        <!-- 有且只有ctrl被按下的时候才触发 -->
        <button @click.ctrl.exact="onClick">ctrl.exact</button>
        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick">exact</button>
    </div>
</template>

<script>
export default {
    methods: {
        doThis(event){
            // eslint-disable-next-line
            console.log(event.target)
        },
        onClick(event){
            // eslint-disable-next-line
            console.log(event.target)
        }
    },
    mounted() {
    },
}
</script>