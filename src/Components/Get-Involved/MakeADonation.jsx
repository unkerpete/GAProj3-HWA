import React, { useState } from "react";
import PaymentTabs from "./PaymentTabs";

// to move to database
const tiers = [
  {
    amount: 200,
    text: "Fund a stroke patient’s rehabilitation for one month and help get them back on their feet.",
  },
  {
    amount: 100,
    text: "Assist a financially needy individual to receive 7-8 nursing services at home.",
  },
  {
    amount: 50,
    text: "Help a financially needy individual to afford 2 doctor’s consultations at home.",
  },
  {
    amount: 20,
    text: "Help someone with mobility challenges commute to the rehabilitation centre and back.",
  },
];

const donationCat = [
  {
    type: "Individual",
  },
  {
    type: "Corporate",
  },
];

const MakeADonation = () => {
  const [activeDonation, setActiveDonation] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const donationTiers = tiers.map((ele, ind) => {
    return (
      <button
        key={ind}
        className={`text-center m-4 p-4 rounded-xl ${
          activeDonation === ind
            ? "border-2 border-primary-800 bg-primary-200"
            : " bg-white"
        }`}
        onClick={() => {
          setActiveDonation(ind);
        }}
      >
        <h3 className="mt-5 ">${ele.amount}</h3>
        <p className="mt-3 font-DM text-base font-normal">{ele.text}</p>
      </button>
    );
  });

  const donationCategory = donationCat.map((ele, ind) => {
    return (
      <button
        key={ind}
        className={`text-center m-4 p-10 rounded-xl ${
          activeCategory === ind
            ? "border-2 border-primary-800 bg-primary-200"
            : " bg-white"
        }`}
        onClick={() => {
          setActiveCategory(ind);
        }}
      >
        <h3 className="">{ele.type}</h3>
      </button>
    );
  });

  return (
    <div className="text-primary-800">
      <div className="">
        <h3 className="m-16">
          <span className="">1/3 </span>Select a donation Tier
        </h3>
        <div className="grid grid-cols-4 bg-secondary-200 m-10 p-4 rounded-xl">
          {donationTiers}
          {/* Custom amount input */}
          <input
            className="col-start-2 col-end-4 rounded-lg p-3 m-7"
            type="text"
            placeholder="Custom Amount"
          />
        </div>
      </div>

      <div>
        <h3 className="m-16">2/3 Donate as individual or corporate?</h3>
        <div className="grid grid-cols-2  bg-secondary-200 m-10 p-4 rounded-xl">
          {donationCategory}
        </div>
      </div>

      <h3 className="m-16">3/3 Select a payment method</h3>
      {/* Tab for payment method */}
      {/* To refactor into a component that is mapped*/}
      <PaymentTabs />

      <p className="px-80 pt-20 font-DM text-xl font-normal">
        <span className="font-bold">Note:</span> IRAS will no longer accept
        claims for tax deduction based on donation receipts. All individuals and
        organisations donating are required to provide their tax reference
        numbers (e.g. NRIC/FIN/UEN), to enjoy tax deductions on the donations.{" "}
        <span className="underline">Terms and Conditions</span> apply.
      </p>
    </div>
  );
};

export default MakeADonation;
