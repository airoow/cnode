<template>
    <div class="detail">
        <div class="title">
            <div class="title-head">
                <span class="tab" v-if="articleData.good || articleData.top">
                    {{getArticleTab(articleData)}}
                </span>
                <span class="article-title">
                    <b>{{articleData.title}}</b>
                </span>
            </div>
            <div class="title-from">
                <span> • 发布于 {{articleData.create_at | formatDate}} • 作者 {{articleData.author.loginname}} • {{articleData.visit_count}} 次浏览 • 来自 {{getTabFrom(articleData)}}</span>
                <span  v-if="islogin" class="collect" :class="{decollect: articleData.is_collect}" @click="toggleCollect">{{!articleData.is_collect?"收藏":"取消收藏"}}</span>
            </div>
        </div>
        <div class="content markdown-text" v-html="articleData.content"></div>
        <div class="reply">
            <div class="reply-title">
                {{articleData.reply_count}} 回复
            </div>
            <ul class="reply-content">
                <li class="reply-item" v-for="(item, index) in articleData.replies" :key="item.id">
                    <div class="avatar">
                        <router-link :to="{name: 'User', params: {loginname: item.author.loginname}}">
                            <img :src="item.author.avatar_url" alt="头像" :title="item.author.loginname"/>
                        </router-link>
                    </div>
                    <div class="reply-main">
                        <div class="author-msg">
                            <span class="author-name">{{item.author.loginname}} </span>
                            <span class="create-time"> {{index+1}}楼 • {{item.create_at | formatDate}}</span>
                        </div>
                        <div class="reply-msg">
                            <div v-html="item.content"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { detail } from '@/api/topic'
import { collectTopic, decollectTopic } from '@/api/collect'
import { mapState } from 'vuex'
export default {
    name: 'Detail',
    data() {
        return {
            articleData: {
                id: '',
                author_id: '',
                tab: '',
                content: '',
                title: '',
                last_reply_at: '',
                good: false,
                top: false,
                reply_count: '',
                visit_count: '',
                create_at: '',
                author: {
                    loginname: '',
                    avatar_url: ''
                },
                replies: [],
                is_collect: false
            },
            listQuery: {
                mdrender: true,
                accesstoken: this.accesstoken
            },
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapState([
            'islogin',
            'accesstoken'
        ])
    },
    created() {
        this.getArticle()
    },
    methods: {
        getArticle() {
            detail(this.listQuery, this.id).then(response => {
                this.articleData = response.data.data
                console.log(this.articleData)
            })
        },
        getTabFrom(data) {
            if(data.tab === "share") return "分享"
            if(data.tab === "ask") return "问答"
            if(data.tab === "job") return "招聘"
            if(data.tab === "dev") return "测试"
        },
        getArticleTab(data) {
            if(data.top) {
                return "置顶"
            }
            if(data.good) {
                return "精华"
            }
        },
        toggleCollect() {
            if(this.articleData.is_collect === false) {
                collectTopic({accesstoken: this.accesstoken, id: this.id}).then(response => {
                    console.log(response.data.success)
                })
            }
            if(this.articleData.is_collect === true) {
                decollectTopic({accesstoken: this.accesstoken, id: this.id}).then(response => {
                    console.log(response.data.success)
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.markdown-text {
    overflow: hidden;
}
.detail {
    width: calc(100% - 290px);
    .title {
        padding: 10px;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        border-radius: 3px 3px 0 0;
        .title-head {
            color: #333;
            margin: 8px 0;
            font-size: 22px;
            line-height: 32px;
            .tab {
                color: #fff;
                font-size: 12px;
                background-color: $theme-color;
                padding: 2px 4px;
                border-radius: 3px;
                margin-right: 5px;
            }
        }
        .title-from {
            color: #838383;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            .collect {
                background-color: $theme-color;
                color: #fff;
                border-radius: 3px;
                font-size: 14px;
                width: 54px;
                height: 34px;
                line-height: 34px;
                text-align: center;
                cursor: pointer;
                position: relative;
                &:hover::before {
                    display: block;
                    content: '';
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    border-radius: 3px;
                    background: rgba(0, 0, 0, .1)
                }
            }
            .decollect {
                background-color:#e5e5e5;
                color: #333;
                width: 84px;
            }
        }
    }
    .content {
        padding: 10px;
        background-color: #fff;
        color: #333;
        border-radius: 0 0 3px 3px;
    }
    .reply {
        margin-top: 13px;
        .reply-title {
            padding: 10px;
            color: #444;
            font-size: 14px;
            background-color: $card-title-color;
            height: 40px;
            border-radius: 3px 3px 0 0;
        }
        .reply-content {
            background-color: #fff;
            border-radius: 0 0 3px 3px;
            .reply-item {
                padding: 10px;
                border-top: 1px solid #f0f0f0;
                &:nth-child(1) { 
                    border-top: none;
                }
                display: flex;
                justify-content:start;
                .avatar {
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 3px;
                    }
                }
                .reply-main {
                    margin-left: 10px;
                    .author-msg {
                        .author-name {
                            font-weight: 700;
                            font-size: 12px;
                            color: #666;
                        }
                        .create-time {
                            font-size: 11px;
                            color: #08c;
                        }
                    }
                    .reply-msg {
                        margin: 0 0 15px 10px;
                        font-size: 15px;
                        color: #333;
                    }
                }
            }
        }
    }
}
</style>