<template>
    <div>
        <router-link :to="{name: 'AnonymousFunction'}">
            匿名函数与闭包
        </router-link>
        <router-link :to="{name: 'VClosure'}">
            for循环给li加点击事件与闭包
        </router-link>
        <router-link :to="{name: 'VArrayUnique'}">
            数组去重的几种方法
        </router-link>
        <router-link :to="{name: 'VRate'}">
            用splice一行写评分组件
        </router-link>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        mounted(){
            Array.prototype.forEach.call(document.querySelectorAll('a'),
                dom => dom.style.outline = `1px solid #${parseInt(Math.random() *
                    Math.pow(2,24)).toString(16)}`)
        },
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

a{
    display: inline-block;
    padding: 5px 10px;
    margin-right: 5px;
}
</style>
