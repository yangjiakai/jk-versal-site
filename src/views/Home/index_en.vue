<template>
    <div>
        <v-carousel cycle height="1000" hide-delimiters :show-arrows="showArrows">
            <v-carousel-item v-for="(slide, indexSlide) in slides" :key="indexSlide">
                <v-sheet :class="bgs[indexSlide]" :color="colors[indexSlide]" height="100%">
                    <v-row class="fill-height mask flex-column" align="center" justify="center">
                        <img src="@/assets/images/logo.png" alt="" style="width: 200px">
                        <div class="top-decoration"></div>
                        <div class=" my-5 font-weight-black"><span class="main-title"
                                style="font-size:5em">VERSAL</span></div>
                        <div class="display-1 mb-5">择仕中国</div>
                        <div class="bottom-decoration"></div>
                        <vue-typed-js :strings="[slide]">
                            <h1 class="typing  my-5" style="word-wrap: break-word"></h1>
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
                                            <h1 class="my-5">择仕中国创立于2007年，十余年磨砺，领跑行业</h1>
                                            <p class="grey--text mb-8">
                                                创立以来一直致力于中高端人才寻访、招聘流程外包、灵活用工等业务；我们始终相信每位客户值得拥有更好的服务，每位候选人值得拥有更好的职业生涯，每位服务顾问值得拥有更好的自我价值实现。
                                            </p>
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
                                                总部位于<span class="font-weight-bold">上海</span>,于北京、西安、青岛、大连、贵阳、苏州已建立分公司，
                                                未来将在众多省市建立分支机构; 为更多的地区和市场提供多元化的专业人力资源服务。
                                            </p>
                                            <div>
                                                <v-btn class="float-right" color="rgba(35,35,50.8)" to="/about_en">了解更多
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
        <!-- <div class="partner-warp ">
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
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="mr-5 mt-5" dark color="#232332" to="/consultant">寻找顾问</v-btn>
                            </v-row>
                        </v-container>
                    </v-item-group>

                    <v-row justify="center">
                    </v-row>

                </v-card>
            </div>
        </div> -->
        <div class="talent-warp">
            <div class="mask">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" class="pa-5 mx-auto" flat dark color="rgba(0,0,0,.3)">
                                <v-row>
                                    <v-col>
                                        <v-card class="text-center" flat color="rgba(0,0,0,.3)">
                                            <h1 class="my-5">高端行业人才储备</h1>
                                            <p class="grey--text mb-8">
                                                因为信任， 丰富的高端行业人才与我们保持长期的联系，致力于培养高品质猎头，为企业提供高端人才招聘服务。</p>
                                            <div>
                                                <v-btn class="float-right" color="rgba(35,35,50.8)"
                                                    @click="jump(careerlink)">寻找职位</v-btn>
                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>

                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" class="pa-5 mx-auto" flat dark color="rgba(0,0,0,.3)">
                                <v-row>
                                    <v-col>
                                        <v-card class="text-center" flat color="rgba(0,0,0,.3)">
                                            <h1 class="my-5">荣誉证书</h1>
                                            <v-row justify="center" align="center">
                                                <v-col cols="12" sm="4">
                                                    <v-img src="../../assets/images/home/荣誉证书.png" class="mx-auto"
                                                        width="90%"></v-img>
                                                </v-col>

                                                <v-col cols="12" sm="4">
                                                    <v-img src="../../assets/images/home/质量.jpg" class="mx-auto"
                                                        width="90%"></v-img>
                                                </v-col>

                                                <v-col cols="12" sm="4">
                                                    <v-img src="../../assets/images/home/会员证书.png" class="mx-auto"
                                                        width="90%"></v-img>
                                                </v-col>
                                            </v-row>
                                            <v-row justify="center">
                                                <v-col cols="12" sm="4">
                                                    <v-img src="../../assets/images/home/人力资源.png" class="mx-auto"
                                                        width="90%"></v-img>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-col>
                                </v-row>

                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>

        <div class="talent-warp">
            <div class="mask">
                <h1 class="py-10 text-center white--text">全力赋能五大升级领域</h1>
                <v-item-group class="pb-5">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="2" offset-md="1">
                                <v-item>
                                    <v-card class="text-center" height="300" elevation="6">
                                        <h2 class="pt-8 py-4">智慧出行</h2>
                                        <v-icon class="fas fa-car" style="font-size:50px" color="#232332"></v-icon>
                                        <h4 class="pt-4">新能源汽车</h4>
                                        <h4>无人驾驶</h4>
                                        <h4>车联网</h4>
                                        <h4>汽车后市场</h4>
                                    </v-card>
                                </v-item>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-item>
                                    <v-card class="text-center" height="300" elevation="6">
                                        <h2 class="pt-8 py-4">互联网高科技</h2>
                                        <v-icon class="fas fa-wifi" style="font-size:50px" color="#232332"></v-icon>
                                        <h4 class="pt-4">人工智能</h4>
                                        <h4>物流仓储</h4>
                                        <h4>新零售</h4>
                                        <h4>大数据科技</h4>
                                    </v-card>
                                </v-item>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-item>
                                    <v-card class="text-center" height="300" elevation="6">
                                        <h2 class="pt-8 py-4">智能创造</h2>
                                        <v-icon class="fab fa-android" style="font-size:50px" color="#232332"></v-icon>
                                        <h4 class="pt-4">云服务</h4>
                                        <h4>只能控制</h4>
                                        <h4>机器人</h4>
                                        <h4>工业互联网</h4>
                                    </v-card>
                                </v-item>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-item>
                                    <v-card class="text-center" height="300" elevation="6">
                                        <h2 class="pt-8 py-4">金融科技</h2>
                                        <v-icon class="fas  fa-hand-holding-usd" style="font-size:50px" color="#232332">
                                        </v-icon>
                                        <h4 class="pt-4">金融风控</h4>
                                        <h4>数据模型</h4>
                                        <h4>支付</h4>
                                        <h4>场景应用</h4>
                                    </v-card>
                                </v-item>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-item>
                                    <v-card class="text-center" height="300" elevation="6">
                                        <h2 class="pt-8 py-4">智慧健康</h2>
                                        <v-icon class="fas fa-hand-holding-medical" style="font-size:50px"
                                            color="#232332"></v-icon>
                                        <h4 class="pt-4">生物药品研发</h4>
                                        <h4>医疗器械研发</h4>
                                        <h4>创新药</h4>
                                        <h4>医药医疗分销</h4>
                                    </v-card>
                                </v-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-item-group>
            </div>
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
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">Get In
                                            Touch</span>
                                    </div>
                                    <div class="display-1 mb-5">联系我们</div>
                                    <div class="mb-5">Address：Room2311, Guangqi Building, No 425, yishan
                                        Road,xuhuizone,shanghai china</div>
                                    <div class="mb-5">Tel：021-31351010</div>

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
                showArrows: false,
                careerlink: "http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date",
                colors: [
                    'indigo',
                    'warning',
                ],
                bgs: [
                    'slide1',
                    'slide2'
                ],
                slides: [
                    'Let enterprises and individuals add value in the future',
                    'Lean! sigma! process!',
                ],
            }
        },
        methods: {
            jump(e) {
                window.location.href = e
            },
        },
        components: {
            Map
        }

    };
</script>


<style lang="css" scoped>
    @media (max-width:960px) {
        .typing {
            font-size: 20px;
            max-width: 280px;
        }
    }

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