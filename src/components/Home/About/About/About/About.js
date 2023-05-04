import React from "react";
import { Link } from "react-router-dom";
import AboutSec from "../../AboutSec";

const About = () => {
  return (
    <section className="con-img text-white h-[40vh] relative mb-[100vh] md:mb-[800px] lg:mb-[500px]">
      <div className="overlay h-[40vh]">
        <div className="py-12 md:py-20">
          <div
            className="text-white pt-12 md:pt-42 md:absolute md:top-[35%] 
          md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center">
            <h1
              className="text-3xl md:text-4xl font-extrabold capitalize
              sm:text-center heading">
              About Us
            </h1>

            <ol class="list-reset flex">
              <li>
                <Link className="text-white text-sm md:text-lg">Home</Link>
              </li>
              <li>
                <span class="mx-3 text-white"> / </span>
              </li>
              <li>
                <Link className="text-white text-sm md:text-lg"> About </Link>
              </li>
            </ol>
          </div>

          <div
            className="absolute border border-primary top-[80%] md:top-[70%] left-[5%] w-[90%] mx-auto px-6 
            lg:px-0 lg:py-12 rounded-2xl bg-white text-black shadow-xl"
          >
            <AboutSec />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
