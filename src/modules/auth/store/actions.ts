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
                const { username } = credentials;
                const payload = { username, session_id: session.session_id };
                commit('setSession', payload);
                localStorage.setItem('user', JSON.stringify(payload));
                commit('setLoginError', { status: false, message: '' });
            } else {
                commit('setLoginError', { status: true, message: validatedUser.status_message });
            }


        } catch (error: any) {
            console.log(error);
        }


    }
}

export default actions;