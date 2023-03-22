import { AuthState } from "@/modules/auth/interfaces";

const state: AuthState = {
    session: {
        username: '',
        session_id: '',
        account_id: 0
    },
    loginError: {
        message: '',
        status: false,
    },
    profile: {
        avatar: {
            gravatar: {
                hash: ''
            },
            tmdb: {
                avatar_path: null
            }
        },
        id: 0,
        include_adult: false,
        iso_3166_1: '',
        iso_639_1: '',
        name: '',
        username: '',
    }

};

export default state;