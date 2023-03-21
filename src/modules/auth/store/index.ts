import { createStore } from 'vuex'
import { ValidateLogin } from '@/modules/auth/interfaces'
import getRequestToken from '@/modules/auth/composables/getRequestToken';
import validatedLogin from '@/modules/auth/composables/validateLogin';
import getSessionId from '@/modules/auth/composables/getSessionId';
import Swal from 'sweetalert2';
const authStore = {
  state: {
    session: {
      username: '',
      request_token: '',
      expires_at: '',
      session_id: '',
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

      try {
        const { requestToken, load } = getRequestToken();

        await load();

        if (!requestToken.value.request_token) return;

        const { createSession, session } = validatedLogin();

        payload.request_token = requestToken.value.request_token;

        await createSession(payload);

        const { createId, sessionId } = getSessionId();

        await createId(session.value.request_token);

        const { password, ...user } = payload

        localStorage.setItem('user', JSON.stringify({ ...user, session_id: sessionId.value.session_id }));

        commit('setSession', { ...session.value, ...user, session_id: sessionId.value.session_id });
      } catch (error) {
        console.log(error);
      }


    }
  },
}

export default authStore;