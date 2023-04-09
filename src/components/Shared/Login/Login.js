import React from "react";

const Login = () => {
  return (
    <div>
      <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <form className="max-w-sm m-4 p-10 boorder border-primary bg-white bg-opacity-30 rounded shadow-xl">
                <p className="text-white text-center text-lg font-bold">
                  LOGIN
                </p>
                <div className="">
                  <label
                    className="block mb-2 text-sm font-bold text-black"
                    for="E-mail"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="Enter your e-mail"
                    aria-label="email"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block mb-2 text-sm font-bold text-black"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    arial-label="password"
                    required
                  />
                </div>

                <div className="mt-4 items-center flex justify-between">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                    type="submit"
                  >
                    Login
                  </button>
                  <a
                    className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-primary"
                    href="#"
                  >
                    Forgot Password ?
                  </a>
                </div>
                <div className="text-center">
                  <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-primary">
                    Create Account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
