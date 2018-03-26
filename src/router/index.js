import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import elementview from '@/components/elementview'
import elementlayout from '@/components/elementlayout'
import elementlayout2 from '@/components/elementlayout2'
import buildtable from '@/components/buildtable'
import usermanage from '@/components/usermanage'

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
      path: '/elementlayout2',
      name: 'elementlayout2',
      component: elementlayout2
    },
    {
      path: '/buildtable',
      name: 'buildtable',
      component: buildtable
    },
    {
      path: '/usermanage',
      name: 'usermanage',
      component: usermanage
    },
  ]
})
