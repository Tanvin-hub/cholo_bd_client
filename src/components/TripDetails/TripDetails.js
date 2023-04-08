// import React from 'react'
// import GoogleMapReact from 'google-map-react';
// import Tab from '../Tab/Tab';
// import {useLoaderData} from "react-router-dom"

//  const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const TripDetails = () => {
//   const data = useLoaderData()

//     const defaultProps = {
//         center: {
//           lat: 10.99835602,
//           lng: 77.01502627
//         },
//         zoom: 11
//       };

//   return (
//     <div className='grid grid-cols-2 bg-gray-300'>
//       <div className="ml-24 max-w-2xl mt-24 mb-24">

// <div id="default-carousel" className="relative " data-carousel="static">

//       <div className="overflow-hidden  bg-red-600 relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

//           <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
//           </div>

//           <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
//           </div>

//           <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
//           </div>
//       </div>

//       <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//           <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//           <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//           <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//       </div>

//       <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//               <span className="hidden">Previous</span>
//           </span>
//       </button>

//       <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
//           <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//               <span className="hidden">Next</span>
//           </span>
//       </button>

//   </div>

// </div>

//  <div className=" ml-12 ">

// {/* // Important! Always set the container height explicitly */}
//     <div style={{ height: '45vh', width: '70%', marginLeft:"20px", marginTop: "98px" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>

//     </div>

// </div>
// <Tab></Tab>
//     </div>

//   )
// }

// export default TripDetails

// ============= RUBAYED'S CODE ================

import React from "react";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import GoogleMapReact from "google-map-react";
import { FaAngleRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const TripDetails = () => {
  const data = useLoaderData();
  const detailsImg = data.detailsImg;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <section className="bg-[#EBF0F4]">
      <div className="container mx-auto px-32 py-24">
        <div className="grid grid-cols-3 bg-white">
          <div className="rounded-xl col-start-1 col-end-3">
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {detailsImg?.map((img) => (
                <SwiperSlide>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673970474453-7c49815647ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="h-full w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="px-3 py-5">
            <h2 className="text-primary text-2xl">Cox's Bazar</h2>
            <div style={{
                height: "45vh",
                width: "100%",
                // marginLeft: "20px",
                // marginTop: "98px",
              }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
            <ul className="flex flex-wrap gap-2 mt-5">
                {data?.facility?.map((fac) =>   <li
                      className="flex items-center gap-3 bg-slate-200 py-1 px-4 rounded text-slate-500">
                      <span>
                        <FaAngleRight />
                      </span>
                      <p>{fac?.name}</p>
                    </li>
                )}
                </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
