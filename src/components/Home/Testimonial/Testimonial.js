import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () =>
      fetch("https://cholo-bd-server.vercel.app/testimonials").then((res) =>
        res.json()
      ),
  });

  console.log(testimonials)

  return (
    <section className="my-20 container mx-auto px-6 lg:px-32 ">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 max-w-[610px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Testimonial
            </span>
            <h2 className="font-bold text-3xl mb-4 custom-leading capitalize">
              What Client says about us
            </h2>
            <p className="text-base text-body-color text-md md:text-lg">
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
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide>
            <div className="border border-primary w-full py-4 px-8 bg-white shadow-lg rounded-lg my-12 md:w-4/5 lg:w-1/2">
              <div className="flex justify-center md:justify-center -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-primary"
                  alt=""
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div>
                <blockquote className="mt-7 text-gray-600">
                  {testimonial?.review}
                </blockquote>
              </div>
              <div className="flex justify-end mt-4">
                <a href="/" className="text-xl font-medium text-primary">
                  {testimonial?.name}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
