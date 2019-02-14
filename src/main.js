// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入库
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import animated from 'animate.css'
import echarts from 'echarts'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import svg from 'svg-progress-bar'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'


// 并且使用它
Vue.use(animated)
Vue.use(iView)
Vue.use(svg,{componentName:'percent-bar'})
// Vue.use(MintUI)
Vue.prototype.$echarts = echarts
// 引入ionic组件
Vue.config.ignoredElements = [
  'ion-app',
  'ion-header',
  'ion-navbar',
  'ion-title',
  'ion-content',
  'ion-button'
];
// 此处为mock的使用方法
require('./Mock/witam_server_mock')



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
