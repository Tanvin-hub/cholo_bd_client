import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"

const TripDash = () => {
  const {register, handleSubmit, reset} = useForm();

  const handleTrip = (data) => {
    console.log(data)
    const tripData = {
      name: data.name,
      price: data.price,
      location: data.location
    }
    fetch('https://cholo-bd-server.vercel.app/admin/trips', {
      method: 'POST',
      headers:
      {
        'content-type': 'application/json',
      },
      body: JSON.stringify(tripData)
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
          <form onSubmit={handleSubmit(handleTrip)}
            className="py-6 px-9">
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Trip Details
              </label>

              <div className="mb-8">
                <input type="file" name="file" id="file" className="sr-only"  
                 {...register("img", {
                    required: "Please provided title",
                  })} />
                <label
                  for="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Package Name">
                  Package Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Package Name"
                  {...register("name", {
                    required: "Please provided name",
                  })}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Price"
                >
                  Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Number"
                  placeholder="Price"
                  {...register("price", {
                    required: "Please provided price",
                  })}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Location"
                >
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Travel Location"
                  {...register("location", {
                    required: "Please provided location",
                  })}
                />
              </div>

              {/* <div className="flex gap-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Bed">
                    Bed
                  </label>
                  <input
                    className="shadow appearance-none border rounded h-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Bed"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Room"
                  >
                    Room
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Room"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Days"
                  >
                    Days
                  </label>
                  <input
                    className="shadow appearance-none border rounded h-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Days"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Quantity"
                  >
                    Quantity
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="Number"
                    placeholder="Quantity"
                  />
                </div>
              </div> */}

            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripDash;
