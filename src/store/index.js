import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//实例化
//数据中心
export default new Vuex.Store({
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