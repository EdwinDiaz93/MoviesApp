import { createStore } from 'vuex'
import { ValidateLogin } from '@/modules/auth/interfaces'
import getRequestToken from '@/modules/auth/composables/getRequestToken';
import validatedLogin from '@/modules/auth/composables/validateLogin';
const authStore = {
  state: {
    session: {
      username: '',
      request_token: '',
      expires_at: '',
      success: false,
    }
  },
  getters: {
  },
  mutations: {
    setSession(state: any, payload: any) {
      state.session = { ...payload }
    }
  },
  actions: {
    async login({ commit }: any, payload: ValidateLogin) {

      const { requestToken, load } = getRequestToken();
      await load();

      if (!requestToken.value.request_token) return;

      const { createSession, session } = validatedLogin();
      payload.request_token = requestToken.value.request_token;

      await createSession(payload);

      const { password, ...user } = payload

      localStorage.setItem('user', JSON.stringify(user));

      commit('setSession', { ...session.value, ...user });

    }
  },
}

export default authStore;