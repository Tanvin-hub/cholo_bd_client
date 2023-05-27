import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Banner = () => {
  const [query, setQuery] = useState();

  const { data: trips = [],refetch } = useQuery({
    queryKey: ["trips"],
    queryFn: () =>
      fetch("https://cholo-bd-server-maruf19.vercel.app/trips").then((res) =>
        res.json()
      ),
  });
  console.log(trips.filter(trip => trip.title.toLowerCase().includes("ja")))
  return (
    <div>
      <section className="banner text-white h-screen md:h-[500px] mb-32 relative">
        <div className="overlay h-screen md:h-[500px]">
          <div className="container mx-auto pt-24 px-6 py-12 md:py-20 ">
            <div
              className="text-white md:pt-42 md:absolute md:top-[48%]
              md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center md:w-4/5"
            >
              <h1
                className="text-4xl md:text-5xl font-extrabold capitalize
                text-center leading-10"
              >
                Plan your trip with Cholo <br /> Bangladesh
              </h1>
              <p className="mt-6 text-x text-center my-8 text-slate-200">
              Are you craving an adventure, dreaming of a relaxing escape, or seeking a cultural immersion? Look no further! Our trip website is your one-stop destination for all your travel needs. We specialize in curating unforgettable experiences and providing you with all the resources you need to plan your perfect getaway.
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
        <div
          className="absolute border-primary border -bottom-[15rem] md:-bottom-[10rem] lg:-bottom-[4rem] left-[10%] max-w-[80%] mx-auto py-8 px-6 rounded-2xl bg-white text-black shadow-xl">
          {/* <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div>
              <label className="font-medium">Location</label>
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded bg-gray-200 text-black 
                outline-none py-3 px-6 mt-2"
                placeholder="Dream Destination"
              />
            </div>
            <div>
              <label className="font-medium">Distance</label>
              <input
                type="text"
                className="w-full rounded bg-gray-200 text-black outline-none 
            py-3 px-6 mt-2"
                placeholder="Meters"
              />
            </div>
            <div>
              <label className="font-medium">Price Range</label>
              <input
                type="text"
                className="w-full rounded bg-gray-200 text-black 
            outline-none py-3 px-6 mt-2"
                placeholder="140$ - 500$"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Search"
                className=" bg-primary rounded-full py-2 w-full
           justify-self-center text-white mt-6 hover:bg-transparent border border-primary
          hover:text-black cursor-pointer transition-all duration-150 ease-linear uppercase font-medium"
              />
            </div>
          </form> */}
          <div>
            <span className="font-bold text-lg text-primary">
              Know About Bangladesh
            </span>
            <p>Bangladesh's natural beauty astounds: the majestic Sundarbans, picturesque rivers, rolling hills, pristine beaches, charming villages, serene lakes, and vibrant gardens. From breathtaking views to diverse flora and fauna, it's an enchanting escape.</p>
          </div>
        </div>
        <ul className="bg-black">
            {
              trips.map(trip => {
                <li key={trip._id}>
                  {trip?.title}
                </li>
              })
            }
          </ul>
      </section>
    </div>
  );
};

export default Banner;
