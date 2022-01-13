<template>
    <div>
        <div class="banner-warp">
            <div class="mask">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" height="700" class="mx-auto" flat dark color="transparent">
                                <v-row class="fill-height flex-column pa-5" align="center" justify="center">
                                    <img src="@/assets/images/logo.png" alt="" style="width: 200px">
                                    <div class="top-decoration"></div>
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">关于择仕</span>
                                    </div>
                                    <div class="display-1 mb-5">About Versal</div>
                                    <div class="bottom-decoration"></div>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <div>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <v-card class="mx-auto my-n12   history-warp" elevation="10" dark>
                            <v-toolbar flat color="#232332" dark>
                                <v-toolbar-title>About Versal</v-toolbar-title>
                            </v-toolbar>
                            <v-tabs :vertical="vertical" background-color="#232332">

                                <v-tab class="tab1">
                                    历史沿革
                                </v-tab>
                                <v-tab>
                                    择仕创始人
                                </v-tab>
                                <v-tab>
                                    专注领域
                                </v-tab>

                                <v-tab-item>
                                    <v-card flat color="transparent" class="history-warp" dark>
                                        <div class="mask">
                                            <v-timeline clipped :dense="dense">
                                                <v-timeline-item class="white--text mb-12" large
                                                    color="rgb(198,140,102)">
                                                    <template v-slot:icon>
                                                        <v-avatar>
                                                            <img src="../../assets/logo_icon.png">
                                                        </v-avatar>
                                                    </template>
                                                </v-timeline-item>
                                                <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2"
                                                    small right v-for="(item,index) in history" :key="index">
                                                    <v-card class="elevation-2 " color="transparent" max-width="250">
                                                        <v-card-title class="headline">{{item.year}}</v-card-title>
                                                        <v-card-text>
                                                            {{item.event}}
                                                        </v-card-text>
                                                    </v-card>

                                                    <span slot="opposite">{{item.detile}}</span>
                                                </v-timeline-item>
                                            </v-timeline>
                                        </div>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card flat width="1200" class="mx-auto pa-5">
                                        <v-card-text>
                                            <v-row justify="center" align="center">
                                                <v-col cols="12" md="6">
                                                    <v-card class="" height="469" width="469" elevation="20">
                                                        <img src="../../assets/images/about/CEO.jpg" alt=""
                                                            width="100%">
                                                    </v-card>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-card class="pa-10" max-width="469" min-height="469" flat
                                                        elevation="20">

                                                        <v-card-text>
                                                            <h1 class="disp"><span class="primary--text">CEO</span>
                                                                <span class="black--text">夏乾衡</span></h1>
                                                            <div class="caption pt-5">择仕中国创始人</div>
                                                            <div class="caption pb-5">中国人才市场化首批从业者</div>

                                                            <p>夏乾衡先生带领择仕中国经十余年发展共为500余家中外知名公司提供了上千名高端管理和专业人才，在人力资源服务领域获得了极好的市场商誉和客户口碑
                                                            </p>
                                                            <p>如今，中国许多创新企业所面临的人才挑战,也需要更专业的人才服务，十余年行业沉淀，夏乾衡先生将带领择仕中国将秉承着“秉承着人才赋能产业升级这一使命”这一使命,以高效、专业、创新的服务能力将为中国人才服务市场注入最重要的一股力量
                                                            </p>
                                                        </v-card-text>


                                                    </v-card>

                                                </v-col>
                                            </v-row>



                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <h1 class="py-10 text-center main-text-color">赋能产业升级领域</h1>
                                    <v-item-group class="pb-5">
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" md="2" offset-md="1">
                                                    <v-item>
                                                        <v-card class="text-center" height="300" elevation="6">
                                                            <h2 class="pt-8 py-4">智能网联</h2>
                                                            <v-icon class="fab fa-staylinked" style="font-size:50px"
                                                                color="#232332"></v-icon>
                                                            <h4 class="pt-4">新能源汽车</h4>
                                                            <h4>无人驾驶</h4>
                                                            <h4>车联网</h4>
                                                            <h4>工业互联网</h4>
                                                        </v-card>
                                                    </v-item>
                                                </v-col>
                                                <v-col cols="12" md="2">
                                                    <v-item>
                                                        <v-card class="text-center" height="300" elevation="6">
                                                            <h2 class="pt-8 py-4">互联网高科技</h2>
                                                            <v-icon class="fas fa-wifi" style="font-size:50px"
                                                                color="#232332"></v-icon>
                                                            <h4 class="pt-4">人工智能</h4>
                                                            <h4>大数据科技</h4>
                                                            <h4>云服务</h4>
                                                            <h4>通信技术</h4>
                                                        </v-card>
                                                    </v-item>
                                                </v-col>

                                                <v-col cols="12" md="2">
                                                    <v-item>
                                                        <v-card class="text-center" height="300" elevation="6">
                                                            <h2 class="pt-8 py-4">金融科技</h2>
                                                            <v-icon class="fas  fa-hand-holding-usd"
                                                                style="font-size:50px" color="#232332">
                                                            </v-icon>
                                                            <h4 class="pt-4">金融风控</h4>
                                                            <h4>数据模型</h4>
                                                            <h4>支付升级</h4>
                                                            <h4>场景应用</h4>
                                                        </v-card>
                                                    </v-item>
                                                </v-col>
                                                <v-col cols="12" md="2">
                                                    <v-item>
                                                        <v-card class="text-center" height="300" elevation="6">
                                                            <h2 class="pt-8 py-4">智慧健康</h2>
                                                            <v-icon class="fas fa-hand-holding-medical"
                                                                style="font-size:50px" color="#232332"></v-icon>
                                                            <h4 class="pt-4">生物药品研发</h4>
                                                            <h4>医疗器械研发</h4>
                                                            <h4>创新药</h4>
                                                            <h4>医药医疗分销</h4>
                                                        </v-card>
                                                    </v-item>
                                                </v-col>
                                                <v-col cols="12" md="2">
                                                    <v-item>
                                                        <v-card class="text-center" height="300" elevation="6">
                                                            <h2 class="pt-8 py-4">数字零售</h2>
                                                            <v-icon class="fab fa-android" style="font-size:50px"
                                                                color="#232332"></v-icon>
                                                            <h4 class="pt-4">代运营</h4>
                                                            <h4>电商微商</h4>
                                                            <h4>无人超市</h4>
                                                            <h4>社区团购</h4>
                                                        </v-card>
                                                    </v-item>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-item-group>
                                    <v-divider class="my-5"></v-divider>
                                </v-tab-item>
                            </v-tabs>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                dense: false,
                vertical: true,
                history: [{
                    year: '2007年',
                    event: 'VERSAL成立于上海',
                    detile: '致力于提供专业人力资源解决方案'
                }, {
                    year: '2011年',
                    event: '成为上海制造行业有影响力的招聘公司',
                    detile: 'VERSAL成立西安分公司，成功完成首个RPO项目'
                }, {
                    year: '2013年',
                    event: '汽车零配件签约客户破百',
                    detile: '业务版图不断扩大'
                }, {
                    year: '2015年',
                    event: '举行“大数据时代的HR招聘策略应对”论坛',
                    detile: '会议邀请了众多大数据专家，招聘专家，人才评价专家上海500强招聘负责人'
                }, {
                    year: '2017年',
                    event: '荣获上海人才服务行业协会百强',
                    detile: '确立人力资源全领域业务发展方向'
                }, {
                    year: '2018年',
                    event: '蝉联年度人力资源“百强企业”称号',
                    detile: '开展人才外包服务及企业培训业务,荣获青岛、西安地区的人才工作站资质'
                }, {
                    year: '2019年',
                    event: '推出合伙人制度',
                    detile: '深耕高科技人才外包业务,联合建立青岛冰鉴国际人才交付中心'
                }, {
                    year: '2020年',
                    event: 'VERSAL成立大连,苏州分公司',
                    detile: '「谷露星选·中国猎头年度榜单」2020年最具成长性猎企大奖心'
                }]
            }
        },
        mounted() {
            if (window.innerWidth < 1000) {
                this.dense = true
                this.vertical = false
            }
        },
    }
</script>


<style lang="css" scoped>
    @media (max-width:1264px) {
        .tab1 .v-icon {
            margin-left: -50px
        }
    }

    .banner-warp {
        background-image: url('../../assets/images/home/touch.jpg');
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
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
        background-color: rgba(31, 35, 65, .9);
        box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
        transform: rotate(-3deg);
    }

    .bottom-decoration {
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-top: none;
        height: 5rem;
        width: 15rem;
    }

    .history-warp {
        background-image: url('../../assets/images/about/history2.jpg');
        background-position: center center;
        background-size: cover;
        background-attachment: fixed;
    }
</style>