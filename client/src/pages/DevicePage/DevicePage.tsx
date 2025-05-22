import { Header } from "@/widgets/Header";
import { Button } from "@/shared/ui";
import { StarIcon } from "@/shared/assets";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteReview, fetchOneDevice } from "@/shared/api/deviceApi";
import { IDevice } from "@/shared/types";
import { useAppSelector, useModal, useNotification } from "@/shared/hooks";
import { Modal } from "@/features/ManageModal";
import { useAppDispatch } from "@/shared/hooks";
import { fetchDeviceReviews } from "@/entities/Review";
import { ReviewCard } from "@/shared/ui/ReviewCard/ReviewCard";

export const DevicePage = () => {
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
    }, []);

    const getData = async () => {
        if (!id) return;
        const data = await fetchOneDevice(id);
        setDevice(data);
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
            <div className="pb-8 flex justify-around border-b border-[#5120B8]/30">
                <div className="w-[400px] h-[400px] flex items-center justify-center rounded-lg overflow-hidden">
                    <img
                        src={import.meta.env.VITE_API_URL + "/" + device?.img}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex flex-col gap-[30px]">
                    <p className="text-white font-bold text-3xl">
                        {device?.name}
                    </p>
                    <div className="flex items-center gap-[3px]">
                        <StarIcon
                            width="30px"
                            height="30px"
                            className="fill-[#ffe500]"
                        />
                        <span className="text-white font-bold text-2xl">
                            {device?.rating}
                        </span>
                    </div>
                    <p className="text-white text-xl">
                        <span className="font-bold">Цена:</span> {device?.price}{" "}
                        Р.
                    </p>
                    <p className="text-white text-xl">
                        <span className="font-bold">Тип:</span>{" "}
                        {device && device?.type}
                    </p>
                    <p className="text-white text-xl">
                        <span className="font-bold">Бренд:</span>{" "}
                        {device?.brand}
                    </p>
                    <Button
                        className="w-[200px] h-[40px] bg-[#5120B8] text-white rounded-xl font-bold"
                        text="Добавить в корзину"
                    />
                </div>
                <div className="border-1 border-[#5120B8]/30 rounded-xl max-w-[500px] max-h-[490px] w-full h-full">
                    <p className="text-white text-center font-bold mt-[5px]">
                        Характеристики:
                    </p>
                    <div className="flex flex-col gap-[10px] mb-[20px]">
                        {device?.deviceInfo?.length !== 0 ? (
                            device?.deviceInfo?.map((info) => (
                                <div
                                    key={info.id}
                                    className="flex border-b border-[#5120B8]/20 pb-2"
                                >
                                    <p className="text-white text-semibold ml-[7px]">
                                        {info.title}:
                                    </p>
                                    <p className="text-white text-semibold ml-[7px]">
                                        {info.description}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="text-white text-center mt-6 mb-6 font-bold">
                                Упс... Мы не нашли описание товара.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col pl-20 gap-[30px]">
                <Button
                    onClick={() => openModal("addReview")}
                    className="w-[200px] h-[40px] text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                    text="Хотите оставить отзыв?"
                />
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    contentType={contentType}
                />
                <h1 className="text-white text-2xl font-bold">Отзывы:</h1>
                {reviews && reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            currentUser={currentUser}
                            review={review}
                            handleDeleteReview={() =>
                                handleDeleteReview(review.id)
                            }
                        />
                    ))
                ) : (
                    <div className="text-white">Отзывов пока что нет...</div>
                )}
            </div>
        </div>
    );
};
