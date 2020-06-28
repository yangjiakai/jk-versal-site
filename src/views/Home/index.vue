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
                    <!-- <v-item-group>
                        <v-container>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="mr-5 mt-5" dark color="#232332" to="/consultant">寻找顾问</v-btn>
                            </v-row>
                        </v-container>
                    </v-item-group> -->

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
                                                    <v-img src="../../assets/images/home/荣誉证书.png" class="mx-auto" width="90%"></v-img>
                                                </v-col>

                                                <v-col cols="12" sm="4">
                                                    <v-img src="../../assets/images/home/质量.jpg" class="mx-auto" width="90%"></v-img>
                                                </v-col>

                                                <v-col cols="12" sm="4">
                                                    <v-img src="../../assets/images/home/会员证书.png" class="mx-auto" width="90%"></v-img>
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
                imgUrl: "../../assets/images/home/pt1.png",
                careerlink:"http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date",
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
            jump(e) {
                window.location.href = e
            },
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
        left: -40px;
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