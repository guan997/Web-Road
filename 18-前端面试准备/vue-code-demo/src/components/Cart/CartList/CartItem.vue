<template>
    <div>
        <span>{{item.title}}</span>&nbsp;
        <span>(购买数量:{{item.quantity}}&nbsp;库存剩余：{{item.inventory}})</span>&nbsp;
        <a href="#" v-if="item.inventory" @click="addClickHandler(item.id, $event)">增加</a>&nbsp;
        <a href="#"  @click="delClickHandler(item.id, $event)">减少</a>&nbsp;
    </div>
</template>

<script>
import event from '../event'
export default {
    props:{
        item:{
            type:Object,
            default(){
                return{

                }
            }
        }
    },
    methods: {
        addClickHandler(id, e){
            e.preventDefault();
            event.$emit('addToCart', id)
        },
        delClickHandler(id, e){
            e.preventDefault();
            event.$emit('delFromCart', id)
        }
    },
}
</script>