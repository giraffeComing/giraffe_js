<template>
    <div>
        <v-tool></v-tool>
        <p>实例说明，用for循环给ul中的每个li绑定独立的点击事件，弹出点击li的索引值</p>
        <p>方法一：for循环匿名函数包装器</p>
        <ul ref="ul1">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <p>方法二：匿名函数返回闭包for循环与闭包</p>
        <ul ref="ul2">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <img src="../assets/closure.png" alt="">
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
            return {}
        },
        mounted(){
            this.init();
        },
        methods:{
            init:function () {
                let ul1=this.$refs.ul1;
                let ul2=this.$refs.ul2;
                let aLi1=ul1.getElementsByTagName('li');
                let aLi2=ul2.getElementsByTagName('li');
//                for循环中的匿名函数包装器
                for(var j=0;j<aLi1.length;j++){
//                    用这种的匿名函数创建一个封闭的作用域
                    (function (j) {
//                        这个没有用到闭包
                        aLi1[j].onclick=function () {
                            alert(j)
                        }

                    })(j)
                }

                for(var j=0;j<aLi2.length;j++){
                    (function (j) {
//                        同上面的区别就在这里了，这里返回的是闭包
                        return (function () {
                            aLi2[j].onclick=function () {
                                alert(j)
                            }
                        })()

                    })(j)
                }

            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
