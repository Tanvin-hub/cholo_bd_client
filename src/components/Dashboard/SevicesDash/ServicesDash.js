import React from "react";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"

const ServicesDash = () => {
  const {register, handleSubmit, reset} = useForm();

  const handleServices = (data) => {
    const servicesData = {
      title: data.title,
      icon: data.icon,
      desc: data.desc
    }
    fetch('http://localhost:5000/admin/services', {
      method: 'POST',
      headers:
      {
        'content-type': 'application/json',
      },
      body: JSON.stringify(servicesData)
    })
    .then(res => res.json())
    .then(result => {
      if(result.acknowledged) {
        toast.success("Successfully service uploaded")
        reset()
      }
    })
  };

  return (
    <div>
      <DashboardNavbar />
      <Sidebar />

      <div className="flex items-center justify-center p-12 ml-48">
        <div className="mx-auto w-full max-w-[550px] bg-white shadow-2xl">
          <form onSubmit={handleSubmit(handleServices)}
            className="py-6 px-9"
            action="https://formbold.com/s/FORM_ID"
            method="POST">
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#1cc3b2]">
                Services Details
              </label>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Title">
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Title"
                  {...register("title", {
                    required: "Please provided title",
                  })}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Icon">
                  Icon
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Icon"
                  {...register("icon", {
                    required: "Please provided Icon",
                  })}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Description">
                  Description
                </label>
                <textarea
                  className="h-[200px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Number"
                  placeholder="Package Description"
                  {...register("desc", {
                    required: "Please provided your description",
                  })}
                />
              </div>
            </div>

            <div>
              <input className="hover:shadow-form w-full rounded-md bg-[#1cc3b2] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                type="submit" value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicesDash;
