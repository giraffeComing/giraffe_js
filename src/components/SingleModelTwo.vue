<template>
    <div>
        <p style="color: salmon; padding: 5px 0 10px 10px">结果F12查看控制台输出</p>
        <img src="../assets/singlemodeltwo.png" alt="">
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
//            匿名函数立即执行
            const config = (function(){
//                静态变量都要大写
                const self = {
                    URL : 'http://jr.sina.com.cn',
                    PORT : '8080',
                    MIN_NUM : 1,
                    MAX_NUM : 10000,
                    COUNT : 100
                };
//                return 返回的一个单体
                return {
//                    取值器
                    getSelf : function (name) {
                        return self[name] ? self[name] : null
                    },
//                    赋值器
                    setSelf : function (name,value) {
                        return self[name] ? self[name] = value : null
                    }
                }
            })();
//            取值URL
            console.log(config.getSelf('URL'));
//            赋值器赋值新端口号
            config.setSelf('PORT','8888');
//            取值新端口号
            console.log(config.getSelf('PORT'))
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
