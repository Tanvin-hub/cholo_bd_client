import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto relative my-40 ">
      <h2
        className="md:pt-42 md:absolute md:top-[48%] md:left-1/2 md:-translate-x-2/4 md:translate-y-[80%] text-xl md:text-2xl lg:text-3xl font-bold">
        Congrats! Successfully Paid.
      </h2>
    </div>
  );
};

export default PaymentSuccess;
