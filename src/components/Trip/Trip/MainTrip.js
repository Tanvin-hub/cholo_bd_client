import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../ScrollToTop";
import Trip from "./Trip";

const MainTrip = () => {
  return (
    <section className="con-img text-white h-[40vh] relative mb-[100vh] md:mb-[1200px]">
      <div className="overlay h-[40vh]">
        <div className="py-12 md:py-20">
          <div
            className="text-white pt-12 md:pt-42 md:absolute md:top-[35%] 
          md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center"
          >
            <h1
              className="text-3xl md:text-4xl font-extrabold capitalize
              sm:text-center heading"
            >
              Upcoming Trip
            </h1>

            <ol class="list-reset flex">
              <li>
                <Link className="text-white text-sm md:text-lg">Home</Link>
              </li>
              <li>
                <span class="mx-3 text-white"> / </span>
              </li>
              <li>
                <Link className="text-white text-sm md:text-lg"> Trip </Link>
              </li>
            </ol>
          </div>

          <div
            className="absolute top-[80%] md:top-[70%] left-[5%] w-[90%] mx-auto px-6 
            lg:px-0 rounded-2xl text-black"
          >
            <Trip />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTrip;
