<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    html {
        height: 100%;
        background: #272822;
    }

    body {
        height: 100%;
        padding: 10px;
        color: #fff;
    }
    img{
        display: block;
    }
    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        user-select: none;
        box-sizing: border-box;
    }

    a {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        background: transparent;
        text-decoration: none;
        color: inherit;
        font-size: inherit;
    }

    input,
    textarea {
        outline: none;
        user-select: auto;
        -webkit-appearance: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        ime-mode: disabled;
    }

    input[type="number"],
    input[type="tel"] {
        -moz-appearance: textfield;
        ime-mode: disabled;
    }


    .router-animate {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }

    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }

    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }


</style>
