import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'   //首页
import loan from '@/components/loan/loan'   //贷款
import card from '@/components/card/card'   //认证
import my from '@/components/my/my'       //我的
// 我的 子页面
import sign from '@/components/my/sign'       //登录
import Order from '@/pages/Order'       //订单
import myapple from '@/pages/myapple'       //我的申请
import mybrowse from '@/pages/mybrowse'       //浏览足迹
import myservice from '@/pages/myservice'       //客服中心
import complain from '@/pages/complain'       //投诉反馈

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/my',
      name: 'my',
      component: my
      // component: resolve => require(['@/components/my/my'], resolve)
    },
    // 我的 登录页面
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    // 订单
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    // 常用功能
    {
      path: '/myapple',
      name: 'myapple',
      component: myapple,
    },
    {
      path: '/mybrowse',
      name: 'mybrowse',
      component: mybrowse
    },
    {
      path: '/myservice',
      name: 'myservice',
      component: myservice
    },
    {
      path: '/complain',
      name: 'complain',
      component: complain
    },
  ],
  mode:"history"
})
