import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules/index'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
    age: 18
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules
})