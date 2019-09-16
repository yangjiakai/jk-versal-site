<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar dark app color="#232332">
      <v-toolbar-title class="d-flex align-center">
        <img src="@/assets/images/logo2.png" alt="" width="130px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="language=='中文'" class="d-none d-md-flex">
        <v-btn text v-for="(item,la) in navigator" :to="item.route" :key="la">{{item.name}}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else-if="language=='english'" class="d-none d-md-flex">
        <v-btn text v-for="(item,lb) in navigator_en" :to="item.route" :key="lb">{{item.name}}</v-btn>
      </v-toolbar-items>
      <v-btn-toggle v-model="language" mandatory light class="mx-3">
        <v-btn text value="中文" to="/" small>
          简体中文
        </v-btn>
        <v-btn text value="english" to="/home_en" small>
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
          <template v-for="(item,lc) in navigator">
            <v-list-item :to="item.route" :key="lc">
              <v-list-item-icon>
                <v-icon>fab fa-ethereum</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="lc"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
      <v-list v-else-if="language=='english'">
        <v-subheader>Navigator</v-subheader>
        <v-list-item-group>
          <template v-for="(item,ld) in navigator_en">
            <v-list-item :to="item.route" :key="ld">
              <v-list-item-icon>
                <v-icon>fab fa-ethereum</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="ld"></v-divider>
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

          <v-col cols="6" md="3">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>企业情报</li>
              <li v-for="(item,ia) in footer_nav.col1" :key="ia">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <li>About</li>
              <li v-for="(item,ea) in footer_nav_en.col1" :key="ea">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="6" md="3">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>寻找顾问</li>
              <li v-for="(item,ib) in footer_nav.col2" :key="ib">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <li>Consultant</li>
              <li v-for="(item,e2) in footer_nav_en.col2" :key="e2">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="6" md="3">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>工作机会</li>
              <li v-for="(item,ic) in footer_nav.col3" :key="ic">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <li>Career</li>
              <li v-for="(item,ec) in footer_nav_en.col3" :key="ec">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="6" md="3">
            <ul class="mx-auto" style="width:150px" v-if="language=='中文'">
              <li>择仕新闻</li>
              <li v-for="(item,id) in footer_nav.col4" :key="id">
                <router-link :to="item.route">{{item.name}}</router-link>
              </li>
              <li>
                <v-dialog v-model="dialog" width="500" persistent>
                  <template v-slot:activator="{ on }">
                    <a v-on="on">
                      员工入口
                    </a>
                  </template>

                  <v-card>
                    <v-card-title class="headline white--text" primary-title style="background-color:#232332
                    
                    
                    
                    
                    
                    
                    ">
                      <span class="flex-grow-1">员工入口</span>
                      <v-btn
                      color="grey darken-1"
                      @click="dialog = false"
                      icon>
                      <v-icon>fas
                          fa-times
                      </v-icon>
                  </v-btn>
                    </v-card-title>

                    <v-card-text class="pa-5">
                      <div v-if="!enter">
                          <v-text-field label="用户名" v-model="username" :rules="[v => v=='versal' || '用户名不正确']"></v-text-field>
                          <v-text-field label="密码" type="password" v-model="password"  :rules="[v => v=='zeshi' || '密码不正确']"></v-text-field>
                      </div>
                     <div v-else-if="enter">
                        <v-btn block class="mb-5" dark color="#232332" to="job_edit" @click="dialog = false">职位管理入口</v-btn>
                        <v-btn block dark color="#232332" to="consultant_edit" @click="dialog = false">顾问管理入口</v-btn>
                     </div>
           
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions v-if="!enter">
                      <div class="flex-grow-1"></div>
                      <v-btn color="#232332" text @click="check">
                        进入
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </li>
            </ul>
            <ul class="mx-auto" style="width:150px" v-else-if="language=='english'">
              <div>
                  <li>Versal News</li>
                  <li v-for="(item,ed) in footer_nav_en.col4" :key="ed">
                    <router-link :to="item.route">{{item.name}}</router-link>
                  </li>
        
              </div>
             
      
            </ul>
          </v-col>

        </v-row>

      </v-container>
      <v-card color="grey darken-4 " class="text-center white--text" width="100%">
        Copyright&copy;2012 - 2019<strong>&nbsp;Shanghai Versal Consulting Co.Ltd&nbsp;</strong> All Rights Reserved
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    methods:{
      check(){
        if (this.username=='versal'&&this.password=='zeshi') {
          this.enter='b' 
          console.log(666);
          console.log(this.enter); 
        }
      }
    },
    data: () => ({
      drawer: false,
      dialog:false,
      enter:false,
      username:'',
      password:'',
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
        {
          name: 'Consultant',
          route: '/consultant_en'
        },
        {
          name: 'Career',
          route: '/career_en'
        },
        {
          name: 'News',
          route: '/news_en'
        },
      ],
      footer_nav: {
        col1: [{
            name: '核心业务',
            route: '/about'
          },
          {
            name: '创始人',
            route: '/about'
          },
          {
            name: '历史沿革',
            route: '/about'
          },
        ],
        col2: [{
          name: '顾问列表',
          route: '/consultant'
        }],
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
            name: 'BUSINESS',
            route: '/about'
          },
          {
            name: 'HISTORY',
            route: '/about'
          },
          {
            name: 'CEO',
            route: '/about'
          },

        ],
        col2: [{
          name: 'CONSULTANT',
          route: '/consultant'
        }],
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
</style>