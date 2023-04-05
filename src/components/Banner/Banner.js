import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner text-white h-[560px]">
      <div className="overflow h-[560px]">
        <div className="py-12 md:py-20">
          <div
            className="text-white md:pt-42 text- md:absolute md:top-[40%] 
          md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center"
          >
            <h1
              className="text-4xl md:text-5xl font-extrabold tracking-wider
            sm:text-center"
            >
              Let's Make Your Best <br /> Trip Ever
            </h1>
            <p className="mt-6 text-x sm:text-center my-8 px-24 text-slate-200">
              Plan and book your perfect trip with expert advice, travel tips,
              destination information and inspiration from us.
            </p>
            <Link
              to="/"
              className="px-3 py-2 border border-transparent text-base font-medium 
                  rounded text-black bg-white hover:bg-blue-500 hover:text-white transition-all 
                  duration-150 ease-linear md:py-2 
                  md:px-6 inline-block uppercase tracking-wider"
            >
              Discover Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
