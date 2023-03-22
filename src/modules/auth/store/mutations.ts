import { Profile, AuthState } from '@/modules/auth/interfaces';
const mutations = {
    setSession(state: AuthState, payload: any) {
        state.session = { ...payload }
    },
    setLoginError(state: AuthState, payload: any) {
        state.loginError = { ...payload };
    },
    setProfile(state: AuthState, payload: Profile) {
        state.profile = { ...payload };
    }
};

export default mutations;