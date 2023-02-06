import React from "react";

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
  const donationTiers = tiers.map((ele, ind) => {
    return (
      <div key={ind} className="text-center m-4 p-4 bg-white rounded-xl">
        <h3 className="mt-5 ">${ele.amount}</h3>
        <p className="mt-3 font-DM text-base font-normal">{ele.text}</p>
      </div>
    );
  });

  const donationCategory = donationCat.map((ele, ind) => {
    return (
      <div key={ind} className="text-center m-4 p-10 bg-white rounded-xl">
        <h3 className="">{ele.type}</h3>
      </div>
    );
  });

  return (
    <div className="text-primary-800">
      <div className="">
        <h3 className="m-16 ">1/3 Select a donation Tier</h3>
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
      <div className="grid grid-cols-4 bg-secondary-200 text-center">
        <div className="font-DM text-xl font-normal border-2 p-4">
          Credit Card
        </div>
        <div className="font-DM text-xl font-normal p-4">PayNow</div>
        <div className="font-DM text-xl font-normal p-4">GIRO</div>
        <div className="font-DM text-xl font-normal p-4">Cheque</div>
      </div>

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
