import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import NotFound from "../components/errors/not-found";
import Tamplate from "../pages/tamplate";
import Category from "../pages/category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Tamplate />,
            },

            {
                path: "/category",
                element: <Category />,
            },
        ],
    },
]);

export default router;
