import { fetchUser } from "@/entities/User/model/userSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
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
