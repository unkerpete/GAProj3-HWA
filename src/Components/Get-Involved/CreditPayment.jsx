import React from "react";
import Button1 from "./Button1";
import PaymentThru from "./PaymentThru";

const CreditPayment = () => {
  // to trigger to payment page
  const handleCreditSubmission = (e) => {
    e.preventDefault();
    console.log("Credit Submission");
  };

  return (
    <div className="col-start-1 col-end-3 bg-secondary-200 text-primary-800 border-2">
      <div className="p-20">
        <p className="font-DM text-xl font-normal mb-5">Personal Details</p>
        <form>
          <input
            className="font-DM text-lg font-normal"
            type="text"
            placeholder="Name as per NRIC/FIN*"
          />
          <input className="" type="text" placeholder="Email Address*" />
          <input className="" type="text" placeholder="Phone" />
          <input className="" type="checkbox" name="" id="" />
          <label className="" htmlFor="">
            I would like to Claim Tax Deduction
          </label>
          <p className="font-DM text-xl font-normal mb-5">Card Details</p>
          <input type="text" placeholder="Name on Card" />
          <input type="text" placeholder="Card Number" />
          <label htmlFor="">Expiration</label>
          <label htmlFor="">CVV</label>
        </form>
        <Button1
          text={"Complete Donation"}
          handleSubmission={handleCreditSubmission}
        />
      </div>
    </div>
  );
};

export default CreditPayment;
