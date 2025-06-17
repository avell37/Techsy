import { Header } from "@/widgets/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IDevice } from "@/shared/types";
import { useAppSelector, useModal, useNotification } from "@/shared/hooks";
import { useAppDispatch } from "@/shared/hooks";
import { deleteReview, fetchDeviceReviews } from "@/entities/Review";
import { DevicePageView } from "./DevicePageView/DevicePageView";
import Cookies from "js-cookie";
import { Container } from "@/shared/ui";
import { checkFavoriteDevices, toggleFavorites } from "@/shared/lib";
import { Spinner } from "@/shared/assets";
import { Modal } from "@/features/ManageModal";
import { fetchOneDevice } from "@/entities";

const DevicePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const [device, setDevice] = useState<IDevice | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { isOpen, contentType, openModal, closeModal } = useModal();
    const { reviews } = useAppSelector((state) => state.reviewReducer);
    const { currentUser } = useAppSelector((state) => state.userReducer);
    const { favoriteDevices } = useAppSelector(
        (state) => state.favoriteReducer
    );
    const { notifySuccess, notifyError } = useNotification();

    useEffect(() => {
        getData();
        if (id) {
            dispatch(fetchDeviceReviews(id));
        }
    }, [id, dispatch]);

    const getData = async () => {
        if (!id) return;
        try {
            setIsLoading(true);
            const data = await fetchOneDevice(id);
            setDevice(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddReview = () => {
        if (!Cookies.get("token")) {
            notifyError("Чтобы оставить отзыв, необходимо авторизоваться");
            return;
        }
        if (id) {
            openModal("addReview");
        }
    };

    const handleDeleteReview = async (reviewId: string) => {
        try {
            await deleteReview(reviewId);
            if (id) {
                dispatch(fetchDeviceReviews(id));
            }
            notifySuccess("Отзыв успешно удален");
        } catch (err) {
            console.log(err);
            notifyError("Произошла ошибка... Попробуй еще раз :)");
        }
    };

    return (
        <div className="flex flex-col gap-[30px]">
            <Header />
            <Container>
                {isLoading ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <Spinner width="100px" height="100px" />
                    </div>
                ) : (
                    <DevicePageView
                        device={device}
                        currentUser={currentUser}
                        reviews={reviews}
                        isOpen={isOpen}
                        contentType={contentType}
                        closeModal={closeModal}
                        openModal={openModal}
                        handleAddReview={handleAddReview}
                        handleDeleteReview={handleDeleteReview}
                        dispatch={dispatch}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        isFavorite={
                            device
                                ? checkFavoriteDevices({
                                    deviceId: device.id,
                                    favoriteDevices,
                                })
                                : false
                        }
                        toggleFavorites={() =>
                            device &&
                            toggleFavorites({
                                device,
                                notifySuccess,
                                notifyError,
                                dispatch,
                            })
                        }
                    />
                )}
            </Container>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                contentType={contentType}
            />
        </div>
    );
};

export default DevicePage;
