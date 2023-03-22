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
    beforeEnter(to, from, next){

      const user = JSON.parse(localStorage.getItem('user')!) || null;
      if (!user) {
        return next({ path: '/auth/login', replace: true })
      } else {
        return next();
      }
    },
    children: [
      ...moviesRouter,
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
