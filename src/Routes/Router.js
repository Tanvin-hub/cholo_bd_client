import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import Contact from "../components/Contact/Contact";
import SpecialOffer from "../components/Home/Offer/SpecialOffer/SpecialOffer";
import Trip from "../components/Trip/Trip/Trip";
import Services from "../components/Home/Services/Services";
import Cart from "../components/Cart/Cart";
import About from "../components/Home/About/About/About";
import Login from "../components/Shared/Login/Login";
import Register from "../components/Shared/Register/Register";
import Review from "../components/Home/Review/Review";
import TripDetails from "../components/Trip/TripDetails/TripDetails";
import Tab from "../components/Trip/Tab/Tab";
import Accordion from "../components/Trip/Accordion/Accordion";

// Error Route (404)
import Error from "../components/Error/Error";
import Dash from "../components/Dashboard/Dash/Dash";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import TripDash from "../components/Dashboard/TripDash/TripDash";
import OfferDetails from "../components/Home/Offer/OfferDetails/OfferDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/offers",
        element: <SpecialOffer />,
      },
      {
        path: "/offers/:id",
        element: <OfferDetails/>,
        loader: ({ params }) =>
          fetch(`https://travel-server-zeta.vercel.app/offers/${params.id}`),
      },

      {
        path: "/trip",
        element: <Trip />,
      },

      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/trips",
        element: <Review />,
      },
      {
        path: "/trips/:id",
        element: <TripDetails />,
        loader: ({ params }) =>
          fetch(`https://travel-server-zeta.vercel.app/trips/${params.id}`),
      },
      {
        path: "/tab",
        element: <Tab />,
      },

      {
        path: "/accordion",
        element: <Accordion />,
      },

     
    ],
  },


  {
    path: "/dashboard",
    element: <Dash />,
  },

  {
    path: "/sidebar",
    element: <Sidebar />,
  },

  {
    path: "/tripdash",
    element: <TripDash />,
  },
]);

export default router;
