<template>
    <div>
        <input type="text" v-model="title">
        <button @click="addTitle">add</button>
    </div>
</template>
<script>
import event from './event'
export default {
    data() {
        return {
            title:''
        }
    },
    methods: {
        addTitle(){
            // 调用父组件的事件
            // $emit()触发当前实例上的事件。附加参数都会传给监听器回调。
            this.$emit('add', this.title)

            // 调用自定义事件 
            // vue本身具有自定义事件功能，event是vue实例
            event.$emit('onAddTitle', this.title)
            this.title = ''
        }
    }
}
</script>