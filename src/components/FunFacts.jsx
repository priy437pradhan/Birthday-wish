import { motion } from 'framer-motion';

const FunFacts = () => {
  const facts = [
    'Did you know? The average person will eat around 1,000 slices of pizza in their lifetime!',
    'Fun Fact: In Italy, it is traditional to celebrate a person’s 18th birthday with a big party and a special meal.',
    'Did you know? The most popular birthday month is September, according to birth statistics.'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-green-100 p-8 rounded-lg shadow-xl"
    >
      <h2 className="text-4xl font-bold mb-4">Fun Birthday Facts!</h2>
      <ul className="list-disc pl-6 space-y-2">
        {facts.map((fact, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="text-lg"
          >
            {fact}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FunFacts;
