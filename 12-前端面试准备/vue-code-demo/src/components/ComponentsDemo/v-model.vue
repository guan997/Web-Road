<template>
    <div>
        <input type="text" :value="text" @input="$emit('change', $event.target.value)">
        {{text}}
    </div>
    <!-- 使用：value不使用v-model -->
    <!-- change和model.event对应起来 -->
</template>

<script>
export default {
    model:{
        prop:'text',//对应到props：text
        event: 'change'
    },
    props: {
        text:String
    }
}
</script>