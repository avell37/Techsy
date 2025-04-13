import { IUser } from '@shared/types/IUser';

export interface UserProps {
    currentUser: IUser | null,
    loading: string
}

