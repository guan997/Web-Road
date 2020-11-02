<!--
 * @Description: In User Settings Edit
 * @Author: guan997
 * @Date: 2020-10-07 20:40:19
 * @LastEditTime: 2020-10-09 12:52:36
 * @LastEditors: guan997
 -->
<template>
    <div>
         <!-- :value="now" @input="val=>value=val" -->
        <DatePicker v-model="now"></DatePicker>
    </div>
</template>
<script>
import DatePicker from './date-picker'
export default {
    components:{
        DatePicker
    },
    data() {
        return {
            now:new Date()
        }
    },
}
</script>