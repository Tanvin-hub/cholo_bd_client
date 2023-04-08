import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => fetch("testimonial.json").then((res) => res.json()),
  });
  return (
    <section className="my-20">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Testimonial
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              What Client says about us
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        centerslides={true}
        speed={800}
        autoplay={{
          delay: 5000,
        }}
        modules={[Pagination]}
        className="mySwiper cursor-pointer"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
      >
        {
          testimonials?.map(testimonial => <SwiperSlide>
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div>
                {/* <h2 className="text-gray-800 text-3xl font-semibold">
                  Design Tools
                </h2> */}
                <p className="mt-2 text-gray-600">
                  {testimonial?.review}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <a href="/" className="text-xl font-medium text-indigo-500">
                  {testimonial?.name}
                </a>
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
