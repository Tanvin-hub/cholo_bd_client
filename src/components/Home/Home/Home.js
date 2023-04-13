import React from "react";
import Banner from "../Banner/Banner.js";
// import About from "../About/About";
import SpecialOffer from "../Offer/SpecialOffer/SpecialOffer";
import Services from "../Services/Services.js";
import Testimonial from "../Testimonial/Testimonial.js";
// import Trip from "../../Trip/Trip/Trip";
// import Review from "../../Home/Review/Review";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <About /> */}
      <SpecialOffer />
      <Services />
      {/* <Trip /> */}
      <Testimonial />
      {/* <Review/> */}
      <HomeContact />
    </div>
  );
};

export default Home;
