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
import VThreemu from '../components/threeMu.vue'
import VCloneAndDeepClone from '../components/CloneAndDeepClone.vue'
import VTailCallFun from '../components/TailCallFun.vue'
import VObjectTypeTest from '../components/ObjectTypeTest.vue'
import VInStanceOf from '../components/InStanceOf.vue'
import VSingleModelOne from '../components/SingleModelOne.vue'
import VSingleModelTwo from '../components/SingleModelTwo.vue'
import VSingleModelThree from '../components/SingleModelThree.vue'
import VJqueryComponent from '../components/jqueryComponent.vue'

Vue.use(Router);

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
      // 三目
      {
          path: '/threemu',
          name: 'VThreemu',
          component: VThreemu
      },
      // 浅克隆与深克隆
      {
          path: '/deepclone',
          name: 'VCloneAndDeepClone',
          component: VCloneAndDeepClone
      },
      // 尾调函数
      {
          path: '/tailcall',
          name: 'VTailCallFun',
          component: VTailCallFun
      },
      // 对象类型检测
      {
          path: '/typetest',
          name: 'VObjectTypeTest',
          component: VObjectTypeTest
      },
      // 构造函数检查
      {
          path: '/instanceof',
          name: 'VInStanceOf',
          component: VInStanceOf
      },
      // 单体模式之模块化封装
      {
          path: '/singlemodelone',
          name: 'VSingleModelOne',
          component: VSingleModelOne
      },
      // 单体模式之静态变量
      {
          path: '/singlemodeltwo',
          name: 'VSingleModelTwo',
          component: VSingleModelTwo
      },
      // 单体模式之惰性单体
      {
          path: '/singlemodelthree',
          name: 'VSingleModelThree',
          component: VSingleModelThree
      },
      // jquery组件化
      {
          path: '/jquerycomponent',
          name: 'VJqueryComponent',
          component: VJqueryComponent
      },
  ]
})
