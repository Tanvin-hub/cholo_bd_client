import React from 'react';
import Banner  from "../Banner/Banner.js";
import About  from "../About/About";
 import SpecialOffer from "../SpecialOffer/SpeicalOffer"
 import Services from '../Services/Services.js';
 import Testimonial from '../Testimonial/Testimonial.js';
import Trip from "../../Trip/Trip/Trip"
 import HomeContact from "../HomeContact/HomeContact"


const Home = () => {
    return (
        <div>
            <Banner/>
           <About/>
              <SpecialOffer/> 
          <Services/>
               <Trip/>
            <Testimonial/>
            <HomeContact/>          
        </div>
    );
};

export default Home;