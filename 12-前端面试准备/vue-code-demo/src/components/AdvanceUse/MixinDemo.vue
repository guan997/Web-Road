<template>
    <div>
        <p>{{name}} {{job}} {{city}}</p>
        <button @click="showName">显示姓名</button>
    </div>
</template>

<script>
import  myMixin from './mixin' 
export default {
    mixins:[myMixin],//可以添加多个，会合并起来
    data() {
        return {
            name:'淘大宝',
            job:'淘系技术部'
        }
    },
    methods: {
        
    },
    mounted() {// eslint-disable-next-line
        console.log('component mounted', this.name)
    },
}
</script>