import { RouteRecordRaw } from 'vue-router'

const router: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'dashboard',
        component: () => import('@/modules/movies/components/DashBoard.vue'),
        children: [
            {
                path: 'popular',
                name: 'popular',
                component: () => import('@/modules/movies/pages/Popular.vue'),
            },
            {
                path: 'favorites',
                name: 'favorites',
                component: () => import('@/modules/movies/pages/Favorites.vue'),
            },
            {
                path: '/:pathMatch(.*)*',
                redirect: { name: 'popular' }
            }
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'dashboard' }
    }

]


export default router
