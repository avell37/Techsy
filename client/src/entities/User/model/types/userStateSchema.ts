import { IUser } from '@shared/types/IUser';

export interface UserStateSchema {
    currentUser: IUser | null,
    loading: boolean,
    error: boolean
}

