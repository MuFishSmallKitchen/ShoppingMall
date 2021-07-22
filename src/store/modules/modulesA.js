import Vue from 'vue'

export default {
    //namespaced模块作用域必须加上
    namespaced: true,
    state: {
        moduleAge: 20,
        name: '王五'
    },
    getters: {
        // getStateData(state) {
        //     return state.moduleAge - 2
        // }
    },
    mutations: {
        setStateWw(state, data) {
            Vue.set(state, 'name', data)
        }
    },
    actions: {

    }
}