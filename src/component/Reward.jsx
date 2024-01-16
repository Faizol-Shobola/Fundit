import React from 'react'

export const Prize = ({ icon, title, aim }) => {
  return (
    <div className="group relative block h-40 sm:h-60">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="absolute p-4 transition-opacity group-hover:relative sm:p-6 lg:p-8">
          
          <h3 className="mt-4 text-xl capitalize font-medium sm:text-2xl">
            {title}
          </h3>

          <p className="mt-4 text-sm sm:text-base">
            {aim}
          </p>

        </div>
      </div>
    </div>
  );
};

const Reward = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-black p-8 md:p-12 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-white/90 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed.
            </p>

            <div className="mt-4 md:mt-8 w-full">
              <a
                href="/"
                className="inline-block rounded border border-white bg-white px-12 py-3 text-base font-medium text-black transition hover:bg-transparent hover:text-white"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Prize
            title="tier 1"
            aim=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed."
          />
          <Prize
            title="tier 2"
            aim=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed."
          />
          <Prize
            title="tier 3"
            aim=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed."
          />
          <Prize
            title="tier 4"
            aim=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed."
          />
        </div>
      </div>
    </div>
  );
}

export default Reward