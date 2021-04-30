import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

import store from '../store'

Vue.use(Router)
Vue.component('vue-router', Router)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'top',
    component: () => import(
      '../components/Todo.vue'
    )
  },
  {
    path: '/hello-world',
    name: 'helloWorld',
    component: () => import(
      '../components/HelloWorld.vue'
    ),
  },
] 

const router = new Router({
  mode: 'history',
  
  routes
})

export default router