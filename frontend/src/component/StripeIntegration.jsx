import React, { useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import jsonData from "../Api/data.json";
import CheckoutForm from "./CheckoutForm";
import Modal from "./Modals/Modal";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);

const Form = () => {
  const { donationCTA } = jsonData;

  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const [clientSecret, setClientSecret] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donate, setDonate] = useState(false);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleCloseModal = () => {
    setDonate(false);
    setIsModalOpen(false);
    setClientSecret("");
  };

  const handleAmountChange = (event) => {
    const inputValue = event.target.value;
    // Validate if the input is a number
    if (!/^[1-9]\d*$/.test(inputValue)) {
      setError("Please enter a valid amount");
    } else {
      setError("");
    }
    setAmount(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (amount === "") {
      setError("Please enter a valid amount");

    } else {
      setDonate(true);
      
      fetch("https://fundit-production.up.railway.app/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Make sure to replace this with the actual amount and currency from your form
        body: JSON.stringify({ amount, currency }),
      })
        .then((res) => res.json())
        .then((data) => {
          setDonate(true);
          setClientSecret(data.clientSecret);
          setIsModalOpen(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

    }

  };

  const options = {
    clientSecret: clientSecret,
  };

  return (
    <div>
      {/* // Donate Form */}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <div className="w-full flex border border-white bg-transparent">
          <select
            id="currency"
            name="currency"
            value={currency}
            onChange={handleCurrencyChange}
            className=" px-2 py-3 md:px-3 md:py-4 text-white text-lg lg:text-2xl font-semibold shadow-sm transition bg-transparent focus:outline-none"
          >
            {donationCTA.inputBox.currencySelect.map((currency, index) => (
              <option
                key={index}
                value={currency}
                className="bg-black text-white"
              >
                {currency}
              </option>
            ))}
          </select>
          <div className="relative flex-1 flex-grow">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="w-full pe-12 lg:pe-16 px-4 py-3  md:py-4 text-white text-lg md:text-xl lg:text-3xl font-semibold text-right shadow-sm transition bg-transparent focus:outline-none"
            />
            <p className="absolute inset-y-0 end-0 grid place-content-center px-2 py-3 md:px-3 md:py-4 text-white text-xl md:text-2xl lg:text-4xl text-semibold">
              .00
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center border w-full border-white bg-white px-12 py-3 text-base font-medium text-black transition hover:bg-transparent hover:text-white"
        >
          {donate && (
            <svg
              class="animate-spin h-5 w-5 mr-3 bg-gray-600 text-white z-10"
              viewBox="0 0 24 24"
            >
              {" "}
            </svg>
          )}
          Donate now
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>

      {clientSecret ? (
        <>
          {isModalOpen && (
            <Modal onClose={handleCloseModal}>
              <h3 className="text-xl font-medium text-black pb-5">
                Donate {amount} <span className="text-lg">{currency}</span>
              </h3>
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm amount={amount} />
              </Elements>
            </Modal>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;
