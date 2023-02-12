import React from "react";

const PayNowPayment = () => {
  return (
    <>
      <div className="flex flex-row bg-secondary-200 text-primary-800">
        <div className="pl-48 pt-24 pb-72 basis-2/3">
          <p className="font-DM text-xl font-normal mb-5">Directions</p>
          <p>1. Please open your mobile application.</p>
          <p>2. Select Scan & Pay to scan the QR code.</p>
          <p>3. Key in the amount to be donated</p>
          <p>
            4. For Tax Deduction, please don't forget to key in your NRIC under
            UEN / Bill reference.
            <p>Enter NA if this is not applicable</p>
          </p>
          <p>
            5. Press Next, verify your details: Handicaps Welfare Association
            UEN S69SS0057J
          </p>
          <p>
            6. Press Confirm. A confirmation page "Your funds has been
            transferred!" appears.
          </p>
          <br />

          <p>Thank you very much for your donation!</p>
        </div>
        <div className="basis-1/3 align-middle content-center">
          <img
            className="inline"
            src="src/Assets/izhar/Donation/Donation_Paynow.png"
            alt=""
            width="201"
          />
        </div>
      </div>
      <div className="text-center mt-16">
        <h1 className="text-primary-600">Thank you!</h1>
      </div>
    </>
  );
};

export default PayNowPayment;
