<template>
    <div class="collection">
        <div class="card-header collection-title">
            <router-link to="/" class="home">主页</router-link>
            <span class="slash">/</span>
            <span class="user-collection"> {{$route.params.loginname}} 收藏的话题</span>
        </div>
        <div class="card-content">
            <topic-list :topics="data" v-if="data.length>0"/>
            <div v-else class="no-collect">无话题收藏</div>
        </div>
    </div>
</template>

<script>
import { getUserCollections } from '@/api/collect'
import { TopicList } from '@/components'
export default {
    name: 'Collection',
    data() {
        return {
            data: []
        }
    },
    components: {
        TopicList
    },
    created() {
        this.getUserCollections()
    },
    methods: {
        getUserCollections() {
            getUserCollections(this.$route.params.loginname).then(response => {
                const { data } = response.data
                this.data = data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.collection {
    width: calc(100% - 290px);
    .collection-title {
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
        .user-collection {
            color: #999;
        }
    }
    .no-collect {
        padding: 10px;
        padding-bottom: 20px;
    }
}
</style>