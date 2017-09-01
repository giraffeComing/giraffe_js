<template>
    <div>
        <p class="full" ref="full">{{full}}</p>
        <p class="back" ref="backLast">{{backLast}}</p>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        mounted(){

            let full=this.$refs.full;
            let back=this.$refs.backLast;
            let That=this;
            full.onclick=function () {
//                That.full="双击退出"
                var el = document.documentElement;
                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

                if (typeof rfs != "undefined" && rfs) {
                    rfs.call(el);
                } else if (typeof window.ActiveXObject != "undefined") {
// for Internet Explorer
                    var wscript = new ActiveXObject("WScript.Shell");
                    if (wscript != null) {
                        wscript.SendKeys("{F11}");
                    }
                }

            };
            full.ondblclick=function () {
//                That.full="单击全屏"
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }

            };
            back.onclick=function () {
                window.history.go(-1);
            }
        },
        data () {
            return {
                full:'全屏',
                backLast:'Back'
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .len{
        display: block;
        position: fixed;
        left: 5px;
        bottom: 5px;
        font-size: 24px;
    }
    .full{
        display: block;
        position: fixed;
        right: 5px;
        top: 5px;
        font-size: 24px;
        cursor: pointer;
    }
    .back{
        display: block;
        position: fixed;
        right: 5px;
        bottom: 5px;
        font-size: 24px;
        cursor: pointer;
    }
</style>
