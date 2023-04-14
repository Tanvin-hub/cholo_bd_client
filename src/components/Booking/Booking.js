import { useQuery } from "react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ScrollToTop from "../../ScrollToTop";

const Booking = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookingData?email=${user?.email}`;
  const { data: bookingDatas = [] } = useQuery({
    queryKey: ["bookingDatas", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  console.log(bookingDatas);
  return (
    <section className="con-img text-white h-[500px] relative mb-[1300px]">
      <ScrollToTop />
      <div className="overlay h-[500px]">
        <div className="py-12 md:py-20">
          <div
            className="text-white md:pt-42 md:absolute md:top-[35%] 
          md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center"
          >
            <h1
              className="text-4xl md:text-5xl font-extrabold capitalize
            sm:text-center heading"
            >
              Payment
            </h1>

            <ol className="list-reset flex">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-3 text-white"> / </span>
              </li>
              <li>
                <Link className="text-white" to="/contact">
                  {" "}
                  Contact{" "}
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div
        className="absolute border  -bottom-[30rem] left-[5%] w-[90%] h-[110vh] mx-auto py-8 pl-6 pr-12 
      rounded-2xl bg-white text-black shadow-xl border-primary"
      >
        <h1 className="text-3xl font-semibold capitalize">
          Enter Traveler Details
        </h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 mt-12">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="fName"
                      className="mb-3 block text-base font-medium text-[#1cc3b2]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="lName"
                      className="mb-3 block text-base font-medium text-[#1cc3b2]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder="Last Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="pNum"
                      className="mb-3 block text-base font-medium text-[#1cc3b2]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="pNum"
                      type="number"
                      placeholder="+880 XXX XXXX XXX"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="nidNumber"
                      className="mb-3 block text-base font-medium text-[#1cc3b2]"
                    >
                      NID Card Number
                    </label>
                    <input
                      type="number"
                      name="nidNumber"
                      id="nidNumber"
                      placeholder="123 456 789"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="date"
                      className="mb-3 block text-base font-medium text-[#1cc3b2]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="travelers"
                      className="mb-3 block text-base font-medium text-[#1cc3b2]"
                    >
                      Travelers
                    </label>
                    <input
                      type="number"
                      name="travelers"
                      id="travelers"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                      text-base font-medium text-[#6B7280] outline-none 
                      focus:border-[#1cc3b2] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="hover:shadow-form rounded-md bg-[#1cc3b2] py-3 px-8 text-center 
                text-base font-semibold text-white outline-none w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className=" border shadow-lg text-black">
            <div className="">
              {bookingDatas?.map((booking) => (
                <>
                  <div>
                    <img
                      src={booking.trip_img[0].img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-xl">{booking.title}</h3>
                    <p className="flex justify-between">Sub Total: <span>{booking.price}</span></p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
