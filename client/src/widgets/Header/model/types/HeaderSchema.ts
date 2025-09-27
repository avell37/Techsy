import { IUser } from "@/shared/types";
import { NavigateFunction } from "react-router-dom";

export interface HeaderSchema {
    currentUser: IUser | null;
    navigate: NavigateFunction,
    userLogout: (route: string) => void;
    picture: string | undefined;
    userIsAuth: string | undefined;
}