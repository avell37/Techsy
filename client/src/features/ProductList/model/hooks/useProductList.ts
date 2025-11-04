import {
    useAddToBasket,
    useAppSelector,
    useToggleFavorites,
} from "@/shared/hooks";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkFavoriteDevices, countPagination } from "@/shared/lib";
import { userSelector } from "@/entities/User";
import { selectFilteredDevices } from "../slice/selectFilteredDevices";

export const useProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { toggleFavorites } = useToggleFavorites();
    const { addToBasket, checkInBasket } = useAddToBasket();
    const filteredDevices = useAppSelector(selectFilteredDevices);
    const currentUser = useAppSelector(userSelector.currentUser);
    const favorites = currentUser?.favorites;
    const navigate = useNavigate();

    const isFavorite = useMemo(() => {
        return (deviceId: string) =>
            checkFavoriteDevices({ deviceId, favorites });
    }, [favorites]);

    const { currentItems, totalPages } = countPagination({
        devices: filteredDevices,
        currentPage,
        itemsPerPage: 8,
    });

    const handleToggleFavorites = (deviceId: string) =>
        toggleFavorites(deviceId);
    const handleAddToCart = (deviceId: string) => {
        if (checkInBasket(deviceId)) navigate("/basket");
        addToBasket(deviceId);
    };

    return {
        currentItems,
        totalPages,
        currentPage,
        isFavorite,
        setCurrentPage,
        handleAddToCart,
        handleToggleFavorites,
        checkInBasket,
    };
};
