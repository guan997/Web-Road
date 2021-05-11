<template>
    <div id="app">
        <!-- 基本使用 -->
        <!-- watch -->
        <BaseUse/>
        <!-- vue 高级特性 -->
        <!-- <AdvanceUse/> -->
        <!-- vue组件 -->
        <!-- <ComponentsDemo/> -->
        <!-- 购物车 -->
        <!-- <CartDemo/> -->
    </div> 
</template>
<script>
// import AdvanceUse from './components/AdvanceUse/index.vue'
// import ComponentsDemo from './components/ComponentsDemo/index'
import BaseUse from './components/BaseUse/Todo.vue'
// import ComponentsDemo from './components/ComponentsDemo/v-model.vue'
// import CartDemo from './components/Cart/index'
export default {
    name:'app',
    components:{
        // AdvanceUse
        // ComponentsDemo,
        BaseUse
        // CartDemo
    }
}
</script>