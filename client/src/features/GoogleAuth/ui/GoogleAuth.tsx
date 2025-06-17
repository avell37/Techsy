import { useGoogleLogin } from "@react-oauth/google";
import { GoogleAuthView } from "./GoogleAuthView";
import { loginWithOAuth } from "@/entities/User/api/userApi";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { useNotification, useAppDispatch } from "@/shared/hooks";
import { fetchUser } from "@/entities/User";

export const GoogleAuth = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { notifySuccess, notifyError } = useNotification();

    const login = useGoogleLogin({
        flow: "auth-code",
        scope: "openid email profile",
        onSuccess: async (response) => {
            const code = response?.code;
            await loginWithOAuth(code);
            await dispatch(fetchUser());
            navigate(SHOP_ROUTE);
            notifySuccess("Успешный вход!");
        },
        onError: () => {
            notifyError("Непредвиденная ошибка... Попробуй еще раз!");
        },
    });

    return <GoogleAuthView login={() => login()} />;
};
