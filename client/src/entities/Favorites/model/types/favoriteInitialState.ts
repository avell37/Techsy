import { FavoriteDevices } from "./favoriteDevices";

export interface FavoriteInitialState {
    favoriteDevices: FavoriteDevices[],
    loading: boolean,
    error: boolean,
    isLoaded: boolean,
    currentPage: number,
}