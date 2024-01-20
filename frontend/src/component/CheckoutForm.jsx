import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (paymentSuccess) {
      // Redirect after showing success message for 2 seconds
      const timer = setTimeout(() => {
        window.location.href = "https://fundit-3xo.pages.dev";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: "https://fundit-3xo.pages.dev" },
    });

    if (result.error) {
      setError(result.error.message);
    } else if (
      result.paymentIntent &&
      result.paymentIntent.status === "succeeded"
    ) {
      setPaymentSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe} className="btn mt-5 w-full">
        Pay
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {paymentSuccess && (
        <p className="text-xl text-green-500">
          Payment Successful! Thank you for your donation.
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
