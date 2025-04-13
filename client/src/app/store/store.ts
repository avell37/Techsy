import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers";

const reducers = combineReducers(rootReducers);

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;