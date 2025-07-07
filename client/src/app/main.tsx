import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { AppProvider } from "./providers/AppProvider";
import { RouterProvider } from "react-router-dom";
import { routes } from "./config/routes";

createRoot(document.getElementById("root")!).render(
    <AppProvider>
        <RouterProvider router={routes} />
    </AppProvider>
);
