import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueTypedJs from 'vue-typed-js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueTypedJs)
Vue.config.productionTip = false

NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from , next) => {
  NProgress.start();

  next();
});

router.afterEach(() => {  
  NProgress.done()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
