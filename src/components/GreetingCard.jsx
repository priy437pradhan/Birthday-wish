import { motion } from 'framer-motion';

const PhotoGallery = () => {
  const photos = [
    'https://via.placeholder.com/1600x900.png?text=Birthday+1',
    'https://via.placeholder.com/1600x900.png?text=Birthday+2',
    'https://via.placeholder.com/1600x900.png?text=Birthday+3'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-3 gap-4 p-4"
    >
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <img src={photo} alt={`Gallery ${index}`} className="w-full h-40 object-cover rounded-lg" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PhotoGallery;
