import { useEffect } from 'react';
import toast from "react-hot-toast"; // Import your toast library

import data from '../Api/data.json'; // Adjust the path to your data.json file

const useNotifyReward = () => {
  useEffect(() => {
    const rewards = data.rewards;

    const notify = (message, { title, donationRange }) => {
      toast.custom(
        (t) => (
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-md w-full bg-white shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {title || "Notification"}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {message} {donationRange}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm text-gray-500 font-bold hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        ),
        {
          // You can add additional options here if needed
        }
      );
    };

    const getRandomReward = () => {
      const randomIndex = Math.floor(Math.random() * rewards.length);
      return rewards[randomIndex];
    };

    const intervalTime = Math.random() * (10000 - 7500) + 1000;
    const interval = setInterval(() => {
      const reward = getRandomReward();
      notify("This is a dynamic message!", {
        title: reward.title,
        donationRange: reward.donationRange,
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);
};

export default useNotifyReward;
