import { RouteRecordRaw } from 'vue-router'

const router: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'index',
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('@/modules/auth/pages/Login.vue'),
                beforeEnter(to, from, next) {
                    const user = JSON.parse(localStorage.getItem('user')!) || null;
                    if (!user) {
                        return next();
                    } else {
                        return next({ path: '/movies/popular', replace: true })
                    }
                }
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
