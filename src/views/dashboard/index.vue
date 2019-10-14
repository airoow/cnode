<template>
    <app-card class="dashboard">
        <template #title>
            <ul class="topic-nav">
                <li v-for='(item, index) in navlist' :key="item.tab" :class="isActive(item)?'active':''">
                    <router-link :to="`/?tab=${item.tab}`" @click.native="reload">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </template>
        <template #content>
            <topic-list :topics="topics"/>
        </template>
    </app-card>
</template>

<script>
import { AppCard, TopicList } from '@/components'
import { fetchList } from '@/api/topic';

export default {
    name: 'Dashboard',
    components: {
        AppCard,
        TopicList
    },
    data() {
        return {
            navlist: [
                {
                    title: "全部",
                    tab: "all",
                    code: 0
                },
                {
                    title: "精华",
                    tab: "good",
                    code: 1
                },
                {
                    title: "分享",
                    tab: "share",
                    code: 2
                },
                {
                    title: "问答",
                    tab: "ask",
                    code: 3
                },
                {
                    title: "招聘",
                    tab: "job",
                    code: 4
                },
                {
                    title: "客户端测试",
                    tab: "dev",
                    code: 5
                }
            ],
            topics: [],
            listQuery: {
                page: 1,
                tab: this.$route.query.tab || 'all',
                limit: 20,
                mdrender: true
            }
            
        }
    },
    created() {
        this.getList()
    },
    methods: {
        isActive(route) {
            // return route.tab === this.$route.query.tab
            if(!this.$route.query.tab && route.tab === "all") return true
            if(route.tab === this.$route.query.tab) return true
        },
        getList() {
            fetchList(this.listQuery).then(response => {
                this.topics = response.data.data
                console.log(this.topics)
            })
        },
        reload() {
            window.location.reload()
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard /deep/ .app-card-content {
    padding: 0;
}
.dashboard {
    width: calc(100% - 290px);
    .topic-nav{
        li {
            display: inline-block;
            color: $theme-color;
            margin: 0 10px;
            font-size: 14px;
            &:hover {
                color: #08c;
            }
        }
        .active {
            background-color: $theme-color;
            color: #fff;
            border-radius: 3px;
            padding: 3px 4px;
        }
    }
}
</style>