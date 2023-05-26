import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useQuery } from "react-query";
import toast from "react-hot-toast"

const Bookings = () => {
    const { data: bookings = [],refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: () =>
          fetch("https://cholo-bd-server-maruf19.vercel.app/bookings").then((res) =>
            res.json()
          ),
      });

      console.log(bookings)
      
      const handleRemove = (id) => {
        const proceed = window.confirm(
          "Are you sure, you want to remove this order?"
        );
    
        if (proceed) {
          fetch(`https://cholo-bd-server-maruf19.vercel.app/bookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch()
                toast.error("Removed Order Successfully");
              }
            });
        }
      };

  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <section className="container mx-auto px-6 lg:pl-[17rem] overflow-hidden">

          <div class="flex flex-col">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                          
                            <button class="flex items-center gap-x-2">
                              <span>Invoice ID</span>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Date
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Customer
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Phone Number
                        </th>
                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Status
                        </th>

                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                     <>
                        {bookings?.map(booking =>  <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                          <button  onClick={() => handleRemove(booking._id)} className="font-semibold leading-tight text-2xl text-red-400">
                        <MdDeleteSweep />
                      </button>

                            <span>{booking?.transectionId}</span>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {booking?.bookingDate}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center gap-x-2">
                            <img
                              class="object-cover w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            />
                            <div>
                              <h2 class="text-sm font-medium text-gray-800 dark:text-white ">
                                {booking?.fullName}
                              </h2>
                              <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                               {booking?.userEmail}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {booking?.phone}
                        </td>
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="">
                            {
                                booking?.paid === true ? <div className="bg-emerald-100/60 text-emerald-500 inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800 ">
                                    <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                                </div> 
                                :
                                <h2 className="px-2 py-1 rounded-full text-xs bg-red-400">Not Paid</h2>
                            }
                          </div>
                        </td>
                      </tr>
                      )}
                     </>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

      </section>
    </div>
  );
};

export default Bookings;
