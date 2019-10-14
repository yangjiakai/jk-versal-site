<template>
    <div>
        <v-carousel cycle height="1000" hide-delimiters :show-arrows="showArrows">
            <v-carousel-item v-for="(slide, indexSlide) in slides" :key="indexSlide">
                <v-sheet :class="bgs[indexSlide]" :color="colors[indexSlide]" height="100%">
                    <v-row class="fill-height mask flex-column" align="center" justify="center">
                        <img src="@/assets/images/logo.png" alt="" style="width: 200px">
                        <div class="top-decoration"></div>
                        <div class="my-5 font-weight-black" style="font-size:5em"><span class="main-title">择仕中国</span>
                        </div>
                        <div class="display-1 mb-5">VERSAL CHINA</div>
                        <div class="bottom-decoration"></div>
                        <vue-typed-js :strings="[slide]">
                            <h1 class="typing  my-5"></h1>
                        </vue-typed-js>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <div class="map-warp">
            <div class="mask">
                <v-container class=" py-0 my-0">
                    <v-row>
                        <v-col class="pa-0">
                            <v-card max-width="1980" class="pa-5 mx-auto" flat dark color="rgba(0,0,0,.5)">
                                <v-row>
                                    <v-col>
                                        <v-card class="text-center" flat color="rgba(0,0,0,.3)">
                                            <h1 class="my-5"><span
                                                    class="red--text font-weight-black mx-2 ">12年</span>高速稳定发展</h1>
                                            <p class="grey--text mb-8">
                                                择仕中国12余年来稳健、快速发展，拥有丰富的人力资源行业经验及客户资源，立志成为中国市最具客户价值人力资源公司</p>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                <v-row align="center">
                                    <v-col cols="12" lg="8" xl="6">
                                        <v-card class="text-center" style="overflow: hidden" flat
                                            color="rgba(0,0,0,.3)">
                                            <Map></Map>
                                        </v-card>
                                    </v-col>
                                    <v-col cols="12" lg="4" xl="6">
                                        <v-card class="text-left mx-auto" style="color: rgba(255, 255, 255, .8)"
                                            max-width="500" align="center" flat color="rgba(0,0,0,.3)">
                                            <p>我们的团队均来自跨国公司相关行业的高级管理人员和技术专业人才, 拥有丰富的行业背景和技术专长</p>
                                            <p> 同时，我们也因为组织的高速发展而不断吸引行业里优质的人才，并不断地培养和发展精英队伍。</p>
                                            <p>
                                                总部位于<span class="font-weight-bold">上海</span>,于北京、西安、青岛已建立分公司，
                                                未来将在重庆、杭州、长沙、南昌等众多省市建立分支机构;
                                                为更多的地区和市场提供多元化的专业人力资源服务。
                                            </p>
                                            <div>
                                                <v-btn class="float-right" color="rgba(35,35,50.8)" to="/about">了解更多
                                                </v-btn>
                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <div class="partner-warp ">
            <div class="white">
                <v-card class="white mx-auto pa-5" flat width="1600">
                    <v-row>
                        <v-col>
                            <v-card class="text-center" flat>
                                <h1 class="my-5"><span class="red--text font-weight-black mx-2 ">100+</span>行业资深顾问</h1>
                                <p class="grey--text mb-8">
                                    每一位顾问都是在其专职领域的专家，通过职能专注为客户提供更精准更快速的交付</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-item-group>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="12" md="4" xl="2">
                                    <v-item v-slot:default="{ active, toggle }">
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card @click="toggle" :elevation="hover?10:2" class="text-center mx-auto"
                                                max-width="250">
                                                <!-- <v-img class="mx-auto" height="210" position="top center" > -->
                                                    <v-img src="../../assets/images/avatars/樊申哲.jpg" class="mx-auto" height="210" position="top center">
                                                    <v-expand-transition>
                                                        <v-card-title class="fill-height white--text" align-end
                                                            v-if="hover" style="background-color:rgba(0, 0, 0, .5)">
                                                            <p class="caption">
                                                                拥有十余年德资企业管理层经验，曾任海德堡销售总监，交通大学本科及交通大学工商管理学硕士，CIPC注册国际心理咨询师，五维教练领导力认证讲师，领导力方面颇有建树
                                                            </p>
                                                        </v-card-title>
                                                    </v-expand-transition>
                                                </v-img>
                                                <v-card-text>
                                                    <h3 class="my-5">猎头业务合伙人/<span class="blue--text">制造行业</span></h3>
                                                    <h2 class="my-5">LESLIE 樊申哲</h2>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-item>

                                </v-col>
                                <v-col cols="12" md="4" xl="2">
                                    <v-item v-slot:default="{ active, toggle }">
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card @click="toggle" :elevation="hover?10:2" class="text-center mx-auto"
                                                max-width="250">
                                                <v-img src="../../assets/images/avatars/汤晓烨.jpg" class="mx-auto" height="210" position="top center">
                                                    <v-expand-transition>
                                                        <v-card-title class="fill-height white--text" align-end
                                                            v-if="hover" style="background-color:rgba(0, 0, 0, .5)">
                                                            <p class="caption">于14年以管培生身份加入择仕，连续3年百万顾问及公司TOP 1
                                                                ，4年连续晋升。南开大学应用心理学硕士。连续多次季度最佳业绩。斩获公司十多项嘉奖。带领团队成员单产年均75万
                                                            </p>
                                                        </v-card-title>
                                                    </v-expand-transition>
                                                </v-img>
                                                <v-card-text>
                                                    <h3 class="my-5">猎头业务合伙人/<span class="blue--text">互联网行业</span></h3>
                                                    <h2 class="my-5">VERA 汤晓烨</h2>

                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-item>
                                </v-col>
                                <v-col cols="12" md="4" xl="2">
                                    <v-item v-slot:default="{ active, toggle }">
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card @click="toggle" :elevation="hover?10:2" class="text-center mx-auto"
                                                max-width="250">
                                                <v-img src="../../assets/images/avatars/孙磊.jpg" class="mx-auto" height="210" position="top center">
                                                    <v-expand-transition>
                                                        <v-card-title class="fill-height white--text" align-end
                                                            v-if="hover" style="background-color:rgba(0, 0, 0, .5)">
                                                            <p class="caption">
                                                                曾就职于中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司，并担任重要管理职位。同时，在Microsoft，Criteo等国际知名IT企业任职过。拥有丰富的IT，外包全行业的经验。
                                                            </p>
                                                        </v-card-title>
                                                    </v-expand-transition>
                                                </v-img>
                                                <v-card-text>
                                                    <h3 class="my-5">外包业务负责人/<span class="blue--text">IT,全行业</span></h3>
                                                    <h2 class="my-5">TOM SUN 孙磊</h2>

                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-item>
                                </v-col>
                                <v-col cols="12" md="4" xl="2">
                                    <v-item v-slot:default="{ active, toggle }">
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card @click="toggle" :elevation="hover?10:2" class="text-center mx-auto"
                                                max-width="250">
                                                <v-img src="../../assets/images/avatars/火颖杰.jpg" class="mx-auto" height="210" position="top center">
                                                    <v-expand-transition>
                                                        <v-card-title class="fill-height white--text" align-end
                                                            v-if="hover" style="background-color:rgba(0, 0, 0, .5)">
                                                            <p class="caption">曾就职于瀚德、Michael
                                                                page等大型外资猎头公司，同济大学本科，在瀚德就职期间年最高单产230万，2018年获择仕最高单笔业绩个人佣金60万。团队业绩五百万Team
                                                                Leader</p>
                                                        </v-card-title>
                                                    </v-expand-transition>
                                                </v-img>
                                                <v-card-text>
                                                    <h3 class="my-5">猎头业务合伙人/<span class="blue--text">消费品行业</span></h3>
                                                    <h2 class="my-5">JASON 火颖杰</h2>

                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-item>
                                </v-col>
                                <v-col cols="12" md="4" xl="2">
                                    <v-item v-slot:default="{ active, toggle }">
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card @click="toggle" :elevation="hover?10:2" class="text-center mx-auto"
                                                max-width="250">
                                                <v-img src="../../assets/images/avatars/张楠.jpg" class="mx-auto" height="210" position="top center">
                                                    <v-expand-transition>
                                                        <v-card-title class="fill-height white--text" align-end
                                                            v-if="hover" style="background-color:rgba(0, 0, 0, .5)">
                                                            <p class="caption">
                                                                拥有十年人力资源行业从业经验，曾任西北地区独角兽Yeahmobi集团核心高管带领择仕中国西安团队拿下多家北京、西北地区互联网头部客户，巩固择仕中国位于西北板块业务发展。
                                                            </p>
                                                        </v-card-title>
                                                    </v-expand-transition>
                                                </v-img>
                                                <v-card-text>
                                                    <h3 class="my-5">区域合伙人/<span class="blue--text">互联网行业</span></h3>
                                                    <h2 class="my-5">ELLA 张楠</h2>

                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-item>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="mr-5 mt-5" dark tile color="#232332" to="/consultant">寻找顾问</v-btn>
                            </v-row>
                        </v-container>
                    </v-item-group>

                    <v-row justify="center">
                    </v-row>

                </v-card>
            </div>
        </div>
        <div class="talent-warp">
            <div class="mask">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" class="pa-5 mx-auto" flat dark color="rgba(0,0,0,.3)">
                                <v-row>
                                    <v-col>
                                        <v-card class="text-center" flat color="rgba(0,0,0,.3)">
                                            <h1 class="my-5"><span
                                                    class="red--text font-weight-black mx-2 ">400000+</span>高端行业人才</h1>
                                            <p class="grey--text mb-8">
                                                因为信任， 超过400000名高端行业人才与我们保持长期的联系，致力于培养高品质猎头，为企业提供高端人才招聘服务</p>
                                            <div>
                                                <v-btn class="float-right" color="rgba(35,35,50.8)" to="/career">寻找职位
                                                </v-btn>
                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>


        <div class="white">
            <v-container>
                <v-row>
                    <v-col>
                        <v-card max-width="1200" class="pa-5 mx-auto" flat>
                            <v-row>
                                <v-col>
                                    <v-card class="text-center" flat>
                                        <h1 class="my-5"><span
                                                class="red--text font-weight-black mx-2 ">300+</span>优质合作客户</h1>
                                        <p class="grey--text mb-8">
                                            我们拥有优质的全人力资源领域客户</p>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row align="center" justify="center">
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/bilibili.png" alt="" max-width="120"
                                        class="mx-auto"></v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/阿里巴巴.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/网易.png" alt="" max-width="120" class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/携程.png" alt="" max-width="120" class="mx-auto">
                                    </v-img>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/wanke.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/大搜车.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/云鹊医.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/喜马拉雅.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/海南航空.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/光明集团.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/摩根士丹利.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/链家.png" alt="" max-width="120" class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/中国农业银行.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/易果生鲜.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/eaton.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/上汽集团.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                            </v-row>
                            <v-row justify="center" align="center">
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/优衣库.png" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/微盟.png" alt="" max-width="120" class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/快看.png" alt="" max-width="120" class="mx-auto">
                                    </v-img>
                                </v-col>
                                <v-col cols="6" md="2">
                                    <v-img src="../../assets/images/home/siemens.svg" alt="" max-width="120"
                                        class="mx-auto">
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="touch-warp">
            <div class="mask">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" class="mx-auto" flat dark color="rgba(100,100,100,.1)">
                                <v-row class="fill-height mask flex-column pa-5" align="center" justify="center">
                                    <img src="@/assets/images/logo.png" alt="" style="width: 200px">
                                    <div class="top-decoration"></div>
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">联系我们</span>
                                    </div>
                                    <div class="display-1 mb-5">Get It In Touch</div>
                                    <div class="mb-5">地址：上海市徐汇区宜山路425号光启城2311室</div>
                                    <div class="mb-5">Tel：021-31351011</div>
                                    <img src="../../assets/images/home/weixin.png" alt="">
                                    <div class="bottom-decoration"></div>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>

    </div>
