import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-09-09T00:00:00"); 
    const now = new Date();
    const timeLeft = eventDate - now;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      isOver: timeLeft <= 0 
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
      if (updatedTime.isOver) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-center text-white p-8 bg-purple-800 rounded-lg shadow-xl"
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        {timeLeft.isOver ? "Happy Birthday to You Pragyan!🤗" : "Countdown to Your Special Day!"}
      </motion.h2>
      <div className="text-2xl mb-4">
        {!timeLeft.isOver && (
          <>
           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
            </motion.div>
          </>
        )}
        {timeLeft.isOver && (
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            className="text-4xl font-extrabold mb-4"
          >
            Your Special Day is Here!🤗
          </motion.h1>
        )}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
