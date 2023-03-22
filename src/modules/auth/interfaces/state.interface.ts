import { Profile } from "@/modules/auth/interfaces"

export interface AuthState {
    session: {
        username: string,
        session_id: string,
        account_id: number
    },
    loginError: {
        message: string,
        status: boolean,
    },
    profile?: Profile
}