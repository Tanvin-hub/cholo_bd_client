import React from "react";
import { FaMapMarkerAlt, FaArrowRight, } from "react-icons/fa";
import { useQuery } from "react-query";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  const { data: offers = [] } = useQuery({
    queryKey: ["offers"],
    queryFn: () => fetch("https://cholo-bd-server-maruf19.vercel.app/admin/offers").then((res) => res.json()),
  });

  return (
    <section className="container mx-auto px-6 lg:px-32 my-12">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[610px]">
            <span className="font-semibold text-lg text-primary mb-2 block capitalize">
              Special Offer
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 custom-leading capitalize">
              Offer given by us
            </h2>
            <p className="text-slate-500 text-body-color text-md md:text-lg">
            Experience an extraordinary journey filled with wonder and relaxation. Get ready for an unparalleled trip with our irresistible special offer.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          {offers?.map((offer) => (
            <div className="h-full w-full shadow-2xl rounded-lg">
              <div className="relative w-full p-4 ">
                <img
                  src={offer?.img}
                  className="mb-3 h-64 object-cover w-full rounded-xl 3xl:w-full"
                  alt=""
                />
              
              </div>

              <div className="px-6 py-3">
              <div className="flex justify-between ">
                  
                  <div className="order-first  mb-2 text-xl font-bold">
                    {offer?.title}
                    
                  </div>
                
               


                <div className="flex justify-between ">
                  <p
                    className="text-md font-semibold  bg-slate-200 py-1 px-3 rounded-full
                   text-primary mb-5"
                  >
                    {offer?.discount}% Off
                  </p>
                </div>
                </div>

                
                <div className="ml-10 mt-5">
                  <span className="font-semibold text-xl text-dark">  Packages Fee: $ {offer?.price} </span>
                  </div>


                <p className="flex gap-3 items-center ml-20 my-4 text-slate-500 ">
                  <span>
                    <MdDateRange />
                  </span>
                  {offer?.date}
                </p>

                {/* <ul className="flex flex-wrap gap-2 mt-5">
                  {offer?.facility?.map((fac) => (
                    <li
                      className="flex items-center gap-3 bg-slate-200 
                    py-1 px-4 rounded text-slate-500"
                    >
                      <span>
                        <FaAngleRight />
                      </span>
                      <p>{fac?.name}</p>
                    </li>
                  ))}
                </ul> */}

                <p className="flex gap-3 items-center my-6 text-slate-500 ml-20">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  {offer?.location}
                </p>

                <Link
                    to="trip"
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
    </section>
  );
};

export default SpecialOffer;
