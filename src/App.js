import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import { Faq } from "./component/Faq";
import Donate from "./component/Donate";
import Reward from "./component/Reward";

function App() {
  return (
    <section className="grid grid-cols-5 gap-x-10 gap-y-5 grid-flow-row max-w-3xl lg:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="col-span-5">
        <Header />
      </div>
      <div className="col-span-5 lg:col-span-3">
        <Banner />
      </div>
      <div className="col-span-5 lg:col-span-2 row-span-1  lg:sticky top-3 py-4">
        <Donate />
      </div>
      <div className="col-span-5 lg:col-span-3">
        <Faq />
      </div>
      <div className="col-span-5 lg:col-span-3">
        <Reward />
      </div>
    </section>
  );
}

export default App;
