import { FavoritesList, fetchAllFavoriteDevices } from "@/features/Favorites";
import { useAppDispatch } from "@/shared/hooks";
import { Header } from "@/widgets/Header";
import { useEffect } from "react";

export const FavoritesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllFavoriteDevices());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <FavoritesList />
        </div>
    );
};
