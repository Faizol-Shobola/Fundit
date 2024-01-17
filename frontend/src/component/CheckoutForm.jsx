// CheckoutForm.js
import React, {useState} from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/success", // Replace with your return URL
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      // The PaymentElement handles the rest of the payment flow, including redirecting to your return URL.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={!stripe}
        className="btn mt-5 w-full"
      >
        Pay
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};

export default CheckoutForm;
