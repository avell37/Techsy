import { useGoogleLogin } from "@react-oauth/google";
import { GoogleAuthView } from "./GoogleAuthView";
import { loginWithOAuth } from "@/shared/api/userApi";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "@/shared/config/consts";
import { useNotification } from "@/shared/hooks";

export const GoogleAuth = () => {
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = useNotification();
    const login = useGoogleLogin({
        flow: "auth-code",
        scope: "openid email profile",
        onSuccess: async (response) => {
            const code = response?.code;
            await loginWithOAuth(code);
            navigate(SHOP_ROUTE);
            notifySuccess("Успешный вход!");
        },
        onError: () => {
            notifyError("Непредвиденная ошибка... Попробуй еще раз!");
        },
    });

    return <GoogleAuthView login={() => login()} />;
};
