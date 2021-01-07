import Vue from 'vue'
import Router from 'vue-router'
import index from '@/View/index'
import details from '@/View/details'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      // 有鞋带参数的传值
      path: '/details/:id',
      name: 'details',
      props:true,
      component: details,
    }

  ]
})
