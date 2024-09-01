import { motion } from 'framer-motion';
import { useState } from 'react';
import Image1 from '../assets/Anu2.jpg';
import Image2 from '../assets/Anu1.jpg';
import Image3 from '../assets/Anu3.jpg';

const PhotoGallery = () => {
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
  };

  const photos = [Image1, Image2, Image3];

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
            onClick={handleClick}
            whileHover={{ scale: 1.25 }}
            animate={{ rotateY: rotate ? 360 : 0 }}
            transition={{ duration: 1 }}
            className="relative cursor-pointer"
          >
            <img
              src={photo}
              alt={`Gallery ${index}`}
              className="w-full h-[300px] md:h-[300px] lg:h-[300px]  rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
