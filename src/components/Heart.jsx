import { motion } from 'framer-motion';

const Heart = ({ startX, duration, zIndex }) => (
  <motion.div
    initial={{ y: '-100px', x: startX }} 
    animate={{ y: '100vh' }} 
    transition={{ duration, ease: 'linear' }}
    className="absolute text-red-500"
    style={{ 
      fontSize: '24px', 
      zIndex 
    }}
  >
    ❤️
  </motion.div>
);

export default Heart;
