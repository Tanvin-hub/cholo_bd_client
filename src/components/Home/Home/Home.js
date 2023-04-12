import React from "react";
import Banner from "../Banner/Banner.js";
import About from "../About/About";
import SpecialOffer from "../SpecialOffer/SpeicalOffer";
import Services from "../Services/Services.js";
import Testimonial from "../Testimonial/Testimonial.js";
import Trip from "../../Trip/Trip/Trip";
// import Review from "../../Home/Review/Review";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
<<<<<<< HEAD
    return (
        <div>
            <Banner/>
           {/* <About/> */}
              <SpecialOffer/> 
          <Services/>
               {/* <Trip/> */}
            <Testimonial/>
            <HomeContact/>          
        </div>
    );
=======
  return (
    <div>
      <Banner />
      <About />
      <SpecialOffer />
      <Services />
      <Trip />
      <Testimonial />
      {/* <Review/> */}
      <HomeContact />
    </div>
  );
>>>>>>> cbfc66501b9447729c5cbb2812af8c83ea4bacfa
};

export default Home;
