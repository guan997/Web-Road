<template>
  <div>
    <h1>这是App组件</h1>
    <hr>
    <counter></counter>
    <hr>
    <amount></amount>
  </div> 
</template>

<script>
import counter from "./components/counter.vue"
import amount from "./components/amount.vue"
export default {
  data(){
    return{}
  },
  components:{
    counter,
    amount
  }
}
</script>


<style lang="scss" scoped>
</style>
