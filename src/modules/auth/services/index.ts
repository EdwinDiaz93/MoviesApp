import HttpFactory from '@/factory';
import { enviroment } from '@/env';
import { TokenResponse, LoginCredentials,UnAuthorize } from '@/modules/auth/interfaces';
class AuthService extends HttpFactory {

    static async getToken(): Promise<TokenResponse> {
        try {
            return this.get<TokenResponse>(`${enviroment.baseUrl}/3/authentication/token/new?api_key=${enviroment.api_key}`);
        } catch (error:any) {
                throw new Error(error);
        }
    }

    static async validateToken(user: LoginCredentials): Promise<TokenResponse> {
        try {
            return this.post(`${enviroment.baseUrl}/3/authentication/token/validate_with_login?api_key=${enviroment.api_key}`, 'POST', user);
        } catch (error:any) {
            throw new Error(error);
        }
    }

    static async createSessionId(requestToken: string): Promise<TokenResponse> {
        try {
            return this.post(`${enviroment.baseUrl}3/authentication/session/new?api_key=${enviroment.api_key}`, 'POST', { request_token: requestToken });
        } catch (error:any) {
            throw new Error(error);
        }
    }
};


export default AuthService;