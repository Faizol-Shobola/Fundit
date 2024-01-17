import Form from "./StripeIntegration";


export const Prize = ({ title, price, aim }) => {
  return (
   

    <div className="flex h-full transform items-end border border-black bg-white transition-transform hover:-translate-x-2 hover:-translate-y-2 hover:shadow-xl">
        <div className="p-4 pt-8 transition-opacity sm:p-6 sm:pt-10 ">
          
          <h3 className="mt-4 text-xl capitalize font-medium sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-gray-500 font-medium text-base">{price}</p>

          <p className="mt-4 text-sm sm:text-base">
            {aim}
          </p>

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

            <div className="mt-4 md:mt-8  w-full">
             <Form />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap:10 p-5 md:p-8">
          <Prize
            title="bronze tier"
            price="($10 - $59)"
            aim="Donors in the Bronze Tier will receive a personalized Thank You Email and will be recognized on the Fundraising Page."
          />
          <Prize
            title="silver tier"
            price="($60 - $199)"
            aim=" Contributors to the Silver Tier will receive an exclusive Digital Badge or Certificate and a Social Media Shoutout."
          />
          <Prize
            title="gold tier"
            price="($200 - $999)"
            aim=" Those in the Gold Tier will enjoy a customized Thank You Video from the Team and access to exclusive Behind-the-Scenes Content."
          />
          <Prize
            title="diamond tier"
            price="($1000 and above)"
            aim=" Supporters in the Diamond Tier will receive special mention in Press Releases or Campaign Materials, along with VIP Access to an Event or Launch."
          />
        </div>
      </div>
    </div>
  );
}

export default Reward