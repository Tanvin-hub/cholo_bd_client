import React from 'react'

const AboutSec = () => {
  return (
    <div>
    <div className="container mx-auto px-12 md:px-32 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mt-40">
          <span className="text-primary text-md md:text-lg">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 leading-tight">Welcome To Cholo Bangladesh</h2>
          <p className="text-slate-500 text-md md:text-lg mb-6">
            With over 340 hotels worldwide, NH Hotel Group offers a wide variety
            of hotels catering for a perfect stay no matter where your
            destination.
          </p>
          <p className="text-lg">Manager: <span className="text-primary">John Doe</span></p>
        </div>
        <div className="grid  grid-flow-row gap-4">
          <div>
            <img className="w-full h-48 object-cover rounded-md border border-primary" src="https://images.unsplash.com/photo-1680531331515-649be8dea9fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div>
            <img className="w-full h-48 object-cover rounded-md border border-primary" src="https://images.unsplash.com/photo-1680181253112-82f74f368509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className=" col-span-2">
            <img className="w-full h-48 object-cover rounded-md border border-primary" src="https://images.unsplash.com/photo-1680623356108-6ffb5193f1b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default AboutSec