const mutations = {
    setSession(state: any, payload: any) {
        state.session = { ...payload }
    },
    setLoginError(state: any, payload: any) {
        state.loginError = { ...payload };
    }
};

export default mutations;