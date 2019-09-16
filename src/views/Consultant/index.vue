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
                                    <div class="display-3 my-5 font-weight-black"><span class="main-title">寻找顾问</span>
                                    </div>
                                    <div class="display-1 mb-5">Meet Consultants</div>
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
                                <v-col class="py-12" v-for="item in allConsultants" :key="item.id" cols="12" md="6"
                                    lg="3">
                                    <v-item-group>
                                        <v-item v-slot:default="{ active, toggle }">
                                            <v-hover v-slot:default="{ hover }">
                                                <v-card width="300" class="text-center mx-auto"
                                                    :elevation="hover ? 12 : 2" @click="openItem(item)">
                                                    <v-avatar size="120" class="mt-n6">
                                                        <img src="../../assets/avatar.jpg" alt="avatar">
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
                                                                                        <v-img
                                                                                            src="../../assets/avatar.jpg">
                                                                                            <v-btn
                                                                                                class="float-right d-flex d-md-none"
                                                                                                color="white darken-1"
                                                                                                @click="dialog = false"
                                                                                                icon>
                                                                                                <v-icon>fas fa-times
                                                                                                </v-icon>
                                                                                            </v-btn>
                                                                                        </v-img>
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
                                                                                            <div>
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
                                                                                            </div>
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

                }
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