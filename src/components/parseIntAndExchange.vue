<template>
    <div>
        <p>{{num1}}</p>
        <p>{{num2}}</p>
        <p>{{num3}}</p>
        <p>{{a}}</p>
        <p>{{b}}</p>
        <img src="../assets/intexchange1.png" alt="">
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                num1: '',
                num2: '',
                num3: '',
                a: 11,
                b: 22,
            }
        },
        created(){
            this.init()
        },
        methods:{
            init:function () {
                this.num1 = ~~2.33;
                this.num2 = 2.33 | 0;
                this.num3 = 2.33 >> 0;

                this.a ^= this.b;
                this.b ^= this.a;
                this.a ^= this.b;
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
