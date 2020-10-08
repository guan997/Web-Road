import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';
import {
  expect
} from 'chai';
import {
  mount
} from '@vue/test-utils';

// mocha执行的时候内部就安装好了，不需要再导入
// Vue.component({
//   template:'xxx',
// })

// let vm = new Vue();
// vm.$mount();

describe('HelloWorld.vue', () => {
  // it()也可以写test()在一些库
  // char库只支持it()
  it('传递属性后能否正常显示结果', () => { //测试组件的ui效果是否和预期相符
    // 原生测试Vue
    // extend方法可以根据实例创建一个类
    let Constructor = Vue.extend(HelloWorld);
    // 把组件进行挂载
    // vm.$el mocha 测试的时候 集成jsdom
    let vm = new Constructor({
      propsData: {
        msg: 'hello'
      }
    }).$mount();
    expect(vm.$el.querySelector('h1').innerHTML).to.be.contain('hello')
  })
})
describe('Hello World .vue', () => {
  it('测试hello world', async() => {
    let wrapper = mount(HelloWorld);
    await wrapper.setProps({
      msg:'hello'
    });
    expect(wrapper.find('h1').text()).to.be.contain('hello');
  })
})