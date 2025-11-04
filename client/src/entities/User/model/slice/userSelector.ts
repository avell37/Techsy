import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const userState = (state: RootState) => state['userReducer'];

export const userSelector = {
    currentUser: createSelector(
        [userState],
        (userReducer) => userReducer.currentUser
    ),
    isAuth: createSelector(
        [userState],
        (userReducer) => userReducer.isAuth
    ),
    loading: createSelector(
        [userState],
        (userReducer) => userReducer.loading
    ),
    error: createSelector(
        [userState],
        (userReducer) => userReducer.error
    ),
}