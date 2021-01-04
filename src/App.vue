<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar dark fixed color="rgba(0,0,0,.3)">
      <v-toolbar-title class="d-flex align-center">
        <img src="@/assets/images/logo_全染.png" alt="" width="130px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="language=='中文'" class="d-none d-md-flex">
        <v-btn text v-for="(item,index) in navigator" :to="item.route" @click="item.link?jump(item.link):''"
          :key="index">{{item.name}}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else-if="language=='english'" class="d-none d-md-flex">
        <v-btn text v-for="(item,index) in navigator_en" :to="item.route" @click="item.link?jump(item.link):''"
          :key="index">{{item.name}}</v-btn>
      </v-toolbar-items>
      <v-btn-toggle v-model="language" tile color="brown lighten-5" group mandatory class="ml-2">
        <v-btn value="中文">
          简体中文
        </v-btn>

        <v-btn value="english">
          English
        </v-btn>
      </v-btn-toggle>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Side Bar -->
    <v-navigation-drawer v-model="drawer" fixed dark color="#232332">
      <v-list v-if="language=='中文'">
        <v-subheader>导航</v-subheader>
        <v-list-item-group>
          <template v-for="(item,index) in navigator">
            <v-list-item :to="item.route" @click="item.link?jump(item.link):''" :key="index">
              <v-list-item-icon>
                <v-icon>fab fa-ethereum</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="index + 'divider1'"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
      <v-list v-else-if="language=='english'">
        <v-subheader>Navigator</v-subheader>
        <v-list-item-group>
          <template v-for="(item,index) in navigator_en">
            <v-list-item :to="item.route" @click="item.link?jump(item.link):''" :key="index">
              <v-list-item-icon>
                <v-icon>fab fa-ethereum</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="index + 'divider2'"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>


    <!-- Main Content -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- App Footer -->
    <v-footer style="background-color:#232332 ">

      <v-container style="width: 1200px">

        <v-row justify="center">

          <v-col cols="4">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>企业情报</li>
              <li v-for="(item,index) in footer_nav.col1" :key="index">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <li>About</li>
              <li v-for="(item,index) in footer_nav_en.col1" :key="index">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
          </v-col>
          <!-- <v-col cols="6" md="3">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>寻找顾问</li>
              <li v-for="(item,index) in footer_nav.col2" :key="index">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <li>Consultant</li>
              <li v-for="(item,index) in footer_nav_en.col2" :key="index">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
          </v-col> -->
          <v-col cols="4">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>工作机会</li>
              <li>
                <a href="http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date"
                  target="_blank">工作机会</a>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <li>Career</li>
              <li>
                <a href="http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date"
                  target="_blank">Career</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="4">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>择仕新闻</li>
              <li v-for="(item,index) in footer_nav.col4" :key="index">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <div>
                <li>Versal News</li>
                <li v-for="(item,index) in footer_nav_en.col4" :key="index">
                  <router-link :to="item.route">{{item.name}}</router-link>
                </li>

              </div>


            </ul>
          </v-col>

        </v-row>

      </v-container>
      <v-card color="grey darken-4 " class="text-center white--text" width="100%">
        Copyright&copy;2012 - 2021<strong>&nbsp;Shanghai Versal Consulting Co.Ltd&nbsp;</strong> All Rights Reserved
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    methods: {
      jump(e) {
        // 外链的跳转方式
        // window.location.href = e

        // 新窗口打开外链的方式
        window.open(e, '_blank')
      },
    },
    data: () => ({
      careerlink: "http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date",
      drawer: false,
      dialog: false,
      enter: false,
      username: '',
      password: '',
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
        // {
        //   name: '寻找顾问',
        //   route: '/consultant'
        // },
        {
          name: '工作机会',
          // route: '/career',
          link: 'http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date'
        },
        {
          name: '择仕新闻',
          route: '/news'
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
        // {
        //   name: 'Consultant',
        //   route: '/consultant_en'
        // },
        {
          name: 'Career',
          // route: '/career_en'
          link: 'http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date'
        },
        {
          name: 'News',
          route: '/news_en'
        },
      ],
      footer_nav: {
        col1: [{
          name: '历史沿革',
          route: '/about'
        }],
        // col2: [{
        //   name: '顾问列表',
        //   route: '/consultant'
        // }],
        col3: [{
          name: '工作机会',
          route: '/career'
        }],
        col4: [{
          name: '择仕新闻',
          route: '/news'
        }],
      },
      footer_nav_en: {
        col1: [{
            name: 'HISTORY',
            route: '/about'
          },

        ],
        // col2: [{
        //   name: 'CONSULTANT',
        //   route: '/consultant'
        // }],
        col3: [{
          name: 'CAREER',
          route: '/career'
        }],
        col4: [{
          name: 'NEWS',
          route: '/news'
        }],
      }
    }),
  };
</script>

<style lang="css">
  .v-content {
    background-color: rgb(238, 238, 238)
  }


  li {
    list-style: none;
    margin-bottom: 1em;
    color: #767699;
    font-weight: 500;
  }

  li:first-child {
    color: #fff;
    font-size: 1.2em
  }

  .v-footer a {
    text-decoration: none;
    color: #767699 !important;
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
    left: -40px;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    z-index: -1;
    background-image: linear-gradient(135deg, rgb(245, 210, 173, .7), rgb(186, 126, 90, .9));
    box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
    transform: rotate(-3deg);
  }

  .main-text-color {
    color: #C88E67;
  }
</style>