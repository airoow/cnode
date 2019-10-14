<template>
    <ul class="topic-list">
        <li class="topic-list-item" v-for="item in topics" :key="item.id">
            <div class="item-wrap">
                <div class="author">
                    <router-link :to="{name: 'User', params: {loginname: item.author.loginname}}">
                        <img :src="item.author.avatar_url" alt="头像" :title="item.author.loginname" />
                    </router-link>
                </div>
                <div class="count">
                    <span>{{item.reply_count}}</span>/{{item.visit_count}}
                </div>
                <div class="tab" :class="getTab(item).className" v-if="getTab(item).isShow">
                    {{getTab(item).text}}
                </div>
                <router-link class="title" :to="{name: 'Detail', params: {id: item.id}}">
                    {{ item.title }}
                </router-link>
            </div>
            <div class="last-reply-time fr">
                <time>{{ item.last_reply_at | formatDate }}</time>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TopicList',
    props: {
        topics: {
            type: Array,
            default() {
                return []
            },
            require: true
        },
        isShow: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        getTab(topic) {
            if(topic.top) {
                return {
                    text: "置顶",
                    className: "light",
                    isShow: true
                }
            }
            if(topic.good) {
                return {
                    text: "精华",
                    className: "light",
                    isShow: true
                }
            }
            switch(topic.tab) {
                case 'share':
                    return {
                        text: "分享",
                        className: "",
                        isShow: this.isShow
                    }
                case 'ask':
                    return {
                        text: '问答',
                        className: "",
                        isShow: this.isShow
                    }
                case 'job':
                    return {
                        text: '招聘',
                        className: "",
                        isShow: this.isShow
                    }
                case 'dev':
                    return {
                        text: '测试',
                        className: "",
                        isShow: this.isShow
                    };
                default:
                    return {
                        text: '',
                        className: 'default',
                        isShow: this.isShow
                    }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.topic-list {
    background-color: #fff;
    .topic-list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 50px;
        border-top: 1px solid #f0f0f0;
        &:nth-child(1) { 
            border-top: none;
        }
        &:hover {
            background-color: $card-title-color;
        }
        .item-wrap {
            max-width: 800px;
            @include text-ellipsis();
            padding-left: 10px;
            .author {
                display: inline-block;
                position: relative;
                top: 10px;
                img {
                    @include wh(30px, 30px);
                    border-radius: 3px;
                }
            }
            .count {
                width: 70px;
                text-align: center;
                display: inline-block;
                font-size: 10px;
                color: #b4b4b4;
                &>span {
                    color: #9e78c0;
                    font-size: 14px;
                    padding-right: 3px;
                }
            }
            .tab {
                display: inline-block;
                background-color: #e5e5e5;
                color: #999;
                padding: 2px 4px;
                font-size: 12px;
                border-radius: 3px;
                line-height: 16px;
            }
            .light {
                background-color: $theme-color;
                color: #fff;
            }
            .title {
                color: #333;
                font-size: 16px;
                &:active {
                    color: #888;
                }
            }
        } 
        .last-reply-time {
            padding-right: 10px;
            color: #778087;
            font-size: 11px;
        }
    }
}
</style>