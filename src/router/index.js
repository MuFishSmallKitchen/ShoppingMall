import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

const Classification = () =>
    import ('../views/Classification.vue')
const Cart = () =>
    import ('../views/Cart.vue')
const Core = () =>
    import ('../views/Core.vue')

Vue.use(VueRouter)


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/classification',
    component: Classification
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/Core',
    component: Core
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router