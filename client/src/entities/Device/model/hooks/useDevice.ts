import { useActions, useAppSelector, useNotification, useToggleFavorites } from "@/shared/hooks";
import { deviceSelector } from "../slice/deviceSelector";
import { userSelector } from "@/entities/User";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { checkFavoriteDevices } from "@/shared/lib";

export const useDevice = () => {
    const { notifySuccess, notifyError } = useNotification();
    const device = useAppSelector(deviceSelector.selectedDevice)
    const loading = useAppSelector(deviceSelector.loading)
    const currentUser = useAppSelector(userSelector.currentUser);
    const { fetchDeviceById, fetchDeviceReviews } = useActions();
    const { toggleFavorites } = useToggleFavorites();
    const { id } = useParams();
    const favorites = currentUser?.favorites;
    
    useEffect(() => {
        if (id) {
            fetchDeviceById(id);
            fetchDeviceReviews(id);
        }
    }, [id]);

    const isFavorite = useMemo(() => {
        return device ? checkFavoriteDevices({
            deviceId: device.id,
            favorites,
        }) : false
    }, [device, favorites])

    const handleToggleFavorites = () => {
        if (!device) return;
        toggleFavorites(device.id);
    }

    return {
        device,
        loading,
        currentUser,
        isFavorite,
        notifySuccess,
        notifyError,
        handleToggleFavorites
    }
}