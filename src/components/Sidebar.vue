<template>
    <div class="sidebar">
        <div class="author" v-if="islogin">
            <div class="title">
                个人信息
            </div>
            <div class="content">
                <div class="author">
                    <router-link :to="{name: 'User', params: {loginname: loginname}}">
                        <img :src="avatar_url" alt="头像" :title="loginname"/>
                        <span>{{loginname}}</span>
                    </router-link>
                </div>
                <div class="score">积分：{{score}}</div>
                <div class="label">"<i>这家伙很懒，什么个性签名都没有留下。</i>"</div>
            </div>
        </div>
    </div>
</template>

<script>
import { AppCard } from '@/components'
import { mapState } from 'vuex'

export default {
    name: 'Sidebar',
    computed: {
        ...mapState([
            'islogin',
            'loginname',
            'avatar_url',
            'score'
        ])
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    width: 290px;
    margin-left: 15px;
    .title {
        font-size: 13px;
        color: #51585c;
        padding: 10px;
        background-color: $card-title-color;
        height: 40px;
        border-radius: 3px 3px 0 0;
    }
    .content {
        padding: 10px;
        background-color: #fff;
        border-radius: 0 0 3px 3px;
        .author {
            a {
                display: flex;
                align-items: center;
                img {
                    width: 48px;
                    height: 48px;
                    margin-right: 10px;
                }
                span {
                    color: #778087;
                    font-size: 16px;
                }
            }
        }
        .score {
            color:#333;
            font-size: 14px;
            margin-top: 15px;
        }
        .label {
            font-size: 13px;
            color:#333;
            margin-top: 10px;
        }
    }
}
</style>