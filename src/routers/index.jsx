import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import NotFound from "../components/errors/not-found";
import ListCountries from "../pages/list-countries";
import StateCooperation from "../pages/state-cooperation";
import DetailCountry from "../pages/list-countries/_details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <ListCountries />,
            },
            {
                path: "/list-countries/:name",
                element: <DetailCountry />,
            },
            {
                path: "/State-cooperation",
                element: <StateCooperation />,
            },
        ],
    },
]);

export default router;
