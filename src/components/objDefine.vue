<template>
    <div>
        <p>{{this.obj}}</p>
        <img src="../assets/objdefine1.png" alt="">
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                obj:''
            }
        },
        created(){
            this.init();
        },
        methods:{
            init:function () {
                let num = 10;
                let str = 'abcdef';
                let arr = [1,2,3,4,5];
                let fun = function () {
                    console.log(11111)
                };
                let objnew = {aa:'aa'};
                this.obj={
                    num,
                    str,
                    arr,
                    objnew,
//                    方法也可以这么定义，页面没有输出，但是控制台里已经有明确的输出了
                    fun,
                }
                console.log(this.obj)
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
