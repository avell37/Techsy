import { Provider } from "react-redux";
import { store } from "@app/providers/store/store";
import { InitUser } from "./init/InitUser";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode, Suspense } from "react";
import { Spinner } from "@/shared/ui";

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider
                clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            >
                <Suspense fallback={<Spinner width="100px" height="100px" />}>
                    <InitUser>
                        {children}
                        <ToastContainer />
                    </InitUser>
                </Suspense>
            </GoogleOAuthProvider>
        </Provider>
    )
}
