import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import {
    useActions, useAppSelector, useModal,
    useNotification, useToggleFavorites
} from "@/shared/hooks";
import { deleteReview, reviewSelector } from "@/entities/Review";
import { DevicePageView } from "./DevicePageView/DevicePageView";
import { Container, Spinner } from "@/shared/ui";
import { checkFavoriteDevices, getToken } from "@/shared/lib";
import { Modal } from "@/features/ManageModal";
import { deviceSelector, favoriteSelector, userSelector } from "@/entities";

const DevicePage = () => {
    const { id } = useParams();
    const { notifySuccess, notifyError } = useNotification();
    const { isOpen, contentType, openModal, closeModal } = useModal();
    const device = useAppSelector(deviceSelector.selectedDevice)
    const loading = useAppSelector(deviceSelector.loading)
    const reviews = useAppSelector(reviewSelector.reviews);
    const currentUser = useAppSelector(userSelector.currentUser);
    const favoriteDevices = useAppSelector(favoriteSelector.favoriteDevices);
    const { fetchDeviceById, fetchDeviceReviews } = useActions();
    const { toggleFavorites } = useToggleFavorites();

    const handleAddReview = () => {
        if (!getToken('token')) {
            notifyError("Чтобы оставить отзыв, необходимо авторизоваться");
            return;
        }
        if (id) openModal("addReview");
    };

    const handleDeleteReview = async (reviewId: string) => {
        try {
            await deleteReview(reviewId);
            if (id) fetchDeviceReviews(id);
            notifySuccess("Отзыв успешно удален");
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    const isFavorite = useMemo(() => {
        return device ? checkFavoriteDevices({
            deviceId: device.id,
            favoriteDevices,
        }) : false
    }, [device, favoriteDevices])

    const handleToggleFavorites = () => {
        if (!device) return;
        toggleFavorites(device.id);
    }

    useEffect(() => {
        if (id) {
            fetchDeviceById(id);
            fetchDeviceReviews(id);
        }
    }, [id]);

    return (
        <div className="flex flex-col gap-[30px]">
            <Container>
                {loading ? (
                    <Spinner width="100px" height="100px" />
                ) : (
                    <DevicePageView
                        device={device}
                        currentUser={currentUser}
                        reviews={reviews}
                        isOpen={isOpen}
                        contentType={contentType}
                        isFavorite={isFavorite}
                        closeModal={closeModal}
                        openModal={openModal}
                        handleAddReview={handleAddReview}
                        handleDeleteReview={handleDeleteReview}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        toggleFavorites={handleToggleFavorites}
                    />
                )}
            </Container>
            <Modal
                isOpen={isOpen}
                contentType={contentType}
                onClose={closeModal}
            />
        </div>
    );
};

export default DevicePage;
