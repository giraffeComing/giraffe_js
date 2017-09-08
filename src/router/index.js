import Vue from 'vue'
import Router from 'vue-router'
import AnonymousFunction from '../components/AnonymousFunction.vue'
import VIndex from '../components/index.vue'
import VClosure from '../components/closure.vue'
import VArrayUnique from '../components/ArrayUnique.vue'
import VRate from '../components/Rate.vue'
import VObjDefine from '../components/objDefine.vue'
import VDefineclosure from '../components/defineClosure.vue'
import VParseIntAndExchange from '../components/parseIntAndExchange.vue'
import VShortLu from '../components/shortLu.vue'
import VPromise from '../components/Promise.vue'

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
      },
      // Set数组去重（数组去重的最简方法）
      {
          path: '/arrunique',
          name: 'VArrayUnique',
          component: VArrayUnique
      },
      // 一行代码写个评分组件
      {
          path: '/rate',
          name: 'VRate',
          component: VRate
      },
      // 对象定义的新玩法
      {
          path: '/objdefine',
          name: 'VObjDefine',
          component: VObjDefine
      },
      // 匿名函数的多种定义形式
      {
          path: '/defineclosure',
          name: 'VDefineclosure',
          component: VDefineclosure
      },
      // 位运算与数值取整和数值交换
      {
          path: '/parseIntAndExchange',
          name: 'VParseIntAndExchange',
          component: VParseIntAndExchange
      },
      // 短路运算
      {
          path: '/shortlu',
          name: 'VShortLu',
          component: VShortLu
      },
      // Promise
      {
          path: '/promise',
          name: 'VPromise',
          component: VPromise
      },
  ]
})
