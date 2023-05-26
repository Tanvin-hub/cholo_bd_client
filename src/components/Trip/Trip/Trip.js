import React from "react";
import { useQuery } from "react-query";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
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
                  <div className="text-xl font-bold">$ {trip?.icon}</div>
                </div>

              
                <p className="flex gap-3 items-center my-4 text-slate-500 ">
                  <span>
                    <MdOutlineDescription />
                  </span>
                  
                </p>
                <p className="flex gap-3 items-center my-4 text-slate-500 ">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  {trip?.desc}
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
