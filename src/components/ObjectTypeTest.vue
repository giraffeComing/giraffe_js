<template>
    <div>
        <p style="color: salmon">推荐最可靠最万能的方法Object.prototype.toString.call()</p>
        <img src="../assets/typetest01.png" alt="">
        <img src="../assets/typetest02.png" alt="">
        <p class="title">Object.prototype.toString.call()检测原始结果：</p>
        <div v-html="result"></div>
        <p class="title">Object.prototype.toString.call()检测正则处理结果：</p>
        <div v-html="result3"></div>
        <p class="title">constructor检测结果：</p>
        <div v-html="result2"></div>
        <p class="title">
            检测结果说明：null和undefined的数据类型没法检测出来<br>
            TypeError: Cannot read property 'constructor' of null<br>
            TypeError: Cannot read property 'constructor' of undefined
        </p>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                result:'',
                result2:'',
                result3:'',
                objTest:{
                    objStr : 'abcdefg',
                    objNum : 12345,
                    objBool : true,
                    objNull : null,
                    objUndefine : undefined,
                    objFuc : function(){let i=1},
                    objArray : [1,2,3,'a','b','c'],
                    objJson : { name : 'Giraffe', sex : 'man' }
                }
            }
        },
        mounted(){
            this.objTypeTest(this.objTest);
        },
        methods:{
            objTypeTest : function(obj){
//                方法一 : Object.prototype.toString.call
                for(var i in obj){
                    this.result += Object.prototype.toString.call(obj[i])+'</br>'
//                    稍微变下形，正则匹配一下
                    this.result3 += Object.prototype.toString.call(obj[i]).replace(/^\[object (.+)\]$/, '$1').toLowerCase()+'</br>'
                }
//                方法二 : 借助constructor属性
                for(var i in obj){
//                    加了异常处理之后就不会飘红了，看着就优雅多了
                    try{
                        this.result2 += obj[i].constructor + '</br>'
                    }catch(e){
                        console.log(e)
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .title{
        margin-top: 10px;
        color: orange;
    }
</style>
