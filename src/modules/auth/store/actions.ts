import { LoginCredentials } from '@/modules/auth/interfaces'
import AuthService from '@/modules/auth/services';

const actions = {

    async login({ commit }: any, credentials: LoginCredentials) {

        try {
            const result = await AuthService.getToken();

            const user: LoginCredentials = { ...credentials, request_token: result.request_token };



            const validatedUser = await AuthService.validateToken(user);

            if (validatedUser.success) {
                const session = await AuthService.createSessionId(validatedUser.request_token);
                const account = await AuthService.getAccountId(session.session_id!);

                const payload = {
                    username: credentials.username,
                    session_id: session.session_id,
                    account_id: account.id
                };

                commit('setSession', payload);
                localStorage.setItem('user', JSON.stringify(payload));
                commit('setLoginError', { status: false, message: '' });
            } else {
                commit('setLoginError', { status: true, message: validatedUser.status_message });
            }


        } catch (error: any) {
            console.log(error);
        }
    },
    async getProfile({ commit }: any) {
        const user = JSON.parse(localStorage.getItem('user')!) || null;
        if (!user) return Promise.reject('User not found');
        const profile = await AuthService.getAccountId(user.session_id);
        commit('setProfile',profile);
    }
}

export default actions;