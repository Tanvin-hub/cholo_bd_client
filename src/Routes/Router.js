import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import Contact from "../components/Contact/Contact";
import SpecialOffer from "../components/Home/SpecialOffer/SpeicalOffer"
import Trip from "../components/Trip/Trip/Trip";
import Services from "../components/Home/Services/Services";
import Cart from "../components/Cart/Cart";
import About from "../components/Home/About/About";
import Login from "../components/Shared/Login/Login"
import Register from "../components/Shared/Register/Register";
import Review from "../components/Home/Review/Review";
import TripDetails from "../components/Trip/TripDetails/TripDetails";
import Tab from "../components/Trip/Tab/Tab"


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
        path: "/trips",
        element: <Review/>
      },
      {
        path: "/trips/:id",
        element: <TripDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/trips/${params.id}`)
      },
      {
        path: "/tab",
        element: <Tab/>
      },
    
    
    
    ],

  },
]);

export default router;
