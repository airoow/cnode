<template>
    <app-card class="dashboard">
        <template #title>
            <ul class="topic-nav">
                <li v-for='item in navlist' :key="item.tab" :class="isActive(item)?'active':''">
                    <router-link :to="`/?tab=${item.tab}`" @click.native="reload">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </template>
        <template #content>
            <topic-list :topics="topics"/>
            <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
        </template>
    </app-card>
</template>

<script>
import { AppCard, TopicList, Pagination } from '@/components'
import { fetchList } from '@/api/topic';

export default {
    name: 'Dashboard',
    components: {
        AppCard,
        TopicList,
        Pagination
    },
    data() {
        return {
            navlist: [
                {
                    title: "全部",
                    tab: "all"
                },
                {
                    title: "精华",
                    tab: "good"
                },
                {
                    title: "分享",
                    tab: "share"
                },
                {
                    title: "问答",
                    tab: "ask"
                },
                {
                    title: "招聘",
                    tab: "job"
                },
                {
                    title: "客户端测试",
                    tab: "dev"
                }
            ],
            topics: [],
            listQuery: {
                page: 1,
                tab: this.$route.query.tab || 'all',
                limit: 20,
                mdrender: true
            },
            total: 995
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