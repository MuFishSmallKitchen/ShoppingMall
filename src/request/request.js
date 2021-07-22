//请求封装
import axios from 'axios'

export function request(config) {
    //方法一
    // return new Promise((resolve, reject) => {
    //     //创建axios实例
    //     const instance = axios.create({
    //         baseURL: 'https://api.hejiakun.com/api/private/v1/',
    //         timeout: 5000
    //     })

    //     //请求
    //     instance(config).then(res => {
    //         resolve(res)
    //     }).catch(err => {
    //         reject(err)
    //     })

    // })



    //或者直接return, 也是一个promise
    //1、创建axios实例
    const instance = axios.create({
        baseURL: 'https://api.hejiakun.com/api/private/v1/',
        timeout: 5000
    })

    //2、axios拦截器

    instance.interceptors.request.use(config => {
        // console.log(config)
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    //3、发送网络请求
    return instance(config)
}