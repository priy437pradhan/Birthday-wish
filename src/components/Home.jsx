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
      
    </motion.div>
    <CountdownTimer />
    
    <Link to="/wishes" >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-purple-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 m-5 transition"
        >
          See Wishes
        </motion.button>
      </Link>
    <div className='m-4'>
    <PhotoGallery />
    </div>
    {/* <GreetingCard /> */}
  </div>
);

export default Home;