</template>

<script>
    import Map from '../../components/map.vue'
    export default {

        data() {
            return {
                imgUrl:"../../assets/images/home/pt1.png",
                showArrows: false,
                colors: [
                    'indigo',
                    'warning',
                ],
                bgs: [
                    'slide1',
                    'slide2'
                ],
                slides: [
                    '让企业和个人的未来增值',
                    '高效、专业、创新',
                ],
            }
        },
        methods: {

        },
        components: {
            Map
        },
        created() {
            // axios.get("/api/datas").then(res => {
            //     // console.log(res.data);
            // });
        },

    };
</script>


<style lang="css" scoped>
    .slide1 {
        background-image: url('../../assets/images/banner4.jpg');
        background-size: cover;
        background-position: center center;
    }

    .slide2 {
        background-image: url('../../assets/images/banner3.jpg');
        background-size: cover;
        background-position: center center;
    }

    .mask {
        background-color: rgba(0, 2, 20, 0.6)
    }

    .top-decoration {
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-bottom: none;
        height: 5rem;
        width: 15rem;
    }

    .main-title {
        position: relative;
        text-shadow: 5px 5px 2px rgba(0, 0, 0, .5);
        z-index: 1;
    }

    .main-title::before {
        content: "";
        position: absolute;
        top: -50px;
        left: -70px;
        width: 150px;
        height: 150px;
        border-radius: 75px;
        z-index: -1;
        background-color: rgba(0, 112, 192, .9);
        box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
        transform: rotate(-3deg);
    }

    .bottom-decoration {
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-top: none;
        height: 5rem;
        width: 15rem;
    }

    .talent-warp {
        background-image: url('../../assets/images/home/business.jpg');
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
    }

    .map-warp {
        background-image: url('../../assets/images/home/earth-3866609.jpg');
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
    }

    .touch-warp {
        background-image: url('../../assets/images/home/touch.jpg');
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
    }
</style>