import { Spinner } from "@/shared/ui";
import { CircleCheck, CircleX } from "lucide-react";

export const renderStatus = (status: string) => {
    switch (status) {
        case 'created':
            return (
                <div className="flex flex-col justify-center items-center gap-[30px]">
                    <Spinner width="75px" height="75px" />
                    <p className="text-gray-300 text-bold text-xl">Заказ создан, ожиданием оплаты...</p>
                </div>
            )
        case 'pending':
            return (
                <div className="flex flex-col justify-center items-center gap-[30px]">
                    <Spinner width="75px" height="75px" />
                    <p className="text-gray-300 text-bold text-xl">Ожидание оплаты...</p>
                </div>
            );
        case 'success':
            return (
                <div className="flex flex-col justify-center items-center gap-[30px]">
                    <CircleCheck className="text-white stroke-green-500 size-24" />
                    <p className="text-green-500 font-bold text-xl">Оплата прошла успешно!</p>
                    <p className="text-white text-center font-bold">
                        Благодарим за покупку!
                        <br />
                        Детальнее с заказом вы можете ознакомиться в профиле.
                    </p>
                </div>
            );
        case 'cancelled':
            return (
                <div className="flex flex-col justify-center items-center gap-[30px]">
                    <CircleX className="text-white stroke-red-500 size-24" />
                    <p className="text-red-500 font-bold text-xl">Произошла ошибка. Деньги с вашего счета не были списаны.</p>
                </div>
            )
    }
}