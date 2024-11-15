import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/app-layout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    }
])


export default router
