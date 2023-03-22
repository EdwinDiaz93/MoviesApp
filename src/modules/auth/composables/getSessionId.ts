import { ref } from 'vue';
import { enviroment } from '@/env';
import { TokenResponse } from '@/modules/auth/interfaces';

const getSessionId = () => {

    const sessionId = ref<TokenResponse>({
        expires_at: '',
        request_token: '',
        success: false,
        session_id:'',
    });

    let error = ref(null);

    const createId = async (requestToken: string) => {
        try {
            const response = await fetch(`${enviroment.baseUrl}3/authentication/session/new?api_key=${enviroment.api_key}`, {
                method: 'POST',
                body: JSON.stringify({ request_token: requestToken }),
                headers: {
                    'content-type': 'application/json',
                }
            });
            if (!response.ok) {
                throw Error('Data not created');
            }
            const data: TokenResponse = await response.json();
            sessionId.value = { ...data };
        } catch (err: any) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { sessionId, error, createId };
}

export default getSessionId;