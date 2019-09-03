import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About/index')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('./views/Career/index')
    }, {
      path: '/whyus',
      name: 'whyus',
      component: () => import('./views/Whyus/index')
    }, {
      path: '/news',
      name: 'news',
      component: () => import('./views/News/index')
    }, {
      path: '/consultant',
      name: 'consultant',
      component: () => import('./views/Consultant/index')
    }, {
      path: '/home_en',
      name: 'home_en',
      component: () => import('./views/Home/index_en')
    }, {
      path: '/about_en',
      name: 'about_en',
      component: () => import('./views/About/index_en')
    }, {
      path: '/career_en',
      name: 'career_en',
      component: () => import('./views/Career/index_en')
    }, {
      path: '/whyus_en',
      name: 'whyus_en',
      component: () => import('./views/Whyus/index_en')
    }, {
      path: '/news_en',
      name: 'news_en',
      component: () => import('./views/News/index_en')
    }, {
      path: '/consultant_en',
      name: 'consultant_en',
      component: () => import('./views/Consultant/index_en')
    }, {
      path: '/job_edit',
      name: 'job_edit',
      component: () => import('./views/Career/job_edit')
    }, {
      path: '/consultant_edit',
      name: 'consultant_edit',
      component: () => import('./views/Consultant/consultant_edit')
    }

  ]
})