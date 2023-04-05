import React from "react";

const About = () => {
  return (
    <section className="w-4/5 mx-auto py-32">
      <div className="grid grid-cols-2 gap-6">
        <div className="mt-10">
          <span className="text-primary text-lg">About Us</span>
          <h2 className="text-5xl font-medium mt-2 mb-6 leading-tight">Welcome To Roberto Hotel Luxury</h2>
          <p className="text-slate-500 text-xl">
            With over 340 hotels worldwide, NH Hotel Group offers a wide variety
            of hotels catering for a perfect stay no matter where your
            destination.
          </p>
        </div>
        <div className="grid  grid-flow-row gap-4">
          <div>
            <img className="w-full h-48" src="https://images.unsplash.com/photo-1680531331515-649be8dea9fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
            <img className="w-full h-48" src="https://images.unsplash.com/photo-1680181253112-82f74f368509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className=" col-span-2">
            <img className="w-full h-48" src="https://images.unsplash.com/photo-1680623356108-6ffb5193f1b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
