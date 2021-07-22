import Vue from 'vue'
const mutations = {
    setAge(state, data) {
        state.age += data
    },
    addName(state, data) {
        // state.name = data
        //需要使用响应式的修改方式
        //方法一
        Vue.set(state, 'name', data)

        //方法二
        // this.$set(state, 'name', data)

        // state.push(data)
    },
    syncAddData(state, data) {
        Vue.set(state, 'msg', data)
    }
}

export default mutations