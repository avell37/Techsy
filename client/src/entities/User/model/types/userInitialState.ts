import { IUser } from '@shared/types/IUser';

export interface UserInitialState {
    currentUser: IUser | null,
    isAuth: boolean,
    loading: boolean,
    error: boolean
}

