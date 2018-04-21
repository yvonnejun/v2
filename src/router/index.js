import Vue from 'vue'
import Router from 'vue-router'
import headernav from '@/components/headernav'
import leftnav from '@/components/leftnav'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import elementview from '@/components/elementview'
import elementlayout from '@/components/elementlayout'
import elementlayout2 from '@/components/elementlayout2'
import buildtable from '@/components/buildtable'
import usermanage from '@/components/usermanage'
import login from '@/components/login'
import regist from '@/components/regist'
import events from '@/components/events'
import attr from '@/components/attr'
import express from '@/components/express'
import axios from '@/components/axios'
import baiduSearchbar from '@/components/baidu-searchbar'
import animateVue from '@/components/animate-vue'
import animateVue2 from '@/components/animate-vue2'
import watch from '@/components/watch'
import set from '@/components/set'
import deleteVue from '@/components/delete-vue'
import computed from '@/components/computed'
import filter from '@/components/filter'
import elementuploadfile from '@/components/elementuploadfile'
import drag from '@/components/drag'
import myHello from '@/components/my-hello'
import ebar from '@/components/ebar'
import ebar2 from '@/components/ebar2'
import epie1 from '@/components/epie1'
import epie2 from '@/components/epie2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/headernav',
    //   name: 'headernav',
    //   component: headernav
    // },
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
      component: usermanage,
      children: [
        {
          path: 'login/:username/:password',
          name: 'login',
          component: login,
        },
        {
          path: 'regist',
          name: 'regist',
          component: regist,
        }
      ]
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/attr',
      name: 'attr',
      component: attr
    },
    {
      path: '/express',
      name: 'express',
      component: express
    },
    {
      path: '/axios',
      name: 'axios',
      component: axios
    },
    {
      path: '/baidu-searchbar',
      name: 'baiduSearchbar',
      component: baiduSearchbar
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/delete-vue',
      name: 'deleteVue',
      component: deleteVue
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/filter',
      name: 'filter',
      component: filter
    },
    {
      path: '/elementuploadfile',
      name: 'elementuploadfile',
      component: elementuploadfile
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    },
    {
      path: '/animate-vue',
      name: 'animateVue',
      component: animateVue
    },
    {
      path: '/animate-vue2',
      name: 'animateVue2',
      component: animateVue2
    },
    {
      path: '/my-hello',
      name: 'myHello',
      component: myHello
    },
    {
      path: '/ebar',
      name: 'ebar',
      component: ebar
    },
    {
      path: '/ebar2',
      name: 'ebar2',
      component: ebar2
    },
    {
      path: '/epie1',
      name: 'epie1',
      component: epie1
    },
    {
      path: '/epie2',
      name: 'epie2',
      component: epie2
    },
  ]
})
