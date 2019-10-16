<template>
    <div class="message">
        <div class="new-msg">
            <div class="card-header title">
                <router-link to="/" class="home">主页</router-link>
                <span class="slash">/</span>
                <span class="text">新消息</span>
            </div>
            <div class="card-content content">
                <div v-if="data.hasnot_read_messages.length>0">
                    有消息
                </div>
                <div v-else class="no-msg">
                    无消息
                </div>
            </div>         
        </div>
        <div class="old-msg">
            <div class="card-header title">
                过往信息
            </div>
            <div class="card-content content">
                <div v-if="data.has_read_messages.length>0">
                    <ul>
                        <li v-for="(item, index) in data.has_read_messages" :key="index">
                            <router-link :to="{name: 'User', params: {loginname: item.author.loginname}}">
                                <span>{{item.author.loginname}}</span>
                            </router-link>
                                回复了你的话题 
                            <router-link :to="{name: 'Detail', params: {id: item.topic.id}}">  
                                <span>{{item.topic.title}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div v-else class="no-msg">
                    无消息
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getMessages } from '@/api/message'
export default {
    name: 'Message',
    data() {
        return {
            queryList: {
                accesstoken: this.$store.state.accesstoken,
                mdrender: "true"
            },
            data: {
                has_read_messages: [],
                hasnot_read_messages: []
            }
        }
    },
    created() {
        this.getMessages()
    },
    methods: {
        getMessages() {
            getMessages(this.$store.state.accesstoken).then(response => {
                const { data } = response.data
                this.data = data
            })
        }
        
    }
}
</script>

<style lang="scss" scoped>
.message {
    width: calc(100% - 290px);
    .new-msg {
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
        .content {
            .no-msg {
                padding: 10px;
                font-size: 14px;
                padding-bottom: 20px;
            }
        }
    }
    .old-msg {
        margin-top: 13px;
        .title {
            font-size: 14px;
        }
        .content {
            .no-msg {
                padding: 10px;
                font-size: 14px;
                padding-bottom: 20px;
            }
            ul {
                li {
                    padding: 10px;
                    color: #333;
                    font-size: 14px;
                    background-color: #fff;
                    border-top: 1px solid #f0f0f0;
                    line-height: 40px;
                    span {
                        color: #08c;
                    }
                }
            }
        }
    }
}
</style>
