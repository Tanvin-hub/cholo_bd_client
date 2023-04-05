import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../components/Home/Banner";
import About from "../components/About/about";

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
    },
    {
        path: "/about",
        element: <About/>
      },

])

export default router;