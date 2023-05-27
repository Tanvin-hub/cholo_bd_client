import React from "react";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import img1 from "../../../Assets/shapla.jpg"
import img2 from "../../../Assets/boat.jpg"
import img3 from "../../../Assets/nature.jpg"
import ScrollToTop from "../../../ScrollToTop";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Booking from "../../Booking/Booking";
// import { AuthContext } from "../../../Context/AuthProvider";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const TripDetails = () => {
  const data = useLoaderData();
  const { title,price, detailsImg,description,location } = data;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  console.log(data)

  return (
    <section className="con-img  h-[100vh] relative">
      <ScrollToTop />
      <div className="container mx-auto px-32 py-24">
        <div className="grid grid-cols-3 rounded-lg ">
          <div className="rounded-xl col-start-1 col-end-3 mr-6 mt-24">
          {/* <>
          <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {detailsImg?.map((img) => (
                <div>
                <SwiperSlide>
                  <img
                    src={img1} 
                    alt=""
                    className="h-full w-full"
                  />
                </SwiperSlide>


                    <SwiperSlide>
                    <img
                      src={img2} 
                      alt=""
                      className="h-full w-full"
                    />
                  </SwiperSlide>

                   <SwiperSlide>
                    <img
                      src={img3} 
                      alt=""
                      className="h-full w-full"
                    />
                  </SwiperSlide>
                  
                  </div>
                
              ))}
            </Swiper>
          </> */}
          <div className="my-6  rounded px-6 py-12 bg-white">
                <h3 className="text-lg font-bold text-primary">Tour Overview</h3>
                <p className="mt-3">Package: {title}</p>
                <p className="mt-3 ">Package Fee: {price}</p>
                <p className="mt-3  ">Location: {location}</p>
          </div>
          {/* <div className="my-6  rounded px-6 py-12 bg-white">
                <h3 className="text-lg font-bold">Review</h3>
                <p>{description}</p>
          </div> */}
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
