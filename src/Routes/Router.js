import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import SpecialOffer from "../components/SpecialOffer/SpeicalOffer"
import Trip from "../components/Trip/Trip";
import Services from "../components/Services/Services";
import Cart from "../components/Cart/Cart";
import About from "../components/About/About";
import Login from "../components/Login/login"
import Register from "../components/Register/Register";
import Review from "../components/Review/Review";
import TripDetails from "../components/TripDetails/TripDetails";
import Tab from "../components/Tab/Tab"


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
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/review",
        element: <Review/>
      },
      {
        path: "/trips/:id",
        element: <TripDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/trips/:id`)
      },
      {
        path: "/tab",
        element: <Tab/>
      },
    
    
    
    ],

  },
]);

export default router;
