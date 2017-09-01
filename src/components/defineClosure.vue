<template>
    <div>
        <p>使用的时候要注意这些各式各样的匿名函数写法的返回值是不一样的，有的返回1，有的返回-1，有的返回ture</p>
        <img src="../assets/defineclosure.png" alt="">
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
            }
        },
        created(){

            ( function() {}() );
            ( function() {} )();
            [ function() {}() ];

            ~ function() {}();
            ! function() {}();
            + function() {}();
            - function() {}();

            delete function() {}();
            typeof function() {}();
            void function() {}();
            new function() {}();
            new function() {};

            var f = function() {}();

            1, function() {}();
            1 ^ function() {}();
            1 > function() {}();

        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
