<template>
    <div>
        <!-- <p>父组件初始化完才能初始化子组件，子组件渲染完才能渲染父组件</p> -->
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.title}}
                <button @click="deleteItem(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
import event from './event'
export default {
    props:{
        // prop类型和默认值
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{}
    },
    methods: {
        deleteItem(id){
            this.$emit('delete', id)
        },
        addTitleHandler(title){// eslint-disable-next-line
            console.log('on add title', title)
        }
    },
    created() {// eslint-disable-next-line
        console.log('list created')
    },
    mounted(){// eslint-disable-next-line
        console.log('list mounted')
        // 绑定自定义事件
        event.$on('onAddTitle', this.addTitleHandler)
    },
    beforeUpdate() {// eslint-disable-next-line
        console.log('list before update')
    },
    updated() {// eslint-disable-next-line
        console.log('list updated')
    },
    beforeDestroy() {// eslint-disable-next-line
        console.log('list before Destroy')
        // 及时销毁，否则可能造成内存泄露
        event.$off('onAddTitle', this.addTitleHandler)
    },
}
</script>