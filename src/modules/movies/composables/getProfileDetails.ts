import { ref } from 'vue';
import { enviroment } from '@/env';
import { Profile } from '@/modules/auth/interfaces';

const getProfileDetails = () => {

    const profileDetails = ref<Profile>({
        avatar: {
            gravatar: {
                hash: ""
            },
            tmdb: {
                avatar_path: null
            }
        },
        id: 18442991,
        iso_639_1: "",
        iso_3166_1: "",
        name: "",
        include_adult: false,
        username: ""

    });

    let error = ref(null);

    const load = async (session_id: string) => {
        try {
            const response = await fetch(`${enviroment.baseUrl}3/account?api_key=${enviroment.api_key}&session_id=${session_id}`);
            if (!response.ok) {
                throw Error('Data not available');
            }
            const data = await response.json();

            profileDetails.value = { ...data };
        } catch (err: any) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { profileDetails, error, load };
}

export default getProfileDetails;