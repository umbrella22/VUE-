// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 导入动画css
import animated from 'animate.css'

// 并且使用它
Vue.use(animated)
// 此处为mock的使用方法
// require('./Mock/witam_server_mock')



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
