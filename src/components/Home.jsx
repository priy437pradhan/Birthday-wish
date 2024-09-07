import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ConfettiEffect from './confetti';
import CountdownTimer from './CountdownTimer';
import PhotoGallery from './PhotoGallery';
import Image1 from '../assets/prag.jpeg'; 

const Home = () => (
  <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Background Image for Larger Screens */}
    <div 
      className="absolute inset-0 hidden md:block"
      style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'grayscale(50%)',
        opacity: 0.7,
        transition: 'filter 0.5s ease-in-out',
        zIndex: -2
      }}
    ></div>

    {/* Background Gradient for Mobile Screens */}
    <div 
      className="absolute inset-0 block md:hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      style={{
        zIndex: -2
      }}
    ></div>

    {/* Content Container */}
    <div className="relative z-10 text-center text-white px-4 md:px-8 lg:px-12">
      <ConfettiEffect />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        {/* Add any content here */}
      </motion.div>
      <CountdownTimer />
      
      <Link to="/wishes">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-purple-500 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 m-3 sm:px-6 sm:py-3 transition"
        >
          See My Wish😊
        </motion.button>
      </Link>
      <div className='m-4'>
        <PhotoGallery />
      </div>
    </div>
  </div>
);

export default Home;
