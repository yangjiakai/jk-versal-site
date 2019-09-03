<template>
    <div>
        <div class="banner-warp">
            <div class="mask">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card max-width="1200" class="mx-auto" flat dark color="transparent">
                                <v-row class="fill-height flex-column pa-5" align="center" justify="center">
                                    <img src="@/assets/images/logo.png" alt="" style="width: 200px">
                                    <div class="top-decoration"></div>
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">择仕新闻</span>
                                    </div>
                                    <div class="display-1 mb-5">Versal News</div>
                                    <div class="bottom-decoration"></div>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
        <v-container fluid>
            <v-row class="px-0">
                <v-col>
                    <v-card class="mx-auto mt-n12 pa-5"elavation="10">
                        <v-card width="1200" class="mx-auto" flat>
                            <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-for="i in 10">
                                <v-list-item>
                                    <v-list-item-avatar color="blue">
                                        <img src="../../assets/logo_icon.png" alt="">
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline">x新闻标题</v-list-item-title>
                                        <v-list-item-subtitle>新闻副标题</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-img src="../../assets/images/互联网.jpg" height="300"></v-img>

                                <v-card-text>
                                    择仕新闻新闻新闻新闻新闻新闻新闻新闻新闻内容
                                </v-card-text>

                                <v-card-actions>
                            
                                    <div class="flex-grow-1"></div>
                                    <v-chip>2019-10-11</v-chip>
                                    <v-btn icon>
                                        <v-icon>mdi-heart</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>mdi-share-variant</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
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
                valid: true,
                job: {
                    title: "高级UI设计师",
                    location: "深圳",
                    category: "金融",
                    type: "UI设计",
                    company: "腾讯",
                    salary: "30k",
                    date: "2019-09-09",
                    email: "403474473@qq.com",
                    description: "暂无描述",
                    duty1: "负责平台产品的PC端和移动端产品的UI与交互设计，产品整体风格设计，页面制作和流程优化。",
                    duty2: "实现界面的视觉和美术设计方面的设计，重视细节方面的设计，如图标，主体，背景，配色等，制定产品用户界面风格。",
                    duty3: "参与产品规划构思和创意过程，深刻理解产品目标和用户需求，重视用户体验。",
                    duty4: "与产研沟通设计思路及落地实施方案，推进界面按照设计稿实现落地。",
                    duty5: "暂无",
                    request1: "3年以上PC端及移动端产品UI设计经验，完整的界面视觉风格设定经验",
                    request2: "对用户习惯有一定的研究，具备一定的设计前瞻性，了解当下最流行的设计风格",
                    request3: "具备良好的美术功底、色彩感觉和创意能力",
                    request4: "善于与人沟通，具备良好的团队合作精神和执行力，具备高度责任感，有创新精神",
                    request5: "5",
                    company_name: "深圳技术有限公司",
                    company_address: "深圳南山区腾讯大厦",
                    company_description: "深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。 是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。",
                    active: "true"
                }
            }
        },
        methods: {
            ...mapActions(["fetchJobs"]),
            openItem(item) {
                this.job = Object.assign({}, item)
                this.dialog = true
            },
        },
        computed: {
            ...mapGetters(["allJobs"])
        },
        created() {
            this.fetchJobs()
        }

    }
</script>


<style lang="css" scoped>
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