import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import SpecialOffer from "../components/SpecialOffer/SpeicalOffer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/offer",
        element: <SpecialOffer/>
      }
    ],


  },
]);

export default router;
