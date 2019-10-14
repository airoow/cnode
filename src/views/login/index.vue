<template>
    <app-card class="login">
        <template #title class="title">
            <router-link to="/" class="home">主页</router-link>
            <span class="slash">/</span>
            <span class="text">登录</span>
        </template>
        <template #content class="app-card-content">
            <div class="form">
                <label for="access">账号</label>
                <input type="text" v-model.trim="token" placeholder="请输入accessToken" id="access" required>
                <input type="submit" class="login-btn" @click="handleLogin" value="登录">
            </div>
        </template>
    </app-card>
</template>

<script>
import { AppCard } from '@/components'
import { mapActions, mapState } from 'vuex'
// import 
export default {
    name: 'Login',
    components: {
        AppCard
    },
    data() {
        return {
            token: ''
        }
    },
    computed: {
        ...mapState([
            'islogin'
        ])
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        handleLogin() {
            this.login({accesstoken: this.token}).then(() =>{
                this.$router.push({path:'/'})
            }).catch(() => {})
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    width: calc(100% - 290px);
    .title {
        font-size: 14px;
        .home {
            color: $theme-color;
            &:hover {
                text-decoration: underline
            }
        }
        .slash {
            color: #ccc;
            padding: 0 5px;
        }
        .text {
            color: #999;
        }
    }
    .app-card-content {
        .form {
            padding: 50px 100px;
            label {
                color: #333;
                padding: 0 15px;
            }
            input {
                padding: 6px 6px;
                border-radius: 3px;
                width: 284px;
                background:none;  
                outline:none;
                border:1px solid #ccc;
            }
            .login-btn {
                display: block;
                padding: 0 10px;
                background-color: #0088cc;
                border-radius: 3px;
                line-height: 34px;
                color: #fff;
                width: fit-content;
                margin: 30px 0 0 15px;
            }
        }
    }
}
</style>