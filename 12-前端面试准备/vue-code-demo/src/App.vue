<template>
    <div id="app">
        <!-- vue 高级特性 -->
        <!-- <AdvanceUse/> -->
        <!-- vue组件 -->
        <ComponentsDemo/>
        <!-- 购物车 -->
        <!-- <CartDemo/> -->
    </div> 
</template>
<script>
// import AdvanceUse from './components/AdvanceUse/index'
// import ComponentsDemo from './components/ComponentsDemo/index'
import ComponentsDemo from './components/ComponentsDemo/v-model.vue'
// import CartDemo from './components/Cart/index'
export default {
    name:'app',
    components:{
        // AdvanceUse
        ComponentsDemo,
        // CartDemo
    }
}
</script>