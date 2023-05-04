import React from "react";
import { useQuery } from "react-query";
import { FaAngleRight, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trip = () => {
  const { data: trips = [] } = useQuery({
    queryKey: ["trips"],
    queryFn: () =>
      fetch("http://localhost:5000/trips").then((res) => res.json()),
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

                <ul className="flex flex-wrap gap-2 mt-5">
                  {trip?.facility?.map((fac) => (
                    <li className="flex items-center gap-3 bg-slate-200 py-1 px-4 rounded text-slate-500">
                      <span>
                        <FaAngleRight />
                      </span>
                      <p>{fac?.name}</p>
                    </li>
                  ))}
                </ul>
                <p className="flex gap-3 items-center my-4 text-slate-500 ">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  450 Vine st # 310, peru
                </p>
                <Link
                  to={`/trips/${trip?._id}`}
                  className="bg-primary hover:bg-transparent border border-primary 
                  transition-all duration-200 ease-linear flex justify-center py-2 px-8 
                  text-white hover:text-black items-center gap-4 mb-3 w-full rounded-full"
                >
                  Details
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
