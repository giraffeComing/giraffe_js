<template>
    <div>
        <p id="_Wrap" style="color: crimson; font-weight: bold">JS的真正高度在于：</p>
        <ul class="list">
            <li>封装</li>
            <li>继承</li>
            <li>多态</li>
        </ul>
        <p class="item"><span style="color: cornflowerblue">深深的疑惑：</span>用了3年js，但似乎都一直处于止步不前的阶段，操作DOM，函数封装，事件绑定，ajax拼串......这些能算是会js了么？---顶多算个初级；</p>
        <p class="item"><span style="color: darkseagreen">无头的苍蝇：</span>一度以为是因为缺少源码阅读，以为缺少spa的开发能力，以为缺少ES6的能力；但是源码也读了，vue全家桶也掌握了，ES6基础语法也都会了，但还是觉得js能力依旧停留在很初级的阶段；</p>
        <p class="item"><span style="color: coral">迟到的觉悟：</span>《javascript设计模式》（百度张容铭），这本书读到的太晚。读这本书的初衷是想学一下js设计模式，两年前在JD的时候也曾一时热血，想要学习设计模式，可惜那时候意识没跟上，觉得这些东西太虚了，或许也是因为懒惰，觉得这些应该交由架构师去考虑，而自己只是个初级小前端不要考虑这么多，切好自己的图就好了。如今再看到设计模式相关的书只怪自己当时太蠢。这确实应该是上手这门语言的基础，如果一个前端的基础是建立在封装、继承、多态的基础上，那他必定会进化成一个大神！如果一个前端的基础是建立在培训班的那一套速成上，虽然短期内来看好像一些基础的日常工作已经能胜任了，但却浑然不知竟一开始就跑偏了，想达到大神的级别几乎无可能！基础就打偏了后来大楼建的越高，就越危险！而且很难再接受封装、继承、多态的意识和使用！</p>
        <p class="item">日久天长：基于面向对象入门的前端写出来的代码是工程化的；基于面向过程入门的前端写出来的代码是幼稚的。</p>
        <p class="item" style="color: burlywood">封装、继承、多态在其他OOP语言中到处都是，而在js中到底意味着什么，该怎么用、什么场景下用？是不是某个无聊的家伙为了提升js的门槛而故弄玄虚呢</p>
        <ul class="list">
            <li>封装：js中的代表就是闭包、单例</li>
            <li>继承：在基类中定义基础的变量和方法，子类继承基类，再复写基类中的方法；使用场景，其实应该到处都是；弹窗、轮播、各种可扩展的组件</li>
            <li>多态：同一个方法的多种调用形式，基于arguments判断参数个数，在同一个方法中传入不同的参数进而有多种功能</li>
        </ul>
        <p class="item">js基于封装、继承和多态进行展开，再因地制宜地综合设计模式，写出来的代码就厉害了，一个jser就算走上了高手进化之路了。</p>
        <p class="item" style="text-decoration: underline; font-style: italic">物以类聚、人以群分、不是一类不是一群自然没有共同语言！</p>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        mounted(){
//            document.getElementById这个方法在created时候不生效，要在mounted时候生效，因为created的时候dom结构都还没生成呢
            let dom = document.getElementById('_Wrap');
            console.log(dom)
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .list{
        border: 1px solid salmon;
        padding: 5px 20px;
        margin: 10px 0;
        li{
            margin: 0 20px;
            list-style: disc;
            color: salmon;
        }
    }
    .item{
        margin-bottom: 10px;
        line-height: 28px;
        text-indent: 2em;
    }
</style>
