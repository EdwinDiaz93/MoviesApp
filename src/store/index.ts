import { createStore } from 'vuex'
import authStore from '@/modules/auth/store';
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
    }
  }
});