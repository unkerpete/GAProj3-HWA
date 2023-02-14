import React, { useState, useEffect } from "react";
import Button from "../Button";
import Loaded from "./Loaded";
import Loading from "./Loading";

// Need to create Route for payment thru
const PaymentThru = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col text-primary-800 text-center mt-16 mb-96 ">
      {loading && <Loading />}
      {!loading && <Loaded />}
    </div>
  );
};

export default PaymentThru;
