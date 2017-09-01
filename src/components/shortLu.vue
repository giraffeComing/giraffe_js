<template>
    <div>
        <img src="../assets/shortLu.png" alt="">
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
            this.init();
        },
        methods:{
            init:function () {
                let a,b,c,d;
//                &&和||的运算正好是相反的
                a = b && 1;
//                相当于
                if(b){a = 1} else{a = b}

                c = d || 1;
//                相当于
                if(d){c = d}else{c = 1}

                function boo(int) {
//                    三目运算
                    return int>10 ? true : false;
                }
//                结合函数一起用
                function fun() {
                    console.log(11111)
                }
//                原来短路运算可以用来保证函数的执行顺序
//                参数是100会执行
                boo(100) && fun();
//                参数是1就不会执行fun
                boo(1) && fun();
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
