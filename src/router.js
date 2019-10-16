import Vue from 'vue'
import Router from 'vue-router'
//import Dashboard from '@/views/dashboard'

const Message = () => import('@/views/message')
const Login = () => import('@/views/login')
const User = () => import('@/views/user')
const Detail = () => import('@/views/detail')
const Collection = () => import('@/views/collection')
const Dashboard = () => import('@/views/dashboard')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:loginname',
      name: 'User',
      component: User
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/collection/:loginname',
      name: 'Collection',
      component: Collection
    }
  ]
})
