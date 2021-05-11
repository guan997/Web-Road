<template>
    <div>
        <button @click="changeState('A')">A</button>
        <button @click="changeState('B')">B</button>
        <button @click="changeState('C')">C</button>
        <!-- tab 切换 缓存不需要重复渲染-->
        <keep-alive>
            <KeepAliveStateA v-if="state === 'A'"/>
            <KeepAliveStateB v-if="state === 'B'"/>
            <KeepAliveStateC v-if="state === 'C'"/>
        </keep-alive>
    </div>
</template>

<script>
import KeepAliveStateA from './KeepAliveStateA'
import KeepAliveStateB from './KeepAliveStateB'
import KeepAliveStateC from './KeepAliveStateC'
export default {
    components:{
        KeepAliveStateA,
        KeepAliveStateB,
        KeepAliveStateC
    },
    data() {
        return {
            state:'A'
        }
    },
    methods: {
        changeState(state){
            this.state = state;
        }
    },
}
</script>