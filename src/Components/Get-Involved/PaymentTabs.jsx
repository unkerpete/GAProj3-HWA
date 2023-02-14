import React, { useState } from "react";
import CreditPayment from "./CreditPayment";
import PayNowPayment from "./PayNowPayment";

const PaymentTabs = ({ amount }) => {
  const paymentTypes = ["Credit Card", "PayNow", "GIRO", "Cheque"];
  const [activePayTab, setActivePayTab] = useState(0);

  const payments = paymentTypes.map((paymentType, i) => {
    return (
      <button
        key={i}
        className={`font-DM text-xl p-4 border-2 border-secondary-600 ${
          activePayTab === i
            ? "bg-secondary-200 font-bold border-b-0 "
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
      <div className="grid grid-cols-4 text-center">{payments}</div>

      {activePayTab === 0 && (
        <div>
          <CreditPayment amount={amount} />
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
