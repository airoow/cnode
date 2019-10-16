import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/style/index.scss'
import NProgress from 'nprogress'//引入nprogress
import * as filters from './filters'
import '@/style/element-variables.scss'//修改element主题色

Vue.config.productionTip = false

NProgress.configure({ showSpinner: false }) // NProgress 配置

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
