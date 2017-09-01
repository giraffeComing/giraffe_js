<template>
    <div>
        <v-tool></v-tool>
        {{rate}}
        <img src="../assets/splice-rate.png" alt="">
    </div>
</template>

<script>
    import VTool from './tools.vue'
    export default {
        name: '',
        components: {
            VTool
        },
        data () {
            return {
                rate:''
            }
        },
        created(){
            this.init()
        },
        methods:{
            init:function () {
                let rate = 3;
//                这个小实例将splice使用到了出神入化了，学习这个例子的真正意义在于灵活使用数组的splice方法
                this.rate = "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
