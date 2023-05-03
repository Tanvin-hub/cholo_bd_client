import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import GoogleMapReact from "google-map-react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiMacbookLine } from "react-icons/ri";
import { TbBrandStrava } from "react-icons/tb";
import Tab from "../Tab/Tab";
import ScrollToTop from "../../../ScrollToTop";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Booking from "../../Booking/Booking";
import { AuthContext } from "../../../Context/AuthProvider";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const TripDetails = () => {
  const data = useLoaderData();
  const { price, detailsImg,description } = data;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <section className="bg-[#EBF0F4] ">
      <ScrollToTop />
      <div className="container mx-auto px-32 py-24">
        <div className="grid grid-cols-3 rounded-lg ">
          <div className="rounded-xl col-start-1 col-end-3 mr-6">
          <>
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
          </>
          <div className="my-6  rounded px-6 py-12 bg-white">
                <h3 className="text-lg font-bold">Tour Overview</h3>
                <p>{description}</p>
          </div>
          <div className="my-6  rounded px-6 py-12 bg-white">
                <h3 className="text-lg font-bold">Review</h3>
                <p>{description}</p>
          </div>
          </div>
          <div>
            <Booking tour={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
