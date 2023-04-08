import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
    <section className="banner text-white h-[500px] relative">
      <div className="overlay h-[500px]">
        <div className="py-12 md:py-20">
          <div
            className="text-white md:pt-42 md:absolute md:top-[48%] 
          md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center"
          >
            <h1
              className="text-4xl md:text-5xl font-extrabold capitalize
            sm:text-center heading"
            >
              Plan your trip with Cholo <br /> Bangladesh
            </h1>
            <p className="mt-6 text-x sm:text-center my-8 px-24 text-slate-200">
              Plan and book your perfect trip with expert advice, travel tips,
              destination information and inspiration from us.
            </p>
            <Link
              to="/"
              className="px-3 py-2 font-medium bg-primary border border-primary
                  rounded hover:bg-transparent transition-all 
                  duration-150 ease-linear md:py-2 
                  md:px-6 inline-block uppercase tracking-wider"
            >
              Discover Now
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute border -bottom-[66px] left-[15%] w-[70%] mx-auto py-8 px-6 
      rounded-2xl bg-white text-black shadow-xl">
        <form className="grid grid-cols-4 gap-6 items-center">
          <div>
            <label className="font-medium">Location</label>
            <input type="text" className="w-full rounded bg-gray-200 text-black 
            outline-none py-3 px-6 mt-2" placeholder="Dream Destination" />
          </div>
          <div>
            <label className="font-medium">Distance</label>
            <input type="text" className="w-full rounded bg-gray-200 text-black outline-none 
            py-3 px-6 mt-2" placeholder="Meters" />
          </div>
          <div>
            <label className="font-medium">Price Range</label>
            <input type="text" className="w-full rounded bg-gray-200 text-black 
            outline-none py-3 px-6 mt-2" placeholder="140$ - 500$" />
          </div>
          <div>
           <input type="submit" value="Search" className="bg-primary rounded-full py-2 px-[5rem]
           justify-self-center text-white mt-6 hover:bg-transparent border border-primary
          hover:text-black cursor-pointer transition-all duration-150 ease-linear uppercase font-medium" />
          </div>
        </form>
      </div>
    </section>
   
    </div>
  );
};

export default Banner;
