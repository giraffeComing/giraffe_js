<template>
    <div>
        <p style="color: salmon; padding: 5px 0 5px 8px">结果F12查看控制台输出</p>
        <img src="../assets/singlemodelthree.png" alt="">
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

//            匿名函数执行完之后再返回了一个函数
            const LazySingle = (function(){
                let instance = null;
                function single(){
                    return {
                        name : 'giraffe',
                        sayName : function (i) {
//                            调用单体内部的变量要用this
                            console.log(this.name);
                            this.name = i;
                        }
                    }
                }
                return function () {
//                    惰性单例如果是首次创建才走if
//                    虽然最下面两次调用了LazySingle()，但是1只会在控制台输出一次
                    if(!instance){
//                        惰性生成单例
                        instance = single();
                        console.log(1)
                    }
                    return instance
                }
            })();
//            LazySingle是个立即执行函数的返回值，但是返回的是个函数，
//            当此函数再次执行的时候才会真正返回一个单体对象，
//            所以叫做惰性单体，
//            而不是一上来就通过匿名函数创建好的单体
            LazySingle().sayName('newName');
            console.log(LazySingle().name)
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
