<template>
    <div class="fill-height warp">
        <div class="banner-warp">
            <div class="mask">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" class="mx-auto" flat dark color="transparent">
                                <v-row class="fill-height flex-column pa-5" align="center" justify="center">
                                    <img src="@/assets/images/logo.png" alt="" style="width: 200px">
                                    <div class="top-decoration"></div>
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">Meet Consultants</span>
                                    </div>
                                    <div class="display-1 mb-5">寻找顾问</div>
                                    <div class="bottom-decoration"></div>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <div class="mask">
            <v-container>
                <v-card max-width="1200" class="mx-auto pa-5" color="" light>
                    <v-data-iterator :items="allConsultants" :search="search" :sort-by="sortBy.toLowerCase()"
                        :sort-desc="sortDesc" hide-default-footer>
                        <template v-slot:header>
                            <v-toolbar dark color="transparent" class="mb-1">
                                <v-text-field v-model="search" clearable flat solo-inverted hide-details label="检索">
                                </v-text-field>

                            </v-toolbar>
                        </template>

                        <template v-slot:default="props">
                            <v-row>
                                <v-col class="py-12" v-for="item in localConsultants" :key="item.id" cols="12" md="6"
                                    lg="3">
                                    <v-item-group>
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-hover v-slot:default="{ hover }">
                                                <v-card width="300" class="text-center mx-auto"
                                                    :elevation="hover ? 12 : 2" @click="openItem(item)">
                                                    <v-avatar size="120" class="mt-n6">
                                                        <v-img :src="item.imgUrl" alt="avatar" height="120"
                                                            position="top center"></v-img>
                                                    </v-avatar>
                                                    <h2 class="my-3">{{item.name}}</h2>
                                                    <h4 class="mb-2">{{item.position}}</h4>
                                                    <div class="caption grey--text">{{item.keyword1}}</div>
                                                    <div class="caption grey--text">{{item.keyword2}}</div>
                                                    <div class="caption grey--text">{{item.keyword3}}</div>
                                                    <div class="caption grey--text">{{item.keyword4}}</div>
                                                    <div class="text-left">

                                                        <v-dialog v-model="dialog" full-width>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn color="blue" dark icon v-on="on" class=" mx-2">
                                                                    <v-icon>fas fa-external-link-alt</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <v-container fluid>
                                                                <v-row>
                                                                    <v-col>
                                                                        <v-card width="1200" class="mx-auto">
                                                                            <v-row>
                                                                                <v-col cols="12" md="4" class="py-0">
                                                                                    <v-card color="#232332"
                                                                                        height="100%" dark>
                                                                                        <div>
                                                                                            <img :src="consultant.imgUrl"
                                                                                                alt="" width="100%">
                                                                                            <v-btn
                                                                                                style="position: absolute;right:0;top:0"
                                                                                                class="d-flex d-md-none"
                                                                                                color="white darken-1"
                                                                                                @click="dialog = false"
                                                                                                icon>
                                                                                                <v-icon>fas fa-times
                                                                                                </v-icon>
                                                                                            </v-btn>
                                                                                        </div>
                                                                                        <!-- <v-img
                                                                                            src="../../assets/avatar.jpg">
                                                                                            <v-btn
                                                                                                class="float-right d-flex d-md-none"
                                                                                                color="white darken-1"
                                                                                                @click="dialog = false"
                                                                                                icon>
                                                                                                <v-icon>fas fa-times
                                                                                                </v-icon>
                                                                                            </v-btn>
                                                                                        </v-img> -->
                                                                                        <div class="pa-5">
                                                                                            <h1 class="display-1 pa-2">
                                                                                                {{consultant.name}}
                                                                                            </h1>
                                                                                            <h2 class="title pa-2">
                                                                                                {{consultant.position}}
                                                                                            </h2>
                                                                                            <div
                                                                                                class="subtitle-2 pa-2">
                                                                                                <i
                                                                                                    class="fas fa-map-marker-alt mr-2"></i>{{consultant.location}}
                                                                                            </div>
                                                                                            <div
                                                                                                class="subtitle-2 pa-2">
                                                                                                <i
                                                                                                    class="far fa-envelope  mr-2"></i>{{consultant.email}}
                                                                                            </div>
                                                                                        </div>
                                                                                    </v-card>
                                                                                </v-col>
                                                                                <v-col cols="12" md="8" class="py-0">
                                                                                    <v-card>
                                                                                        <v-card-text>
                                                                                            <div>
                                                                                                <div style="overflow: hidden"
                                                                                                    width="100%"
                                                                                                    class="pa-2">



                                                                                                    <v-btn
                                                                                                        class="float-right d-none d-md-flex"
                                                                                                        color="grey darken-1"
                                                                                                        @click="dialog = false"
                                                                                                        icon>
                                                                                                        <v-icon>fas
                                                                                                            fa-times
                                                                                                        </v-icon>
                                                                                                    </v-btn>
                                                                                                </div>
                                                                                                <h2
                                                                                                    class="my-8 black--text">
                                                                                                    <i
                                                                                                        class="fas fa-stream mx-3"></i>个人简述
                                                                                                </h2>
                                                                                                <p class="pl-4"
                                                                                                    v-if="consultant.description">
                                                                                                    {{consultant.description}}
                                                                                                </p>
                                                                                            </div>
                                                                                            <div>
                                                                                                <h2
                                                                                                    class="my-8 black--text">
                                                                                                    <i
                                                                                                        class="fas fa-bolt mx-3"></i>擅长领域
                                                                                                </h2>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.field1">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.field1}}</span>
                                                                                                </p>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.field2">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.field2}}</span>
                                                                                                </p>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.field3">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.field3}}</span>
                                                                                                </p>

                                                                                            </div>
                                                                                            <div>
                                                                                                <h2
                                                                                                    class="my-8 black--text">
                                                                                                    <i
                                                                                                        class="fas fa-book mx-3"></i>个人资历
                                                                                                </h2>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.experience1">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.experience1}}</span>
                                                                                                </p>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.experience2">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.experience2}}</span>
                                                                                                </p>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.experience3">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.experience3}}</span>
                                                                                                </p>

                                                                                            </div>
                                                                                            <!-- <div>
                                                                                                <h2
                                                                                                    class="my-8 black--text">
                                                                                                    <i
                                                                                                        class="fas fa-map mx-3"></i>教育背景
                                                                                                </h2>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.education1">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.education1}}</span>
                                                                                                </p>
                                                                                                <p class="d-flex align-center"
                                                                                                    v-if="consultant.education2">
                                                                                                    <i
                                                                                                        class="fas fa-check-circle mx-3"></i>
                                                                                                    <span>{{consultant.education2}}</span>
                                                                                                </p>
                                                                                            </div> -->
                                                                                        </v-card-text>
                                                                                    </v-card>
                                                                                </v-col>
                                                                            </v-row>


                                                                        </v-card>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-dialog>
                                                    </div>


                                                </v-card>
                                            </v-hover>
                                        </v-item>
                                    </v-item-group>

                                </v-col>
                            </v-row>
                        </template>
                    </v-data-iterator>
                </v-card>
            </v-container>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        data() {
            return {
                dialog: false,
                search: '',
                filter: {},
                sortDesc: false,
                sortBy: '姓名',
                keys: [
                    '发布时间',
                    '姓名',
                    '职位',
                ],
                consultant: {

                },
                localConsultants: [{
                        "name": "孙磊",
                        "name_en": "TOM SUN",
                        "email": "",
                        "position": "外包业务负责人",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "曾就职于中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司，并担任重要管理职位。同时，在Microsoft，Criteo等国际知名IT企业任职过。拥有丰富的IT，外包全行业的经验。",
                        "experience1": "中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司",
                        "experience2": "Microsoft，Criteo等国际知名IT企业",
                        "experience3": "",
                        "field1": "IT",
                        "field2": "全行业",
                        "field3": "",
                        "keyword1": "外包业务负责人",
                        "keyword2": "外包全行业",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "",
                        "education2": "",
                        "status": "有效",
                        "id": 7,
                        "imgUrl": require('../../assets/images/avatars/孙磊.jpg')
                    },
                    {
                        "name": "樊申哲",
                        "name_en": "LESLIE",
                        "email": "",
                        "position": "猎头业务合伙人",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "拥有十余年德资企业管理层经验，曾任海德堡销售总监，交通大学本科及交通大学工商管理学硕士，CIPC注册国际心理咨询师，五维教练领导力认证讲师，领导力方面颇有建树",
                        "experience1": "十余年德资企业管理层经验",
                        "experience2": "海德堡销售总监",
                        "experience3": "CIPC注册国际心理咨询师",
                        "field1": "制造业",
                        "field2": "德资",
                        "field3": "",
                        "keyword1": "销售总监",
                        "keyword2": "领导力",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "交通大学本科",
                        "education2": "交通大学工商管理学硕士",
                        "status": "有效",
                        "id": 5,
                        "imgUrl": require('../../assets/images/avatars/樊申哲.jpg')
                    },
                    {
                        "name": "汤晓烨",
                        "name_en": "VERA",
                        "email": "",
                        "position": "猎头业务合伙人",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "于14年以管培生身份加入择仕，连续3年百万顾问及公司TOP 1，4年连续晋升。南开大学应用心理学硕士。连续多次季度最佳业绩。斩获公司十多项嘉奖。带领团队成员单产年均75万",
                        "experience1": "多次季度最佳业绩",
                        "experience2": "连续3年百万顾问及公司TOP 1",
                        "experience3": "团队成员单产年均75万",
                        "field1": "互联网行业",
                        "field2": "",
                        "field3": "",
                        "keyword1": "资深顾问",
                        "keyword2": "百万顾问",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "南开大学应用心理学硕士",
                        "education2": "",
                        "status": "有效",
                        "id": 6,
                        "imgUrl": require('../../assets/images/avatars/汤晓烨.jpg')
                    },
                    {
                        "name": "火颖杰",
                        "name_en": "JASON",
                        "email": "",
                        "position": "猎头业务合伙人",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "曾就职于瀚德、Michaelpage等大型外资猎头公司，同济大学本科，在瀚德就职期间年最高单产230万，2018年获择仕最高单笔业绩个人佣金60万。团队业绩五百万TeamLeader",
                        "experience1": "瀚德、Michaelpage等大型外资猎头公司",
                        "experience2": "最高单产230万",
                        "experience3": "团队业绩五百万TeamLeader",
                        "field1": "消费品行业",
                        "field2": "",
                        "field3": "",
                        "keyword1": "百万级Leader",
                        "keyword2": "资深猎头",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "同济大学本科",
                        "education2": "",
                        "status": "有效",
                        "id": 8,
                        "imgUrl": require('../../assets/images/avatars/火颖杰.jpg')
                    },
                    {
                        "name": "张楠",
                        "name_en": "ELLA",
                        "email": "",
                        "position": "区域合伙人",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": " 拥有十年人力资源行业从业经验，曾任西北地区独角兽Yeahmobi集团核心高管带领择仕中国西安团队拿下多家北京、西北地区互联网头部客户，巩固择仕中国位于西北板块业务发展。",
                        "experience1": "十年人力资源行业从业经验",
                        "experience2": "曾任西北地区独角兽Yeahmobi集团核心高管",
                        "experience3": "",
                        "field1": "互联网行业",
                        "field2": "",
                        "field3": "",
                        "keyword1": "核心高管",
                        "keyword2": "十年经验",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "",
                        "education2": "",
                        "status": "有效",
                        "id": 9,
                        "imgUrl": require('../../assets/images/avatars/张楠.jpg')
                    },
                    {

                        "name": "Elena YIN",
                        "name_en": "Elena YIN",
                        "email": "",
                        "position": "Team Leader",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "世界500强高科技公司、消费品公司、汽车零部件公司中高端人才搜寻经验Sourcing模块丰富培训经验",
                        "experience1": "6年工作经验",
                        "experience2": "",
                        "experience3": "",
                        "field1": "高科技公司",
                        "field2": "消费品公司",
                        "field3": "汽车零部件",
                        "keyword1": "6年工作经验",
                        "keyword2": "高端人才搜寻",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "",
                        "education2": "",
                        "status": "有效",
                        "id": 1,
                        "imgUrl": require('../../assets/images/avatars/Elena.jpg')
                    },
                    {
                        "name": "Crystal YAN",
                        "name_en": "Crystal YAN",
                        "email": "",
                        "position": "MC",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "深耕500强车企商务和研发高端职位擅长精准定位职位需求并实现快速交付，择仕中国最快速达成百万顾问称号顾问之一",
                        "experience1": "工作经验5年",
                        "experience2": "4年高端猎头搜寻经验",
                        "experience3": "",
                        "field1": "车企商务",
                        "field2": "高端研发",
                        "field3": "",
                        "keyword1": "百万顾问",
                        "keyword2": "500强车企商务",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "同济大学翻译硕士",
                        "education2": "",
                        "status": "有效",
                        "id": 2,
                        "imgUrl": require('../../assets/images/avatars/Crystal.jpg')
                    },
                    {
                        "name": "Milla Sui",
                        "name_en": "Milla Sui",
                        "email": "",
                        "position": "MC",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "知名上市公司5年高端人才搜寻经验,擅长制造业，汽车行业，消费品等领域人才搜寻多次荣获择仕中国Top Leader及百万顾问称号",
                        "experience1": "10年工作经验",
                        "experience2": "知名上市公司及5年高端人才搜寻经验",
                        "experience3": "",
                        "field1": "制造业",
                        "field2": "汽车行业",
                        "field3": "消费品",
                        "keyword1": "百万顾问",
                        "keyword2": "Top Leader",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "",
                        "education2": "",
                        "status": "有效",
                        "id": 3,
                        "imgUrl": require('../../assets/images/avatars/Milla.jpg')
                    },
                    {
                        "name": "Dora Lu",
                        "name_en": "Dora Lu",
                        "email": "",
                        "position": "HRBPM",
                        "location": "上海",
                        "date": "2019-9-16",
                        "description": "知名上市公司5年高端人才搜寻经验,擅长制造业，汽车行业，消费品等领域人才搜寻多次荣获择仕中国Top Leader及百万顾问称号",
                        "experience1": "10年猎头行业从业经验",
                        "experience2": "五年顾问及Team Leader经验",
                        "experience3": "5年猎头公司内部招聘负责人经验",
                        "field1": "医药业",
                        "field2": "制造业",
                        "field3": "互联网",
                        "keyword1": "资深顾问",
                        "keyword2": "团队领导",
                        "keyword3": "",
                        "keyword4": "",
                        "education1": "",
                        "education2": "",
                        "status": "有效",
                        "id": 4,
                        "imgUrl": require('../../assets/images/avatars/Dora.jpg')
                    }
                ]

            }
        },
        methods: {
            ...mapActions(["fetchConsultants"]),
            openItem(item) {
                this.consultant = Object.assign({}, item)
                this.dialog = true
            },
        },
        computed: {
            ...mapGetters(["allConsultants"])
        },
        created() {
            this.fetchConsultants()

        }
    }
</script>


<style lang="css" scoped>
    .warp {
        background: url('../../assets/bg_consultant.jpg');
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: fixed;
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
</style>