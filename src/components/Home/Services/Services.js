import React from "react";
import { useQuery } from "react-query";
import {MdOutlineTravelExplore} from "react-icons/md"
const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetch("https://cholo-bd-server-maruf19.vercel.app/admin/services").then((res) => res.json()),
  });

  return (
    <section className="container mx-auto px-6 lg:px-32 my-12">
      <div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[610px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Services
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 custom-leading+-">
                What We Offer
              </h2>
              <p className="text-slate-500 text-body-color text-md md:text-lg">
               
                Welcome to our Website, Your Gateway to Extraordinary Travel Experiences!
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div>
            <div className="flex flex-wrap -mx-4">
              {
                services?.map(service => <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className=" p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-xl hover:shadow-lg
                    mb-8 border border-primary">
                  <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl
                    mb-8 ">
                    <MdOutlineTravelExplore className="text-4xl"/>
                    {/* === MAKE THE ICON DYNAMIC (DATA MUST BE LOAD FROM BACKEND) === */}
                    
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    {service?.title}
                  </h4>
                  <p className="text-body-color">
                    {service?.desc}
                  </p>
                </div>
              </div>)
              }

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
