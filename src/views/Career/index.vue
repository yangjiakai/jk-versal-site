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
                                        <div class="display-3 my-5 font-weight-black"><span class="main-title">
                                                工作机会</span>
                                        </div>
                                        <div class="display-1 mb-5">Your Career</div>
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
                                        <template v-for="item in jobList">
                                            <v-list-item @click.stop="openItem(item)" :key="item.id">
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
                                                        <i class="fas fa-map-marker-alt" v-if="item.location">
                                                            {{item.location}}</i>
                                                        <i class="fab fa-gg ml-5" v-if="item.category">
                                                            {{item.category}}</i>
                                                        <i class="fas fa-money-check-alt ml-5" v-if="item.salary">
                                                            {{item.salary}}</i>
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <template v-slot:activator="{ on }">
                                                        <v-btn color="#232332" v-on="on" icon @click="openItem(item)">
                                                            <v-icon>fas fa-share-alt-square</v-icon>
                                                        </v-btn>
                                                    </template>
                                                </v-list-item-action>
                                            </v-list-item>
                                            <v-divider></v-divider>
                                        </template>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                        </v-card>
                    </v-col>
                </v-row>
                <v-dialog v-model="dialog">
    
                    <v-container class="white py-0">
                        <v-row style="background-color:#232332">
                            <v-col cols="12" md="8">
                                <v-card class="pa-5" flat dark color="transparent">
                                    <h1 class="pa-3">{{job.title}}<span class="pl-3 title">{{job.salary}}</span>
                                    </h1>
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
    
                                <v-icon @click="dialog = false" class="white--text">fas
                                    fa-times</v-icon>
    
    
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="8">
                                <v-card class="pa-5" outlined>
                                    <v-card-text>
                                        <div>
                                            <h2 class="my-8 black--text"><i class="fas fa-stream mx-3"></i>工作描述
                                            </h2>
                                            <p class="pl-4" v-if="job.description">
                                                {{job.description}}
                                            </p>
                                        </div>
                                        <div v-if="job.duty1">
                                            <h2 class="my-8 black--text"><i class="fas fa-bolt mx-3"></i>岗位职责
                                            </h2>
                                            <p class="d-flex align-center" v-if="job.duty1">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.duty1}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.duty2">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.duty2}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.duty3">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.duty3}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.duty4">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.duty4}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.duty5">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.duty5}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.duty6">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.duty6}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.duty7">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.duty7}}</span>
                                            </p>
                                        </div>
                                        <div v-if="job.request1">
                                            <h2 class="my-8 black--text"><i class="fas fa-book mx-3"></i>任职要求
                                            </h2>
                                            <p class="d-flex align-center" v-if="job.request1">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.request1}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.request2">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.request2}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.request3">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.request3}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.request4">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.request4}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.request5">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.request5}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.request6">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.request6}}</span>
                                            </p>
                                            <p class="d-flex  align-center" v-if="job.request7">
                                                <i class="fas fa-check-circle mx-3"></i>
                                                <span>{{job.request7}}</span>
                                            </p>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
    
    
                            <v-col cols="12" md="4">
                                <v-card class="pa-5 fill-height" outlined>
                                    <v-row>
                                        <v-col>
                                            <v-card max-width="500" class="mx-auto pa-5" min-height="600" my-5>
                                                <v-card-title>
                                                    <h3 class="my-5" style="color: #353550">申请职位</h3>
    
                                                    <p>发送简历至{{job.email}}</p>
                                                </v-card-title>
    
                                                <v-form ref="form" lazy-validation>
                                                    <v-text-field label="姓名（必需）" hint="中文名" color="#353550 " placeholder=" "
                                                        prepend-icon="fas fa-user-circle">
                                                    </v-text-field>
                                                    <v-text-field label="电话号码" color="#353550 " placeholder=" "
                                                        prepend-icon="fas fa-phone-volume">
    
                                                    </v-text-field>
                                                    <v-text-field label="邮箱（必需）" required color="#353550 " placeholder=" "
                                                        prepend-icon="fas fa-envelope">
                                                    </v-text-field>
                                                    <v-file-input label="上传简历" required hint="小于5M,PDF或者Doc格式"
                                                        placeholder=" " outlined color="#353550 " class="my-2">
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
    
            </v-container>
    
        </div>
    </template>
    
    
    
    <script>
        import {
            mapGetters,
            mapActions
        } from 'vuex'
    
        import jobs from './jobs.js'
        export default {
            data() {
                return {
    
                    dialog: false,
                    valid: true,
                    job: {},
                    jobList: []
    
                }
            },
            methods: {
                // ...mapActions(["fetchJobs"]),
                openItem(item) {
                    this.job = Object.assign({}, item)
                    console.log(this.job);
    
                    this.dialog = true
                },
            },
            computed: {
                // ...mapGetters(["allJobs"])
            },
            created() {
                // this.fetchJobs()
                this.jobList = Object.assign({}, jobs.jobs)
                console.log(jobList);
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