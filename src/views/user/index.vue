<template>
    <div class="user">
        <app-card class="user-msg">
            <template #title class="title">
                <router-link to="/" class="home">主页</router-link>
                <span class="slash">/</span>
            </template>
            <template #content class="app-card-content">
                <div class="author">
                    <router-link :to="`/user/${$route.params.loginname}`">
                        <img :src="data.avatar_url" alt="头像" :title="data.loginname"/>
                    </router-link>
                    <span>{{data.loginname}}</span>
                </div>
                <div class="score">{{data.score}}积分</div>
                <div class="collect-count" v-if="collectionCount"><router-link :to="`/collection/${$route.params.loginname}`">{{collectionCount}}个话题收藏</router-link></div>
                <div class="github"><span>@{{data.githubUsername}}</span></div>
                <div class="create-at">注册时间 {{data.create_at | formatDate}}</div>
            </template>
        </app-card>
        <div class="recent-topics">
            <div class="card-header topics-title">
                最近创建的话题
            </div>
            <div class="card-content">
                <topic-list :isShow="false" :topics="data.recent_topics" :color="color"/>
            </div>
        </div>
        <div class="recent-replies">
            <div class="card-header topics-title">
                最近参与的话题
            </div>
            <div class="card-content">
                <topic-list :isShow="false" :topics="data.recent_replies" :color="color"/>
            </div>
        </div>
    </div>
</template>

<script>
import { AppCard, TopicList } from '@/components'
import { getUserDetails } from '@/api/user'
import { getUserCollections } from '@/api/collect'
export default {
    name: 'User',
    components: {
        AppCard,
        TopicList
    },
    data() {
        return {
            data: {
                loginname: '',
                avatar_url: '',
                githubUsername: '',
                create_at: '',
                score: null,
                recent_topics: [],
                recent_replies: []
            },
            collectionCount: null,
            color: "#08c"   
        }
    },
    created() {
        this.getUserDetails()
        this.getUserCollections()
    },
    methods: {
        getUserDetails() {
            getUserDetails(this.$route.params.loginname).then(response => {
                const { data } = response.data
                this.data = data
            })
        },
        getUserCollections() {
            getUserCollections(this.$route.params.loginname).then(response => {
                this.collectionCount = response.data.data.length
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.user {
    width: calc(100% - 290px);
    .user-msg {
        .title {
            font-size: 14px;
            border-bottom: 1px solid #f0f0f0;
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
        }
        .app-card-content {
            .author {
                position: relative;
                img {
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                }
                span {
                    color: #778087;
                    font-size: 14px;
                    position: absolute;
                    top: 5px;
                }  
            }
            .score {
                color:#333;
                font-size: 14px;
                margin-top: 15px;
            }
            .collect-count, .github {
                color: #778087;
                font-size: 14px;
                padding-top: 10px;
            }
            .create-at {
                color: #ababab;
                margin: 10px 0;
                font-size: 14px;
            }
        }
    }
    .recent-topics {
        margin-top: 13px;
        .topics-title {
            font-size: 14px;
        }
    }
    .recent-replies {
        margin-top: 13px;
        .topics-title {
            font-size: 14px;
        }
    }
}
</style>