<template>
    <div id="jqueryBody">
        <p style="color: salmon; padding: 0px 0 5px 6px">jquery的写法在vue中要做改动才能生效，<br>本示例只提供jquery组件化的骨架结构，<br>并没有实际的运行结果</p>
        <img src="../assets/jquery01.png" alt="">
        <img src="../assets/jquery02.png" style="position: relative; left: -1px" alt="">
    </div>
</template>
<script>
//    引入jquery
    import $ from 'jquery'
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        created(){
//            其实就是面向对象的编程，构造函数，属性，方法，new实例化
//            构建一个匿名函数立即执行的环境，创建一个局部作用域
            !(function(window,$,undefined){
                var winpop=function(opt,callback){
//                    配置属性及回调函数
                    var defaults={
                        headercon:'',
                        popdes:''
                    }
                    this.options= $.extend({},defaults,opt);
                    this.$body=$('#jqueryBody');
                    this.$popbg=$(htmls.popbg);
                    this.$wraper=$(htmls.pwraper);
//                    回调函数
                    if(callback !='undefined'){
                        if(typeof callback == 'function'){
                            this.callback=callback;
                        }
                    }else{
                        throw new Error ('callback need function')
                    }
                }
//                原型下定义各种属性及方法
                winpop.prototype={
                    okclick:function(){
//                        ...
                    },
                    eventclick:function(){
//                        ...
                    },
                    alertpop:function () {
//                        ...
                    },
                    confimpop:function () {
//                        ...
                    }
                };
            }(window,$));
//            使用的时候先new一下，实例化
            var win = new winpop(
                {headercon:'提示', popdes:'请谨慎操作？'},
                function(){console.log("回调函数")}
                );
//            然后再在实例上进行方法的调用
            $('#open').on('click',function(){
                win.alertpop();
            });
            $("#alert").on('click',function(){
                win.confimpop();
            })
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .pop-bg{
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000000;
        opacity: .5;
        z-index:1;
    }
    .p-wraper{
        position: relative;
        background-color: white;
        font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        width: 478px;
        padding: 17px;
        border-radius: 5px;
        text-align: center;
        z-index: 999;
        margin: 50px auto;

    }

    .p-heaer{
        margin-bottom: 20px;
    }
    .p-wraper .p-des{
        color: #575757;
        font-size: 26px;
        text-align: center;
        font-weight: 500;
        text-transform: none;
        position: relative;
        margin: 25px 0;
        padding: 0;
        line-height: 40px;
        display: block;
    }
    .p-wraper button{
        background-color: #8CD4F5;
        color: white;
        border: none;
        box-shadow: none;
        font-size: 17px;
        font-weight: 500;
        -webkit-border-radius: 4px;
        border-radius: 5px;
        padding: 10px 32px;
        margin: 26px 5px 0 5px;
        cursor: pointer;
    }
    .p-wraper .p-confim .btn-cancel{
        background-color: rgb(221, 107, 85);
    }
</style>
