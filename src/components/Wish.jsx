import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Heart from './Heart'; 

const Wishes = () => {
  const hearts = Array.from({ length: 100 }).map((_, index) => ({
    startX: `${Math.random() * 100}vw`, 
    duration: Math.random() * 5 + 3, 
    zIndex: 10 + index 
  }));

  return (
    <div className="bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-white p-8 bg-purple-900 rounded-lg shadow-xl z-10"
      >
        <h2 className="text-5xl font-bold mb-6">Lots of LOVE  ❤️</h2>
        <p className="text-lg mb-6">May your day be filled with joy, love, and laughter!</p>
        <p className="text-lg mb-6">
          To the person I love so much, your care and affection mean the world to me. You not only bring joy to my life but also to my family, especially my brother. Your kindness and love are truly cherished.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
      <div className="absolute inset-0 bg-shimmer opacity-30"></div>
      {hearts.map((props, index) => (
        <Heart key={index} {...props} />
      ))}
      {/* <UserMessages /> */}
      {/* <FunFacts /> */}
    </div>
  );
};

export default Wishes;
