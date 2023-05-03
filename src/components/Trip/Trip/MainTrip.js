import React from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "../../../ScrollToTop";
import Trip from "./Trip";

const MainTrip = () => {
  return (
    <div className="container mx-auto">
      <ScrollToTop />
      <section className="con-img text-white h-[500px] relative mb-[230vh]">
        <div className="overlay h-[500px]">
          <div className="py-12 md:py-20">
            <div
              className="text-white md:pt-42 md:absolute md:top-[35%] 
          md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center"
            >
              <h1
                className="text-4xl md:text-5xl font-extrabold capitalize
            sm:text-center heading"
              >
                Upcoming Trip
              </h1>

              <ol class="list-reset flex">
                <li>
                  <Link className="text-white">Home</Link>
                </li>
                <li>
                  <span class="mx-3 text-white"> / </span>
                </li>
                <li>
                  <Link className="text-white"> Trip </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <>
        <Trip/>
      </>
    </div>
  );
};

export default MainTrip;
