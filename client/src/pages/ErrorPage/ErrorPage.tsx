import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { ArrowIcon } from "@shared/assets";

const ErrorPage = () => (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-[30px]">
        <Link
            to={SHOP_ROUTE}
            className="flex justify-center text-xl text-purple-500 font-bold"
        >
            techsy
        </Link>
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <p className="text-white font-bold text-7xl">404</p>
            <p className="text-white flex flex-col text-center">
                Эта страница не найдена...
                <Link
                    to={SHOP_ROUTE}
                    className="flex justify-center items-center mt-[10px] gap-[2px] font-extrabold"
                >
                    <ArrowIcon />
                    Назад?
                </Link>
            </p>
        </div>
    </div>
);

export default ErrorPage;
