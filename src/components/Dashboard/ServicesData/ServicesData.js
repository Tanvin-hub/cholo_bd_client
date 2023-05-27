import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useQuery } from "react-query";
import toast from "react-hot-toast"

const ServicesData = () => {
  const { data: servicesData = [], refetch  } = useQuery({
    queryKey: ["servicesData"],
    queryFn: () => fetch("https://cholo-bd-server-maruf19.vercel.app/admin/services").then((res) => res.json()),
  });

  const handleRemove = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to remove this order?"
    );

    if (proceed) {
      fetch(`https://cholo-bd-server-maruf19.vercel.app/services/${id}`, {
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
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
            <h6 className="font-bold text-2xl mb-8 text-center italic text-zinc-700">
              Services Information
            </h6>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">
                      Title
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-800 opacity-70">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    servicesData?.map(service => <tr>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div>
                         {service?.title}
                        </div>
                      </div>
                    </td>

                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 font-semibold leading-tight text-xs col-auto">
                      {service?.desc}
                      </p>
                    </td>

                    <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <button
                                onClick={() => handleRemove(service._id)}
                                className="font-semibold leading-tight text-2xl text-red-400"
                              >
                                <MdDeleteSweep />
                              </button>

                             
                            </div>
                          </td>
{/* 
                    <td>
                      <button  onClick={() => handleRemove(service._id)} className="font-semibold leading-tight text-2xl text-slate-400">
                        <MdDeleteSweep />
                      </button>

                      <Link>
                        <FiEdit />
                      </Link>
                    </td> */}
                  </tr>)
                  }

  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesData;
