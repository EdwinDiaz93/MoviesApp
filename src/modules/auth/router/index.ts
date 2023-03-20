import {  RouteRecordRaw } from 'vue-router'

const router: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'index',
        children: [
            {
                path: 'login',
                name:'login',
                component: () => import('@/modules/auth/pages/Login.vue'),
            },
            {
                path: '/:pathMatch(.*)*',
                redirect: { name: 'login' }
            }
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'index' }
    }

]


export default router
