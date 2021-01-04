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
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">About
                                            Versal</span>
                                    </div>
                                    <div class="display-1 mb-5">关于择仕</div>
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

                                                            <p>夏乾衡先生带领择仕中国经12年发展共为500余家中外知名公司提供了上千名高端管理和专业人才，在人力资源服务领域获得了极好的市场商誉和客户口碑
                                                            </p>
                                                            <p>如今，中国许多创新企业所面临的人才挑战,也需要更专业的人才服务，十二年行业沉淀，夏乾衡先生将带领择仕中国将秉承着“让企业和个人未来增值”这一使命,以高效、专业、创新的服务能力将为中国人才服务市场注入最重要的一股力量
                                                            </p>
                                                        </v-card-text>


                                                    </v-card>

                                                </v-col>
                                            </v-row>



                                        </v-card-text>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <h1 class="py-10 text-center main-text-color">全力赋能五大升级领域</h1>
                                    <v-item-group class="pb-5">
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" md="2" offset-md="1">
                                                    <v-item>
                                                        <v-card class="text-center" height="300" elevation="6">
                                                            <h2 class="pt-8 py-4">智慧出行</h2>
                                                            <v-icon class="fas fa-car" style="font-size:50px"
                                                                color="#232332"></v-icon>
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
                                                            <v-icon class="fas fa-wifi" style="font-size:50px"
                                                                color="#232332"></v-icon>
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
                                                            <v-icon class="fab fa-android" style="font-size:50px"
                                                                color="#232332"></v-icon>
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
                                                            <v-icon class="fas  fa-hand-holding-usd"
                                                                style="font-size:50px" color="#232332"></v-icon>
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
                                                            <v-icon class="fas fa-hand-holding-medical"
                                                                style="font-size:50px" color="#232332"></v-icon>
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
                        detile: '专注于人力资源服务及解决方案'
                    }, {
                        year: '2009年',
                        event: 'VERSAL顾问人数突破50人',
                        detile: '公司规模稳步扩大'
                    }, {
                        year: '2011年',
                        event: 'VERSAL成立西安分公司',
                        detile: '为北京、西安等北方企业提供人资全方位业务'
                    }, {
                        year: '2012-2013年',
                        event: 'VERSAL连续两年举办专场招聘活动',
                        detile: '为众多世界500强企业客户输送高端职位'
                    }, {
                        year: '2014年',
                        event: '成为长三角区域制造业头部猎头服务供应商',
                        detile: '快速招募到关键职位支持人才'
                    }, {
                        year: '2015年',
                        event: 'VERSAL成立北京分公司',
                        detile: '成功举办“大数据时代的HR招聘策略应对”论坛'
                    }, {
                        year: '2016年',
                        event: 'VERSAL成立青岛分公司',
                        detile: '成为网易北京年度最佳人才服务供应商'
                    }, {
                        year: '2017年',
                        event: '荣获上海人才服务行业协会百强',
                        detile: '人力资源行业百强'
                    }, {
                        year: '2018年',
                        event: '与西安人社局联合举办“十佳 HR”评选活动',
                        detile: '被授予西安&青岛地区招才引智工作站荣誉称号'
                    }, {
                        year: '2019年',
                        event: '成立12周年,精耕人力资源解决方案',
                        detile: '多次获得客户给予的 Top vendor的称号'
                    }, {
                        year: '2020年',
                        event: 'VERSAL成立大连,苏州分公司',
                        detile: '联合建立青岛西海岸新区国际人才交付中心'
                    }

                ]
            }
        },
        mounted() {
            if (window.innerWidth < 1000) {
                this.vertical = false,
                    this.dense = true
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