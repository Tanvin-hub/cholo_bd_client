import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { MdLocationOn, MdOutlineMail } from "react-icons/md";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
const Contact = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d75unzo",
        "template_s6aprmh",
        form.current,
        "PdjjAC1wPOJ6a5hLy"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  return (
    <section className="con-img text-white h-[40vh] relative mb-[1700px] md:mb-[1300px]">
      <div className="overlay h-[40vh]">
        <div className="py-12 md:py-20">
          <div
            className="text-white md:pt-42 md:absolute md:top-[35%] 
          md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 flex flex-col items-center"
          >
            <h1
              className="text-4xl md:text-5xl pt-12 font-extrabold capitalize
            sm:text-center heading"
            >
              Contact Us
            </h1>

            <ol class="list-reset flex">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <span class="mx-3 text-white"> / </span>
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
        className="absolute border top-[80%] md:top-70% left-[5%] w-[90%] h-[130vh] mx-auto px-6 lg:px-32 py-12
          rounded-2xl bg-white text-black shadow-xl border-primary"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
          <div className="shadow-lg py-4 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="text-primary text-3xl  mb-4">
              <BsFillTelephoneFill />
            </div>
            <label className="font-medium text-xl text-gray-600 ">Phone</label>
            <h1 className="ml-8 mt-1 font-semibold text-xl text-gray-600">
              123456789
            </h1>
          </div>

          <div className="shadow-lg py-4 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="text-primary text-4xl mb-4">
              <MdLocationOn />
            </div>
            <label className="font-medium text-xl text-gray-600 ">
              Address
            </label>
            <h1 className="ml-10 mt-1 font-semibold text-lg text-gray-600">
              Zindabazar,Sylhet
            </h1>
          </div>

          <div className="shadow-lg py-4 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="text-primary text-4xl mb-4">
              <MdOutlineMail />
            </div>
            <label className="font-medium text-xl text-gray-600 ">E-Mail</label>
            <h1 className="ml-[10px] mt-1 font-semibold text-base text-gray-600">
              tanvinnova50@gmail.com
            </h1>
          </div>
          <div className="shadow-lg py-4 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="text-primary text-4xl mb-4">
              <BsFillClockFill />
            </div>
            <label className="font-medium text-xl text-gray-600">
              Opening Time
            </label>
            <h1 className=" mt-1 font-semibold text-lg ml-6 text-gray-600">
              10:00 am to 23:00 pm
            </h1>
          </div>
        </form>

        <div className="mt-16">
          <div className="md:px-3 py-5">
            <div
              style={{
                height: "65vh",
                width: "100%",
              }}
            >
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
          </div>
        </div>





        <div className="mt-12 md:mt-48">
          <div className=" -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Contact US
                </span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark ">
                  Leave Message
                </h2>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mx-auto mt-16  sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    placeholder="Enter Your Name"
                    className="block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label
                  for="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    placeholder="Enter Your Email"
                    className="block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6 rounded-lg"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Enter Your Message"
                    className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 rounded-lg"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full mb-32 rounded-md bg-primary px-10 py-2.5 text-center text-sm font-semibold text-white   "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
