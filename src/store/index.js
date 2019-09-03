import Vue from 'vue'
import Vuex from 'vuex'
import jobs from './modules/jobs'
import consultants from './modules/consultants'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        jobs,
        consultants
    }
})
