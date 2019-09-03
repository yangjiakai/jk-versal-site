<template>
    <div>
        <v-app-bar dark>
            <v-toolbar-title class="d-flex align-center">
                <img src="@/assets/images/logo2.png" alt="" width="130px">
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items v-if="language=='中文'" class="d-none d-md-flex">
                <v-btn text v-for="(item,i) in navigator" :to="item.route" :key="i">{{item.name}}</v-btn>
            </v-toolbar-items>
            <v-toolbar-items v-else-if="language=='english'" class="d-none d-md-flex">
                <v-btn text v-for="(item,i) in navigator_en" :to="item.route" :key="i">{{item.name}}</v-btn>
            </v-toolbar-items>
            <v-btn-toggle v-model="language" mandatory dark class="mx-3">
                <v-btn text value="中文" to="/" small>
                    中文
                </v-btn>
                <v-btn text value="english" to="/home_en" small>
                    English
                </v-btn>
            </v-btn-toggle>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer app absolute v-model="drawer">
            <v-list v-if="language=='中文'">
                <v-subheader>导航</v-subheader>
                <v-list-item-group>
                    <template v-for="(item,i) in navigator">
                        <v-list-item :to="item.route" :key="i">
                            <v-list-item-icon>
                                <v-icon>fas fa-compass</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
            <v-list v-else-if="language=='english'">
                <v-subheader>Navigator</v-subheader>
                <v-list-item-group>
                    <template v-for="(item,i) in navigator_en">
                        <v-list-item :to="item.route" :key="i">
                            <v-list-item-content>
                                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
            <!-- -->
        </v-navigation-drawer>
        

    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            language: "中文",
            navigator: [{
                    name: '首页',
                    route: '/'
                },
                {
                    name: '择仕简介',
                    route: '/about'
                },
                {
                    name: '选择择仕',
                    route: '/whyus'
                },
                {
                    name: '寻找顾问',
                    route: '/consultant'
                },
                {
                    name: '工作机会',
                    route: '/career'
                },
            ],
            navigator_en: [{
                    name: 'Home',
                    route: '/home_en'
                },
                {
                    name: 'About',
                    route: '/about_en'
                },
                {
                    name: 'Whyus',
                    route: '/whyus_en'
                },
                {
                    name: 'Consultant',
                    route: '/consultant_en'
                },
                {
                    name: 'Career',
                    route: '/career_en'
                },
            ]
        }),
    }
</script>