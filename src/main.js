import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { post } from 'request'
Vue.config.productionTip = false
    // Vue.config.productionTip.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')



//解决一个项目中多个请求地址

//创建对应得axios请求实例一
// const axios1 = axios.create({
//     baseURL: 'https://api.hejiakun.com/api/private/v1/',
//     timeout: 5000
// })

// //创建对应得axios请求实例二
// const axios2 = axios.create({
//     baseURL: 'https://api.hejiakun.com/api/private/v1/',
//     timeout: 5000
// })

// // 请求一
// axios1({
//     url: 'login',
//     method: 'post',
//     params: {
//         username: 'admin',
//         password: 123456
//     }
// }).then(res => {
//     console.log(res)
// })

// // 请求二
// axios2({
//     url: 'login',
//     method: 'post',
//     params: {
//         username: 'admin',
//         password: 123456
//     }
// }).then(res => {
//     console.log(res)
// })