import React from "react";
import DashboardNavbar from "../Dashboard/DashboardNavbar/DashboardNavbar";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const OfferDash = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleOffer = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=9de9593a3eaec419d297413f561280de`;
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
            discount: data.discount,
            bed: data.bed,
            room: data.room,
            days: data.days,
            quantity: data.quantity
          };

           fetch('https://cholo-bd-server-maruf19.vercel.app/admin/offers', {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addTrip),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Offer placed successfully");
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
          <form onSubmit={handleSubmit(handleOffer)} className="py-6 px-9">
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
                  for="Package Name"
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
                  type="text"
                  placeholder="Price"
                  {...register("price", {
                    required: "Please provided name",
                  })}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="Discount"
                >
                  Discount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Discount"
                  {...register("discount", {
                    required: "Discount Amount",
                  })}
                />
              </div>

              <div className="flex gap-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="Bed"
                  >
                    Bed
                  </label>
                  <input
                    className="shadow appearance-none border rounded h-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...register("bed", {
                      required: "Provide bed",
                    })}
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
                    {...register("room", {
                      required: "Please provide room",
                    })}
                    placeholder="Room"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                {" "}
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
                    {...register("days", {
                      required: "How many days you stay?",
                    })}
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
                    {...register("quantity", {
                      required: "Please provided quantity",
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

export default OfferDash;
