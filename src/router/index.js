import Vue from 'vue'
import Router from 'vue-router'
import AnonymousFunction from '../components/AnonymousFunction.vue'
import VIndex from '../components/index.vue'
import VClosure from '../components/closure.vue'

Vue.use(Router)

export default new Router({
  routes: [
      //路由重定向
      { path: '/', redirect: '/index'},
      { path: '*', redirect: '/index'},
      // 首页
      {
          path: '/index',
          name: 'VIndex',
          component: VIndex
      },
      // 匿名函数与闭包
      {
          path: '/anonymous',
          name: 'AnonymousFunction',
          component: AnonymousFunction
      },
      // for循环与闭包
      {
          path: '/closure',
          name: 'VClosure',
          component: VClosure
      }
  ]
})
