import React from 'react';
import Banner  from "../Banner/Banner.js";
import SpecialOffer from "../SpecialOffer/SpeicalOffer"
import Services from '../Services/Services.js';
import Testimonial from '../Testimonial/Testimonial.js';


const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <About/> */}
            <SpecialOffer/>
            <Services/>
            <Testimonial/>

            
        </div>
    );
};

export default Home;