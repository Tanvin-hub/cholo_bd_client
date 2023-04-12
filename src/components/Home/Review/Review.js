import React from "react";

const Review = () => {
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
      <div className="">
        <form className="flex flex-col justify-center items-center">
          <textarea name="review" rows="7" placeholder="Your Review" className="bg-white border border-primary rounded-lg p-5
           w-[50%] shadow-lg"></textarea>
        </form>
      </div>
    </section>
  );
};

export default Review;
