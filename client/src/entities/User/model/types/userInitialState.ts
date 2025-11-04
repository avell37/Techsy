import type { IUser } from "./IUser";

export interface UserInitialState {
    currentUser: IUser | null,
    isAuth: boolean,
    loading: boolean,
    error: boolean
}

