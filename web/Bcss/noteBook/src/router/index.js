import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

// admin:logins levels
const Home = () => import('../views/Home.vue');
const Login = () => import('../views/Login.vue');

const routes = [
    // 登录页面
    {
        path: '/',
        component: Login,
        meta: {
            rbac: 'frees',
            title: '登录'
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            rbac: 'logins',
            title: '管理后台'
     	}
 	}
]

const router = new VueRouter({
    // mode: 'history', // 去除#号
    // base: process.env.BASE_URL,
    routes
});

export default router