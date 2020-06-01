<style lang="zh_CN">
    div {
        text-align: center;
        font-size: 2em;
    }
</style>

<template>
    <div>{{greeting}}</div>
</template>

<script>
    module.exports = {
        data() {
            return {
                greeting: "hello",
            }
        },
    }
</script>