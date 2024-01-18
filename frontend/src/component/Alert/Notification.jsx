import React, { useEffect, useState } from 'react';
import data from '../../Api/data.json'

const Notification = () => {

    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        setRewards(data.rewards);
    }, []);

    const notify = (message, { title, donationRange }) => {
        console.log(message, title, donationRange);
        // Implement the notification logic here
    };
    
      useEffect(() => {
        if (rewards.length > 0) {
          const getRandomReward = () => {
            const randomIndex = Math.floor(Math.random() * rewards.length);
            return rewards[randomIndex];
          };
    
          const intervalTime = Math.random() * (180000 - 60000) + 60000; // Random time between 1 and 3 minutes
    
          const interval = setInterval(() => {
            const reward = getRandomReward();
            notify("This is a dynamic message!", {
              title: reward.title,
              donationRange: reward.donationRange,
            });
          }, intervalTime);
    
          return () => clearInterval(interval); // Cleanup the interval on component unmount
        }
      }, [rewards]);
}
 
export default Notification;