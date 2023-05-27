import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

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
            price: data.price,
            location: data.location,
            room: data.room,
            bed: data.bed,
            group: data.group,
            days: data.days,
            date: data.date,
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
                alert("Trip placed successfully");
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
              *{" "}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Price"
                >
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Number"
                  placeholder="date"
                  {...register("date", {
                    required: "Please provide a date",
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
              <div className="flex gap-6">
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
                    {...register("room", {
                      required: "Please provide Room",
                    })}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Bed"
                  >
                    Bed
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Bed"
                    {...register("bed", {
                      required: "Please provide Bed",
                    })}
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Days"
                    {...register("days", {
                      required: "Please provide Days",
                    })}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Group"
                  >
                    Group
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Group"
                    {...register("group", {
                      required: "Please provide Group",
                    })}
                  />
                </div>
              </div>
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
