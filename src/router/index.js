import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/layout.vue';
const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/about',
      component: Layout,
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/view/index.vue'),
          meta: {title: '首页'}
        }, {
          path: '/about',
          name: '/about',
          component: () => import('@/view/about/about.vue') ,
          meta: {title: '关于我'} 
        }, {
          path: '/commen',
          name: '/commen',
          component: () => import('@/view/commen/commen.vue'),
          meta: {title: '留言板'}  
        }, {
          path: '/studynotes',
          name: '/studynotes',
          component: () => import('@/view/studynotes/studynotes.vue'),
          meta: {title: '学习中心'}  
        }
      ] 
    }, 
  ]
})
import store from '@/store/breadcrumb';
route.beforeEach((to,from,next) =>{
  store.commit('addReadcrunbList',to)
  next();
})

export default route;