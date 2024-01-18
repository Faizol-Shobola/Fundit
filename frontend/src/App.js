import "./App.css";
import toast, { Toaster } from "react-hot-toast";

import Header from "./component/Header";
import Banner from "./component/Banner";
import { Faq } from "./component/Faq";
import Donate from "./component/Donate";
import Footer from "./component/Footer";
import Reward from "./component/Reward";
// const notify = () => toast('Here is your toast.');
const notify = () => {

  // Tailwind Example
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`
    }
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
            💰 Tier 1 Donation
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Thank you for supporting ❤
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
}

function App() {
  return (
    <section>
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
          <Donate>
          <div>
            <button onClick={notify}>Make me a toast</button>
          </div>
          </Donate>
        </div>
        <div className="col-span-5 lg:col-span-3">
          <Faq />
        </div>
        <div className="col-span-5 lg:col-span-3">
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
