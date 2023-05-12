import React from "react";
import Banner from "../Banner/Banner.js";
import SpecialOffer from "../Offer/SpecialOffer/SpecialOffer";
import Services from "../Services/Services.js";
import Testimonial from "../Testimonial/Testimonial.js";
import HomeContact from "../HomeContact/HomeContact";
import AboutSec from "../About/AboutSec.js";
import HomeTrip from "../HomeTrip/HomeTrip.js";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <AboutSec/> */}
      <SpecialOffer />
      <Services />
      <HomeTrip />
      <Testimonial />
      {/* <Review/> */}
      <HomeContact />
    </div>
  );
};

export default Home;
