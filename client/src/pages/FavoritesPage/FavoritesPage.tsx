import { FavoritesList, fetchAllFavoriteDevices } from "@/features/Favorites";
import { useAppDispatch } from "@/shared/hooks";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/Header";
import { useEffect } from "react";

const FavoritesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllFavoriteDevices());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Container>
                <FavoritesList />
            </Container>
        </div>
    );
};

export default FavoritesPage;
