import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/router/AppRouter.js";
import { Provider } from "react-redux";
import { store } from "@app/providers/store/store";
import { InitUser } from "./providers/init/InitUser";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
            <GoogleOAuthProvider
                clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            >
                <InitUser>
                    <AppRouter />
                    <ToastContainer />
                </InitUser>
            </GoogleOAuthProvider>
        </BrowserRouter>
    </Provider>
);
