import { Header } from "@/widgets/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteReview, fetchOneDevice } from "@/shared/api/deviceApi";
import { IDevice } from "@/shared/types";
import { useAppSelector, useModal, useNotification } from "@/shared/hooks";
import { useAppDispatch } from "@/shared/hooks";
import { fetchDeviceReviews } from "@/entities/Review";
import { DevicePageView } from "./DevicePageView/DevicePageView";
import Cookies from "js-cookie";

const DevicePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const [device, setDevice] = useState<IDevice | null>(null);
    const { isOpen, contentType, openModal, closeModal } = useModal();
    const { reviews } = useAppSelector((state) => state.reviewReducer);
    const { currentUser } = useAppSelector((state) => state.userReducer);
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
            const data = await fetchOneDevice(id);
            setDevice(data);
        } catch (err) {
            console.error(err);
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
        <div className="flex flex-col gap-[50px]">
            <Header />
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
            />
        </div>
    );
};

export default DevicePage;
