<template>
  <div id="app">
    <app-header />
    <div class="content">
      <app-main />
      <sidebar />
    </div>
    <app-footer />
    <back-to-top />
  </div>
</template>

<script>
import { AppHeader, AppFooter, AppMain, Sidebar, BackToTop } from '@/components'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    AppMain,
    Sidebar,
    BackToTop
  },
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  .content {
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
  }
}
</style>
