import React from 'react';
import Banner  from "../Banner/Banner.js";
import SpecialOffer from "../SpecialOffer/SpeicalOffer"
import Contact from "../Contact/Contact"


const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <About/> */}
            <SpecialOffer/>
            <Contact/>

            
        </div>
    );
};

export default Home;