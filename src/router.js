import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: require('./components/about.vue')
    },
    {
        path: '/blog',
        component: require('./components/blog.vue')
    },
    {
        path: '/works',
        component: require('./components/works.vue')
    },
    {
        path: '*',
        component: require('./components/error.vue')
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})