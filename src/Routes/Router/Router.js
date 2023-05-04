import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/Home/Home/Home";
import Contact from "../../components/Contact/Contact";
import SpecialOffer from "../../components/Home/Offer/SpecialOffer/SpecialOffer";
import Trip from "../../components/Trip/Trip/MainTrip";
import Services from "../../components/Home/Services/Services";
import About from "../../components/Home/About/About/About/About";
import Login from "../../components/Shared/Login/Login";
import Register from "../../components/Shared/Register/Register";
import Review from "../../components/Home/Review/Review";
import TripDetails from "../../components/Trip/TripDetails/TripDetails";
import Tab from "../../components/Trip/Tab/Tab";
import Accordion from "../../components/Trip/Accordion/Accordion";
// Error Route (404)
import Error from "../../components/Error/Error";

import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import TripDash from "../../components/Dashboard/TripDash/TripDash";
import OfferDetails from "../../components/Home/Offer/OfferDetails/OfferDetails";
import TripData from "../../components/Dashboard/TripData/TripData";
import OfferDash from "../../components/Dashboard/OfferDesh/OfferDesh";
import OfferData from "../../components/Dashboard/OfferData/OfferData";
import ServicesDash from "../../components/Dashboard/SevicesDash/ServicesDash";
import ServicesData from "../../components/Dashboard/ServicesData/ServicesData";
import Booking from "../../components/Booking/Booking";
import Users from "../../components/Dashboard/Users/Users";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MakeAdmin from "../../components/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";
import MainTrip from "../../components/Trip/Trip/MainTrip";
import PaymentSuccess from "../../components/Booking/PaymentSuccess";
import PaymentFail from "../../components/Booking/PaymentFail";
import Bookings from "../../components/Dashboard/Bookings/Bookings";

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
        element: <OfferDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/offers/${params.id}`),
      },
      {
        path: "/trip",
        element: <MainTrip />,
      },

      {
        path: "/services",
        element: <Services />,
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
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        ),
      },
      {
        path: "/trips/:id",
        element: <TripDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trips/${params.id}`),
      },
      {
        path: "/tab",
        element: <Tab />,
      },

      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            {" "}
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success",
        element: (<PrivateRoute><PaymentSuccess/></PrivateRoute>
        ),
      },
      {
        path: "/payment/fail",
        element: (
          <PrivateRoute>
            {" "}
            <PaymentFail/>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/sidebar",
        element: (
          <AdminRoute>
            <Sidebar />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/tripdash",
    element: (
      <AdminRoute>
        <TripDash />
      </AdminRoute>
    ),
  },
  {
    path: "/tripdata",
    element: (
      <AdminRoute>
        <TripData />
      </AdminRoute>
    ),
  },
  {
    path: "/offerDash",
    element: (
      <AdminRoute>
        <OfferDash />
      </AdminRoute>
    ),
  },
  {
    path: "/offerdata",
    element: (
      <AdminRoute>
        <OfferData />
      </AdminRoute>
    ),
  },
  {
    path: "/servicesDash",
    element: (
      <AdminRoute>
        <ServicesDash />
      </AdminRoute>
    ),
  },
  {
    path: "/servicesData",
    element: (
      <AdminRoute>
        <ServicesData />
      </AdminRoute>
    ),
  },
  {
    path: "/makeAdmin",
    element: (
      <AdminRoute>
        <MakeAdmin />
      </AdminRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <AdminRoute>
        <Users />
      </AdminRoute>
    ),
  },
  {
    path: "/bookings",
    element: (
      <AdminRoute>
        <Bookings />
      </AdminRoute>
    ),
  },
]);

export default router;
