<template>
    <div>
        <v-tool></v-tool>
        <img src="../assets/threemu01.png" alt="">
        <img src="../assets/threemu02.png" alt="">
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
//            调用连续三目的方法
            this.lianXuSanMu();
//            调用嵌套的三目
            this.qianTaoSanMu();
            this.aaa=window;
            window.name='hello world'

            setTimeout(()=>{
                window.name='hellossss world'
            },3000)
        },
        watch:{
            aaa:function () {
                console.log('adasdasdasdasdasds')
            }
        },
        methods:{
            lianXuSanMu:function () {
//                定义三个测试的函数
                function fn1() {console.log(1)}
                function fn2() {console.log(2)}
                function fn3() {console.log(3)}
//                定义两个测试布尔值
                let t = true;
                let f = false;
                /**********************正常的if else********************/
                if( t&&f ){
                    fn1()
                }else if( !t&&f ){
                    fn2()
                }else if( t&&!f ){
                    fn3()
                }
                /**********************改写成三目********************/
                t&&f ? fn1() : !t&&f ? fn2() : t&&!f ? fn3() : null;
//            语言描述：
//            判断t&&f是真还是假，如果是真返回fn1,如果是假判断!t&&f是真还是假，
//            是真返回fn2，如果是假判断t&&!f是真还是假，
//            是真返回fn3,是假返回null
            },
            qianTaoSanMu:function () {
                let ifStepOneTrue = false;
                let ifStepTwoTrue = false;
                let ifStepThreeTrue = true;
                /**********************正常的if else********************/
                if(ifStepOneTrue){
                    if(ifStepTwoTrue){
                        console.log(1)
                    }else{
                        console.log(2)
                    }
                }else{
                    if(ifStepThreeTrue){
                        console.log(3)
                    }else{
                        console.log(4)
                    }
                }
                /**********************改写成三目********************/
                ifStepOneTrue ?
                    (
                        ifStepTwoTrue ?
                            console.log(1):
                            console.log(2)
                    ) :
                    (
                        ifStepThreeTrue ?
                            console.log(3):
                            console.log(4)
                    )
            }
        },
        data () {
            return {
                aaa:''
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
