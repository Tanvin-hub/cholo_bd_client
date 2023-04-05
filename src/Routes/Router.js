import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../components/Home/Banner"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>, 
        children: [
            {
                path: "/",
                element: <Banner/>
            }
        ]
    }

])

export default router;