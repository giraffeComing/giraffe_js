<template>
    <div>
        <v-tool></v-tool>
        <p class="len">{{len}}</p>
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
        <router-link :to="{name: 'VObjDefine'}">
            对象定义的新玩法
        </router-link>
        <router-link :to="{name: 'VDefineclosure'}">
            匿名函数的N种定义形式
        </router-link>
        <router-link :to="{name: 'VParseIntAndExchange'}">
            位运算与数字取整和数值交换
        </router-link>
        <router-link :to="{name: 'VShortLu'}">
            短路运算
        </router-link>
        <router-link :to="{name: 'VPromise'}">
            Promise
        </router-link>
    </div>
</template>

<script>
    import VTool from './tools.vue'
    export default {
        name: '',
        components: {
            VTool
        },
        mounted(){
            this.len = document.querySelectorAll('a').length;
            Array.prototype.forEach.call(document.querySelectorAll('a'),
                dom => dom.style.outline = `1px solid #${parseInt(Math.random() *
                    Math.pow(2,24)).toString(16)}`);
        },
        data () {
            return {
                len:'',
            }
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
