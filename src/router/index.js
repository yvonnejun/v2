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
import layuiCarousel from '@/components/layui-carousel'
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
import ebar3 from '@/components/ebar3'
import tableViticalScrollbar from '@/components/table-viticalScrollbar'
import epie1 from '@/components/epie1'
import epie2 from '@/components/epie2'
import carousel1 from '@/components/carousel1'

import baseList from '@/components/list/base-list'
import expandGrid from '@/components/list/expand-grid'
import pagerList from '@/components/list/pager-list'

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
    //下面是require=>加载方式，不用写上面的import 导入模块
    // {
      //司法厅 网上预约安置帮扶服务
  //     path: "/sft/wsyyazbfService",
  //     name: "wsyyazbfService",
  //     component: resolve => require(['@/pages/sft/wsyyazbfService'], resolve)
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
      path: '/table-viticalScrollbar',
      name: 'tableViticalScrollbar',
      component: tableViticalScrollbar
    },
    {
      path: '/layui-carousel',
      name: 'layuiCarousel',
      component: layuiCarousel
    },
    {
      path: '/carousel1',
      name: 'carousel1',
      component: carousel1
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
      path: '/ebar3',
      name: 'ebar3',
      component: ebar3
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
    {
      path: '/base-list',
      name: 'baseList',
      component: baseList
    },
    {
      path: '/pager-list',
      name: 'pagerList',
      component: pagerList
    }
  ]
})
