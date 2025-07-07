import { NavigateFunction } from "react-router-dom";

export interface HeaderSchema {
    navigate: NavigateFunction,
    userLogout: (route: string) => void;
}

export interface HeaderAuthSchema extends HeaderSchema {
    picture: string | undefined,
    userIsAuth: string | undefined,
}