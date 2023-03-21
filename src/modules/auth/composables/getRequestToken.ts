import { ref } from 'vue';
import { enviroment } from '@/env';
import { RequestToken } from '@/modules/auth/interfaces';

const getRequestToken = () => {

    const requestToken = ref<RequestToken>({
        expires_at: '',
        request_token: '',
        success: false
    });

    let error = ref(null);

    const load = async () => {
        try {
            const response = await fetch(`${enviroment.baseUrl}/3/authentication/token/new?api_key=${enviroment.api_key}`);
            if (!response.ok) {
                throw Error('Data not created');
            }
            const data: RequestToken = await response.json();
            requestToken.value = { ...data };
        } catch (err: any) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { requestToken, error, load };
}

export default getRequestToken