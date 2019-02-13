import Vue from 'vue'
import Router from 'vue-router'
import NoFound from '../page/404/404'
import echats from '../page/echarts'
// 需要用到的页面都要在这里导入，这是非懒加载的形式
// import index from '../components/HelloWorld.vue'

Vue.use(Router)

//路由
export default new Router({
  //设置模式
  mode: 'history',
  routes: [
    //重定向，设置首页就是下面的path指的index
    // {
    //   path: '/',
    //   redirect: '/index',
    // },
    // 除去重定向，在这里所有需要使用路由的页面都需要在这里注册，可以看到这里我将上面导入名为index的hellowword.vue这个文件作为首页
    {
      path: '/',
      component: echats
    },
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
