<template>
    <div>
        <p style="color: salmon; padding: 5px 0 10px 10px">结果F12查看控制台输出</p>
        <p style="color: lightpink; padding: 5px 0 10px 10px; font-weight: bold">雅虎YUI框架整体就是基于单体进行封装的，可以学习一下YUI源码</p>
        <img src="../assets/singlemodelone.png" alt="">
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        created(){
//            单体内部方法与变量间的调用记得加命名空间或者this
            const People = {
                name : 'Giraffe',
                step : 0,
                say : function () {
                    console.log(this.name)
                },
                run : function () {
                    this.step++;
                    console.log(this.step)
                },
//                初始化
                init : function () {
                    this.say();
                    this.run();
                }
            };
            People.init();
//            通过命名空间可以访问其内部封装的方法
            People.say();
//            通过命名空间可以访问其内部定义的局部变量
            console.log(People.name);
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
