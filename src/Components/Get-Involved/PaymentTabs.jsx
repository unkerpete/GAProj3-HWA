import React, { useState } from "react";
import CreditPayment from "./CreditPayment";
import PayNowPayment from "./PayNowPayment";

const PaymentTabs = () => {
  const paymentTypes = ["Credit Card", "PayNow", "GIRO", "Cheque"];
  const [activePayTab, setActivePayTab] = useState(1);

  const payments = paymentTypes.map((paymentType, i) => {
    return (
      <button
        className={`font-DM text-xl  p-4  ${
          activePayTab === i
            ? "bg-secondary-200 font-bold "
            : "bg-secondary-400 font-normal"
        }`}
        onClick={() => setActivePayTab(i)}
      >
        {paymentType}
      </button>
    );
  });

  return (
    <>
      <div className="grid grid-cols-4 text-center border-2 border-secondary-600">
        {payments}
      </div>

      {activePayTab === 0 && (
        <div>
          <CreditPayment />
        </div>
      )}

      {activePayTab === 1 && (
        <div>
          <PayNowPayment />
        </div>
      )}
    </>
  );
};

export default PaymentTabs;
