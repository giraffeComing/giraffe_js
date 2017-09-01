<template>
    <div>
        <v-tool></v-tool>
        <p>匿名函数中返回闭包：</p>
        <p>{{increaseData}}</p>
        <p>{{decreaseData}}</p>
        <p>{{getNum}}</p>
        <img src="../assets/anonymous.png" alt="">
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
                getNum:'',
                increaseData:'',
                decreaseData:'',
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init:function () {

                //定义了一个闭包，并且把它的返回值付给anonymousFun
                let anonymousFun=(function () {
//                    匿名函数内定义一个局部变量
                    let num=10;
//                    匿名函数执行之后的返回值
                    return {
//                        局部变量和参数相加的方法
                        increase:function (i) {
                            return num + i
                        },
//                        局部变量和参数相减的方法
                        decrease:function (j) {
                            return num - j
                        },
//                        获取局部变量的方法
                        get:function () {
                            return num
                        }
                    }
                })()

                this.increaseData=anonymousFun.increase(100);
                this.decreaseData=anonymousFun.decrease(100);
                this.getNum=anonymousFun.get();


            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
