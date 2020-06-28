<template>
    <div>
        <div class="china-map">
            <div class="region-list active postition-6 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin"><span>重庆</span></div>
            </div>
            <div class="region-list  active  postition-11 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin"><span>青岛</span></div>
            </div>
            <div class="region-list  active  postition-12 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin"><span>西安</span></div>
            </div>
            <div class="region-list  active  postition-13 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <h1 class="show-regin font-weight-bold"><span style="font-size: 20px">上海</span></h1>
            </div>
            <div class="region-list active postition-8 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin"><span>北京</span></div>
            </div>
            <div class="region-list active postition-10 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin"><span>深圳</span></div>
            </div>
            <div class="region-list active postition-15 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin"><span>大连</span></div>
            </div>
            <div class="region-list active postition-16 online-node">
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin"><span>贵州</span></div>
            </div>
            <div class="region-list active postition-17 online-node">
            
                <div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
                    <span class="pulse delay-05"></span>
                    <span class="pulse delay-04"></span></div>
                <div class="show-regin" style="margin-top:-20px;"><span>苏州</span></div>
       
            </div>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="css">
    @media (max-width:760px) {
        .china-map {
            left: -340px
        }
    }

    .china-map {
        width: 748px;
        height: 618px;
        background: url('../assets/map_black_bg.png') center no-repeat;
        position: relative;

    }

    .region-list {
        position: absolute;
        left: 0;
        top: 0
    }

    @-webkit-keyframes warn {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0
        }
    }

    @-moz-keyframes warn {
        0% {
            -moz-transform: scale(0);
            transform: scale(0);
            opacity: 1
        }

        100% {
            -moz-transform: scale(1);
            transform: scale(1);
            opacity: 0
        }
    }

    @-o-keyframes warn {
        0% {
            -o-transform: scale(0);
            transform: scale(0);
            opacity: 1
        }

        100% {
            -o-transform: scale(1);
            transform: scale(1);
            opacity: 0
        }
    }

    @keyframes warn {
        0% {
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
            opacity: 1
        }

        100% {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
            opacity: 0
        }
    }

    .area-box .dot {
        position: absolute;
        left: 0;
        width: 10px;
        height: 10px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #a2a9b4;
        opacity: 1;
        filter: alpha(opacity=100)
    }

    .area-box .pulse {
        position: absolute;
        top: -28px;
        left: -28px;
        height: 66px;
        width: 66px;
        border: 2px solid #b7b7b7;
        -webkit-border-radius: 48px;
        -moz-border-radius: 48px;
        border-radius: 48px;
        -webkit-box-shadow: 0 0 4px #82878f, 0 0 10px #82878f inset;
        -moz-box-shadow: 0 0 4px #82878f, 0 0 10px #82878f inset;
        box-shadow: 0 0 4px #82878f, 0 0 10px #82878f inset;
        opacity: .12;
        filter: alpha(opacity=0);
        -webkit-animation: warn 2s ease-out both;
        -moz-animation: warn 2s ease-out both;
        -o-animation: warn 2s ease-out both;
        animation: warn 2s ease-out both;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -o-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        background: 0 0
    }

    .area-box .delay-04 {
        -webkit-animation-delay: 1.2s;
        -moz-animation-delay: 1.2s;
        -o-animation-delay: 1.2s;
        animation-delay: 1.2s
    }

    .area-box .delay-05 {
        -webkit-animation-delay: 1.6s;
        -moz-animation-delay: 1.6s;
        -o-animation-delay: 1.6s;
        animation-delay: 1.6s
    }

    .area-box .delay-06 {
        -webkit-animation-delay: 2s;
        -moz-animation-delay: 2s;
        -o-animation-delay: 2s;
        animation-delay: 2s
    }

    .region-list.active .area-box .dot {
        background: #009fd9
    }

    .region-list.active .area-box .pulse {
        border-color: #009fd9;
        top: -39px;
        left: -39px;
        height: 88px;
        width: 88px;
        -webkit-box-shadow: 0 0 12px #0080d9, 0 0 20px #0080d9 inset;
        -moz-box-shadow: 0 0 12px #0080d9, 0 0 20px #0080d9 inset;
        box-shadow: 0 0 12px #0080d9, 0 0 20px #0080d9 inset
    }

    .region-list.waite .area-box .dot {
        background: #f90
    }

    .region-list.waite .area-box .pulse {
        border-color: #f90
    }

    .show-regin {
        position: absolute;
        left: 2px;
        height: 0;
        top: 0;
        width: 11px;
        opacity: 0;
        -o-transition: all .5s ease-in-out;
        -webkit-transition: all .5s ease-in-out;
        -moz-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out
    }

    .online-node .show-regin,
    .region-list:hover .show-regin,
    .underline-node .show-regin,
    .waite-node .show-regin {
        height: 127px;
        opacity: 1
    }

    .show-regin span {
        width: 80px;
        position: absolute;
        left: 8px;
        top: -11px;
        padding: 6px 10px;
        font-size: 14px;
        color: #ccc;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        text-align: center;
        white-space: nowrap;
    }

    .postition-10 .show-regin span {
        left: 0
    }

    .postition-6 .show-regin span {
        left: -72px
    }

    .area-box {
        z-index: 77
    }

    .show-regin {
        z-index: 66
    }

    .region-list.active .show-regin span {
        position: relative;
        color: #ccc
    }

    .region-list.waite .show-regin span {
        color: #ccc
    }

    .postition-6 {
        left: 425px;
        top: 435px
    }

    .postition-8 {
        left: 559px;
        top: 229px
    }

    .postition-10 {
        left: 554px;
        top: 539px
    }

    .postition-11 {
        left: 604px;
        top: 300px
    }

    .postition-12 {
        left: 450px;
        top: 300px
    }

    .postition-13 {
        left: 654px;
        top: 400px
    }

    .postition-15 {
        left: 635px;
        top: 225px
    }

    .postition-16 {
        left: 425px;
        top: 485px
    }

    .postition-17 {
        left: 630px;
        top: 400px
    }






    .douhao {
        width: 0
    }
</style>