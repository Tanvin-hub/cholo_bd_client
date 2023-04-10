import React from "react";
import { useQuery } from "react-query";

const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetch("services.json").then((res) => res.json()),
  });

  return (
    <section className="container mx-auto p-32 mt-24">
      <div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Services
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
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
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z"
                        fill="white"
                      />
                    </svg> {/* === MAKE THE ICON DYNAMIC (DATA MUST BE LOAD FROM BACKEND) === */}
                    
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    {service?.title}
                  </h4>
                  <p className="text-body-color">
                    {service?.description}
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
