import React from "react";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import GoogleMapReact from "google-map-react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiMacbookLine } from "react-icons/ri";
import { TbBrandStrava } from "react-icons/tb";
import Tab from "../Tab/Tab";
import ScrollToTop from "../../../ScrollToTop"


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
      <ScrollToTop/>
      <div className="container mx-auto px-32 py-24">
        <div className="grid grid-cols-3 bg-white rounded-lg">
          <div className="rounded-xl col-start-1 col-end-3">
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper">
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
            <h2 className="text-primary text-2xl font-semibold my-4">
             {data?.title}
            </h2>
            <div
              style={{
                height: "35vh",
                width: "100%",
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
              <li className="flex items-center gap-3  py-1 px-4 rounded text-slate-500">
                <span>
                  <AiOutlineClockCircle />
                </span>
                <p className="text-sm text-bold text-black"> 7 minutes away</p>
              </li>

              <li className="flex items-center gap-3  py-1  rounded text-slate-500">
                <span>
                  <HiOutlineUserGroup />
                </span>
                <p className="text-sm text-bold text-black"> Up to 50 People</p>
              </li>

              <li className="flex items-center gap-3  py-1 px-4 rounded text-slate-500">
                <span>
                  <RiMacbookLine />
                </span>
                <p className="text-sm text-bold text-black">
                  Activities Booking Can be Cancelled Anytime
                </p>
              </li>

              <li className="flex items-center bg-slate-200 gap-2 ml-4 px-2 py-1  rounded text-slate-500">
                <span>
                  <AiOutlineClockCircle />
                </span>
                <p className="text-sm text-bold text-black">
                  {" "}
                  Outdoor Activities
                </p>
              </li>

              <li className="flex items-center bg-slate-200 gap-2 ml-4 px-2 py-1  rounded text-slate-500">
                <span>
                  <TbBrandStrava />
                </span>
                <p className="text-smtext-bold text-black">Adventure</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <Tab data={data} />
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
