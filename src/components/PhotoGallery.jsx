import { motion } from 'framer-motion';
import { useState } from 'react';
import Image1 from '../assets/prag.jpeg';
import Image2 from '../assets/prag2.jpeg';
import Image3 from '../assets/prag3.jpeg';
import Image4 from '../assets/prag4.jpeg';
import Image5 from '../assets/prag5.jpeg';
import Image6 from '../assets/prag6.jpeg';

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const photos = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div className="perspective-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 perspective"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.25 }}
            animate={{ rotateY: selectedIndex === index ? 360 : 0 }}
            transition={{ duration: 1 }}
            className="relative cursor-pointer"
          >
            <img
              src={photo}
              alt={`Gallery ${index}`}
              className="w-full h-[450px] md:h-[300px] lg:h-[300px] object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
