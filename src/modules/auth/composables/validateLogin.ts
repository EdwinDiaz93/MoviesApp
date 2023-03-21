import { ref } from 'vue';
import { enviroment } from '@/env';
import { RequestToken, ValidateLogin } from '@/modules/auth/interfaces';

const validatedLogin = () => {

    const session = ref<RequestToken>({
        expires_at: '',
        request_token: '',
        success: false
    });

    let error = ref(null);

    const createSession = async (credentials: ValidateLogin) => {
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
            const data: RequestToken = await response.json();
            session.value = { ...data };
        } catch (err: any) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { session, error, createSession };
}

export default validatedLogin