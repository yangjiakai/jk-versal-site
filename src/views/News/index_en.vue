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
                                        <div class="display-3 my-5 font-weight-black"><span class="main-title">Versal News</span>
                                        </div>
                                        <div class="display-1 mb-5">择仕新闻</div>
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
                                <v-card max-width="1200" class="mx-auto my-5" elevation="3" v-for="i in 1">
                                    <v-list-item>
                                        <v-list-item-avatar color="blue">
                                            <img src="../../assets/logo_icon.png" alt="">
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title class="headline">No News</v-list-item-title>
                                            <v-list-item-subtitle>No News</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
    
                                    <v-img src="../../assets/images/外包.jpg" height="300"></v-img>
    
                                    <v-card-text>
                                        No News
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