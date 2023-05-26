import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import { useForm } from "react-hook-form";

const TripDash = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleTrip = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=0622eee91f18d4103329c8947242f849`;
    //  ====IMPORTANT===== ADD YOUR OWN IMGBB HOST KEY
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const addTrip = {
            img: imgData.data.url,
            title: data.name,
            icon: data.price,
            desc: data.location,
          };

          fetch("https://cholo-bd-server-maruf19.vercel.app/admin/trips", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addTrip),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                alert("Service placed successfully");
                console.log(data);
                reset();
              }
            })
            .catch((err) => console.error(err));
        }
      });
  };

  return (
    <div>
      <DashboardNavbar />
      <Sidebar />

      <div className="flex items-center justify-center p-12 ml-48">
        <div className="mx-auto w-full max-w-[550px] bg-white shadow-2xl">
          <form onSubmit={handleSubmit(handleTrip)} className="py-6 px-9">
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Trip Details
              </label>

              <div className="mb-4">
                <input
                  {...register("image", {
                    required: "Image is required",
                  })}
                  type="file"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Upload a Snap Image"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Price"
                >
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
                  type="number"
                  placeholder="Price"
                  {...register("price", {
                    required: "Please provided name",
                  })}
                />
              </div>

              {/* <div className="mb-4">
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
                  {...register("number", {
                    required: "Please provided price",
                  })}
                />
              </div> */}

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
              <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
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
