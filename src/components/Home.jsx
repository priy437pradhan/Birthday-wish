import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ConfettiEffect from './confetti';
import CountdownTimer from './CountdownTimer';
import PhotoGallery from './PhotoGallery';
// import GreetingCard from './GreetingCard';

const Home = () => (
  <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <ConfettiEffect />
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-white z-10 mb-12"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="text-6xl font-extrabold mb-4"
      >
        Happy Birthday Anu Bhabi!
      </motion.h1>
      <p className="text-xl mb-6">Your special day is here.</p>
      <Link to="/wishes">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-purple-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          See Wishes
        </motion.button>
      </Link>
    </motion.div>
    <CountdownTimer />
    <div className='m-4'>
    <PhotoGallery />
    </div>
    {/* <GreetingCard /> */}
  </div>
);

export default Home;
