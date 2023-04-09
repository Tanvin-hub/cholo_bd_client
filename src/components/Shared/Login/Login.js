import React from "react";
import { Link } from "react-router-dom";
import google from "../../../assets/google.ico";

const Login = () => {
  return (
    <section className="mb-24 py-24">
      <div className="relative h-3/4 w-2/3 mx-auto flex shadow-2xl ">
        <div className="flex flex-col sm:flex-row items-center md:items-start  sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center 
            justify-center p-10 overflow-hidden text-white 
            bg-no-repeat bg-cover relative"
            style={{
              "background-image":
                "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);",
            }}
          >
            <div className="absolute bg-gradient-to-b bg-primary opacity-75 inset-0 z-0"></div>
            <div className="w-full  max-w-2xl z-10 text-center">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-10 mb-6">
                Login to Cholo Bangladesh..
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal leading-10">
                {" "}
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book it has?
              </div>
            </div>

            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 ronded-lg bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Join in Cholo BD
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please sign in to your account
                </p>
              </div>
              <div className="flex flex-row justify-center items-center space-x-3">
                <Link
                  href="https://www.behance.net/ajeeshmon"
                  className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold 
              text-lg   bg-primary hover:shadow-lg cursor-pointer transition ease-in 
              duration-300"
                >
                  <img className="w-4 h-4" src={google} alt="" />
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="h-px w-16 bg-gray-200"></span>
                <span className="text-gray-300 font-normal">
                  or continue with
                </span>
                <span className="h-px w-16 bg-gray-200"></span>
              </div>
              <form className="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true" />
                <div className="relative">
                  <div className="absolute right-3 mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type=""
                    placeholder="mail@gmail.com"
                    value="mail@gmail.com"
                  />
                </div>
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="Enter your password"
                    value="*****|"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-primary focus:ring-blue-400 border-gray-300 rounded"
                    />
                    <label
                      for="remember_me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link to="#" className="text-primary hover:text-blue-500">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-primary text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <Link
                    to="#"
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline 
                cursor-pointer transition ease-in duration-300"
                  >
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;