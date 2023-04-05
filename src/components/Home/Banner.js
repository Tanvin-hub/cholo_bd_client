import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
      <section className="banner text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 overflow">
          <div className="py-12 md:py-20">
            <div className="text-white md:pt-42 text-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tigh sm:text-center md:text-left">
              Let's Make Your Best Trip Ever
              </h1>
              <p className="mt-6 text-x sm:text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-12 sm:flex sm:justify-center md:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Banner;
