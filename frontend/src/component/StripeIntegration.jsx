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
  const [donationOption, setDonationOption] = useState("OneTime");
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

  // Format number in thousand
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // donation basis changeer
   const handleOptionChange = (event) => {
     setDonationOption(event.target.value);
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

        {/* Basis of donation */}
        <fieldset className="w-full grid grid-cols-1  sm:grid-cols-2 gap-4">
          <legend className="sr-only">Delivery</legend>
          <div>
            <input
              type="radio"
              name="DeliveryOption"
              value="OneTime"
              id="OneTime"
              className="peer hidden [&:checked_+_label_svg]:block"
              checked={donationOption === "OneTime"}
              onChange={handleOptionChange}
            />

            <label
              htmlFor="OneTime"
              className="block cursor-pointer border border-white bg-transparent p-4 text-sm font-medium shadow-sm peer-checked:border-white-500 peer-checked:ring-1 peer-checked:ring-white-500"
            >
              <div className="flex items-center justify-between">
                <p className="text-gray-200">One Time</p>
                <div className="flex gap-2 items-center text-gray-400">
                  <p className="text-base font-semibold capitalize">
                    {formatNumber(amount)} {currency}
                  </p>
                  <svg
                    className="hidden h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="DeliveryOption"
              value="Monthly"
              id="Monthly"
              className="peer hidden [&:checked_+_label_svg]:block"
              checked={donationOption === "Monthly"}
              onChange={handleOptionChange}
            />

            <label
              htmlFor="Monthly"
              className="block cursor-pointer border border-white bg-transparent p-4 text-sm font-medium shadow-sm peer-checked:border-white-500 peer-checked:ring-1 peer-checked:ring-white-500"
            >
              <div className="flex items-center justify-between">
                <p className="text-gray-200">Monthly</p>
                <div className="flex gap-2 items-center text-gray-400">
                  <p className="text-base font-semibold capitalize">
                    {formatNumber(amount)} {currency}
                  </p>
                  <svg
                    className="hidden h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </label>
          </div>

          
        </fieldset>
        <p className="text-base text-gray-400 text-left">
          {donationOption === "Monthly"
            ? "You have selected a monthly donation. We'll remind you on 1st and 15th of every month, Thanks for donating!"
            : donationOption === "OneTime"
            ? "You have selected a one-time donation. Thanks for donating!"
            : null}
        </p>
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
