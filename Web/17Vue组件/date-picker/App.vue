<template>
    <div>
        <DatePicker :value="now"></DatePicker>
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