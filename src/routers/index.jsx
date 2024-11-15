import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import NotFound from "../components/errors/not-found";
import ListCountries from "../pages/list-countries";
import CountryDetails from "../pages/coutry-details";
import StateCooperation from "../pages/state-cooperation";

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
                path: "/Country-details",
                element: <CountryDetails />,
            },
            {
                path: "/State-cooperation",
                element: <StateCooperation />,
            },
        ],
    },
]);

export default router;
