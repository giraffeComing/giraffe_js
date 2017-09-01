<template>
    <div>
        <v-tool></v-tool>
        <p>初始数组：[1,2,3,4,5,1,2,3,4,1,2,'aaa','aaa',[12],[12]]</p>
        <p>{{newArr1}}</p>
        <p>{{newArr2}}</p>
        <p>{{newArr3}}</p>
        <img src="../assets/arr1.png" alt="">
        <img src="../assets/arr2.png" alt="">
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
            return {
                newArr1 : [],
                newArr2 : [],
                newArr3 : []
            }
        },
        created(){
            this.init();
        },
        methods:{
            init:function () {
//                方法一
//                Set在使用的时候要new一下，new Set()里面接收一个数组做为参数
//                ...是解构
//                这个方法有一个缺陷，如输出的结果，数组的相同的数组不能被去重
                this.newArr1=[...new Set([1,2,3,4,5,1,2,3,4,1,2,'aaa','aaa',[12],[12]])]
//                方法二
                function unique(arr) {
                    for(var i=0;i<arr.length;i++){

                        for(var j=i+1;j<arr.length;j++){
                            if(arr[i]==arr[j]){
                                arr.splice(j,1);
                                j--
                            }
                        }

                    }
                    return arr
                }
                this.newArr2 = unique([1,2,3,4,5,1,2,3,4,1,2,'aaa','aaa',[12],[12]])
//                方法三,这种方法最为高效，而且数组中的相同的对象也会被去重！！！
                function uniqueArray(obj) {
                    var arr = [];
                    var json = {};

                    for(var i=0;i<obj.length;i++){
                        if(!json[obj[i]]){
                            arr.push(obj[i]);
                            json[obj[i]]=1;
                        }
                    }
                    return arr
                }
                this.newArr3 = uniqueArray([1,2,3,4,5,1,2,3,4,1,2,'aaa','aaa',[12],[12]])
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
