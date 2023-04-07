import React from 'react';
import Banner  from "../Banner/Banner.js";
import SpecialOffer from "../SpecialOffer/SpeicalOffer"
import Services from '../Services/Services.js';


const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <About/> */}
            <SpecialOffer/>
            <Services/>

            
        </div>
    );
};

export default Home;