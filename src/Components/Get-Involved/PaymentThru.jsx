import React, { useState } from "react";
import Button1 from "./Button1";

// Need to create Route for payment thru
const PaymentThru = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="text-primary-800 text-center mt-64">
      {/* <h1>We are processing your payment</h1>
      <p>Loading Spinner</p> */}

      <h1 className="">Thank you for your donation!</h1>
      <p className="m-5 font-DM text-xl font-normal">
        A confirmation has been sent to your email.
      </p>
      <img src="src/Assets/izhar/GetInvolved/GetInvolved_image.png" alt="" />
      <p className="m-5 font-DM text-xl font-normal">
        In the meantime, you may find out how else you can support us.
      </p>
      <Button1 text={"Learn More"} />
    </div>
  );
};

export default PaymentThru;
