import React, { useState } from "react";
import PaymentTabs from "./PaymentTabs";
import PaymentThru from "./PaymentThru";

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
        <div className=" bg-secondary-200 m-10 p-4 rounded-xl">
          <div className="grid grid-cols-4">
            {donationTiers}
            {/* Custom amount input */}
          </div>
          <div class="relative flex py-4 px-4 items-center">
            <div class="flex-grow border-t border-secondary-600"></div>
            <span
              class="flex-shrink mx-4 text-secondary-600"
              font-DM
              text-base
              font-normal
            >
              OR
            </span>
            <div class="flex-grow border-t border-secondary-600"></div>
          </div>
          <div className="flex flex-row justify-center">
            <input
              className="rounded-lg p-3 m-7 flex-none w-1/2 "
              type="text"
              placeholder="Custom Amount"
            />
          </div>
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

      {/* Thank You Message for payment via Paynow*/}
      <div className="text-center mt-16">
        <h1 className="text-primary-600">Thank you!</h1>
      </div>

      <div className="grid grid-cols-5 text-left mt-12">
        <div className="col-start-2 col-end-5 font-DM text-xl font-normal">
          <p>
            <span className="font-bold">Note:</span> IRAS will no longer accept
            claims for tax deduction based on donation receipts.
          </p>
          <p>
            All individuals and organisations donating are required to provide
            their tax reference numbers (e.g. NRIC/FIN/UEN), to enjoy tax
            deductions on the donations.{" "}
            <span className="underline">Terms and Conditions</span> apply.
          </p>
        </div>
      </div>
      <PaymentThru />
    </div>
  );
};

export default MakeADonation;
