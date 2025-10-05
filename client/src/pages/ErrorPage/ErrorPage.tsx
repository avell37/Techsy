import { Link, useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { Undo2 } from "lucide-react";
import { Button } from "@/shared/ui";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] gap-[20px]">
            <Link
                to={SHOP_ROUTE}
                className="flex justify-center text-xl text-purple-500 font-bold"
            >
                techsy
            </Link>
            <div className="flex items-center justify-center gap-[20px]">
                <p className="text-white font-bold text-6xl border-r-1 border-white pr-4">404</p>
                <p className="text-white flex flex-col text-center">
                    Эта страница не найдена...
                </p>
            </div>
            <Button
                variant="default"
                size="none"
                className="flex justify-center items-center mt-[10px] gap-[2px] text-white font-extrabold text-xl"
                onClick={() => navigate(-1)}
            >
                <Undo2 className="size-6" />
                Назад?
            </Button>
        </div>
    );
}

export default ErrorPage;
