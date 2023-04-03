import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-700 shadow-lg fixed w-full transition duration-500 ease-in-out ${
        scroll ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-8">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-2xl text-white">
              Cholo Bangladesh
            </Link>
          </div>
          <div className=" flex items-center justify-end sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 text-white">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* Login/Register Buttons */}
            <div className="flex items-center sm:ml-6">
              <Link
                to="/login"
                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="  text-white font-semibold   shadow ml-4 relative"
              >
                Register
                <div className="absolute bottom-0 left-0 w-full h-1 border-b-2"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
