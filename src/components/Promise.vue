<template>
    <div>
        <v-tool></v-tool>
        111
    </div>
</template>

<script>
    import VTool from './tools.vue'
    export default {
        name: '',
        components: {
            VTool
        },
        created(){

            function fn() {
                console.log('函数fn执行');
                console.log('这里是执行fn自身代码的地方');
                return new Promise(function(resolve,reject){
                    console.log('新建了Promise对象');
                    setTimeout(function () {
                        console.log('延时执行resolve函数');
                        resolve()
                    },3000)
                })
            }
            fn().then(function () {
                setTimeout(function () {
                    console.log('这里是最后resolve里面要执行的代码');
                },2000)
            }).then(function () {
                console.log('第二个then')
            })

        },
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
