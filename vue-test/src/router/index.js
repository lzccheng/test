import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import test from '@/page/index/test'
import jiudian from '@/page/jiudian/jiudian'
import huiyi from '@/page/huiyi/huiyi'
import ruzhu from '@/page/ruzhu/ruzhu'
import wode from '@/page/wode/wode'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: test
    },
    {
      path: '/jiudian',
      name: 'jiudian',
      component: jiudian
    },
    {
      path: '/huiyi',
      name: 'huiyi',
      component: huiyi
    },
     {
      path: '/ruzhu',
      name: 'ruzhu',
      component: ruzhu
    },
    {
      path: '/my',
      name: 'wode',
      component: wode
    }
  ]
})
