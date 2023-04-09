import React from "react";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <section className="contact h-[30vh] w-[80%] mx-auto rounded-lg my-24">
      <div className="overlay h-[30vh] rounded-lg text-white container mx-auto px-32 flex justify-between items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">Contact us Now!</h3>
            <p className="font-semibold">
              Contact (+12) 345-678-9999 to book directly or for advice
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="px-3 py-2 font-medium bg-primary border border-primary
                  rounded hover:bg-transparent transition-all 
                  duration-150 ease-linear md:py-2 
                  md:px-6 inline-block uppercase tracking-wider"
            >
              Contact Now
            </Link>
          </div>
   
      </div>
    </section>
  );
};

export default HomeContact;
