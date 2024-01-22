import "./App.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./component/Header";
import Banner from "./component/Banner";
import { Faq } from "./component/Faq";
import Donate from "./component/Donate";
import Footer from "./component/Footer";
import Reward from "./component/Reward";
import useNotifyReward from "./Hooks/useNotifyReward";
import Modal from "./component/Modals/Modal";
import PaymentSuccess from "./component/PaymentSuccess";



function App() {

  const [paymentStatus, setPaymentStatus] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Confirm if the payment was successful
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get("redirect_status");

    if (status === "succeeded") {
      setPaymentStatus(true);
    } else {
      setPaymentStatus(false);
    }
  }, [location]);


  // Function to clear query parameters
  const clearQueryParams = () => {
    navigate(window.location.pathname, { replace: true });
  };

  // close payment success Modal handler
  const handleCloseModal = () => {
    clearQueryParams()
  };

  useNotifyReward();

  return (
    <section className="scroll-smooth transition">
      {
        // Display the Modal if payment was successful
        paymentStatus && (
          <Modal onClose={handleCloseModal}>
            <PaymentSuccess />
          </Modal>
        )
      }
      {/* Render the page */}
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
            top: 65,
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
