<template>
    <div>
        <v-footer>
            <v-row>
                <v-cols cols="12" sm="6" md="3">
                    <ul>

                        <li>择仕简介</li>
                        <li>
                            <router-link to="/about">企业情报</router-link>
                        </li>
                        <li>
                            <router-link to="/about">核心业务</router-link>
                        </li>
                        <li>
                            <router-link to="/about">历史沿革</router-link>
                        </li>
                        <li>
                            <router-link to="/about">CEO</router-link>
                        </li>
                        <li>
                            <router-link to="/about">合伙人</router-link>
                        </li>
                        <li>
                            <router-link to="/about">互联网团队</router-link>
                        </li>
                    </ul>
                </v-cols>
            </v-row>
        </v-footer>
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