import React, { useState } from "react";
import Button1 from "./Button1";
import PaymentThru from "./PaymentThru";

const CreditPayment = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // console.log( name, value);
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  // to trigger to payment page
  const handleCreditSubmission = (e) => {
    e.preventDefault();
    console.log("Credit Submission");
  };

  return (
    <div className="credit-payment bg-secondary-200 text-primary-800 border-2">
      <div className="m-24"></div>
      <form className="grid grid-cols-15 bg-secondary-200 text-primary-800 border-2 ">
        <div className="col-span-8 px-20">
          <p className="font-DM text-xl font-normal mb-5">Personal Details</p>
          <input
            className="font-DM text-lg font-normal w-full p-5 rounded-2xl mb-6"
            type="text"
            placeholder="Name as per NRIC/FIN*"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
          />
          <div className="flex space-x-3">
            <input
              className="font-DM text-lg font-normal w-3/4 p-5 rounded-2xl mb-6"
              type="text"
              placeholder="Email Address*"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
            />
            <input
              className="font-DM text-lg font-normal w-1/4 p-5 rounded-2xl mb-6"
              type="text"
              placeholder="Phone"
              name="phone"
              value={inputValues.phone}
              onChange={handleInputChange}
            />
          </div>

          <input
            className=""
            type="checkbox"
            name="check"
            id=""
            checked={isChecked}
            onChange={handleCheckBox}
          />
          <label className="" htmlFor="">
            I would like to Claim Tax Deduction
          </label>
          {isChecked ? (
            <div className="flex">
              <input
                className="font-DM text-lg font-normal w-1/2 p-5 rounded-2xl mb-6"
                type="text"
                placeholder="S1234567A"
                name="nric"
                value={inputValues.nric}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="col-span-7 px-20">
          <p className="font-DM text-xl font-normal mb-5">Card Details</p>
          <input
            className="font-DM text-lg font-normal w-full rounded-2xl p-5 mb-6"
            type="text"
            placeholder="Name on Card"
            name="cardname"
            value={inputValues.cardname}
            onChange={handleInputChange}
          />
          <input
            className="font-DM text-lg font-normal w-full rounded-2xl p-5 mb-6"
            type="text"
            placeholder="Card Number"
            name="cardnumber"
            value={inputValues.cardnumber}
            onChange={handleInputChange}
          />
          <div className="flex flex-row">
            <label className="w-1/2" htmlFor="">
              Expiration
            </label>
            <label className="ml-8 w-1/2" htmlFor="">
              CVV
            </label>
          </div>
          <div className="flex flex-row space-x-3 mb-14">
            <input
              className="font-DM text-lg font-normal w-1/4 rounded-2xl p-5 mb-6 text-center"
              type="text"
              placeholder="MM"
              name="mm"
              value={inputValues.mm}
              onChange={handleInputChange}
            />
            <span className="text-6xl font-[10]">/</span>
            <input
              className="font-DM text-lg font-normal w-1/4 rounded-2xl p-5 mb-6 text-center"
              type="text"
              placeholder="YY"
              name="yy"
              value={inputValues.yy}
              onChange={handleInputChange}
            />
            <input
              className="font-DM text-lg font-normal w-1/2 rounded-2xl p-5 mb-6 text-center"
              type="text"
              placeholder="000"
              name="cvv"
              value={inputValues.cvv}
              onChange={handleInputChange}
            />
          </div>

          <Button1
            text={"Complete Donation"}
            handleSubmission={handleCreditSubmission}
          />
        </div>
      </form>
    </div>
  );
};

export default CreditPayment;
