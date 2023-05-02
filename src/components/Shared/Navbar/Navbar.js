import React, { useContext, useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Trip", href: "/trip", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

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
    // <nav
    //   className={
    //     navbar
    //       ? "navbar active myBgColor item fixed top-0 z-10 w-screen px-6 py-3 transition-all duration-300 ease-in-out"
    //       : "navbar fixed top-0 z-10 h-6 w-screen px-6 py-3 item"
    //     }
    //     style={{ color: getColor("/") }}>
    //   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex items-center justify-between h-10">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         <button
    //           type="button"
    //           onClick={toggleMenu}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           {!isOpen ? (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M4 6h16M4 12h16M4 18h16"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               className="block h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //       <div className="flex-1 flex items-center justify-between sm:items-center px-12 sm:px-0">
    //         <div className="flex-shrink-0">
    //           <Link to="/" className="font-bold text-xl uppercase" >
    //             Cholo BD
    //           </Link>
    //         </div>
    //         <div className="hidden sm:block sm:ml-6">
    //           <div className="flex space-x-4 text-white">
    //             <Link
    //               to="/"
    //               className="hover:text-slate-200 transition-all duration-200 ease-linear
    //                px-3 py-2 rounded-md text-sm font-medium"
    //             >
    //               Home
    //             </Link>
    //             <Link
    //               to="/about"
    //               className="hover:text-slate-200 transition-all duration-200 ease-linear
    //                px-3 py-2 rounded-md text-sm font-medium">
    //               About
    //             </Link>
    //             <Link
    //               to="/trip"
    //               className="hover:text-slate-200 transition-all duration-200 ease-linear
    //                px-3 py-2 rounded-md text-sm font-medium">
    //               Trip
    //             </Link>
    //             <Link
    //               to="/contact"
    //               className="hover:text-slate-200 transition-all duration-200 ease-linear
    //                px-3 py-2 rounded-md text-sm font-medium">
    //               Contact
    //             </Link>
    //           </div>
    //         </div>
    //        <div>
    //        {
    //           user?.uid ? <>
    //                    <div>
    //           <div className="group inline-block">
    //             <button className="outline-none focus:outline-none px-3 rounded-sm flex
    //             items-center">
    //               <div className="relative">
    //                 <img
    //                   className="w-10 h-10 rounded-full object-cover"
    //                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    //                   alt=""
    //                 />
    //                 <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2
    //                  border-white dark:border-gray-800 rounded-full"></span>
    //               </div>
    //               <span>
    //                 <svg
    //                   className="fill-current h-4 w-4 transform group-hover:-rotate-180
    //                   transition duration-150 ease-in-out"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 20 20">
    //                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    //                 </svg>
    //               </span>
    //             </button>
    //             <ul
    //               className="bg-black border rounded-sm transform scale-0 group-hover:scale-100
    //               absolute transition duration-150 ease-in-out origin-top min-w-32 px-6 py-12">
    //               <li>
    //               <Link
    //               to="/review"
    //               className="hover:text-slate-200 transition-all duration-200 ease-linear
    //                px-3 py-2 rounded-md text-sm font-medium">
    //               Review
    //             </Link>
    //               </li>
    //               <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
    //               <Link to='/' onClick={handleLogOut} className="dark:text-white">Log Out</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //           </>
    //           :
    //           <>
    //            <Link to="/login" className="btn list item mr-4" style={{ color: getColor("/") }}>Login</Link>

    //           <Link to="/register" className="btn hover:btn-primary
    //               list item" style={{ color: getColor("/") }}>Join</Link>
    //         </>
    //         }
    //        </div>
    //       </div>
    //     </div>
    //   </div>

    //   {isOpen && (
    //     <div className="sm:hidden" id="mobile-menu">
    //       <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-500">
    //         <Link
    //           to="/"
    //           className="hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           Home
    //         </Link>

    //         <Link
    //           to="/about"
    //           className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           About
    //         </Link>

    //         <Link
    //           to="/contact"
    //           className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //         >
    //           Contact
    //         </Link>

    //       </div>
    //     </div>
    //   )}
    // </nav>

    <Disclosure
      as="nav"
      className={
        navbar
          ? "navbar active myBgColor item fixed top-0 z-10 w-screen px-6 py-3 transition-all duration-300 ease-in-out"
          : "navbar fixed top-0 z-10 h-6 w-screen px-6 py-3 item"
      }
      style={{ color: getColor("/") }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-10 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="font-bold text-xl uppercase">
                    Cholo Bangaldesh
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? "" : "text-white hover:text-slate-300",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user?.uid ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link  onClick={handleLogOut}
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="btn list item mr-4"
                      style={{ color: getColor("/") }}
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="btn hover:btn-primary
                          list item"
                      style={{ color: getColor("/") }}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
