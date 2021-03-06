import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router.js';
import http from './utils/http.js';
import store from './store/index.js';
import changeAvatar from  './bus/changeAvatar.js';

// Vue-Cli自带的配置，不用管
Vue.config.productionTip = false;

// 使用路由插件
Vue.use(VueRouter);
// 使用UI插件
Vue.use(iView);
// 将http对象写在Vue的原型上
Vue.prototype.$http = http;
//使用头像管理插件（自己编写的）
Vue.use(changeAvatar)
// 实例化Vue
new Vue({
    render: h => h(App),
    // 路由
    router,
    store
}).$mount('#app');
