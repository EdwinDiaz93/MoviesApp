import { createStore } from 'vuex'
import authStore from '@/modules/auth/store';
import moviesStore from '@/modules/movies/store';
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: {
      namespaced: true,
      ...authStore
    },
    movies:{
      namespaced:true,
      ...moviesStore
    }
  }
});