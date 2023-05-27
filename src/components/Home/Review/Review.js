import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const Review = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const review = event.target.review.value;
    const reviewData = {
      review,
      name: user?.displayName,
    };

    fetch("https://cholo-bd-server-maruf19.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review placed successfully");
          event.target.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="container mx-auto px-32 my-20">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Review
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 custom-leading capitalize">
              Leave your valuable review here.
            </h2>
            <p className="text-slate-500 text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
       
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <textarea
            name="review"
            rows="7"
            placeholder="Your Review"
            className="bg-white border border-primary rounded-lg p-5
           w-[50%] shadow-lg"
          ></textarea>
          <div className="w-full flex flex-col items-center ml-[30rem]">
            <input
              className="w-[10%] px-3 py-2 font-medium bg-primary border border-primary
            rounded hover:bg-transparent transition-all duration-150 ease-linear md:py-2 
            md:px-6 uppercase tracking-wider text-white hover:text-black mt-5 flex flex-col 
            justify-end cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Review;
