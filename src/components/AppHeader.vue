<template>
    <div class='layout-header'>
        <router-link :to="{ path: '/', query: { tab: 'all' }}" class="logo fl">
            <img :src="logo" />
        </router-link>  
        <nav class='nav fr'>
            <router-link to="/" @click.native="reload">首页</router-link>
            <router-link to="/message" v-if="islogin"><span v-if="messageCount>0" class='unread-msg'>{{messageCount}}</span>未读消息</router-link>
            <router-link to="/login" v-if="!islogin">登录</router-link>
            <a class="aa" @click="logout" v-if="islogin">退出</a>
        </nav>
    </div>
</template>

<script>
import logoImg from "@/assets/images/logo.svg"
import { mapState } from 'vuex'
export default {
    name: 'AppHeader',
    data() {
        return {
            logo: logoImg,
            messageCount: null
        }
    },
    computed: {
        ...mapState([
            'islogin'
        ])
    },
    methods: {
        reload() {
            this.$router.push({ path: '/', query: { tab: 'all' }})
        },
        logout() {
            this.$store.commit('SET_LONGIN_STATUS')
            this.$router.push({ path: '/', query: { tab: 'all' }})
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-header {
    @include wh(100%, $layout-header-height);
    background-color: $header-color;
    position: relative;
    padding: 0 5%;
    .logo {
        @include wh(120px, 28.19px);
        padding-top: 8px;
    }   
    .nav {
        line-height: 50px;
        color: #ccc;
        a {
            padding: 10px 15px;
            font-size: 13px;
            &:hover {
                color: #fff;
            }
            .unread-msg {
                color: #fff;
                font-size: 14px;
                background-color: $theme-color;
                margin-right: 7px;
                padding: 1px 5px;
                border-radius: 50%;
            }
        }
    }
}
</style>