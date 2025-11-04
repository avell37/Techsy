import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { useNotification, useActions } from "@/shared/hooks";
import { loginWithOAuth } from "@/features/Auth";
import { GoogleAuthView } from "./GoogleAuthView";

export const GoogleAuth = () => {
    const { getUser } = useActions();
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();

    const login = useGoogleLogin({
        flow: "auth-code",
        scope: "openid email profile",
        onSuccess: async (response) => {
            const code = response?.code;
            await loginWithOAuth(code);
            getUser();
            navigate(SHOP_ROUTE);
            notifySuccess("Успешный вход!");
        },
        onError: () => {
            notifyError("Непредвиденная ошибка... Попробуй еще раз!");
        },
    });

    return <GoogleAuthView login={() => login()} />;
};
