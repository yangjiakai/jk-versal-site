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
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">工作机会</span>
                                    </div>
                                    <div class="display-1 mb-5">Your Career</div>
                                    <v-btn to="job_edit">管理工作</v-btn>
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
                    <v-card class="mx-auto  mt-n12 pa-5" elavation="10">
                        <v-card outlined flat max-width="1000" class="mx-auto ">
                            <v-toolbar dark color="#232332">
                                <v-toolbar-title>职位列表</v-toolbar-title>
                            </v-toolbar>
                            <v-list two-line shaped>
                                <v-list-item-group>
                                    <template v-for="(item,i) in allJobs">
                                        <v-list-item @click="openItem(item)" :key="i">
                                            <v-list-item-avatar>
                                                <v-icon>far fa-bookmark</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <p>
                                                        <span>{{item.title}}</span>
                                                        <span class="float-right">{{item.date}}</span>
                                                    </p>
                                                </v-list-item-title>
                                                <v-list-item-subtitle>
                                                    <i class="fas fa-map-marker-alt p">{{item.location}}</i>
                                                    <i class="fas fa-map-marker-alt p ml-5">{{item.category}}</i>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-dialog v-model="dialog" persistent max-width>
                                                    <template v-slot:activator="{ on }">

                                                        <v-btn color="#232332" v-on="on" icon @click="openItem(item)">
                                                            <v-icon>fas fa-share-alt-square</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-container class="white py-0">
                                                        <v-row style="background-color:#232332">
                                                            <v-col cols="12" md="8">
                                                                <v-card class="pa-5" flat dark color="transparent">
                                                                    <h1 class="pa-3">{{job.title}}</h1>
                                                                    <p>
                                                                        <i class="fas fa-project-diagram mx-3"></i>
                                                                        <span class="grey--text">{{job.category}}</span>
                                                                        <i class="fas fa-map-marker-alt mx-3"></i>
                                                                        <span class="grey--text">{{job.location}}</span>
                                                                        <i class="fas fa-clock mx-3"></i>
                                                                        <span class="grey--text">{{job.date}} </span>
                                                                    </p>
                                                                </v-card>
                                                            </v-col>

                                                            <v-col cols="12" md="4" class="text-right">
                                                                <v-spacer></v-spacer>

                                                                <v-btn color="white darken-1" icon
                                                                    @click="dialog = false">
                                                                    <v-icon>fas fa-times</v-icon>
                                                                </v-btn>

                                                            </v-col>
                                                        </v-row>
                                                        <v-row>
                                                            <v-col cols="12" md="8">
                                                                <v-card class="pa-5" outlined>
                                                                    <v-card-text>
                                                                        <div>
                                                                            <h2 class="my-8 black--text"><i
                                                                                    class="fas fa-stream mx-3"></i>工作描述
                                                                            </h2>
                                                                            <p class="pl-4" v-if="job.description">
                                                                                {{job.description}}
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <h2 class="my-8 black--text"><i
                                                                                    class="fas fa-bolt mx-3"></i>岗位职责
                                                                            </h2>
                                                                            <p class="d-flex align-center"
                                                                                v-if="job.duty1">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.duty1}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.duty2">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.duty2}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.duty3">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.duty3}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.duty4">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.duty4}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.duty5">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.duty5}}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <h2 class="my-8 black--text"><i
                                                                                    class="fas fa-book mx-3"></i>任职要求
                                                                            </h2>
                                                                            <p class="d-flex align-center"
                                                                                v-if="job.request1">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.request1}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.request2">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.request2}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.request3">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.request3}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.request4">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.request4}}</span>
                                                                            </p>
                                                                            <p class="d-flex  align-center"
                                                                                v-if="job.request5">
                                                                                <i class="fas fa-check-circle mx-3"></i>
                                                                                <span>{{job.request5}}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <h2 class="my-8 black--text">
                                                                                <i class="fas fa-map mx-3"></i>公司介绍
                                                                            </h2>
                                                                            <p>
                                                                                <b
                                                                                    class="ml-3">公司名称：</b>{{job.company_name}}
                                                                            </p>
                                                                            <p>
                                                                                <b
                                                                                    class="ml-3">公司地址：</b>{{job.company_address}}
                                                                            </p>
                                                                            <p class="d-flex align-start">

                                                                                <b style="white-space:nowrap "
                                                                                    class="ml-3">公司描述：</b>
                                                                                <span
                                                                                    class="d-table-cell">{{job.company_description}}</span>
                                                                            </p>
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>

                                                            <v-col cols="12" md="4">
                                                                <v-card class="pa-5 fill-height" outlined>
                                                                    <v-row>
                                                                        <v-col>

                                                                            <v-card max-width="500" class="mx-auto pa-5"
                                                                                my-5>
                                                                                <v-card-title>
                                                                                    <h3 class="my-5"
                                                                                        style="color: #353550">申请职位</h3>
                                                                                </v-card-title>
                                                                                <v-form ref="form" v-model="valid"
                                                                                    lazy-validation>
                                                                                    <v-text-field label="姓名（必需）"
                                                                                        hint="中文名" required
                                                                                        color="#353550 " placeholder=" "
                                                                                        :rules="[v => !!v || '姓名是必填项']"
                                                                                        prepend-icon="fas fa-user-circle">
                                                                                    </v-text-field>
                                                                                    <v-text-field label="电话号码"
                                                                                        color="#353550 " placeholder=" "
                                                                                        prepend-icon="fas fa-phone-volume">

                                                                                    </v-text-field>
                                                                                    <v-text-field label="邮箱（必需）"
                                                                                        required
                                                                                        :rules="[v => !!v || '邮箱格式不正确']"
                                                                                        color="#353550 " placeholder=" "
                                                                                        prepend-icon="fas fa-envelope">
                                                                                    </v-text-field>
                                                                                    <v-file-input label="上传简历" required
                                                                                        hint="小于5M,PDF或者Doc格式"
                                                                                        placeholder=" " outlined
                                                                                        color="#353550 " class="my-2">
                                                                                    </v-file-input>
                                                                                    <v-btn block dark color="#353550 ">
                                                                                        <v-icon class="mr-3">far
                                                                                            fa-envelope</v-icon>确认并发送
                                                                                    </v-btn>
                                                                                </v-form>
                                                                            </v-card>

                                                                        </v-col>
                                                                    </v-row>
                                                                </v-card>
                                                            </v-col>
                                                        </v-row>


                                                    </v-container>
                                                </v-dialog>
                                                <!-- <v-btn icon>
                                                            <v-icon>fas fa-share-alt-square</v-icon>
                                                        </v-btn> -->
                                            </v-list-item-action>
                                        </v-list-item>
                                        <v-divider :key="i"></v-divider>
                                    </template>
                                </v-list-item-group>
                            </v-list>
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