<template>
    <div>
        <span>{{item.title}}</span>&nbsp;
        <span>{{item.price}}元</span>&nbsp;
        <a href="#" @click="clickHandler(item.id, $event)">加入购物车</a>
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
        clickHandler(id, e){
            e.preventDefault();
            event.$emit('addToCart', id)
        }
    },
}
</script>