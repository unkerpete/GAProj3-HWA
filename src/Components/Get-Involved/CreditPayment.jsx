import React from "react";

const CreditPayment = () => {
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
          <input type="text" placeholder="Email Address*" />
          <input type="text" placeholder="Phone" />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">I would like to Claim Tax Deduction</label>
          <p className="font-DM text-xl font-normal mb-5">Card Details</p>
          <input type="text" placeholder="Name on Card" />
          <input type="text" placeholder="Card Number" />
          <label htmlFor="">Expiration</label>
          <label htmlFor="">CVV</label>
        </form>
        <button type="submit">Complete Donation</button>
      </div>
    </div>
  );
};

export default CreditPayment;
