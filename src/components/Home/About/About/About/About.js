import React from "react";
import { Link } from "react-router-dom";
import AboutSec from "../../AboutSec";

const About = () => {
  return (
      <section className="con-img text-white h-[500px] relative mb-[100vh]">
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
                About Us
              </h1>

              <ol class="list-reset flex">
                <li>
                  <Link className="text-white">Home</Link>
                </li>
                <li>
                  <span class="mx-3 text-white"> / </span>
                </li>
                <li>
                  <Link className="text-white"> About </Link>
                </li>
              </ol>
            </div>

            <div
              className="absolute border border-primary -bottom-[100%] left-[5%] w-[90%]  mx-auto py-8 pl-6 pr-12 
      rounded-2xl bg-white text-black shadow-xl"
            >
                 <AboutSec/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
