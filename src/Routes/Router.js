import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import SpecialOffer from "../components/SpecialOffer/SpeicalOffer"
import Trip from "../components/Trip/Trip";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";
import Cart from "../components/Cart/Cart";
import About from "../components/About/about";
import Review from "../components/Review/Review";
import Login from "../components/Login/login"
import Register from "../components/Register/Register";


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
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/offer",
        element: <SpecialOffer/>
      },

      {
        path: "/trip",
        element: <Trip/>
      },

      {
        path: "/services",
        element: <Services/>
      },

      {
        path: "/testimonial",
        element: <Testimonial/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      

      {
        path: "/register",
        element: <Register/>
      },

      {
        path: "login",
        element: <Login/>
      },

      {
        path: "review",
        element: <Review/>
      },
    
    
    ],


  },
]);

export default router;
