import "./App.css";
import { Toaster } from "react-hot-toast";

import Header from "./component/Header";
import Banner from "./component/Banner";
import { Faq } from "./component/Faq";
import Donate from "./component/Donate";
import Footer from "./component/Footer";
import Reward from "./component/Reward";
import useNotifyReward from "./Hooks/useNotifyReward";

function App() {

  useNotifyReward();


  return (
    <section className="scroll-smooth transition">
      <div className="col-span-5">
        <Header />
      </div>
      <section className="grid grid-cols-5 gap-x-10 gap-y-5 grid-flow-row max-w-3xl lg:max-w-screen-xl mx-auto px-4 sm:px-6 md:pt-16 lg:px-8">
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 1000,
          }}
          containerStyle={{
            top: 100,
          }}
        />
        <div className="col-span-5 lg:col-span-3">
          <Banner />
        </div>
        <div className="col-span-5 lg:col-span-2 row-span-1  lg:sticky top-3 py-4">
          <Donate />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <Faq />
        </div>
        <div id="donate" className="col-span-5 lg:col-span-3">
          <Reward />
        </div>
      </section>
      <div className="col-span-5">
        <Footer />
      </div>
    </section>
  );
}

export default App;
