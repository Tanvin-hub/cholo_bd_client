import React from "react";
import { Link } from "react-router-dom";
import AboutSec from "../AboutSec/AboutSec";


const About = () => {
  return (
    <div>
    {/* <section className="container mx-auto p-32 mt-24">
      <div className="grid grid-cols-2 gap-6">
        <div className="mt-10">
          <span className="text-primary text-lg">About Us</span>
          <h2 className="text-5xl font-bold mt-2 mb-6 leading-tight">Welcome To Cholo Bangladesh</h2>
          <p className="text-slate-500 text-xl mb-12">
            With over 340 hotels worldwide, NH Hotel Group offers a wide variety
            of hotels catering for a perfect stay no matter where your
            destination.
          </p>
          <p className="text-xl">Manager: <span className="text-primary">John Doe</span></p>
        </div>
        <div className="grid  grid-flow-row gap-4">
          <div>
            <img className="w-full h-48 object-cover rounded-md" src="https://images.unsplash.com/photo-1680531331515-649be8dea9fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
            <img className="w-full h-48 object-cover rounded-md" src="https://images.unsplash.com/photo-1680181253112-82f74f368509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className=" col-span-2">
            <img className="w-full h-48 object-cover rounded-md" src="https://images.unsplash.com/photo-1680623356108-6ffb5193f1b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
        </div>
      </div>
    </section> */}

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
    </div>
  );
};

export default About;
