<template>
    <div class="app-card">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="app-card-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCard'
}
</script>

<style lang="scss" scoped>
.app-card {
    .title {
        padding: 10px;
        background-color: $card-title-color;
        height: 40px;
        border-radius: 3px 3px 0 0;
    }
    .app-card-content {
        padding: 10px;
        background-color: #fff;
        border-radius: 0 0 3px 3px;
    }
}
</style>