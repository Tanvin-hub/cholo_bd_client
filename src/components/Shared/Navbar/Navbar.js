import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeBg = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const getColor = (current) => {
    if (window.location.pathname === current) {
      return "#fff";
    } else {
      return "#fff";
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav
      className={
        navbar
          ? "navbar active myBgColor item fixed top-0 z-10 w-screen px-6 py-3 transition-all duration-300 ease-in-out"
          : "navbar fixed top-0 z-10 h-6 w-screen px-6 py-3 item"
        }
        style={{ color: getColor("/") }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-10">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-center px-12 sm:px-0">
            <div className="flex-shrink-0">
              <Link to="/" className="font-bold text-xl uppercase" >
                Cholo BD
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="hover:text-slate-200 transition-all duration-200 ease-linear
                   px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-slate-200 transition-all duration-200 ease-linear
                   px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link
                  to="/trip"
                  className="hover:text-slate-200 transition-all duration-200 ease-linear
                   px-3 py-2 rounded-md text-sm font-medium">
                  Trip
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-slate-200 transition-all duration-200 ease-linear
                   px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
           <div>
           {
              user?.uid ? <>
                       <div>
              <div className="group inline-block">
                <button className="outline-none focus:outline-none px-3 rounded-sm flex 
                items-center">
                  <div className="relative">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2
                     border-white dark:border-gray-800 rounded-full"></span>
                  </div>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180 
                      transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-black border rounded-sm transform scale-0 group-hover:scale-100 
                  absolute transition duration-150 ease-in-out origin-top min-w-32 px-6 py-12">
                  <li>
                  <Link
                  to="/review"
                  className="hover:text-slate-200 transition-all duration-200 ease-linear
                   px-3 py-2 rounded-md text-sm font-medium">
                  Review
                </Link>
                  </li>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  <Link to='/' onClick={handleLogOut} className="dark:text-white">Log Out</Link>
                  </li>
                </ul>
              </div>
            </div>
              </>
              :
              <>
                <Link to="/login" className="btn list item mr-4" style={{ color: getColor("/") }}>Login</Link>
       
              <Link to="/register" className="btn hover:btn-primary
                  list item" style={{ color: getColor("/") }}>Join</Link>
            </>
            }
           </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-500">
            <Link
              to="/"
              className="hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>


            <Link
              to="/contact"
              className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
