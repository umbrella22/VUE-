// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRoute from 'vue-router'
import Vuex from 'vuex'
import NoFound from './page/404/404'
// 需要用到的页面都要在这里导入，这是非懒加载的形式
import index from './components/HelloWorld.vue'

Vue.use(VRoute);
Vue.use(Vuex);

//实例化
//数据中心
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  //获取数据
  getters: {
    getTotal(state) {
      return state.totalPrice
    }
  },
  //更改数据中心的状态
  //同步做做出更改
  mutations: {
    increment(state, price) {
      state.totalPrice += price
    },
    decrement(state, price) {
      state.totalPrice -= price
    }
  },
  //可做异步处理
  actions: {
    increase(context, price) {
      context.commit('increment', price);
    }
  }
})
//路由
let router = new VRoute({
  //设置模式
  mode: 'history',
  routes: [
    //重定向，设置首页就是下面的path指的index
    {
      path: '/',
      redirect: '/index',
    },
    // 除去重定向，在这里所有需要使用路由的页面都需要在这里注册，可以看到这里我将上面导入名为index的hellowword.vue这个文件作为首页
    // {
    //   path: '/index',
    //   component: index
    // },
    {
      //这里指的是访问路径
      path: '/404',
      //而这里则是上面已经声明了的页面位置
      component: NoFound,
      //子组件需要在父组件里加入<router-view>
      // childre:[
      // {
      //   path:'red',
      //   component: RedApple
      // }
      // ]
    }
  ]
})
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
