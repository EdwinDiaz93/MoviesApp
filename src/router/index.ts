import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import authRouter from '@/modules/auth/router'
import moviesRouter from '@/modules/movies/router'
const routes: Array<RouteRecordRaw> = [

  {
    path: '/auth',
    name: 'auth',
    children: [
      ...authRouter
    ]
  },
  {
    path: '/movies',
    name: 'movies',
    children: [
      ...moviesRouter,
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
