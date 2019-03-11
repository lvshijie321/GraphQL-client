import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld.1'
import Page from '@/components/Page'
import Auth from '@/components/Auth'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloWorld1',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },

  ]
})
