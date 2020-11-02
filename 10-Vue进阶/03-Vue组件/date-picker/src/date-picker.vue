<!--
 * @Description: In User Settings Edit
 * @Author: guan997
 * @Date: 2020-10-07 20:40:19
 * @LastEditTime: 2020-10-09 12:52:36
 * @LastEditors: guan997
 -->
<template>
  <div v-clickOutSide>
    <input type="text" :value="formatDate" />
    <!-- @focus="focus" @blur="blur" -->
    <div class="panel" v-if="isVisible">
      <!-- 这时候点击不到button就触发blur事件 ,找到document添加事件委托-->
      <div class="panel-nav">
        <span @click="preYear">&lt;</span>
        <span @click="preMonth">&lt;&lt;</span>
        <span>{{time.year}}年</span>
        <span>{{time.month + 1}}月</span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span @click="nextYear">&gt;</span>
      </div>
      <div class="panel-content">
        <div class="days">
          <span v-for="j in 7" :key="`_` + j" class="cell">{{
            weekDays[j - 1]
          }}</span>
          <!-- 列出一个6*7的列表  -->
          <div v-for="i in 6" :key="i">
            <!-- notCurrentMonth判断是不是当月，不是当月就变灰 -->
            <span
              v-for="j in 7"
              :key="j"
              class="cell cell-days"
              @click="chooseDate(visibleDays[(i - 1) * 7 + (j - 1)])"
              :class="[
                {
                  notCurrentMonth: !isCurrentMonth(
                    visibleDays[(i - 1) * 7 + (j - 1)]
                  ),
                },
                { today: isToday(visibleDays[(i - 1) * 7 + (j - 1)]) },
                { select: isSelect(visibleDays[(i - 1) * 7 + (j - 1)]) },
              ]"
            >
              {{ visibleDays[(i - 1) * 7 + (j - 1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
      <div class="panel-footer">今天</div>
    </div>
  </div>
</template>
<script>
import * as utils from "./util";
export default {
  directives: {
    clickOutSide: {
      //自定义指令(操作dom)，判断当前点击的是否是div外面
      //指令的生命周期
      bind(el, bindings, vnode) {
        //eslint-disable-line no-unused-vars
        //把事件绑定到document上，看一下点击的是否是当前这个元素内部
        let handler = (e) => {
          if (el.contains(e.target)) {
            // 如果el中包含e.target
            //   判断一下是否当前面板已经显示出来了
            if (!vnode.context.isVisible) {
              vnode.context.focus();
            }
          } else {
            //el中不包含e.target
            //   判断一下是否当前面板已经显示出来了
            if (vnode.context.isVisible) {
              vnode.context.blur();
            }
          }
        };
        // 把handler绑定到dom上
        el.handler = handler;
        // 绑定点击事件
        document.addEventListener("click", handler);
      },
      unbind(el) {
        // 解绑点击事件
        document.removeEventListener("click", el.handler);
      },
    },
  },
  data() {
    let {year, month} = utils.getYearMonthDay(this.value);
    // 界面中的时间应该以列表头部时间为准
    return {
      weekDays:['日','一','二','三','四','五','六'],
      time:{year, month},
      isVisible: false, //这个变量控制面板是否可见
    };
  },
  // 父给子传值， 子组件不能更改父组件的数据，可以触发父组件的事件
  props: {
    value: {
      type: Date,
      // 默认值是当前时间
      // Invalid default value for prop "value": Props with type Object/Array must use a factory function to return the default value
      // 返回的默认值必须是函数类型(){}
      default: () => new Date(),
    },
  },
  methods: {
    focus() {
      //显示面板
      this.isVisible = true;
    },
    blur() {
      //隐藏面板
      this.isVisible = false;
    },
    // 判断是不是当月
    isCurrentMonth(date){
      // 现在知道当前用户传入的值 2020 10 9 2020 4 23 2020 11 8
       let {year,month} = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month,1));
       let {year:y,month:m} = utils.getYearMonthDay(date);
       return year === y && month === m ;
    },
    // 是否是今天
    isToday(date){
       let {year,month,day} = utils.getYearMonthDay(new Date());
       let {year:y,month:m,day:d} = utils.getYearMonthDay(date);
       return year === y && month === m && day === d;
    },
    chooseDate(date){
      // 更新日期
      this.time= utils.getYearMonthDay(date);
      // 关闭图层时给父组件传值
      this.$emit('input', date);
      this.blur(); //关闭弹层
    },
    isSelect(date){
      // 获取当前的年月日
      let {year,month,day} = utils.getYearMonthDay(this.value);
      let {year:y,month:m,day:d} = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    preMonth(){//上一月
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() - 1);
      // console.log(d);
      this.time = utils.getYearMonthDay(d);
    },
    nextMonth(){//下一月
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() + 1);
      this.time = utils.getYearMonthDay(d);
    },
    preYear(){//上一年
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setFullYear(d.getFullYear() - 1);
      // console.log(d);
      this.time = utils.getYearMonthDay(d);
    },
    nextYear(){//下一年
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setFullYear(d.getFullYear() + 1);
      this.time = utils.getYearMonthDay(d);
    }
  },
  mounted() {
    // console.log(this.visibleDays);
    this.visibleDays;
  },
  computed: {
    //   可见的日期
    visibleDays() {
      //   获取当前是周几 (组件中的年月根据头的年月显示)
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1));
      // 获取当前月份的第一天
      let currentFirstDay = utils.getDate(year, month, 1);
      // 先生成一个当前时间  2020 10 8 2020 10 1
      // 获取当前是 周几 => 把天数往前移动几天
      let week = currentFirstDay.getDay();
      // 往前移动几天 当前开始的天数
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24;
      // 循环42天
      let arr = [];
      for(let i = 0; i < 42; i++){
          arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24))
      }
      return arr;
    },
    //   格式化日期
    formatDate() {
      let { year, month, day } = utils.getYearMonthDay(this.value);
      // getFullYear getMonth GetDate
      return `${year}-${month + 1}-${day}`;
    },
  },
};
</script>

<style>
.panel {
  width: 224px;
  position: absolute;
  background: #fff;
  box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;
}
.panel .panel-nav {
  display: flex;
  justify-content: space-around;
  height: 30px;
}
.panel .panel-nav span {
  cursor: pointer;
  /* 禁止选中 */
  user-select: none;
}
.panel-content .cell {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-weight: bold;
  box-sizing: border-box;
}
.panel-content .cell-days:hover,.select{
  border: 1px solid pink;
}
.panel-footer {
  height: 30px;
  text-align: center;
}
.notCurrentMonth {
  color: gray;
}
.today {
  background: red;
  color: #fff;
  border-radius: 4px;
}
</style>