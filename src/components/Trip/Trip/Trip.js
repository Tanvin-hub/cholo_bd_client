import React from "react";
import { useQuery } from "react-query";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { BsFillHouseFill } from "react-icons/bs";
import { IoMdBed } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";


import { Link } from "react-router-dom";

const Trip = () => {
  const { data: trips = [] } = useQuery({
    queryKey: ["trips"],
    queryFn: () =>
      fetch("https://cholo-bd-server-maruf19.vercel.app/admin/trips").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="container mx-auto rounded-2xl bg-white text-black">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center ">
          {trips?.map((trip) => (
            <div className="h-full w-full shadow-2xl rounded-lg">
              <div className="relative w-full p-4">
                <img src={trip?.img} alt="" />
              </div>

              <div className="px-6 py-3">
                <div className="flex justify-between">
                  <div className="order-first text-xl font-bold">
                    {trip?.title}
                  </div>
                  <div className="text-xl font-bold">$ {trip?.price}</div>
                </div>

                <ul className="flex flex-wrap gap-2 ml-6 mt-5">
                  <li className="flex items-center gap-3 bg-slate-200 py-1 px-4 rounded text-slate-500">
                    <span>
                      <BsFillHouseFill />
                    </span>
                    <p>Room: {trip?.room}</p>
                  </li>

                  <li className="flex items-center gap-3 bg-slate-200 py-1 px-4 rounded text-slate-500">
                    <span>
                      <IoMdBed />
                    </span>
                    <p>Bed: {trip?.bed}</p>
                  </li>
                  <li className="flex items-center gap-3 bg-slate-200 py-1 px-4 rounded text-slate-500">
                    <span>
                      <HiOutlineUserGroup />
                    </span>
                    <p>Capacity: {trip?.group}</p>
                  </li>
                  <li className="flex items-center gap-3 bg-slate-200 py-1 px-1 rounded text-slate-500">
                    <span>
                      <WiDaySunny />
                    </span>
                    <p>Days: {trip?.days}</p>
                  </li>
                </ul>
                <p className="flex gap-1 items-center ml-20 my-4 text-slate-500 ">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  {trip?.location}
                </p>

                <p className="flex gap-3 items-center ml-20 my-4 text-slate-500 ">
                  <span>
                    <MdDateRange />
                  </span>
                  {trip?.date}
                </p>
                <Link
                  to={`/trips/${trip?._id}`}
                  className="bg-primary hover:bg-transparent border border-primary 
                  transition-all duration-200 ease-linear flex justify-center py-2 px-8 
                  text-white hover:text-black items-center gap-4 mb-3 w-full rounded-full"
                >
                  Book Now
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trip;
