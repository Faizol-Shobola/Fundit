import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true)
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: "https://fundit-3xo.pages.dev" },
    });

    if (result.error) {
      setError(result.error.message);
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      {!elements ? (
        <div>"Please wait, preparing secure payment...</div> // Display loading text when elements are not ready
      ) : (
        <>
          <PaymentElement />
          <button disabled={!stripe} className="btn mt-5 w-full">
            {isProcessing ? "Processing..." : "Pay"}
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
