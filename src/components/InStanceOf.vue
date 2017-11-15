<template>
    <div>
        <p style="color: salmon; margin-bottom: 5px">通过使用 <b>instanceof</b> 操作符，来处理在实例化构造函数时，因new操作符丢失而产生的异常，使得代码更加健壮：</p>
        <img src="../assets/instanceof.png" alt="">
        <p class="title">通过new构造出来的实例</p>
        <p>book : {{book}}</p>
        <p class="title">不通过new构造出来的实例</p>
        <p>anotherBook : {{anotherBook}}</p>
        <p class="title">结论：通过使用instanceof操作符，在构造函数中已经进行了处理，所以即便实例化的时候丢掉了new操作符，照样可以正常实例化一个对象出来</p>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                book : '',
                anotherBook : ''
            }
        },
        created(){
            function Book(aut,name) {
//            object instanceof constructor
//            instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
//            判断执行过程中this是否是当前这个对象（如果是说明是用new创建的）
                if(this instanceof Book){
                    this.author = aut;
                    this.name = name;
                }else{
                    return new Book(aut,name)
                }
            }
            Book.prototype={
                showName : function () {
                    console.log(this.name)
                }
            };
            this.book = new Book('giraffe','javascript');
            this.anotherBook = Book('giraffe','javascript');
            this.book.showName();
            this.anotherBook.showName();
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .title{
        margin: 10px 0 5px;
        color: orange;
    }
</style>
