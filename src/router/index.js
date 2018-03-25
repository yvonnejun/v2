import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import elementview from '@/components/elementview'
import elementlayout from '@/components/elementlayout'
import buildtable from '@/components/buildtable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/elementview',
      name: 'elementview',
      component: elementview
    },
    {
      path: '/elementlayout',
      name: 'elementlayout',
      component: elementlayout
    },
    {
      path: '/buildtable',
      name: 'buildtable',
      component: buildtable
    }
  ]
})
