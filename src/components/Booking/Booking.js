import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import TripDate from "../Trip/Date/TripDate";


const Booking = (tour) => {
  const { _id, price, title } = tour.tour;
  console.log(tour.tour);
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const totalAmount = Number(price) * Number(book?.guest);

  const handleClick = async (e) => {
    e.preventDefault();
    const booking = {
      userId: user && user._id,
      userEmail: user && user.email,
      serviceID: _id,
      tourName: title,
      fullName: book?.fullName,
      phone: book?.phone,
      guest: book?.guest,
      bookingDate: "",
      totalAmount: totalAmount,
    };
    try {
      if (!user || user === undefined || user === null) {
        return toast("Please sign in");
      }
      fetch("https://cholo-bd-server-maruf19.vercel.app/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.replace(data.url);
        });
    } catch (err) {
      toast(err.message);
    }
  };

  

  return (
    <div className="px-6 py-5 border bg-white rounded-lg">
      <div className="border-b pb-6">
        <h2>
          <span className="text-2xl font-bold">${price}</span> / per person
        </h2>
      </div>
      <div className="py-6">
        <h2 className="text-lg font-semibold">Information</h2>
        <form onSubmit={handleClick} className="my-3">
          <>
            <input
              type="text"
              id="fullName"
              onChange={handleChange}
              required
              placeholder="Name"
              className="border p-2 w-full rounded mb-2"
            />
          </>
          <>
            <input
              type="number"
              id="phone"
              onChange={handleChange}
              required
              placeholder="Phone"
              className="border p-2 w-full rounded mb-2"
            />

          </>
          <div className="flex gap-2">
            <TripDate/>

            
            <input
              type="number"
              id="guest"
              onChange={handleChange}
              required
              placeholder="Guest"
              className="border p-2 w-full rounded mb-2"
            />
          </div>
          <>
            <ul className="mt-4">
              <li className="flex justify-between">
                <p>${price} &#10005; 1 Person</p>
                <span>{price}</span>
              </li>
              <li className="flex justify-between font-bold mt-2">
                <p>Total</p>
                <span>$ {totalAmount}</span>
              </li>
            </ul>
          </>
          <input
            type="submit"
            value="Pay"
            className="w-full font-semibold rounded-full py-2 px-6 bg-primary text-white mt-6 cursor-pointer hover:bg-transparent border border-primary hover:text-black transition-all duration-150 ease-linear"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
