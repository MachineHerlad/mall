import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import toast from "./components/common/toast"
import FastClick from "fastclick"
import VueLazyload from "vue-lazyload";
import vant from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false
//添加事件总线对象
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

//解决移动端点击300ms的延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/home/loading.png')
})

//使用vant
Vue.use(vant)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

