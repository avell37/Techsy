import { userSelector } from "@/entities/User";
import {
    useAddToBasket,
    useAppSelector,
    useToggleFavorites,
} from "@/shared/hooks";
import { checkFavoriteDevices, countPagination } from "@/shared/lib";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFavorites = () => {
    const navigate = useNavigate();
    const { addToBasket, checkInBasket } = useAddToBasket();
    const { toggleFavorites } = useToggleFavorites();
    const [currentPage, setCurrentPage] = useState(1);
    const currentUser = useAppSelector(userSelector.currentUser);
    const favorites = currentUser?.favorites || [];

    const { currentItems, totalPages } = countPagination({
        devices: favorites,
        currentPage,
        itemsPerPage: 8,
    });

    const isFavorite = useMemo(() => {
        return (deviceId: string) =>
            checkFavoriteDevices({ deviceId, favorites });
    }, [favorites]);

    const handleToggleFavorites = (deviceId: string) =>
        toggleFavorites(deviceId);

    const handleAddToCart = (deviceId: string) => {
        if (checkInBasket(deviceId)) navigate("/basket");
        addToBasket(deviceId);
    };

    return {
        favorites,
        currentItems,
        totalPages,
        currentPage,
        isFavorite,
        setCurrentPage,
        handleToggleFavorites,
        handleAddToCart,
        checkInBasket,
    };
};
