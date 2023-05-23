import React from 'react'
import img from "../../../Assets/b1.jpg"
import img1 from "../../../Assets/shapla.jpg"
import img2 from "../../../Assets/boat.jpg"
const AboutSec = () => {
  return (
    <div>
    <div className="container mx-auto px-12 lg:px-32 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mt-40 lg:mt-0">
          <span className="text-primary text-md md:text-lg">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 leading-tight">Welcome To Cholo Bangladesh</h2>
          <p className="text-slate-500 text-md md:text-lg mb-6">
            
Welcome to Cholo Bangladesh, your ultimate travel companion! We curate personalized travel experiences, tailor-made to your interests, budget, and expectations. Explore breathtaking destinations, from iconic landmarks to hidden gems. With a dedicated customer support team and trusted partners, we ensure your satisfaction. Our Trip Page is not just a booking platform; it's a community of passionate travelers sharing inspiration and insights. Join us on this journey of discovery and adventure. 
          </p>
          <p className="text-lg">Manager: <span className="text-primary">John Doe</span></p>
        </div>
        <div className="grid  grid-flow-row gap-4">
          <div>
            <img className="w-full h-48 object-cover rounded-md border border-primary" src={img} alt="" />
          </div>
          <div>
            <img className="w-full h-48 object-cover rounded-md border border-primary" src={img1} alt="" />
          </div>
          <div className=" col-span-2">
            <img className="w-full h-48 object-cover rounded-md border border-primary" src={img2} alt="" />
          </div>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default AboutSec