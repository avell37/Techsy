import { fetchUser } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks";
import Cookies from "js-cookie";
import { useEffect } from "react";

interface initProps {
    children: React.ReactNode;
}

export const InitUser = ({ children }: initProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (Cookies.get("token")) {
            dispatch(fetchUser());
        }
    }, [dispatch]);

    return <>{children}</>;
};
