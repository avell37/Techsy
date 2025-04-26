import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/router/AppRouter.js";
import { Provider } from "react-redux";
import { store } from "@app/providers/store/store";
import { InitUser } from "./providers/init/InitUser";
import { ToastContainer } from "react-toastify";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
            <InitUser>
                <AppRouter />
                <ToastContainer />
            </InitUser>
        </BrowserRouter>
    </Provider>
);
