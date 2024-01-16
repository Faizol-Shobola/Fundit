import React, { useState } from 'react'

export const Prize = ({ title, price, aim }) => {
  return (
    <div className="group relative block h-40 sm:h-80">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="absolute p-4 transition-opacity group-hover:relative sm:p-6 lg:p-8 lg:px-4">
          
          <h3 className="mt-4 text-xl capitalize font-medium sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-gray-500 font-medium text-base">{price}</p>

          <p className="mt-4 text-sm sm:text-base">
            {aim}
          </p>

        </div>
      </div>
    </div>
  );
};

const Reward = () => {

const [currency, setCurrency] = useState("USD");

const handleCurrencyChange = (event) => {
  setCurrency(event.target.value);
};

  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-black p-8 md:p-12 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <div className="mt-4 md:mt-8  w-full">
              <form action="#" className="flex flex-wrap gap-4">
                <div className="w-full flex border border-white bg-transparent">
                  <select
                    id="currency"
                    name="currency"
                    value={currency}
                    onChange={handleCurrencyChange}
                    className=" px-3 py-4 text-white text-lg lg:text-2xl font-semibold shadow-sm transition bg-transparent focus:outline-none"
                  >
                    <option value="USD" className="bg-black text-white">
                      USD
                    </option>
                    <option value="EUR" className="bg-black text-white">
                      EUR
                    </option>
                    <option value="GBP" className="bg-black text-white">
                      GBP
                    </option>
                  </select>
                  <input
                    type="text"
                    // placeholder="Email address"
                    className="px-3 py-4 flex-1 flex-grow text-white text-base lg:text-2xl font-semibold text-right shadow-sm transition bg-transparent focus:outline-none"
                  />
                  <p className="px-3 py-4 text-white text-xl md:text-2xl lg:text-4xl text-semibold">
                    .00
                  </p>
                </div>
                <button className="inline-block border w-full border-white bg-white px-12 py-3 text-base font-medium text-black transition hover:bg-transparent hover:text-white">
                  Donate Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap:10 p-5 md:p-8">
          <Prize
            title="bronze tier" price="($10 - $59)"
            aim="Donors in the Bronze Tier will receive a personalized Thank You Email and will be recognized on the Fundraising Page."
          />
          <Prize
            title="silver tier" price="($60 - $199)"
            aim=" Contributors to the Silver Tier will receive an exclusive Digital Badge or Certificate and a Social Media Shoutout."
          />
          <Prize
            title="gold tier" price="($200 - $999)"
            aim=" Those in the Gold Tier will enjoy a customized Thank You Video from the Team and access to exclusive Behind-the-Scenes Content."
          />
          <Prize
            title="diamond tier" price="($1000 and above)"
            aim=" Supporters in the Diamond Tier will receive special mention in Press Releases or Campaign Materials, along with VIP Access to an Event or Launch."
          />
        </div>
      </div>
    </div>
  );
}

export default Reward