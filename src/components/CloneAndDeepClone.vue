<template>
    <div>
        深度克隆
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        methods:{

//            最简单粗暴的对象深拷贝，不足时没法进行方法的拷贝
            easyDeep: function () {
                let arr = ['old', 1, true, ['old1', 'old2'], {old: 1}];

                let new_arr = JSON.parse( JSON.stringify(arr) );

                console.log(new_arr);
            },

//            看到的一种深克隆，效果有待考究
            deepClone : function (data) {
                var t = type(data), o, i, ni;
                if(t === 'array') {
                    o = [];
                }else if( t === 'object') {
                    o = {};
                }else {
                    return data;
                }
                if(t === 'array') {
                    for (i = 0, ni = data.length; i < ni; i++) {
                        o.push(deepClone(data[i]));
                    }
                    return o;
                }else if( t === 'object') {
                    for( i in data) {
                        o[i] = deepClone(data[i]);
                    }
                    return o;
                }
            },

            test : function() {
                let obj1 = { a: 0 , b: { c: 0}};
                let obj2 = Object.assign({}, obj1);
                console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

                obj1.a = 1;
                console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
                console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

                obj2.a = 2;
                console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
                console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

                obj2.b.c = 3;
                console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
                console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

                // Deep Clone
                obj1 = { a: 0 , b: { c: 0}};
                let obj3 = JSON.parse(JSON.stringify(obj1));
                obj1.a = 4;
                obj1.b.c = 4;
                console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
