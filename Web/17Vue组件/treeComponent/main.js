import Vue from 'Vue';
import ElementUI from 'element-ui';
// import { Tree } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import Tree from '@/components/Tree';
// Vue.use(Tree);
Vue.use(ElementUI);
export default new Vue({
    el:'#app',
    render: h=>h(App)
})