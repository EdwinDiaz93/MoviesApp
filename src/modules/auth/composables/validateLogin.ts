import { ref } from 'vue';
import { enviroment } from '@/env';
import { TokenResponse, LoginCredentials } from '@/modules/auth/interfaces';

const validateLogin = () => {

    const validToken = ref<TokenResponse>({
        expires_at: '',
        request_token: '',
        success: false
    });

    let error = ref(null);

    const revalidateToken = async (credentials: LoginCredentials) => {
        try {
            const response = await fetch(`${enviroment.baseUrl}/3/authentication/token/validate_with_login?api_key=${enviroment.api_key}`, {
                body: JSON.stringify(credentials),
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (!response.ok) {
                throw Error('Data not created');
            }
            const data: TokenResponse = await response.json();
            validToken.value = { ...data };
        } catch (err: any) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { validToken, error, revalidateToken };
}

export default validateLogin